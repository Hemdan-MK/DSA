// ========================================================================

// Merge Sort
// ----- ----

// function mergesort(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }

//     let mid = Math.floor(arr.length / 2);

//     let left = mergesort(arr.slice(0, mid))
//     let right = mergesort(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {
//     let sorted = [];

//     let leftIndex = 0
//     let rightIndex = 0

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if(left[leftIndex]< right[rightIndex] ){
//             sorted.push(left[leftIndex])
//             leftIndex++
//         }else{
//             sorted.push(right[rightIndex])
//             rightIndex++
//         }
//     }

//     return sorted.concat(left.slice(leftIndex),right.slice(rightIndex))
// }


// let arr = [5, 2, 7, 6, 1, 3]
// console.log(mergesort(arr));


// ========================================================================

// Merge Sort ( 2 )
// ----- ---- -----

// function mergesort(arr) {

//     if (arr.length > 1) {
//         let mid = Math.floor(arr.length / 2);

//         let left = mergesort(arr.slice(0, mid))
//         let right = mergesort(arr.slice(mid))
//         return merge(left, right)
//     }
//     return arr
// }

// function merge(left, right) {

//     let sorted = []
//     while (left.length && right.length) {

//         if (left[0] > right[0]) {
//             sorted.push(right.shift());

//         } else {
//             sorted.push(left.shift());
//         }
//     }

//     return [...sorted, ...left, ...right]
// }

// let arr = [5, 2, 7, 6, 1, 3]
// console.log(mergesort(arr));

// ========================================================================

// LEETCODE 21
// -------- --

// var mergeTwoLists = function (list1, list2) {
//     if (!list1) return list2;
//     if (!list2) return list1;

//     if (list1.val < list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2)
//         return list1
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next)
//         return list2
//     }
// };

// ========================================================================

