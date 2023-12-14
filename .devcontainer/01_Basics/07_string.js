//we can use both '' and "" in string
//string interpolation---->``(Backtick)
const name="BHUSHAN"
const repoCount=44
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

//Another way to declare string
const name1=new String(`BHUSHAN VISHNU MORE`)
console.log(name1)
console.log(name1[0])//B
console.log(name1.length)//19
console.log(name1.charAt(0))//B
console.log(name1.indexOf('B'))//0
const name2=name1.substring(0,4)//BHUS here 0-3 will print
console.log(name2)
const name3="BHUSHAN"
console.log(name3.slice(-19,6))//slice takes -ve value it means start from end