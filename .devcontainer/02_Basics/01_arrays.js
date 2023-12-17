//****Arrays in JS****
//1.Resizable
//2.contain mix of different datatypes
//3.array copy operation create shallow copies rather than deep copy
//    *Shallow Copy=>A shallow copy of an object is a copy whose properties share the same references (like heap)
//    *Deep Copy=>A deep copy of an object is a copy whose properties do not share the same references (like stack)
const myArr=[1,2,3,4]
console.log(myArr)//[ 1, 2, 3, 4 ]
console.log(myArr[0])//1
const myArr1=new Array(1,2,3,4)
console.log(myArr1)//[ 1, 2, 3, 4 ]
const myArr2=["Shaktiman","Pokemon","PowerRangers","Hatim"]
console.log(myArr2)//[ 'Shaktiman', 'Pokemon', 'PowerRangers', 'Hatim' ]
//****Methods In Array****
//1.push()---->adds the value 
myArr.push(6)
console.log(myArr)
//2.pop()---->deletes the value that is last 
myArr.pop()//no argument we have to pass in pop()
console.log(myArr)
//3.unshift()---->insert at start and then shift
myArr.unshift(9)
console.log(myArr)//[ 9, 1, 2, 3, 4 ]
//4.shift()---->removes start element
myArr.shift()
console.log(myArr)//[ 1, 2, 3, 4 ]
//5.includes()
console.log(myArr.includes(1))//true
//6.indexOf()
console.log(myArr.indexOf(1))//0
console.log(myArr.indexOf(9))//-1 if element is not present

const newArr=myArr.join()
//join() converts array into string
console.log(myArr)//[ 1, 2, 3, 4 ]
console.log(newArr)//1,2,3,4
console.log(typeof newArr)//string

//slice and splice
const myArr3=[1,2,3,4]
console.log("A",myArr3)
console.log(myArr3.slice(1,3))//[ 2, 3 ] here last index eelement will not included
console.log("B",myArr3)
console.log(myArr3.splice(1,3))//[ 2, 3, 4 ] directly remove elements from 1st to 3rd index 
console.log("C",myArr3)//C [ 1 ]
