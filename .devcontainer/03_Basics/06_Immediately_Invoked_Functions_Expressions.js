//IIFE(Immediately Invoked Function Expressions)
//General Way To Invoked Function
function chai(){
    console.log(`Db connected`)
}
chai();//Db connected
//But in the case of global scope this will cause some problems so to avoid that we used iife
// //IIFE way(named IIFE)
 (function chai(){
    console.log('Db connected')
 })();//Db connected
 //to end this code we have to used ; otherwise error
 //Why we use IIFE?
 //1.IIFE stands for Immediately Invoked Functions Expressions
 //2.To invoked the function immediately
 //3.To avoid global scope problems of variables
 //How to write IIFE using arrow function?
 //unamed IIFE
 (()=>{
    console.log(`Db connected`)
 })();//Db connected
 //Arrow function using IIFE with parameter name
 ((name)=>{
    console.log(`${name} welcome to website`)
 })("BHUSHAN");//BHUSHAN welcome to website
