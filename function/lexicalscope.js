


var a= "hello guys ";

function first(){
	var b = "how are You? ";
	// console.log(c); // cannot access 
	second();

	function second(){
		var c = "myself CR Poudyal ";

		console.log(a+b+c);
	}
}
first();