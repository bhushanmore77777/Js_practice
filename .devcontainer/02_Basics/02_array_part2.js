const marvel_heroes=["Thor","Ironman","Spiderman"]
const dc_heroes=["Superman","Flash","Batman"]
//marvel_heroes.push(dc_heroes)//so here array will not merge it will give array in array so dc_heroes 
                             //will treated as 4th element in array of marvel_heroes
//console.log(marvel_heroes)//[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
//If we have to access Flash then
//console.log(marvel_heroes[3][1])//Flash               

//If we use concat then we will get new array
const allHeroes=marvel_heroes.concat(dc_heroes)
console.log(allHeroes)//[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
//so array is merge

//Another way to merge array is spread operator(...)
//By using spread operator we can merge any number of array
const allNewHeroes=[...marvel_heroes,...dc_heroes]
console.log(allNewHeroes)//[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
//How to deal with array in array or array in array in array
const arr1=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr2=arr1.flat(Infinity)
console.log(arr2)//[
    //              1, 2, 3, 4, 5,
   //               6, 7, 6, 7, 4,
   //               5
 //                ]
 console.log(Array.isArray("BHUSHAN"))//false
 console.log(Array.from("BHUSHAN"))//to convert into array
  //                                   [
  //                                   'B', 'H', 'U',
  //                                   'S', 'H', 'A',
  //                                    'N'
  //                                 ]
  console.log(Array.from({name:"BHUSHAN"}))//[]---->empty because we have to mentioned which array we have to make key/value
  let score1=100
  let score2=200
  let score3=300
  console.log(Array.of(score1,score2,score3))//[100,200,300]
  
