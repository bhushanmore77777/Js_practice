for(let i=0;i<10;i++)
{
    console.log(i)
}
for(let i=0;i<10;i++)
{
    if(i==4)
    {
        console.log("4 is good")
    }
    console.log(i)
}
let myArray=["flash","batman","superman"]
for(let i=0;i<myArray.length;i++)
{
    console.log(myArray[i])
}
//break and continue
for(let i=1;i<=10;i++)
{
    if(i==4)
    {
        console.log(`detected 4`)
        break
    }
    console.log(`the value of i is ${i}`)
}
for(let i=1;i<=10;i++)
{
    if(i==4)
    {
        console.log(`detected 4`)
        continue
    }
    console.log(`the value of i is ${i}`)
}
//continue means skip that value print rest of all