//The Promise object represents the eventual completion(or failure) of
//an asynchronous operation and its resulting value
//Promise has 3 states=>1.Pending
//                      2.fulfilled
//                      3.rejected
//How to make promise?
const promiseOne=new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log('Async task is completed')
    resolve()
   },1000)
})
//Promise take callback
promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("async task 2 resolved")
})

//another 
const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"BHUSHAN",email:"abc@gmail.com"})
    },1000)
})
promiseTwo.then(function(user){
  console.log(user)
})
//another
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error)
        {
            resolve({username:"BHUSHAN",password:"1234"})
        }
        else
        {
            reject('ERROR')
        }
    },1000)
})
promiseThree.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log("error")
}).finally(()=>console.log("promise is resolved or rejected"))
//another
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error)
        {
            resolve({username:"Javascript",password:"1234"})
        }
        else
        {
            reject('ERROR JS')
        }
    },1000)
});
async function consumePromiseFive(){
    const response=await promiseFive
    console.log(response)
}
//above we cannot handle catch gracefully
consumePromiseFive()
//async,await cannot handle error directly
