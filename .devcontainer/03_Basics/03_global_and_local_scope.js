//{}---->scope
if(true)
{
    let a=1
    const b=2
    var c=3
}
//console.log(a)//error
//console.log(b)//error
console.log(c)//3 but this is not recommended because c=3 will be availabel upto block but var is returning after block
//1.var=>global scope
//2.let=>local/block scope
