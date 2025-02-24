// Adding Elements to the Array

// let arr = new Array(1,2,3,4,5)
// console.log(arr);



// Removing Elements to the Array

// let arr =  [ 1,2,3,4,5 ]
// arr.push('last')
// arr.unshift('first')
// arr.shift()
// arr.pop()
// console.log(arr);



// Concatination

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// console.log(arr1.concat(arr2));



// Conversion to String

// let arr = ['this','is', 10];
// console.log(arr.toString());



// Recognizing a JavaScript Array

// let arr = [ 1,2,3,4]
// console.log(Array.isArray(arr));
// console.log(arr instanceof Array);



// Second Largest Element in an Array

// let arr = [12, 35, 1, 10, 34, 35, 1];
// let arr2 = arr.sort((a, b) => a - b)
// let set = new Set(arr2)
// let res = [...set];
// console.log(res[res.length-2]);




////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


// function sum(arr, index = 0) {
//     if (arr.length === index) {
//         return 0;
//     }

//     return arr[index] + sum(arr, index + 1)

// }

// let arr = [1, 2, 3, 4, 5];
// console.log(sum(arr));


////////////////////////////////////////////


// function largest(array, index = 0) {
//     if (array.length === index) {
//         return 0
//     }
//     return Math.max(array[index], largest(array, index + 1))
// }

// let arr = [1, 2, 3, 4, 5, 0, 10];
// console.log(largest(arr));


////////////////////////////////////////////

// function secMax(array) {
//     if (array.length === 0) {
//         console.log("empty");
//         return
//     }

//     let set = new Set(array);
//     let desc = [...set].sort((a, b) => b - a);
//     console.log(desc[1]);
// }

// let array = [2,4212,4,31,4]
// secMax(array)

////////////////////////////////////////////

// function reverse(array, index = array.length - 1,res = []) {
//     if (index < 0) {
//         return res
//     }
//     res.push(array[index])
//     return reverse(array, index - 1, res)
// }

// let array = [1, 2, 3, 4, 5, 6]
// console.log(reverse(array));

///////////////////////////////////////////

// function move(array) {
//     let non = [];
//     let zeros = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             zeros.push(array[i]);
//         } else {
//             non.push(array[i]);
//         }
//     }
//     console.log(zeros.concat(non));
// }

// let array = [1, 2, 3, 0, 4, 5, 6, 0, 0];
// move(array)

////////////////////////////////////////////

// function binarySearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);

//         if (arr[mid] === target) {
//             return mid
//         }

//         if (arr[mid] > target) {
//             end = mid - 1
//         } else {
//             start = mid + 1
//         }
//     }
//     return "Nope"
// }
// let array = [1,2,3,4,5,6,7,8,9]

// array = array.sort((a,b)=>a-b)
// console.log(binarySearch(array, 5));


////////////////////////////////////////////

// function binarySearch(array, n, start = 0, end = array.length - 1) {
//     if (start > end) {
//         return -1;
//     }
//     const mid = Math.floor((start + end) / 2)

//     if (array[mid] === n) {
//         return mid
//     }

//     if (array[mid] > n) {
//         return binarySearch(array, n, start, mid - 1)
//     }
//     return binarySearch(array, n, mid + 1, end)

// }

// let array = [1,2,3,4,5,6,7,8,9]

// array = array.sort((a,b)=>a-b)
// console.log(binarySearch(array, 0));

////////////////////////////////////////////////////

// Print the second element multiplied by the first element of each inner array⁠⁠

// let arr = [[24, 2], [3, 5], [90, 4]];

// let res = arr.map((val)=>{
//     return val[0]*val[1]
// })
// console.log(res);

////////////////////////////////////////////////////

// let ab = [[[1, 2, 3]], [4, 5, 6], [7, 8, 9]];

// let res = ab.flat(Infinity).reduce((acc,val)=>{
//     return acc+val
// },0)
// console.log(res);


////////////////////////////////////////////////////


// Splicing (Adding/Removing Elements at Any Position)

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1, "new");
// console.log(arr); // [1, 2, "new", 4, 5]

////////////////////////////////////////////////////

// Slicing (Extracting a Portion of an Array)

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(1, 4));

////////////////////////////////////////////////////

// Finding Elements (Using find, findIndex, and filter)

// let arr = [10, 20, 30, 40];
// console.log(arr.find((num) => num > 25)); // 30
// console.log(arr.findIndex((num) => num > 25)); // 2
// console.log(arr.filter((num) => num > 15)); // [20, 30, 40]

////////////////////////////////////////////////////

//Checking Conditions (Using some and every)

// let arr = [1, 2, 3, 4];
// console.log(arr.some((num) => num > 3)); // true 
// console.log(arr.every((num) => num > 0)); // true 

////////////////////////////////////////////////////

// Reduce Function (Accumulating Values)

// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((acc, val) => acc + val, 0);
// console.log(sum); // 10

////////////////////////////////////////////////////
