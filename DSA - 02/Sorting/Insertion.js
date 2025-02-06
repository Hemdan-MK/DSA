// =============================================================================

// Insertion Sort
// --------- ----

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let j = i - 1;
//         let key = arr[i];

//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j]
//             j--;
//         }
//         arr[j + 1] = key
//     }

//     return arr
// }

// console.log(insertionSort([12, 11, 13, 5, 6]));

// =============================================================================

// Insert an Element in the Correct Position
// ------ -- ------- -- --- ------- --------

// function insertionSort(arr, elem) {
//     arr.push(elem)
//     let n = arr.length

//     for (let i = 1; i < n; i++) {
//         let j = i - 1;
//         let key = arr[i];

//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j + 1] = key
//     }
//     return arr
// }

// console.log(insertionSort([12, 11, 13, 5, 6], 10));

// =============================================================================

// Insert an Element to a Sorted Array
// ------ -- ------- -- - ------ -----

// function insertionSort(arr, elem) {

//     let j = arr.length - 1;

//     while (j >= 0 && arr[j] > elem) {
//         arr[j + 1] = arr[j]
//         j--;
//     }
//     arr[j+1] = elem

//     return arr
// }

// console.log(insertionSort([1, 2, 3, 11, 12], 10));

// =============================================================================

// Sort Array of Floating Value
// ---- ----- -- -------- -----

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let j = i - 1;
//         let key = arr[i];

//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j]
//             j--;
//         }
//         arr[j + 1] = key
//     }

//     return arr
// }

// console.log(insertionSort([12.01, 12.001, 0.1, 5, 6]));

// =============================================================================

