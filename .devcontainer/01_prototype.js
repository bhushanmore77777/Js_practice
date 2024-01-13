//JS default behaviour is prototypal
function multipleBy5(num){
    return num*5
}
multipleBy5.power=2
//console.log(multipleBy5(5))//25
//console.log(multipleBy5.power)//2
//console.log(multipleBy5.prototype)//{}
// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
let myName="BHUSHAN"
// console.log(myName.length)//7
let myName1="BHUSHAN    "
//now we are removing spaces without using trim function for any string
let myHero=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
String.prototype.trueLength=function(){
    console.log(`${this.name}`)
    console.log(`true length${this.trim().length}`)
}
myName1.trueLength()

