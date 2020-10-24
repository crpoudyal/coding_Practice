
//task

function editPhoto(rawPhoto,callback){
	console.log('editing in progress..');
	setTimeout(function(){
		callback();
	}, 2000);
}


module.exports = editPhoto;