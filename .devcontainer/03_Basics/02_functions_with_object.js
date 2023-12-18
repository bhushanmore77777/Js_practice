//If customer is adding to cart in Ecoomerce so we do not know how many things will he add to deal with such cases
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(1,2,3,4))//1 we are passing 4 things but calculating only one
//to overcome this we have to use rest operator which simillar as spread operator
function calculateCartPrice1(...num2)
{
    return num2
}
console.log(calculateCartPrice1(1,2,3,4))//[ 1, 2, 3, 4 ]
const user={
    username:"BHUSHAN",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} price is ${anyObject.price}`)
}
handleObject(user)//username is BHUSHAN price is 199
const myNewArray=[1,2,3,4]
function secondValue(getSecondValue){
    return getSecondValue[1]
}
console.log(secondValue(myNewArray))//2
