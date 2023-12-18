//Icecream
//child can access parent properties but parent cannot access child properties
function one(){
    const username="BHUSHAN"
    function two(){
        const website="youtube"
        console.log(username)//BHUSHAN
    }
    //console.log(website)//error
    two()
}
one()
//in two() we are accessing username so we have to compulsory execute two()
if(true)
{
    const username1="BHUSHAN"
    if(username1==="BHUSHAN")
    {
        const website1=" youtube"
        console.log(username1+website1)//BHUSHAN youtube
    }
    //console.log(website1)//error
}
//console.log(username1)//error

//****Hoisting****
//we can access in 1,2,3 before initialization this is hoisting
//1.
function addOne(num){
    return num+1
}
console.log(addOne(1))//2

//2.
console.log(addOne1(1))//2
function addOne1(num){
    return num+1
}

//3.
const addTwo=function(num){//---->function can be declare as this we can call this as expression
    return num+2
}
console.log(addTwo(1))//3

//4.
console.log(addTwo2(1))//error
const addTwo2=function(num){
    return num+2
}