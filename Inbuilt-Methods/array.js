// var iplTeam =['DC','RCB','RR','KXIP','SH','CSK','KKR','RR','KXIP','SH','CSK','KKR','DC','RCB'];




// function getUniqueArray(){
// 	var uniqueArray =[];
// iplTeam.forEach(function(item,index){
// 	if(uniqueArray.indexOf(item) == -1){
// 		uniqueArray.push(item);
//       	}
//    })
// return uniqueArray;
// }
// console.log('unique array',getUniqueArray(iplTeam));




var iplTeam =['DC','RCB','RR','KXIP','SH','CSK','KKR','SH','KXIP','SH','CSK','KKR','DC','RCB','DC','RR','CSK','DC','KKR'];
function getCount(){
	var count = {}

iplTeam.forEach(function(item,index){
	// console.log('Array no',iplTeam.length);

	if(count.hasOwnProperty(item)){
		count[item]++;
	}else{
		count[item] = 1;
	}

  })
   return count;
 }
console.log('count is-->',getCount(iplTeam));