

// // syntax:
// var a = new Promise(function(success,failure){

// 	success('done');
// 	failure();

// })

// a.then(function(data){
// 	console.log('success of promise --->',data)
// }
// ).catch(function(err){
// 	console('failed--->',err)
// }).finally(function(){
// 	console.log('promise is settled');
// })

// function askMoney(amt) {
// 	return new Promise(function(resolve,reject){
// 		setTimeout(function(){
// 			// resolve(333);
// 			reject('error');
// 		},399)
// 	})
// }

// askMoney(33)
// 	.then(function(data){
// 		console.log('success of ask money');
// 	})
// 	.catch(function(err){
// 		console.log('error in ask money')
// 	});


//promise Example


// function uploadPhoto(photo){
// 	return new Promise(function(resolve,reject){
// 		setTimeout(function(){
// 			resolve('photo.png');
// 			// reject('error');
// 		},2000);
// 	})
// }
// uploadPhoto('myphoto.png')
// .then(function(done){
// 	console.log('Photo uploaded',done);
// })
// .catch(function(err){
//     console.log('error in uploading....',err);
// });



// function buyMobilephone(amount){
// 	return new Promise(function(resolve,reject){
// 		setTimeout(function(){
// 			// resolve(20000);
// 			reject(' Collect Money');
// 		},2000);
// 	})
// }
// buyMobilephone(10000)
// .then(function(data){
// 	console.log('You can buy Mobilephone',data);
// })
// .catch(function(err){
//     console.log('Not Enough Money to Buy Mobilephone',err);
// }).finally(function(){
// 	console.log('Ok next time');
// });



//Nested Promise


function askMoney(){
	return new Promise(function(resolve,reject)
	{
		setTimeout(function(){
			resolve();
		},3000);
	})
}


function buyMoterBike(amt){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve();
			// reject("Didnt find the bike whic i want");
		},4000);
	})
}

function goForRide(bike){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve();
		},5000)

	})
}



askMoney()
.then(function(data){
	console.log('I got the Money');
	return buyMoterBike();
})
.then(function(data){
	console.log('Got the Bike which I want');
	return goForRide();
})
.then(function(data){
	console.log('Success in finding bike which i wanted');
	console.log('Enjoinging the Wonderful ride with my new Bike ');
})
.catch(function(err){
	console.log('failed',err);
})


