// function addition(value1){

// 	function add(value2){
// 		var result ="sum is----> "+ (value1+value2);
// 		return result;
// 	}
// 	return add;
// }
// var res = addition(2)(3);
// console.log(res);



function additions1(value){

	 function innerAdd(value1){

	 	function innerAdd1(value2){
	 		var result = "sum is----> "+(value+value1+value2);
	 		return result;
	 	}
	 	return innerAdd1;
	 }
	 return innerAdd;
}

var res1 = additions1(2)(3)(4);
console.log(res1);