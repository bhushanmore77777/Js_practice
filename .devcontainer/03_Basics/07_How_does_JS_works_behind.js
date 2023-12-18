//JavaScript Execution Context
//1.{}=>Global Execution Context
//      -so Global Execution Context will be stored in this keyword
//      -in browser this contains value of window
//      -this will be done thead because JS is single threaded
//2.Function Execution Context
//3.Eval Execution Context---->this is nothing but global execution context
//JS code=>this will be run into 2 phases
//         1.Memory Creation Phase(Memory/Creation Phase)=>-in this variables or anything whichever we declare will got the space
//                                                         -not the execution 
//         2.Execution Phase
let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(4,4)
//Now we see how code executes in JS
//1.Global Execution Context=>-This is mandatory
//                            -this
//2. Memory Creation Phase=>-val1->undefined
//                          -val2->undefined
//                          -addnum->defination
//                          -result1=undefined
//                          -result2=undefined
//3.Execution Phase=>-val1->10
//                   -val2->5
//                   -addnum->-for this new execution context will be created this will created as many time as function call is
//                            -new variable environment+execution thread this will deleted after complete work
//                   -result1->15
//                   -result2=>12
//   1.Memory Phase=>-val1->undefined
//                   -val2->undefined
//                   -total->undefined
//   2.Execution Phase=>-num1->10
//                      -num2->5
//                      -total->15//now this total will return to global execution context
//same will be for result2 addnum
//1.Memory Phase=>
//2.Execution Phase=>
