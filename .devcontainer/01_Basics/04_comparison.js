// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)

// ===---->checks both value and data type(strict check)
// ==---->checks only value 
// console.log("2"==2)//here "2" is converted to number and then compare so true
// console.log("2"===2)//here "2" datatype is string and 2 having datatype is number so both are diffrent so false

// console.log("2">1)//here in both cases "2" and "02" are converted to number 
// console.log("02">1)

//in this null will either converted to nan or 0
console.log(null>0)
console.log(null==0)
console.log(null<0)
//undefined is also same as null
console.log(undefined>0)
console.log(undefined==0)
console.log(undefined<0)