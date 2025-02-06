// =============================================================================

// Bubble Sort (Ascending)
// ------ ---- -----------

// function bubbleSort(arr) {
//     let n = arr.length
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
//             }
//         }
//     }
//     return arr
// }

// let arr = [3, 2, 1, 5, 4]
// console.log(bubbleSort(arr));

// =============================================================================

// Descending Order
// ---------- -----

// function bubbleSort(arr) {
//     let n = arr.length
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - 1; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
//             }
//         }
//     }
//     return arr
// }

// let arr = [3, 2, 1, 5, 4]
// console.log(bubbleSort(arr));

// =============================================================================

// Sorting String Alphabeticaly
// ------- ------ -------------

// function bubbleSort(st, order) {
//     let str = st.split("")
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < str.length - 1; j++) {
//             if (order === "asc") {
//                 if (str[j] > str[j + 1]) {
//                     [str[j + 1], str[j]] = [str[j], str[j + 1]];

//                 }
//             } else if (order === "des") {
//                 if (str[j] < str[j + 1]) {
//                     [str[j + 1], str[j]] = [str[j], str[j + 1]]
//                 }
//             } else {
//                 return "Select Order option : 'asc' or 'des' "
//             }
//         }

//     }

//     return str.join("")
// }

// let str = "HEMDAN"

// console.log(bubbleSort(str, "asc"))
// console.log(bubbleSort(str, "des"))

// =============================================================================

// Sorting Array of String Alphabeticaly
// ------- ----- -- ------ -------------

// function bubbleSortStrings(arr, order = "asc") {
//     let n = arr.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (
//                 (order === "asc" && arr[j] > arr[j + 1]) ||
//                 (order === "desc" && arr[j] <arr[j + 1])
//             ) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }

//     return arr;
// }

// let strings = ["banana", "a", "cherry", "Apple", "date"];
// console.log("Original array:", strings);
// console.log(bubbleSortStrings(strings))

// =============================================================================

// Find the Largest and Smallest Element in an Array
// ---- --- ------- --- -------- ------- -- -- -----

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return [arr[0], arr[arr.length - 1]]
// }

// let arr = [3, 2, 1, 6, 5, 7, 0];
// console.log(bubbleSort(arr));

// =============================================================================