//2.Constructor
const tinderUser=new Object()
tinderUser.id="1234abcd"
tinderUser.name="BHUSHAN"
tinderUser.isLoggedIn=false
console.log(tinderUser)//{ id: '1234abcd', name: 'BHUSHAN', isLoggedIn: false }

//We can create object in object or object in object in object
const regularUser={
    email:"bhushan@gmail.com",
    fullName:{
        userFullName:{
            firstName:"BHUSHAN",
            middleName:"VISHNU",
            lastName:"MORE"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName)//BHUSHAN
//to merge objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj3=Object.assign(obj1,obj2)
console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj4=Object.assign({},obj1,obj2)
console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }it is{optional} it guarantee that it will return both object into one
//we can use spread operator 
const obj5={...obj1,...obj2}
console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(Object.keys(tinderUser))//o/p will be in array [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))//o/p will be in array [ '1234abcd', 'BHUSHAN', false ]
console.log(Object.entries(tinderUser))//key-value---->entry [
 //                                                           [ 'id', '1234abcd' ],
 //                                                          [ 'name', 'BHUSHAN' ],
 //                                                        [ 'isLoggedIn', false ]
 //                                                          ]
 console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true
 