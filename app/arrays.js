exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
	return arr.indexOf(item);
  },

  sum : function(arr) {
	var tempSum = 0;
	for(var i=0;i<arr.length;i++){
		tempSum += arr[i];
	}
	return tempSum;
  },

  remove : function(arr, item) {
	var tempArr = arr;
	for(var i=arr.length-1;i>=0;i--){
		if(arr[i] === item){
			tempArr.splice(i,1);
		}
	}
	return tempArr;
	
  },

  removeWithoutCopy : function(arr, item) {
	var _length = arr.length;
	for(var i=_length-1;i>=0;i--){
		if(arr[i] === item){
			arr.splice(i,1);
		}
	}
	return arr;
  },

  append : function(arr, item) {
	arr.splice(arr.length,0,item);
	return arr;
  },

  truncate : function(arr) {
	arr.splice(arr.length-1,1);
	return arr;
  },

  prepend : function(arr, item) {
	arr.splice(0,0,item);
	return arr;
  },

  curtail : function(arr) {
	arr.splice(0,1);
	return arr;
  },

  concat : function(arr1, arr2) {
	var _length2 = arr2.length;
	for(var i=0; i<_length2;i++){
		arr1.splice(arr1.length,0,arr2[i]);
	}
	return arr1;
  },

  insert : function(arr, item, index) {
	arr.splice(index,0,item);
	return arr;
  },

  count : function(arr, item) {
	var _length = arr.length;
	var count = 0;
	for(var i=_length-1;i>=0;i--){
		if(arr[i] === item){
			count++;
		}
	}
	return count;
  },

  duplicates : function(arr) {
	var tempArr = [];
	arr.sort();
	for(var i =0; i<arr.length;i++){
		var item = arr[i];
		if(i!=arr.length-1 && item === arr[i+1]){
			var index = tempArr.indexOf(item);
			if(index === -1){
				tempArr.push(item);
			}
		}
		
	}
	return tempArr;
  },

  square : function(arr) {
	
	for(var i =0; i<arr.length;i++){
		arr[i] *= arr[i];
	}
	return arr;
  },

  findAllOccurrences : function(arr, target) {
	var indices = [];
	for(var i=0; i<arr.length;i++) {
		if (arr[i] === target) indices.push(i);
	}
	return indices;
  }
};
