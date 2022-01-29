# ele-id
create and set element a new unique id, or return the existed id.

# Install
```
npm install ele-id
```

# Usage & Api
```javascript

var ele_id = require("ele-id");

document.getElementById('divResult2').innerHTML = '<span>child</span>';

//eleId( [ el [, prefix]] )
showResult('new id= ' + ele_id(document.getElementById('divResult2').firstChild) + ', new id2= ' + ele_id(), 3);

document.getElementById('divResult2').firstChild.id &&
	ele_id(document.getElementById('divResult2')) === 'divResult2' &&
	ele_id("asdfg12345") === "asdfg12345";

//.from(idString)	//just same as document.getElementById()
ele_id.from('divResult') === document.getElementById('divResult') &&
	ele_id.from('divResult8679789678967') === null;

```
