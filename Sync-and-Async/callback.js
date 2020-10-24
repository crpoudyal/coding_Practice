
//call back Example
function photoEditing(rawphoto, photo){
	//photo is placeholder for callback
	console.log("Wait It will take 5sec to edit");
	console.log("Editing in progress.......")
	setTimeout(function(){
		console.log("Photo Editing complete");
		console.log("now you can upload");
		photo();
	},5000)
}
// setTimeout is an call back function
console.log("Give me your photo to edit");
photoEditing("myphoto.png",function(){
	console.log("wait Photo is uploading...");
	setTimeout(function(){
		console.log("UPLOAD successful.... 10%");
		console.log("UPLOAD successful.... 50%");
		console.log("UPLOAD successful.... 100%");
	},3000)
	console.log("Thank you for your time");  

})
//non blocking task

console.log("Preparing snack.....");
console.log("Having snack");





