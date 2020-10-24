var students =[

{
	name: 'krishna',
	house : 'yellow',
	roll : 5,
	class :6
},
{
	name: 'Govinda',
	house : 'blue',
	roll : 3,
	class :6
},
{
	name: 'gopal',
	house : 'green',
	roll : 5,
	class :6
},
{
	name: 'hari',
	house : 'yellow',
	roll : 5,
	class :7
},
{
	name: 'janak',
	house : 'blue',
	roll : 3,
	class :6
},
{
	name: 'bikram',
	house : 'brown',
	roll : 7,
	class :7
}]

function groupBy(source,Propertyname){
var obj = {};
	students.forEach(function(item,index){
		let itemValue = item[Propertyname];
		if (obj[itemValue]){
			obj[itemValue].push(item);
		}else{
			obj[itemValue] = [item];
		}

})
	return obj;
}
// console.log(students);
var groupByClass = groupBy(students,'class');

console.log('Group by class',groupByClass);

var groupByHouse = groupBy(students,'house');

console.log('Group by house',groupByHouse);

















