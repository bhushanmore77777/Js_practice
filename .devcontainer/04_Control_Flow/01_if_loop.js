//==->-checks only value
//===->-checks both value and datatype
const temperature=44
if(temperature<60)
{
    console.log("Temperature is less than 60")
}
else
{
    console.log("Temperature is greater than 60")
}
const score=200
if(score>100)
{
    const power="Fly"
    console.log(`User Has Power ${power}`)
}
//console.log(`user has power ${power}`)//this will cause error because power is associated with const so that it will have scope upto if loop
//so const has block scope

const score1=200
if(score1>100)
{
    var power1="Fly"
    console.log(`user has power ${power1}`)   
}
console.log(`user has power ${power1}`)
//above code will run perfectly but here we used var so var having global scope
//but this is not good
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const  loggedInFromEmail=true
if(userLoggedIn && debitCard)
{
    console.log("Allow To Buy")//Allow To Buy
}
if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("user logged in")//user logged in
}
const month=4
switch(month)
{
    case 1:console.log("January")
           break;
    case 2:console.log("February")
           break;
    case 3:console.log("March")
           break;
    case 4:console.log("April")
           break;
    case 5:console.log("May")
           break;
    case 6:console.log("June")
           break;
    case 7:console.log("July")
           break;
    case 8:console.log("August")
           break;
    case 9:console.log("September")
           break;
    case 10:console.log("October")
           break;
    case 11:console.log("November")
           break;
    case 12:console.log("December")
           break;
    default:console.log("case not match")
            break;
}
//so if we do not used break in between the case it will match all the things and give o/p except default
//****Truthy value or Falsy value****
const userEmail="bhushan@gmail.com"
if(userEmail)
{
    console.log("got user email")
}
else
{
    console.log("do not have user email")
}
//in above code in if condition we are not compairing anything we are assuming that userEmail is true
//Truthy Value=>-The value in which we are not compairing anything we are assuming it will be true
//              -1."0",2.'false',3." ",4.[],5.{},6.function(){}
//Falsy Value=>1.false,2.0,3.-0,4."",5.BigInt,6.Null,7.NaN,8.undefined

//to check array
const myArray=[]
if(myArray.length===0)
{
    console.log("array is empty")//array is empty
}
//to check object is empty
const emptyObj={}
if(Object.keys(emptyObj).length===0)
{
    console.log("object is empty")//object is empty
}
//1.false==0---->true
//2.false==''---->true
//3.0==''---->true
//Nullish Coalescing Operator(??)
//-null,undefined
let val1;
//val1=5 ?? 10//5
// val1=null ?? 10//10
// val1=undefined ?? 10//10
val1=null ?? 10 ?? 4//10
console.log(val1)


