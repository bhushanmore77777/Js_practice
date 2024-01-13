//Js does not have classes
//Js is prototype based language
//Object=>-collection of properties and methods
//****Parts Of OOP****
//Object Literal=>-literally we want
// const user={
//     username:"BHUSHAN",
//     loginCount:8,
//     signedIn:true
// }
// console.log(user.username)
//Constructor function=>
// const promiseOne=new Promise()
// const date=new Date()
//above new keyword is constructor function
function User(username,loginCount,signedIn){
    this.username=username
    this.loginCount=loginCount
    this.signedIn=signedIn
    return this
}
// const userOne=User("BHUSHAN",8,true)
// const userTwo=User("MORE",9,true)
// console.log(userOne)
//value will be override
//to overcome  this we used new keyword
//constructor function give new instance
const userOne=new User("BHUSHAN",8,true)
const userTwo=new User("MORE",9,true)
console.log(userOne)
console.log(userTwo)
//1.when we used new keyword then empty object will be created
//2.constructor function will called because of new keyword and packed all arguments give
//3.this keyword will injected
//4.we get in function
//Prototypes=>
//Classes=>
//Instances(new,this)=>this->-current context
//
//****4 Pillars****
//1.Abstraction
//2.Encapsulation
//3.Polymorphism
//4.Inheritance

