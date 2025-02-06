// =============================================

// ( 1 )
// -----

// class Queue {
//     constructor() {
//         this.queue = [];
//     }

//     push(key) {
//         this.queue.push(key)
//         return "Added ..."
//     }

//     pop() {
//         if (this.queue.length <= 0) {
//             return "Empty ..."
//         }
//         let count = 1
//         while (this.queue.length > count) {
//             this.queue.push(this.queue.shift())
//             console.log(this.queue);

//             count++
//         }

//         this.queue.shift()
//         return "Popped ..."
//     }

//     print(){
//         return this.queue
//     }
// }

// let stack = new Queue();

// console.log(stack.push(10));
// console.log(stack.push(20));
// console.log(stack.push(30));
// console.log(stack.push(40));
// console.log(stack.push(50));
// console.log(stack.print());
// console.log(stack.pop());
// console.log(stack.print());




// =============================================

// ( 2 )
// -----

class Queue {
    constructor() {
        this.queue = [];
        this.queue2 = [];
    }

    push(key) {
        this.queue.push(key)
        return "Added ..."
    }

    pop() {
        if (this.queue.length <= 0) {
            return "Empty ..."
        }
        while (this.queue.length > 1) {
            this.queue2.push(this.queue.shift())
        }

        this.queue.shift()

        while (this.queue2.length > 0) {
            this.queue.push(this.queue2.shift())
        }

        return "Popped ..."
    }

    print() {
        return this.queue
    }
}



let stack = new Queue();

console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.push(40));
console.log(stack.push(50));
console.log(stack.print());
console.log(stack.pop());
console.log(stack.print());

