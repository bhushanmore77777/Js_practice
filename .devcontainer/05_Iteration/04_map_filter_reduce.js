//for each loop dose not return any value
const coding=["Javascript","Java","Python","Cpp"]
const values=coding.forEach((item)=>{
   console.log(item)
})
console.log(values)//undefined

//1.filter
//-it also req callback function
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((nums)=>nums>4)
console.log(newNums)//[5,6,7,8,9,10]
//so filter return the value
//othe way
const myNums1=[1,2,3,4,5,6,7,8,9,10]
const newNums1=myNums1.filter((nums)=>{//here we are opening scope so we have to give return statement
     return nums>4
})
console.log(newNums1)//[ 5, 6, 7, 8, 9, 10 ]
//using for loop
const newNums2=[]
myNums.forEach((nums)=>{
   if(nums>4)
   {
    newNums2.push(nums)
   }
})
console.log(newNums2)//[5,6,7,8,9,10]
const books=[
    {
        title:"Book One",genre:"Fiction",publish:1981,edition:2004
    },
    {
        title:"Book Two",genre:"Non-Fiction",publish:1982,edition:2005
    },
    {
        title:"Book Three",genre:"science",publish:1983,edition:2006
    },
    {
        title:"Book Four",genre:"History",publish:1984,edition:2007
    },
]
const newBooks=books.filter((bk)=>bk.genre==="History")
console.log(newBooks)
const newBooks1=books.filter((bk)=>{return bk.edition>=2000})
console.log(newBooks1)
const newBooks2=books.filter((bk)=>{
    return bk.edition>=200 && bk.genre==="History"
})
console.log(newBooks2)
//2.map
//we are making code to add 10 to every element in array
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
const newNumbers=myNumbers.map((nums)=>nums+10)
console.log(newNumbers)//[
//                         11, 12, 13, 14, 15,
//                         16, 17, 18, 19, 20
//                       ]
//we can do chaining of methods
const myNumbers1=[1,2,3,4,5,6,7,8,9,10]
const newNumbers1=myNumbers1.map((nums)=>nums+10).map((nums)=>nums+1).filter((nums)=>nums>12)
console.log(newNumbers1)//[
//                         13, 14, 15, 16, 17,
//                         18, 19, 20, 21
//                        ]
//3.reduce=>1.accumulator->initial value
//          2.currentValue
const myNums2=[1,2,3,4]
const newNums3=myNums2.reduce(function(acc,currVal){
   return acc+currVal
},0)//---->here we are taking 0 for accumulator starting
console.log(newNums3)//10
//using arrow function
const myNums3=[1,2,3,4]
const newNums4=myNums3.reduce((acc,currVal)=>acc+currVal,0)
console.log(newNums4)//10
const shoppingCart=[
    {
        itemname:"Javascript",
        price:1
    },
    {
        itemname:"Java",
        price:2
    },
    {
        itemname:"Python",
        price:3
    },
    {
        itemname:"Data Science",
        price:4
    }
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)//10