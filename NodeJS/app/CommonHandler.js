module.exports = {

  	makeHeader: function () {
	return "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>NodePress</title><link rel=\"stylesheet\" href=\"/inc/bootstrap.min.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/inc/slick.css\"/><link rel=\"stylesheet\" type=\"text/css\" href=\"/inc/slick-theme.css\"/><link rel=\"stylesheet\" href=\"/style.css\"></head><body><header><div class=\"container\"><div class=\"row\"><div class=\"col-sm-6\"><a href=\"/\"><img src=\"/img/logo@2x.png\" class=\"logo img-responsive\" id=\"header-logo\" /></a></div><div class=\"col-sm-6 text-right\"><nav><ul><li><a href=\"/\">Home</a></li><li><a href=\"/blog\">Blog</a></li></ul></nav></div></div></div></header>"
},

    makeFooter: function () {
        return "<footer><script src=\"/inc/js/bootstrap.min.js\"></script><script type=\"text/javascript\" src=\"/inc/jquery-1.11.0.min.js\"></script><script type=\"text/javascript\" src=\"/inc/jquery-migrate-1.2.1.min.js\"></script><script type=\"text/javascript\" src=\"/inc/slick.min.js\"></script><script src=\"/inc/dynamics.min.js\"></script><script src=\"/inc/animations.js\"></script></footer></body></html>"
    },

    makeJSON: function () {
	    var dict = {}

	    for(var i = 1; i < 11; i++) {
		    var randomNumber = Math.floor(Math.random() * 1000);
		    var testNum = "Test Number " + i;
		    dict[testNum] = randomNumber;
	    }

	    return dict
    },
 makeJSONfast: function () {
 			return {
 				"Test Number 1": Math.floor(Math.random() * 1000),
 				"Test Number 2": Math.floor(Math.random() * 1000),
 				"Test Number 3": Math.floor(Math.random() * 1000),
 				"Test Number 4": Math.floor(Math.random() * 1000),
 				"Test Number 5": Math.floor(Math.random() * 1000),
 				"Test Number 6": Math.floor(Math.random() * 1000),
 				"Test Number 7": Math.floor(Math.random() * 1000),
 				"Test Number 8": Math.floor(Math.random() * 1000),
 				"Test Number 9": Math.floor(Math.random() * 1000),
 				"Test Number 10": Math.floor(Math.random() * 1000),
 			}
   }
};
