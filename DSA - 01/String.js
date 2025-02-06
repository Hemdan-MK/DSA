
// let str = "hemdan";
// let res = ""

// for (let i = 0; i < str.length; i++) {
//     res = str[i] + res
// }
// console.log(res);

/////////////////////////////////////////////

// function reverse(str, index = 0, sum = "") {
//     if (index === str.length) {
//         return sum
//     }
//     sum = str[index] + sum
//     return reverse(str, index + 1, sum)
// }

// let str = "hemdan";
// console.log(reverse(str));

/////////////////////////////////////////////

// let str = "malaalam";
// let res = ""
// for (let i = 0; i < str.length; i++) {
//     res = str[i] + res;
// }
// if (res === str) {
//     console.log("palindrome");
//     return true
// }
// return false

////////////////////////////////////////////

// function palindrome(str, index = 0, res = "") {

//     if (index > str.length - 1) {
//         return
//     }
//     res = str[index] + res
//     if (res === str) {
//         return "palindrome"
//     }

//     return palindrome(str, index + 1, res)
// }

// let str = "malaalam";
// console.log(palindrome(str));

/////////////////////////////////////////////

// exract numbers

// let str = "Hello123, this is a test456!";

// let res = str.match(/\d+/g)

// console.log(res);

////////////////////////////////


// function fib(n) {
//     if (n === 1 || n === 0) {
//         return 1
//     }
//     if (n < 0) {
//         return 0
//     }

//     return fib(n - 1) + fib(n - 2)
// }

// console.log(fib(4));

////////////////////////////////////////////////////

// function prime(n) {
//     let count = 0
//     for (let i = 1; i <= n ; i++) {
//         if (n % i === 0) {
//             count++;
//         }
//     }
//     if (count <= 2) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(prime());

// -----------------------------

// function prime(n,count=2){
//     if(count === n){
//         return true
//     }
//     if(n%count===0){
//         return false
//     }
//     return prime(n,count+1)
// }

// console.log(prime(11));

////////////////////////////////////////////////////

// function fact(n) {
//     if (n === 1 || n === 0) {
//         return 1
//     }
//     return n * fact(n - 1)
// }

// console.log(fact(4));

////////////////////////////////////////////////////

// function sum(arr, index = 0) {
//     if(index === arr.length){
//         return 0
//     }
//     return arr[index] + sum(arr, index + 1)
// }

// let arr = [11,2]
// console.log(sum(arr));

////////////////////////////////////////////////////

// function pattern(n = 1) {
//     if (n === 7) {
//         return
//     }
//     let pow = Math.pow(2, n - 1)
//     let res = pow + n
//     console.log(`${n} + ${pow} = ${res}`);

//     return pattern(n + 1)
// }

// pattern()

////////////////////////////////////////////////////

// function pattern(n = 100, min = 0) {
//     if (min === 9) {
//         return
//     }
//     console.log(n - min);
//     return pattern(n - min, min + 1)
// }

// pattern()


////////////////////////////////////////////////

// let str = "silent"
// let str2 = "listen"

// for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//         if (str[i] === str2[j]) {
//             break;
//         }
//     }
// }


///////////////////////////////////////////////

// function linearSearch(arr, target) {

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] === target) {
//         return i;
//       }
//     }
//     return -1; 
//   }
  
//   const arr = [10, 20, 30, 40, 50];
//   const target = 30;
  
//   const result = linearSearch(arr, target);
  
//   if (result !== -1) {
//     console.log(`Element found at index: ${result}`);
//   } else {
//     console.log('Element not found');
//   }
  

//////////////////////////////////////////////////

// function gcdRecursive(a, b) {
//     // Base Case: If b is 0, the GCD is a
//     if (b === 0) {
//         return a;
//     }
//     // Recursive Case: Call the function with (b, a % b)
//     return gcdRecursive(b, a % b);
// }

// // Example Usage
// console.log(gcdRecursive(18, 48));

//////////////////////////////////////////////////
