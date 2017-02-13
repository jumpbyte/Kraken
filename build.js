var fs = require("fs");
var path = require("path");
var exec = require("child_process").exec;
var packTpl = fs.readFileSync(path.join(__dirname, "pack.tpl")).toString("utf8");

function tpl(template, data){
	return template.replace(/#([a-z]+)#/g, function(all, key){
		return data[key];
	});
}

function readJson(file){
	var code = fs.readFileSync(file).toString("utf8");
	return JSON.parse(code);
}

var manifest = readJson(path.join(__dirname, "manifest.json.tpl"));

function mkdirs(dirpath){
	if(fs.existsSync(dirpath)){
		return true;
	}else if(mkdirs(path.dirname(dirpath))){
		fs.mkdirSync(dirpath);
		return true;
	}
}

var REQUIRE_RE = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g; //"

var srcPath = path.join(__dirname, "src");
var distPath = path.join(__dirname, "dist");
var backgroundPath = path.join(srcPath, "background");
var contentPath = path.join(srcPath, "contents");

function relativePath(file){
	return file.replace(srcPath, "").replace(/^\/+/, "").replace(/\.js$/, "");
}

function configPath(file){
	return file.replace(__dirname, "").replace(/^\/+/, "");
}

var loaderFile = configPath(path.join(srcPath, "lib", "loader.js"));

function packFile(file, isEntry){
	var distFile = file.replace(srcPath, distPath);
	var deps = [configPath(distFile)];

	var code = fs.readFileSync(file).toString("utf8");
	var _deps = [];
	code = code.replace(REQUIRE_RE, function(all, quot, name){
		var _file;

		if(!name){
			return all;
		}

		if(/^\.{1,2}\//.test(name)){
			_file = path.join(path.dirname(file), name) + ".js";
		}else{
			_file = path.join(srcPath, name) + ".js";
		}

		_deps.push(_file);

		return all.replace(name, relativePath(_file));
	});

	if(!fs.existsSync(distFile)){
		code = tpl(packTpl, {
			path: relativePath(file),
			content: code,
			run: isEntry ? "true" : "false"
		});

		mkdirs(path.dirname(distFile));
		fs.writeFileSync(distFile, code);
	}

	_deps.forEach(function(file){
		packFile(file).forEach(function(file){
			if(deps.indexOf(file) === -1){
				deps.push(file);
			}
		});
	});

	return deps;
}

exec("rm -fr " + path.join(__dirname, "dist"), function(err){
	if(err){
		throw err;
	}

	var files = [];
	manifest.background.scripts.forEach(function(file){
		file = path.join(backgroundPath, file);
		packFile(file, true).forEach(function(file){
			if(files.indexOf(file) === -1){
				files.push(file);
			}
		});
	});
	files.push(loaderFile);
	manifest.background.scripts = files.reverse();

	manifest["content_scripts"].forEach(function(config){
		var files = [];
		config.js.forEach(function(file){
			file = path.join(contentPath, file);
			packFile(file, true).forEach(function(file){
				if(files.indexOf(file) === -1){
					files.push(file);
				}
			});
		});
		files.push(loaderFile);
		config.js = files.reverse();
	});

	fs.writeFileSync(path.join(__dirname, "manifest.json"), JSON.stringify(manifest, null, "	"));
});