function sumArrayElements(){
    var arrays= arguments, results= [], 
    count= arrays[0].length, L= arrays.length, 
    sum, next= 0, i;
    while(next<count){
        sum= 0, i= 0;
        while(i<L){
            sum+= Number(arrays[i++][next]);
        }
        results[next++]= sum;
    }
    return results;
}

var a= [1, 2, 3], b= [4, 5, 6], c= [1, 2, 3];
sumArrayElements(a, b, c)
/* returned value:(Array)
6, 9, 12
*/
