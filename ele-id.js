
// ele-id @ npm, create and set element a new unique id, or return the existed id.

var seed = 0;	//seed, for new unique id

//eleId( [ el [, prefix]] )
module.exports = exports = function (el, prefix) {
	if (el) {
		if (typeof el === "string") return el;	//return the same value if el is a not-empty string
		if (el.id) return el.id;
	}

	if (!prefix) prefix = "ele-id-";

	var sid;
	while (document.getElementById(sid = prefix + (++seed))) { };

	return el ? (el.id = sid) : sid;
}

//just same as document.getElementById()
exports.from = function (id) { return document.getElementById(id); }
