//Date in JS nothing but single moment starts from 1 january 1970 stored in miliseconds(ms)
let myDate=new Date()
console.log(typeof myDate)//---->object
console.log(myDate.toString())//not readable
console.log(myDate.toDateString())//it will give only date not time
console.log(myDate.toLocaleString())//12/17/2023, 5:02:35 AM
console.log(myDate.toISOString())//
console.log(myDate.toJSON())//
console.log(myDate.toLocaleDateString())//12/17/2023
console.log(myDate.toLocaleTimeString())//5:04:44 AM
console.log(myDate.toTimeString())//05:05:21 GMT+0000 (Coordinated Universal Time)
//if we have to declare date specifically
let createdDate=new Date(2023,0,23)
console.log(createdDate.toDateString())//Mon Jan 23 2023
//months are start from 0 so 0 means january and monday it gives automatically
let createdDate1=new Date(2023,0,3,4,4)
console.log(createdDate1.toLocaleString())//1/3/2023, 4:04:00 AM
let createdDate2=new Date("1-1-2023")
console.log(createdDate2.toLocaleString())//1/1/2023, 12:00:00 AM
//to insert like"DD-MM-YY" format
let myTimeStamp=Date.now()
console.log(myTimeStamp)//1702790290561 in ms
console.log(createdDate.getTime())//1674432000000
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)//
console.log(newDate.getDay())//0---->Monday
console.log(newDate.getDate())//17
console.log(newDate.getMonth())//0-11 11---->December
console.log(newDate.getFullYear())//2023

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    era:"long"
}))
