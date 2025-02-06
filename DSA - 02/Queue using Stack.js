

class Stack {
    constructor() {
        this.stack = []
        this.stack2 = []
    }

    enqueue(key) {
        this.stack.push(key)
        return "Added ..."
    }

    dequeue() {
        if (this.stack.length <= 0) {
            return "Empty queue ..."
        }

        while (this.stack.length > 0) {
            this.stack2.push(this.stack.pop())
        }

        this.stack2.pop();

        while (this.stack2.length > 0) {
            this.stack.push(this.stack2.pop())
        }

        return "Popped ..."
    }

    print() {
        if (this.stack.length <= 0) {
            return "Empty queue"
        }

        return this.stack
    }

    
}


let queue = new Stack();

console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
console.log(queue.enqueue(40));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.print());