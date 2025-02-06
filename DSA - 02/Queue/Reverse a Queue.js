

class Queue {
    constructor() {
        this.queue = []
        this.stack = []
    }

    enQueue(key) {
        this.queue.push(key)
        return "Added ..."
    }

    deQueue() {
        if (this.queue.length <= 0) {
            return "Empty Queue ..."
        }

        this.queue.shift()

        return "Shifted ..."
    }

    print() {
        if (this.queue.length <= 0) {
            return "Empty Queue ..."
        }

        return this.queue
    }

    reverse() {
        if (this.queue.length <= 0) {
            return "Empty Queue ..."
        }

        while (this.queue.length > 0) {
            this.stack.push(this.queue.shift())
        }
        while (this.stack.length > 0) {
            this.enQueue(this.stack.pop())
        }

        return this.queue
    }
}


let queue = new Queue();

console.log(queue.enQueue(10));
console.log(queue.enQueue(20));
console.log(queue.enQueue(30));
console.log(queue.enQueue(40));
console.log(queue.print());
console.log(queue.deQueue());
console.log(queue.print());
console.log(queue.reverse());