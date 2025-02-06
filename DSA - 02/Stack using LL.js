class LL {
    constructor() {
        this.head = null;
    }

    push(key) {
        let newNode = new Node(key)
        if (this.isEmpty()) {
            this.head = newNode;
            return "I N I T I A L"
        }

        newNode.next = this.head;
        this.head = newNode;

        return "Added..."

    }

    pop() {
        if (this.isEmpty()) {
            return "Empty Stack"
        }

        this.head = this.head.next;

        return "Popped..."

    }

    top() {
        return this.head.data
    }

    isEmpty() {
        return this.head === null
    }

    print() {
        if (this.isEmpty()) {
            return "Empty Stack"
        }

        let res = []
        let current = this.head;
        while (current !== null) {
            res.push(current.data);
            current = current.next
        }
        
        

        return res.join(" -> ")
    }

}

class Node {
    constructor(key) {
        this.data = key
        this.next = null
    }
}

let stack = new LL();

console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.push(40));
console.log(stack.print());
console.log(stack.pop());
console.log(stack.print());
console.log(stack.pop());
console.log(stack.print());
console.log(stack.pop());
console.log(stack.print());
console.log(stack.pop());
console.log(stack.print());
console.log(stack.isEmpty());