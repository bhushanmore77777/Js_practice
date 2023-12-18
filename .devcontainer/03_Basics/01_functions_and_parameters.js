function sayMyName(){
    console.log("B")
    console.log("H")
    console.log("U")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("N")
}
//sayMyName---->reference
//sayMyName()---->execution
sayMyName()//B
//           H
//           U
//           S
//           H
//           A
//           N
function addTwoNumbers(number1,number2){
     console.log(number1+number2)
}
addTwoNumbers(4,4)//8

function addTwoNumbers1(number1,number2){
    console.log(number1+number2)
}
const result=addTwoNumbers1(4,6)
console.log("Result=",result)//10
                            //undefined
//in above code console just print so result is returning 

function addTwoNumbers2(number1,number2){
    let result1=number1+number2
    return result1//here if we write anything after return that will not executed
    console.log("BHUSHAN")
}
const result1=addTwoNumbers2(44,44)
console.log("Result=",result1)//88
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("BHUSHAN"))//BHUSHAN just logged in

function loginUserMessage1(username){
    if(username===undefined)
    {
        console.log("Please Enter A Username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage1())//Please Enter A Username
//                                undefined

//if we have to give default value
function loginUserMessage2(username="BHUSHAN VISHNU MORE"){
    if(!username)
    {
        console.log("Please Enter A Username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2())//BHUSHAN VISHNU MORE just logged in

