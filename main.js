//#1//

// const capitalizeSentences = function(str){
//   let result = '';
//   for (i = 0; i < str.length; i++ )
//   const firstLetter = str[i];
//   //statement to upperCase the two indices after the period. 
//   if (firstLetter.indexOf('') + 2 === '.') {
//     result = result + firstLetter.toUpperCase();
//   } else {
//     result = result + firstLetter.toLowerCase();
//   }


// return result;
// }
// console.log(capitalizeSentences('Hello. binge watching'))

//#2//
function isValidPassword(str){
  return str.length < 12 || str.charAt() === ' ';
}
let results = isValidPassword('bad password');
results;


//#3//
const makeHalfSquares = function(nums) {
const results = [] //New, affected array data will need a 'new home'. Hence, blank array.
for(let i = 0; i <nums.length; i++){
results.push((nums[i] * nums[i]) / 2)// This is where the change/action happens. Array method that changes initial array data. In this examples, nums[i] is the value of each index and is multiplied by 2.
  
}
return results;
}
console.log(makeHalfSquares([2, 3, 5]));


//#4//
let count = 0;
const countAs = function(arr){
for (let i = 0; i < arr.length; ++i){
    if (arr[i] >= 90){
    count = count + 1;
}
}
return count;
}
console.log(countAs([40, 90, 50, 90]));


//#5
function deleteMiddleLetters(str) {
  let middleIndex = str.length / 2
  return str.slice(0, middleIndex) + str.slice(middleIndex+1, middleIndex +1) + str.slice(middleIndex +1)
}
console.log(deleteMiddleLetters('goodbye'));



//#6//

// const indexOf = function(str){
  // let str = ''
// for(let i = 0; i <str.length; i++){
//   if (str[i] !== '' ){

// }


// }
// }
// console.log(str.lastIndexOf('I am taking a test.'));

//#7//

const hyphenateName= function(str){
  let result = '';

for (let i = 0; i < str.length; i++){
  if (str[i] === ' ') {
    result = result + '-';
  } else {
    result = result + str[i]
}
}
return result;
}
console.log(hyphenateName('Francis Eclevia'))





if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
