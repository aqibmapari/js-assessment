exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
	var binaryStr = (num >>> 0).toString(2)
	var finalStr = binaryStr.split("").reverse().join("");
	return parseInt(finalStr[bit-1],10);
  },

  base10: function(str) {
	return (parseInt(str,2) >> 0);
  },

  convertToBinary: function(num) {
	return (num >>> 0).toString(2);
  },

  multiply: function(a, b) {
	return (a/10)*(b*10);
  }
};
