

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null
    }
}


class DLL {
    constructor(data) {
        this.head = null;
        this.tail = null
    }

    push(data) {
        let newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode
    }

    pop() {
        if (this.head === null) {
            console.log("empty DLL");
            return
        }

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
            return
        }

        this.tail = this.tail.prev;
        this.tail.next = null;

    }

    shift() {
        if (this.head === null) {
            console.log("empty DLL");
            return
        }

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
            return
        }

        this.head = this.head.next;
        this.head.prev = null
    }

    unshift(data) {
        let newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
        }

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;

    }

    print() {
        if (!this.head) {
            console.log("empty DLL");
            return
        }


        let current = this.head;
        let res = []
        while (current !== null) {
            res.push(current.data)
            current = current.next
        }

        console.log(res.join(" -> "));

    }

    reversePrint() {
        if (!this.head) {
            console.log("empty DLL");
            return
        }

        let current = this.tail
        let res = []
        while (current !== null) {
            res.push(current.data)
            current = current.prev
        }
        console.log(res.join(" -> "));

    }

    findMiddle() {
        if (!this.head) {
            console.log("empty DLL");
            return
        }

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return console.log(slow.data);
    }

    isPalindrome() {
        let start = this.head;
        let end = this.tail;

        while (start !== null && end !== null){
            if(start.data !== end.data){
                return console.log("Not Palindrome");
            }
            start = start.next;
            end = end.prev
        }

        return console.log("is plaindrome");
        
    }

}


// ===========================================================================

// Convert Array -> DLL
function ArrayDll(array) {

    const list = new DLL()
    if (array.length <= 0) {
        console.log("empty DLL");
        return
    }

    list.head = new Node(array[0])
    list.tail = list.head

    for (let i = 1; i < array.length; i++) {
        let newNode = new Node(array[i]);
        list.tail.next = newNode;
        newNode.prev = list.tail;
        list.tail = newNode;
    }

    let current = list.head
    let res = []
    while (current !== null) {
        res.push(current.data);
        current = current.next

    }
    console.log(res.join(" -> "));
}

// ===========================================================================

// Convert DLL to Array

function DllArray(list) {

    if (list.head === null) {
        console.log("empty DLL");
        return
    }

    let array = []
    let current = list.head

    while (current !== null) {
        array.push(current.data);
        current = current.next
    }


    console.log(array.join(" -> "))

}

// ===========================================================================


const list = new DLL();

list.push(10)
list.push(11)
list.push(12)
list.push(13)
list.push(14)
// list.push(13)
// list.push(12)
// list.push(11)
// list.push(10)

// list.pop()
// list.pop()
// list.pop()

// list.shift()
// list.shift()
// list.shift()

// list.unshift(1)
// list.unshift(2)
// list.unshift(3)


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ArrayDll(array)

// DllArray(list)

// list.reversePrint()
// list.print()

// list.findMiddle()

// list.isPalindrome()