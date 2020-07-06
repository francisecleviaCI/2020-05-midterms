// return str.slice(0, middleIndex) + str.slice(middleIndex+1, middleIndex +1) + str.slice(middleIndex +1)
let array = [90, 50, 40, 90]

var count = 0;
for(var i = 0; i < array.length; ++i){
    if(array[i] >= 2)
        count++;
}
return count;

console.log(count);