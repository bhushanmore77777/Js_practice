//****DataTypes****
//JavaScript is a dynamically typed language,
// which means that data types of variables are determined by the value they hold at runtime 
//and can change throughout the program as we assign different values to them.
//-Types=>1.Primitive
//        2.Non-Primitive
//1.Primitive(Call By Value)
//    -In this changes are not directly made on value they are made on copy.
//    -Types=1.String 2.Number 3.Null 4.Undefined 5.Symbol 6.Boolean 7.BigInt
//2.Non-Primitive(Call By Reference)
//    -Types=1.Arrays 2.Objects 3.Functions
//    -1.Arrays=>
// const heroes=["Shaktiman","Hatim","Raja"]
// console.log(heroes)
//    -2.Objects=>
// let myObj={
//     name:"BHUSHAN",
//     surname:"MORE",
//     age:25
// }
// console.log(myObj)
//3.Functions=>
// const myFunction=function()
//  {
//     console.log("Hello World")
//  }

//*****typeof*****
//1.null---->object
//2.undefined---->undefined
//3.string---->string
//4.boolean---->boolean
//5.Number---->number
//6.Object(native and does not implement call)---->object
//7.Object(native or host and does not implement call)---->function
//8.Object(host and does not implement call)---->undefined,boolean,number,string