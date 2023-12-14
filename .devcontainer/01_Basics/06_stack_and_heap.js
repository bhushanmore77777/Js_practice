//1.Stack=>-Primitive DataTypes
//         -Makes a copy
//2.Heap=>-Non-Primitive DataTypes
//        -Reference 
let name="BHUSHAN"
let anotherName=name
anotherName="BHUSHAN VISHNU MORE"
console.log(name)
console.log(anotherName)
//In above example changes will be made in copy because it is stack

let userOne={
    email:"bhushan@gmail.com",
    upiId:"bhushan@ybl"
}
let userTwo=userOne
userTwo.email="bhushanmore@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
//In above example changes made in userOne and userTwo //reference because it is heap