exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
	var tempStr = "";//(str.match(new RegExp("x", "g")) || []).length;
	var _length = str.length;
	var lastMatch = 0;
	for(var i=0; i<_length; i++){
		if(str[i] != str[i+1]){
			var duplicateStr = str.substr(lastMatch, (i-lastMatch)+1);
			for(var j=0;j<amount && j< duplicateStr.length;j++){
				tempStr += duplicateStr[j];
			}
			lastMatch = i+1;
		}
	}
	return tempStr;
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
	return str.split("").reverse().join("");
  }
};
