//* 1. print odd number in an array

// var a = [1,3,4,2,6,7,19,47]
// var res =[];
// var odd = function(a){
//      for(var i=0;i<a.length;i++){
//         if(a[i]%2!=0){
//            res.push(a[i]);
//         }
//     }
//     return res;
// }

// console.log(odd(a));

//! Output:
//[1, 3, 7, 19, 47]

//----------------------------------------

//* 2. Convert all the strings to title caps in a string array:

// var a = "how are you doing";

// var cap = function(a){
     
//     return a.toLowerCase().replace(/\b\w/g, e => e.toUpperCase());

// }
// console.log(cap(a));

//! Output:
//How Are You Doing

//---------------------------------------------------------
//* 3. Sum of all number in an array:
// var a = [1,2,3,4,5,6];

// var sum = a.reduce(function(x,y){
//     return x+y;
// });
// console.log(sum)

//! Output:
//21

//-------------------------------------------------------------
//* 4. Return all the prime numbers in an array

// var arr = [25,3,4,5,6,7,8,9,10];

// var prime = function (num) {
//   for (let start = 2; num > start; start++) {
//     if (num % start == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(arr.filter(prime));

//! Output:
//[3, 5, 7]

//--------------------------------------------------------------------

//* 5. Rotate an array by k times
   
// var rotate = function(a,k){
//     for(var i=0;i<k;i++){
//      a.unshift(a.pop())
//    }
//    return a;
// }
//    console.log(rotate([1,2,3,4,5],3))

//! Output:
// [3, 4, 5, 1, 2]

//.................................................................

//* 6. Return median of two sorted arrays of the same size.
// var m = function(a,b){
//     var con = a.concat(b)
//      con = con.sort()
//     var length= con.length;
//     if(length%2 ==1){
//       return con[(length/2)-.5] 
//       }else{
//         return (con[length/2]+con[(length/2)-1])/2
//         }
//     }
//     var a = [1,2,3,4,5];
//     var b = [1,3,6,8,7];
//     console.log(m(a,b))
    
//! Output:
//  3.5

//.....................................................................

//* 7. Remove duplicates from an array.
//  var a = ["apple", "orange", "apple", "mango","pipapple","orange"];
//  var redup = function(a){
//      return a.filter((fruit,inthe)=>a.indexOf(fruit) === inthe);
     
//  }
// console.log(redup(a));
//! Output:

//  ['apple', 'orange', 'mango', 'pipapple']

//...........................................................................

//* Arrow function

//* 1. print odd numbers in an array:

// var a = [1, 2, 3, 4, 5, 6, 7];
// var odd = (a)=>{
// var result = [];
// for (var i=0; i<a.length; i++){
//     if(a[i]%2===1){
//         result.push(a[i])
//     }
// }return result

// }
// console.log(odd(a))

//! Output:
// [1, 3, 5, 7]

//..................................................................................

//* 2. Convert all the strings to title caps in a string array:

// var a = "how are you doing";

// var cap = (a)=>{
     
//     return a.toLowerCase().replace(/\b\w/g, e => e.toUpperCase());

// }
// console.log(cap(a));

// //! Output:
//How Are You Doing

// .....................................................................................

//* 3. Sum of all number in an array:
// var a = [1,2,3,4,5,6,7,8,9,10];

// var sum = a.reduce((acc, cv)=>acc+cv,0)
// console.log(sum)

// //! Output:
//55

//...........................................................................................

//* 4. Return all the prime numbers in an array

// var arr = [25,3,4,5,6,7,8,9,10,11];

// var prime = (num)=> {
//   for (let start = 2; num > start; start++) {
//     if (num % start == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(arr.filter(prime));

//! Output:
//[3, 5, 7, 11]

//...........................................................................................

//* 6. Return median of two sorted arrays of the same size.
// var m = (a,b)=>{
//     var con = a.concat(b)
//      con = con.sort()
//     var length= con.length;
//     if(length%2 ==1){
//       return con[(length/2)-.5] 
//       }else{
//         return (con[length/2]+con[(length/2)-1])/2
//         }
//     }
//     var a = [1,2,3,4,5];
//     var b = [1,3,6,8,7];
//     console.log(m(a,b))
    
//! Output:
//  3.5

//...........................................................................

//* 7. Remove duplicates from an array.
 var a = ["apple", "orange", "apple", "mango","pipapple","orange"];
 var redup = (a)=>{
     return a.filter((fruit,inthe)=>a.indexOf(fruit) === inthe);
     
 }
console.log(redup(a));
//! Output:

//  ['apple', 'orange', 'mango', 'pipapple']

//..................................................................................









