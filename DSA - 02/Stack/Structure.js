// ========================================================================

// Stack
// ------

// class Stack {
//     constructor() {
//         this.Stack = [];
//     }

//     push(value) {
//         this.Stack.push(value);
//     }

//     pop() {

//         if (this.isEmpty()) {
//             return "Stack Empty"
//         } else {
//             this.Stack.pop()
//         }
//     }

//     isEmpty() {
//         if (this.Stack.length === 0) {
//             return true
//         } else {
//             return false
//         }
//     }

//     peek() {

//         if (this.isEmpty()) {
//             return console.log("Empty");

//         } else {
//             return console.log(this.Stack[this.Stack.length - 1]);
//         }
//     }
// }

// let stack = new Stack();


// ========================================================================

// Reverse A String
// ------- - ------

// function stringReverse(str) {

//     let stack = new Stack();
//     let res = "";

//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i])
//     }

//     while (!stack.isEmpty()) {
//         res += stack.pop()
//     }
    
//     return res
// }

// let str = "HEMDAN"
// console.log(stringReverse(str));


// ========================================================================


