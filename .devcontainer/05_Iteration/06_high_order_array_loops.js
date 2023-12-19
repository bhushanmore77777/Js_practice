//for of loop
const arr=[1,2,3,4]
for(const num of arr)
{
    console.log(num)
}
//To Print Each Character Of Word BHUSHAN
const username="BHUSHAN"
for(const name of username)
{
    console.log(`each char is ${name}`)
}
//****Maps****
//-key-value pair
//-insertion order is preserved
//-contains unique values
const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")
console.log(map)//Map(3) {
//                         'IN' => 'INDIA',
//                        'USA' => 'UNITED STATES OF AMERICA',
//                         'FR' => 'FRANCE'
//                       }
for(const key of map)
{
    console.log(key)
}
//[ 'IN', 'INDIA' ]
//[ 'USA', 'UNITED STATES OF AMERICA' ]
//[ 'FR', 'FRANCE' ]
//If we want the seperate key and value
for(const [key,value] of map)
{
    console.log(key,"=>",value)
}
//IN => INDIA
//USA => UNITED STATES OF AMERICA
//FR => FRANCE
//If we do same for Object that will cause error
// const myObject={
//     game1:"NFS",
//     game2:"Spiderman"
// }
// for(const [key,value] of myObject)
// {
//    // console.log(key,'=>',value)//error
// }
//To overcome this we will do 
const myObject1={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for(const key in myObject1)
{
    //console.log(key)
    console.log(myObject1[key])//to get the value
}
//js
//cpp
//rb
//swift
for(const key in myObject1)
{
    console.log(`${key} is shortcut for ${[key]}`)
}
//how to use for in loop for array
const programming=["js","java","cpp","rb"]
for(const key in programming)
{
    console.log(programming[key])
}
const map1=new Map()
map1.set('IN',"INDIA")
map1.set('USA',"UNITED STATES OF AMERICA")
map1.set('FR',"FRANCE")
for(const key in map1)
{
    console.log(key)
}
//in the above example we cannot use loops because maps are not iterable
//1.objects=>-for in loop
//2.array=>-for of loop
//for each loop
//-callback function need by foreach loop
const coding=["js","java","python","cpp"]
coding.forEach(function(val){
    console.log(val)
})
//other way
coding.forEach((item)=>{
    console.log(item)
})
//for each with function as parameter but in this we have to just give reference=>printMe
function printMe(item){
    console.log(item)
}
coding.forEach(printMe)
//how to access extra parameters in foreach loop
coding.forEach(function(item,index,arr){
    console.log(item,index,arr)
})
const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})



