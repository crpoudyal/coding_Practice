


//call back nesting callback hell

function takePhoto(callback) {
    console.log('taking photo');
    setTimeout(function() {
        callback(null, 'done');
    }, 4000);
}

function editPhoto(rawPhoto,callback){
	console.log('editing in progress..');
	setTimeout(function(){
		callback('failed');
	}, 2000);
}

function uploadPhoto(photo,callback){
	console.log('uploading');
	setTimeout(function(){
		callback(null,'done');

	},1000);
}
takePhoto(function(err,done){
	if(err){
		console.log('Failed To take Photo');
	}else{
		console.log('Photo Taken');
		editPhoto('photo.png',function(err,done){
			if(err){
				console.log('Editing failed');
			}else{
				console.log('Editing Successful');
				uploadPhoto('finalphoto.png',function(err,done){
					if(err){
						console.log('uploding unsuccessful');
					}else{
						console.log('Successfully Uploded');
					}					
				})
				console.log('I got a Youtube Notification on gamming videos');
			}
		})
	}
})
