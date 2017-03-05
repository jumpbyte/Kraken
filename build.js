var fs = require("fs");
var path = require("path");
var exec = require("child_process").exec;
var uglify = require("uglify-js");
var glob = require("glob");
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
var distPath = path.join(__dirname, "Kraken");

var manifest = readJson(path.join(srcPath, "manifest.json"));

function relativePath(file){
	return file.replace(srcPath, "").replace(/^\/+/, "").replace(/\.js$/, "");
}

function configPath(file){
	return file.replace(distPath, "").replace(/^\/+/, "");
}

exec("rm -fr " + distPath, function(err){
	if(err){
		throw err;
	}

	var depTree = {};

	function getDeps(file, deps){
		deps = deps || [];

		if(depTree[file]){
			depTree[file].forEach(function(file){
				if(deps.indexOf(file) === -1){
					deps.push(file);

					getDeps(file, deps).forEach(function(file){
						if(deps.indexOf(file) === -1){
							deps.push(file);
						}
					});
				}
			});
		}

		return deps;
	}

	glob("**/*.js", {
		cwd: srcPath
	}, function(err, files){
		if(err){
			throw err;
		}

		files.forEach(function(file){
			var content = fs.readFileSync(path.join(srcPath, file)).toString("utf8");
			var deps = [];

			if(!/\/\/\s*@raw\s*\n/.test(content)){
				content = content.replace(REQUIRE_RE, function(all, quot, name){
					if(!name){
						return all;
					}

					var _name = name;

					if(/^\.{1,2}\//.test(name)){
						_name = path.join(path.dirname(file), name);
					}

					deps.push(_name + ".js");

					return all.replace(name, _name);
				});

				content = tpl(packTpl, {
					path: file.replace(/\.js$/, ""),
					content: content,
					run: /\/\/\s*@entry\s*\n/.test(content)
				});
			}

			depTree[file] = deps;

			// content = uglify.minify(content, {
			// 	fromString: true
			// }).code;

			var distFile = path.join(distPath, file);
			mkdirs(path.dirname(distFile));
			fs.writeFileSync(distFile, content);
		});

		var configDistFile = path.join(distPath, "config.js");
		mkdirs(path.dirname(configDistFile));
		// 编译配置
		fs.writeFileSync(configDistFile, tpl(packTpl, {
			path: "config",
			content: "module.exports = " + fs.readFileSync(path.join(__dirname, "config.json")),
			run: false
		}));

		var loaderFile = path.join("lib", "loader.js");

		// 编译背景js
		var files = [];
		manifest.background.scripts.forEach(function(file){
			file = path.join("background", file);

			[file].concat(getDeps(file)).forEach(function(file){
				if(files.indexOf(file) === -1){
					files.push(file);
				}
			});
		});
		files.push(loaderFile);
		manifest.background.scripts = files.reverse();

		// 编译页面注入js
		manifest["content_scripts"].forEach(function(config){
			var files = [];
			config.js.forEach(function(file){
				file = path.join("contents", file);

				[file].concat(getDeps(file)).forEach(function(file){
					if(files.indexOf(file) === -1){
						files.push(file);
					}
				});
			});
			files.push(loaderFile);
			config.js = files.reverse();
		});

		// 编译manifest
		fs.writeFileSync(path.join(distPath, "manifest.json"), JSON.stringify(manifest, null, "	"));
		// fs.writeFileSync(path.join(distPath, "manifest.json"), JSON.stringify(manifest));

		var optionsHtml = fs.readFileSync(path.join(srcPath, "options.html")).toString("utf8");
		optionsHtml = optionsHtml.replace(/<script\s+src="([^"]+)"><\/script>/g, function(all, file){
			return [loaderFile].concat([file].concat(getDeps(file)).reverse()).map(function(file){
				return '<script type="text/javascript" src="' + file + '"></script>';
			}).join("\n");
		});
		fs.writeFileSync(path.join(distPath, "options.html"), optionsHtml);
	});

	glob("**/*.png", {
		cwd: srcPath
	}, function(err, files){
		if(err){
			throw err;
		}

		files.forEach(function(file){
			var distFile = path.join(distPath, file);
			mkdirs(path.dirname(distFile));
			fs.writeFileSync(distFile, fs.readFileSync(path.join(srcPath, file)));
		});
	});
});