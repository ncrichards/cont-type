function parse(type){
	var regxt = /.+\/.+/g;
	var regxc = /(CHARSET|charset)\s*\=.*/g;
	var ctype = [];
		ctype['type'] = null;
		ctype['charset'] = null;
	var p = type.split(";");
	var t = p.forEach(function(node){
			if(regxt.test(node)){
				ctype['type'] = node;
				}
			if(regxc.test(node)){
				c = node.split("=");
				ctype['charset'] = c[1];
				}
		})
	return ctype;
	}
module.exports.parse = parse;