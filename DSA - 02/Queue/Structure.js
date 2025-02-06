


class Queue {
    constructor() {
        this.Queue = []
    }

    enQueue(value) {
        this.Queue.push(value);
    }

    deQueue() {
        if (this.isEmpty()) {
            return console.log("Empty");
        } else {
            return this.Queue.shift()
        }
    }

    isEmpty() {
        return this.Queue.length === 0
    }

    front() {
        if (this.isEmpty()) {
            return console.log("empty Q");
        } else {
            return this.Queue[0]
        }
    }
}

let Q = new Queue();
