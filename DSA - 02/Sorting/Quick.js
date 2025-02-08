// ========================================================================

// Quick Sort
// ----- ----

// function quick(arr, low = 0, high = arr.length - 1) {

//     if (low < high) {
//         let pivotInd = pivot(arr, low, high);
//         quick(arr, low, pivotInd - 1)
//         quick(arr, pivotInd + 1, high)
//     }
//     return arr

// }

// function pivot(arr, low, high) {
//     let pivot = arr[low];
//     let j = low
//     for (let i = low + 1; i <= high; i++) {
//         if (arr[i] < pivot) {
//             [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]]
//             j++
//         }
//     }
//     [arr[low], arr[j]] = [arr[j], arr[low]];
//     return j
// }

// let arr = [5, 2, 7, 6, 1, 3]
// console.log(quick(arr));

// ========================================================================

// Quick Sort (2)
// ----- ---- ---

// function quickSort(arr){
//     let n  = arr.length
//     if(n<= 1) return arr
//     let pivot = arr[0],left = [],right = [];

//     for(let i = 1 ; i<n ; i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
// return [...quickSort(left),pivot,...quickSort(right)]
// }


// let arr = [1,55,33,22,53,2,7,9]
// console.log(quickSort(arr))


// ========================================================================

// Find the Kth Smallest Element
// ---- --- --- -------- -------

// let arr = [1, 55, 33, 22, 53, 2, 7, 9]
// console.log(quickSort(arr, 1))

// function quickSort(arr, k, low = 0, high = arr.length-1) {
//     if (low <= high) {
//         let pivotInd = pivot(arr, low, high)
        
//         if(pivotInd === k-1){
//             return arr[k-1]
//         }

//         quickSort(arr, k, low, pivotInd - 1)
//         quickSort(arr, k, pivotInd + 1, high)
        
//         return arr[k-1]
//     }
//     return -1
// }

// function pivot(arr, low, high) {
//     let pivot = arr[low];
//     let j = low
//     for (let i = low + 1; i <= high; i++) {
//         if (arr[i] < pivot) {
//             [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]]
//             j++
//         }
//     }
//     [arr[low], arr[j]] = [arr[j], arr[low]];
//     return j
// }

// ========================================================================