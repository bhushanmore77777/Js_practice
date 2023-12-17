//Objects can be declare using 1.Literals=>If we made object using this then it will be not singleton
//                             2.Constructor=>If we made object using this then it will be always singleton
//1.Literals
const JsUser={
    name:"BHUSHAN",
    age:25,
    location:"Nashik",
    email:"bhushan@gmail.com",
    isLoggedIn:false
}
console.log(JsUser)//{ name: 'BHUSHAN', age: 25, location: 'Nashik', email: 'bhushan@gmail.com', isLoggedIn: false }
console.log(JsUser.name)//BHUSHAN
//console.log(JsUser[email])//error because whenever we have to access object values then if we do not use dot then in [] we have to use like string
console.log(JsUser["email"])//bhushan@gmail.com

const JsUser1={
    name:"Bhushan",
    "full Name":"Bhushan Vishnu More"
}
console.log(JsUser1["full Name"])//If full Name having space in object and declare with"" then there will be only one option to access
//According to Symbol POV
const mySym=Symbol("Key1")
const JsUser3={
    name:"Bhushan",
    surname:"More",
    mySym:"myKey1"
}
console.log(JsUser3)//{ name: 'Bhushan', surname: 'More', mySym: 'myKey1' }
console.log(JsUser3.mySym)//myKey1
console.log(typeof JsUser3.mySym)//string

const mySym2=Symbol("Key2")
const JsUser4={
    name:"Bhushan",
    surname:"More",
    [mySym2]:"myKey1"
}
console.log(JsUser4)//{ name: 'Bhushan', surname: 'More', [Symbol(Key2)]: 'myKey1' }
console.log(JsUser4[mySym2])//myKey1
console.log(typeof mySym2)//symbol

JsUser4.name="Bhushan Vishnu More"//to make changes in name
//Object.freeze(JsUser4)//If we use freeze then the changes made in object will not included
JsUser4.name="More Bhushan Vishnu"
console.log(JsUser4)//{
  //                     name: 'Bhushan Vishnu More',
  //                  surname: 'More',
  //           [Symbol(Key2)]: 'myKey1'
  //                  }
  JsUser4.greeting=function(){
    console.log("Hello JS User")
  }
  console.log(JsUser4.greeting)//[Function(anonymous)] in this function is not executed just return the function reference
  console.log(JsUser4.greeting())
 JsUser4.greeting2=function(){
    console.log(`Hello JS User,${this.name}`)//this is used for accessing same object
 }
 console.log(JsUser4.greeting2())//Hello JS User,More Bhushan Vishnu
 
