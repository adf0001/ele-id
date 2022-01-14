
//global variable, for html page, refer tpsvr @ npm.
ele_id = require("../ele-id.js");

module.exports = {

	"ele-id()": function (done) {
		document.getElementById('divResult2').innerHTML = '<span>child</span>';
		//eleId( [ el [, prefix]] )
		showResult('new id= ' + ele_id(document.getElementById('divResult2').firstChild) + ', new id2= ' + ele_id(), 3);
		return document.getElementById('divResult2').firstChild.id &&
			ele_id(document.getElementById('divResult2')) === 'divResult2';
	},
	".from()": function (done) {
		//.from(idString)	//just same as document.getElementById()
		return ele_id.from('divResult') === document.getElementById('divResult') &&
			ele_id.from('divResult8679789678967') === null;
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('ele_id', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
