exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
	var dfd = $.Deferred();
		window.setTimeout(function(){
			dfd.resolve(value);
		},100);
		
	return dfd.promise();
  },

  manipulateRemoteData : function(url) {
	var dfd = $.Deferred();
		
	$.ajax({type : "GET",
        url: url, 
        json:true,
        dataType :'text',
		success: function(result){
			var data = JSON.parse(result).people;
			var sortedArr = data.sort(function(a, b) {
				var aName = a.name;
				var bName = b.name;
				return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
			});
			var arr = [];
			for(var i=0; i<sortedArr.length;i++){
				arr.push(sortedArr[i].name)
			}
			dfd.resolve(arr);
		},
		error: function(){
			console.log('error');
			dfd.reject();
		}
	});
		
	return dfd.promise();
  }
};
