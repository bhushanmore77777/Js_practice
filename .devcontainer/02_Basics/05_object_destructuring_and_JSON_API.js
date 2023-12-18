//Object destructuring
const course={
    courseName:"Js in hindi",
    price:999,
    instructor:"BHUSHAN"
}
//general way to access object is=>
console.log(course.instructor)//BHUSHAN
//Now Object destructuring
const {instructor}=course
console.log(instructor)//BHUSHAN
//to change name in object destructuring
const{instructor:i}=course
console.log(i)//BHUSHAN
//JSON---->Javascript Object Notation
//In JSON both key and value are treated as string
// {
//     "course":"js in hindi",
//     "price":"free"
// }
//We can get API in the array form 
[
    {},{},{},{}
]