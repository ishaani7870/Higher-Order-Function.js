// Let’s assume that you want to only display names that include the letter ‘J’ in them.
const names = ['James', 'John', 'Paul', 'Ringo', 'George','koJal'];

names.map((elem)=>{
  elem.split('').map((val,inxd)=>{
    if(val=='J'){
      console.log(elem);
    }
  })

})
// SECOND:-
names.filter((value)=>{
  if(value.includes('J')){
    console.log(value);
  }
})

// *****Note

let array = [1,2,4,5,7,9,10,13,];

const Listing = array.reduce((Initialval,arrvalue)=>{
if(arrvalue%2===0){
  return {...Initialval,even:Initialval.even+arrvalue }
}
else if(arrvalue%2!==0){
  return {...Initialval,odd:Initialval.odd+arrvalue}
}
},{even:0,odd:0})


console.log(Listing);

////////////////////////////
// Iterate over both the values in a list and their indices
// grocery_list = ['flour','cheese','carrots']
// Output: 
// #=> 0: flour
// #=> 1: cheese
// #=> 2: carrots

let grocery_list = ['flour','cheese','carrots'];
const Output = grocery_list.forEach((arrvalue,indx)=>{
  console.log(`${indx}: ${arrvalue}`);
})
// console.log(Output);


// Convert Character Matrix to single String;
// 	The original list is: [ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ]
// The String after join: gfgisbest
 
let original_list = [ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ];

var s = ""
let Result = original_list.forEach((element)=>{
 element.forEach((val)=>{
    s=s+val
 })})
console.log(s);





const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
// Your output should be:[1, 3, 3, 59, 5, 7, 25, 9, 15, 5]
let apple = arr.reduce((Initialval,arrvalue,currentIndex) => {
if(arrvalue%2==0){
    arr.splice(currentIndex,1,arrvalue+1);
}
},[])
console.log(arr);



// Your output should be: ['Tanay', 'Tanvi']
const family = [
  {
    name    : 'Tanay',
    haveCycle : true
  },
  {
    name     : 'Akanksha',
    haveCycle : false
  },
  {
    name     : 'Tanvi',
    haveCycle : true
  },
    {
    name     : 'Kanak',
    haveCycle : false
  }
];

let btnText=[]
const result=family.map((Initialval,arrvalue)=>{
      if (Initialval.name.includes('T') ) {
          btnText.push(Initialval.name)
      }
})
console.log(btnText);

// let result = family.filter((value,index)=>{
//     if(value.name.includes('T')){
//         console.log([value.name]);
//     }
// })



// Your output should be: [2, 6, 8, 4]
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

let fill=[]
arr.filter((elem)=>{
    if(elem%2===0){
     if (elem<=8) {
         fill.push(elem)
     }}
})
console.log(fill);




// Your output should be: ['repeat']
const arr1 = ["eat", "sleep", "repeat", "code"];
arr.map((value)=>{
if (value.length>5) {
    console.log([value]);
}});



// Your output should be: 190
const arr2 = [1, 2, 3, 58, 5, 6, 62, 8, 70];

let sum=0;
const Listin = arr.filter((Initialval)=>{
    if(Initialval>50){
        sum=sum+Initialval
    }})
console.log(sum);



// Your output should be: 96
const arr3 = [1, 2, 3, 7, 5, 6, 8, 9];

let val=1
arr.filter((value)=>{
    if(value%2==0){
        val=value*val
    }})
console.log(val);



const arr4 = [
  {
      name: "Jay",
      age: 60
  },
  {
      name: "Gloria",
      age: 36
  },
  {
      name: "Manny",
      age: 16
  },
  {
      name: "Joe",
      age: 9
  }
]
a = arr.reduce((Initialval,arrvalue)=>{
  console.log(Initialval,arrvalue,"h");
  return Initialval+arrvalue.age
},0)
console.log(a);





// Your output should be:
// {'0': "You", '1': "all", '2': "are", '3': "rockstars"}

const arr = ["You", "all", "are", "rockstars"];
fill = {};
arr.map((value,index)=>{
    fill[index]=value
})
console.log(fill);




// Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']
const input = [
  ['a', 'b', 'c'],
  ['c', 'd', 'e'],
  ['e', 'd', 'f'],
];

fill=[]
input.forEach((value)=>{
value.sort((a,b)=>{a-b ; })
value.forEach((elem)=>{
fill.push(elem);
})})
console.log(fill);



// List product excluding duplicates.
// Output: 90
List = [6,1,3,5,6,3,1]
const React_list = new Set (List)
let arr5 = Array.from(React_list)
val = 1
arr.forEach((elem)=>{
val = elem*val
})
console.log(val);




// Count = 5 #because [1,2,5,8,4] are unique values.
input_list = [1, 2, 2, 5, 8, 4, 4, 8]

list = []
count=0
input_list.forEach((element, i) => {
if (!list.includes(element)) {
    list.push(element)
    count=count+1
}
})
console.log(count);



// Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}
// const input[
  ['a', 'b', 'c'],
  ['c', 'd', 'e'],
  ['e', 'd', 'f'],

fill = [];
for (i of input) {
  for (j of i) {
      fill.push(j);
  }
}
const output = {};
for(i of fill){
  if( i in output) {
      output[i] =output[i]+1
  }
  else {
      output[i] = 1
  }
}
console.log(output,"output");