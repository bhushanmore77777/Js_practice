//this---->current context
const user={
    username:"BHUSHAN",
    price:999,
    welcomemessege:function()
    {
        console.log(`${this.username} welcome to website`)
    }
}
user.welcomemessege()//BHUSHAN welcome to website
//so whichever name is username we can access that thriugh this keyword
user.username="BHUSHAN VISHNU MORE"
user.welcomemessege()//BHUSHAN VISHNU MORE welcome to website
//global object in browser is window
//If we are using this keyword outside node environment then it will show empty---->{}
//If we are using this keyword inside function then it will big o/p
//If we are putting any value like username in function then we are using this keyword then o/p is undefined
//so we cannot used this keyword in function
function chai(){
    console.log(this)
}
chai()

function coffee(){
    const username1="BHUSHAN"
    console.log(this.username1)
}
coffee()//undefined

//so we can used this keyword only in objects
 //****Arrow Function****
 const tea=()=>{
    let username2="BHUSHAN"
    console.log(this.username2)
 }
 tea()//undefined
//In arrow function we cannot used this keyword
//Syntax of arrow function ()=>{}
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(4,4))//8

//How to write implicit return code in arrow function
const addTwo1=(num3,num4)=> num3+num4
console.log(addTwo1(4,4))//8
//{} if we are using curly braces then compulsory we have to used return keyword
//How to return object
const returnObj=()=>({username3:"BHUSHAN"})//---->if we have to access username then compulsory we have to wrapped {}in parenthesis()
console.log(returnObj())//{ username3: 'BHUSHAN' }
