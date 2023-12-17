//To decalre a number 
const score=400
console.log(score)//here this is automatically defined that this is number
//To declare number explicitly
const balance=new Number(100)
console.log(balance)//here this is specifically defined or we can say that is cast number

console.log(balance.toString())//so here we convert number into string
console.log(typeof(balance))//object
//Now we can use methods of string 
console.log(balance.toString().length)//toString() is function and length is method of string
console.log(balance.toString().charAt(0))//1

//Number Methods
console.log(balance.toFixed(2))//100.00
console.log(balance.toFixed(4))//100.0000
//toFixed()---->it will give precision value like in Ecommerce application

const otherNumber=24.45
console.log(otherNumber.toPrecision(1))//2e+1---->it will consider only one value and other will give exponential
console.log(otherNumber.toPrecision(2))//24
console.log(otherNumber.toPrecision(3))//24.4
console.log(otherNumber.toPrecision(4))//24.45

const Number1=24.89
console.log(Number1.toPrecision(1))//2e+1
console.log(Number1.toPrecision(2))//25---->here o/p will 25 because it will round the value of .89 as 1 add in 24 so 25
console.log(Number1.toPrecision(3))//24.9
console.log(Number1.toPrecision(4))//24.89

const Number2=123.8966
console.log(Number2.toPrecision(1))//1e+2
console.log(Number2.toPrecision(2))//1.2e+2
console.log(Number2.toPrecision(3))//124
console.log(Number2.toPrecision(4))//123.9
console.log(Number2.toPrecision(5))//123.90
console.log(Number2.toPrecision(6))//123.897
//toPrecision()---->Returns a string containing a number represented 
//                  either in exponential or fixed-point notation with a specified number of digits.

//toLocaleString()---->this is used for representation of number
//-By default it is US Standard but we can make it as Indian Standard by 'en-IN'
const Number3=100000
console.log(Number3.toLocaleString())//100,000
console.log(Number3.toLocaleString('en-IN'))//1,00,000

//****Methods In Number****
//1.toString()---->used to convert number to string
//2.toFixed()---->it will give precision value like in Ecommerce application
//3.toPrecision()---->Returns a string containing a number represented 
//                  either in exponential or fixed-point notation with a specified number of digits
//4.toLocaleString()---->used reprsentation like Indian('en-IN') or US Standard

//****Maths****
console.log(Math.abs(-4))//it will convert only negative value to positive
console.log(Math.round(4.3))//4 it will round up value as 4
console.log(Math.round(4.89))//5
//If we have to choose between top value and bottom value so we can use ceil() and floor() methods
console.log(Math.ceil(4.2))//if value is slightly greater than 4 then it will give o/p as 5
console.log(Math.floor(4.2))//4
console.log(Math.floor(4.9))//4

//To find max and min
console.log(Math.min(1,2,3,4))//1
console.log(Math.max(1,2,3,4))//4

console.log(Math.random())//the value of random() will comes between 0 and 1
console.log((Math.random()*10)+1)//

//if we want value between 10-20
const min=10
const max=20
console.log(Math.floor((Math.random())*(max-min+1))+min)//value will come between 10-20

//****Game of dice****
const value1=1
const value2=6
console.log(Math.floor(Math.random()*(value2-value1+1))+value1)//value will come between 1-6

