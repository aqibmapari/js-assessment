exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
	
	this.cancel = function(){
		clearInterval(intervalId);
	}
	var intervalId;
	var i=0;
	console.log(start);
	intervalId = setInterval(function(){
		var tempCount = start + ++i;
		tempCount > end? clearInterval(intervalId):console.log(tempCount);
		//return arr;
		//return tempCount > end? end:tempCount;
	},100);
	return this;
  }
};
