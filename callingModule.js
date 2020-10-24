

//require

const takePhoto = require('./task/takephoto');
const editPhoto = require('./task/editphoto');
const uploadPhoto = require('./task/uploadphoto');


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
