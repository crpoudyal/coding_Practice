//task

function uploadPhoto(photo,callback){
	console.log('uploading');
	setTimeout(function(){
		callback(null,'done');

	},1000);
}

module.exports = uploadPhoto;