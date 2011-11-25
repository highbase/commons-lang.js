/***
String.prototype.substringBefore = function(separator) {
	var pos = this.indexOf(separator);
	if (-1 == pos)
	{
		return this;
	}
	return this.substring(0, pos);
}
String.prototype.substringAfter = function(separator) {
	var pos = this.indexOf(separator);
	if (-1 == pos) {
		return this;
	}
	if (this.length > (pos + separator.length))
	{
		return this.substring(pos + separator.length);
	}
	else
	{
		return "";
	}
}
String.prototype.substringLast = function(separator) {
	var arr = this.split(separator);
	if (0 < arr.length)
	{
		return arr[arr.length -1];
	}
	else
	{
		return this;
	}
}
*/
var StringUtils = {
	isEmpty: function(/*String*/str) {
		return ((str == null) || (str.length == 0));
	},
	isNotEmpty: function(/*String*/str) {
		return (!(this.isEmpty(str)));
	},
	substringBefore: function(/*String*/str, /*String*/separator) {
		if (this.isEmpty(str) || null == separator) {
			return str;
		}
		if (0 == separator.length) {
			return "";
		}
		var pos = str.indexOf(separator);
		if (-1 == pos) {
			return str;
		}
		return str.substring(0, pos);
	},
	substringAfter: function(/*String*/str, /*String*/separator) {
		if (this.isEmpty(str) || null == separator) {
			return str;
		}
		var pos = str.indexOf(separator);
		if (-1 == pos) {
			return str;
		}
		return str.substring(pos + separator.length);
	},
	left: function(/*String*/str, /*int*/len) {
		if (null == str) {
			return null;
		}
		if (0 > len) {
			return "";
		}
		if (str.length <= len) {
			return str;
		}
		return str.substring(0, len);
	},
	right: function(/*String*/str, /*int*/len) {
		if (null == str) {
			return null;
		}
		if (0 > len) {
			return "";
		}
		if (str.length <= len) {
			return str;
		}
		return str.substring(str.length - len);
	},
	mid: function(/*String*/str, /*int*/pos, /*int*/len) {
		if (null == str) {
			return null;
		}
		if ((0 > len) || (pos > str.length)) {
			return "";
		}
		if (pos < 0) {
			pos = 0;
		}
		if (str.length <= len + len) {
			return str.substring(pos);
		}
		return str.substring(pos, pos + len);
	},
	trim: function(/*String*/str) {
		if (null == str) {
			return null;
		}
		return str.replace(/(^\s+)|(\s+$)/gi, "");
	},
	ltrim: function(/*String*/str) {
		if (null == str) {
			return null;
		}
		return str.replace(/^\s+/, "");
	},
	rtrim: function(/*String*/str) {
		if (null == str) {
			return null;
		}
		return str.replace(/\s+$/, "");
	},
	indexOf: function(/*String*/str, /*String*/searchStr, /*int*/startPos) {
		if (this.isEmpty(str)) {
			return -1;
		}
		if (startPos == "undefined") {
			return str.indexOf(searchStr);
		} else {
			return str.indexOf(searchStr, startPos);
		}
	},
	lastIndexOf: function(/*String*/str, /*String*/searchStr, /*int*/startPos) {
		if (this.isEmpty(str)) {
			return -1;
		}
		if (startPos == "undefined") {
			return str.lastIndexOf(searchStr);
		} else {
			return str.lastIndexOf(searchStr, startPos);
		}
	},
	contains: function(/*String*/str, /*String*/searchStr) {
		if ((null == str) || (null == searchStr)) {
			return false;
		}
		return (str.indexOf(searchStr) >= 0);
	},
	repeat: function(/*String*/str, /*int*/repeat) {
		if (null == str) {
			return null;
		}
		if (0 >= repeat) {
			return "";
		}
		var buff = [];
		for (var i = 0; i < repeat; i++) {
			buff.push(str);
		}
		return buff.join("");
	},
	rightPad: function(/*String*/str, /*int*/size, /*String*/padStr) {
		if (null == str) {
			return null;
		}
		if (this.isEmpty(padStr)) {
			padStr = " ";
		}
		var buf = str.concat(this.repeat(padStr, size));
		return this.left(buf, size);
	},
	leftPad: function(/*String*/str, /*int*/size, /*String*/padStr) {
		if (null == str) {
			return null;
		}
		if (this.isEmpty(padStr)) {
			padStr = " ";
		}
		var buf = (this.repeat(padStr, size)).concat(str);
		return this.right(buf, size);
	},
	center: function(/*String*/str, /*int*/size, /*String*/padStr) {
		if (null == str || 0 >= size) {
			return str;
		}
		var strLen = str.length;
		var pads = size - strLen;
		if (0 >= pads) {
			return str;
		}
		str = this.leftPad(str, strLen + pads / 2, padStr);
		str = this.rightPad(str, size, padStr);
		return str;
	},
	upperCase: function(/*String*/str) {
		if (null == str) {
			return null;
		}
		return str.toUpperCase();
	},
	lowerCase: function(/*String*/str) {
		if (null == str) {
			return null;
		}
		return str.toLowerCase();
	},
	countMatches: function(/*String*/str, /*String*/sub) {
		if ((this.isEmpty(str)) || (this.isEmpty(sub))) {
			return 0;
		}
		var count = 0;
		var idx = 0;
		while ((idx = str.indexOf(sub, idx)) != -1) {
			++count;
			idx += sub.length;
		}
		return count;
	},
	isAlpha: function(/*String*/str) {
		if (null == str) {
			return false;
		}
		var sz = str.length;
		var re = new RegExp("[A-Za-z]");
		for (var i = 0; i < sz; ++i) {
			if (!re.test(str.charAt(i))) {
				return false;
			}
		}
		return true;
	},
	isAlphaSpace: function(/*String*/str) {
		if (null == str) {
			return false;
		}
		var sz = str.length;
		var re = new RegExp("[A-Za-z]|( )");
		for (var i = 0; i < sz; ++i) {
			if (!re.test(str.charAt(i))) {
				return false;
			}
		}
		return true;
	},
	isNumeric: function(/*String*/str) {
		if (null == str) {
			return false;
		}
		var sz = str.length;
		var re = new RegExp("[0-9]");
		for (var i = 0; i < sz; ++i) {
			if (!re.test(str.charAt(i))) {
				return false;
			}
		}
		return true;
	},
	isNumericSpace: function(/*String*/str) {
		if (null == str) {
			return false;
		}
		var sz = str.length;
		var re = new RegExp("[0-9]|( )");
		for (var i = 0; i < sz; ++i) {
			if (!re.test(str.charAt(i))) {
				return false;
			}
		}
		return true;
	},
	isWhitespace: function(/*String*/str) {
		if (null == str) {
			return false;
		}
		var sz = str.length;
		var re = new RegExp("\s");
		for (var i = 0; i < sz; ++i) {
			if (!re.test(str.charAt(i))) {
				return false;
			}
		}
		return true;
	},
	defaultString: function(/*String*/str, /*String*/defaultStr) {
		return ((str == null) ? defaultStr : str);
	},
	defaultIfEmpty: function(/*String*/str, /*String*/defaultStr) {
		return ((this.isEmpty(str)) ? defaultStr : str);
	},
	difference: function(/*String*/str1, /*String*/str2) {
		if (null == str1) {
			return str2;
		}
		if (null == str2) {
			return str1;
		}
		var at = this.indexOfDifference(str1, str2);
		if (-1 == at) {
			return "";
		}
		return str2.substring(at);
	},
	indexOfDifference: function(/*String*/str1, /*String*/str2) {
		if (str1 == str2) {
			return -1;
		}
		if (null == str1 || null == str2) {
			return 0;
		}
		for (var i = 0; (i < str1.length) && (i < str2.length); ++i) {
			if (str1.charAt(i) != str2.charAt(i)) {
				break;
			}
		}
		if ((i < str2.length) || (i < str1.length)) {
			return i;
		}
		return -1;
	}
}
