


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LL {

    // Node Contructor 
    constructor(data) {
        this.head = null;
    }

    // Find Size of LL
    size() {
        let current = this.head
        let indexCount = 0
        while (current !== null) {
            current = current.next;
            indexCount++;
        }
        return indexCount
    }

    // Find Middle of LL
    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while (fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return console.log(slow);
    }

    // Print LL
    print() {
        let current = this.head;
        let res = []
        while (current !== null) {
            res.push(current.data)
            current = current.next;
        }
        console.log(res.join(' -> '));
    }

    //Reverse Print LL
    reversePrint() {
        if (this.head === null) {
            console.log("Empty LL");
            return
        }
        let current = this.head;
        let res = []
        while (current !== null) {
            res.push(current.data);
            current = current.next;
        }
        res = res.reverse()
        console.log(res);
    }

    // Print Cyclic LL
    cyclePrint() {
        let current = this.head;
        let visited = new Set();
        let res = []
        while (current) {
            if (visited.has(current)) {
                res.push(`(${current.data})`)
                break;
            }
            visited.add(current);
            res.push(current.data);
            current = current.next;
        }
        console.log(res.join(" -> "));
    }

    // -----------------------------------------------------

    // Insert Beggining
    insertBeg(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
    }

    // Insert End
    insertEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Insert Middle
    insertmiddle(data) {
        let newNode = new Node(data)

        if (this.head === null) {
            this.head = newNode;
            return
        }

        let current = this.head
        let middle = Math.floor(this.size() / 2);
        let prev = null;
        let count = 0

        while (count < middle) {
            count++;
            prev = current;
            current = current.next;
        }

        if (prev === null) {
            newNode.next = this.head
            this.head = newNode
        } else {
            newNode.next = current;
            prev.next = newNode
        }

    }

    // Insert anywhere
    insertIndex(data, index) {
        let newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return
        }

        let current = this.head;
        let prev = null;
        let currentIndex = 0;
        while (current !== null && currentIndex < index) {
            prev = current;
            current = current.next;
            currentIndex++;
        };

        if (index !== currentIndex) {
            console.log("index is out of bound");
            return
        }

        newNode.next = current;
        prev.next = newNode;
    }

    // -----------------------------------------------------

    // Delete Beggining
    deleteBeg() {
        let current = this.head;
        this.head = current.next;
    }

    // Delete End
    deleteEnd() {
        let current = this.head;
        let prev = null
        while (current.next !== null) {
            prev = current
            current = current.next
        }
        prev.next = null
    }

    // Delete Anywhere
    deleteIndex(index) {
        let current = this.head;
        if (index === 0) {
            this.head = current.next
            return
        }
        if (index >= this.size()) {
            console.log("out of bound");
            return
        }
        let count = 0
        let prev = null
        while (count !== index) {
            prev = current
            current = current.next;
            count++
        }
        if (prev === null) {
            this.head = null
        } else {
            prev.next = current.next
        }
    }

    // Delete By Value
    deleteValue(data) {
        if (this.head === null) {
            console.log('no LL');
            return
        }

        let current = this.head;
        let prev = null
        while (current.data !== data) {
            prev = current
            current = current.next;
        }
        if (prev === null) {
            this.head = current.next
        } else {
            prev.next = current.next
        }
    }

    deleteMiddle() {
        if (this.head === null) {
            console.log('Empty LL')
            return
        }

        let slow = this.head;
        let fast = this.head;
        let prev = null

        while (fast !== null && fast.next !== null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        if (prev === null) {
            this.head = null
        } else {
            prev.next = slow.next;
        }

    }
    // -----------------------------------------------------

    // Search by Value
    search(data) {
        if (this.head === null) {
            console.log('empty LL');
            return
        }

        let current = this.head
        let index = 0;
        while (current.data !== data) {
            current = current.next
            index++
        }

        console.log(`index : ${index}`);
    }

    // -----------------------------------------------------

    // Reverse
    reverse() {
        if (this.head === null) {
            console.log("empty LL");
            return
        }

        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    // isCyclic
    isCycle() {
        let slow = this.head
        let fast = this.head

        while (fast !== null && fast.next != null) {
            slow = slow.next
            fast = fast.next.next

            if (slow == fast) {
                return console.log("cyclic");
            }
        }
        return console.log("not cylcic");
    }

    // Make Circular LL from Single LL
    makeCycle() {
        if (this.head === null) {
            console.log("empty LL");
            return
        }

        let current = this.head
        while (current.next) {
            current = current.next;
        }
        current.next = this.head
    }

    // Remove Duplicate (for Sorted)
    removeDup() {
        let current = this.head;
        while (current !== null && current.next !== null) {
            if (current.data === current.next.data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
    }

    // ------------------------------------------------------------------

    // Push 
    push(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode
            return
        }

        let current = this.head
        while (current !== null && current.next !== null) {
            current = current.next
        }
        current.next = newNode;
    }

    // Pop
    pop() {
        if (this.head === null) {
            console.log("empty LL");
            return
        }

        let current = this.head
        let prev = null
        while (current !== null && current.next !== null) {
            prev = current
            current = current.next
        }
        prev.next = null
        return prev
    }

    // Shift
    shift() {
        if (this.head === null) {
            console.log("empty LL");
            return
        }

        let current = this.head;
        current = current.next;
        this.head = current
    }

    //Unshift
    unshift(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode
            return
        }

        let current = this.head;
        newNode.next = current;
        this.head = newNode;
    }

    // -----------------------------------------------------

    isPalindrome() {
        if (this.head === null) {
            console.log(" empty LL ");
            return
        }

        let current = this.head;
        let res = []

        while (current && current.next) {
            res.push(current.data)
            current = current.next
        }

        let rev = [...res].reverse()

        for (let i = 0; i < res.length; i++) {
            if (res[i] === rev[i]) {
                console.log("palindrome");
                return
            } else {
                console.log("Not palindrome");
                return
            }
        }
    }

    // ----------------------------------------------------------

    // Find Loop And Delete
    findLoopAndDelete() {
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next

            if (slow === fast) {
                console.log(`loop in ${slow.data}`);
                this.removeloop(slow)
                return true
            }
        }
        return false
    }

    removeloop(slow) {
        let ptr1 = this.head;
        let ptr2 = slow;

        while (ptr1 !== ptr2) {
            ptr1 = ptr1.next
            ptr2 = ptr2.next
        }

        let current = ptr1

        while (current.next !== ptr1) {
            current = current.next;
        }
        current.next = null
    }

}


// ===================================================================

// Convert Array to LL
function arrayLL(array) {
    if (array.length === 0) {
        console.log('empty array, so empty LL');
        return
    }

    let head = new Node(array[0]);
    let current = head;
    let res = [head.data]

    let count = 1
    while (count < array.length) {
        current.next = new Node(array[count])
        current = current.next;
        res.push(current.data)
        count++;
    }
    console.log(res.join(" -> "))
    return head;
}


// ===================================================================

// Convert LL to Array
function LLarray(list) {
    if (list.head === null) {
        console.log("empty LL, so empty Array");
        return
    }

    let current = list.head;
    let array = []
    while (current !== null) {
        array.push(current.data);
        current = current.next
    }

    console.log(array);
    return array
}

// ===================================================================

// Merge Two LL
function merge(l1, l2) {
    if (l1 === null) {

        return l2
    }
    if (l2 === null) {
        return l1
    }

    let current = l1.head
    let size = 0

    while (current !== null && current.next !== null) {
        size++;
        current = current.next
    }

    current.next = l2.head
    let res = []
    let pri = l1.head
    while (pri !== null) {
        res.push(pri.data)
        pri = pri.next
    }

    return console.log(res.join(' => '));

}

// ===========================================================

// Find nth Node From End
function findNthFromEnd(list, n) {
    if (!list.head) {
        console.log("empty LL")
    }
    if (n === 0) {
        console.log('nothing to delete');
        return
    }

    let current = list.head
    let count = 0
    while (current !== null) {
        count++;
        current = current.next
    }

    let dele = count - n;

    current = list.head
    let prev = null
    count = 0
    while (dele !== count) {
        prev = current;
        count++;
        current = current.next;
    }
    if (prev === null) {
        list.head = current.next
    } else {
        prev.next = current.next;
    }

}


// ===========================================================

// Merge Two Sorted LL
function mergeSortedLL(l1, l2) {

    let dummy = new Node(0);
    let current = dummy;

    while (l1.head !== null && l2.head !== null) {
        if (l1.head.data <= l2.head.data) {
            current.next = l1.head
            l1.head = l1.head.next
        } else {
            current.next = l2.head;
            l2.head = l2.head.next
        }
        current = current.next
    }

    if (l1.head !== null) {
        current.next = l1.head
    }
    if (l2.head !== null) {
        current.next = l2.head
    }

    let merged = new LL();
    merged.head = dummy.next;

    merged.print()
}

// ===========================================================


//Sort LL in Deescending







const list = new LL();
// const list2 = new LL();

list.insertBeg(7)
list.insertBeg(6)
list.insertBeg(5)
list.insertBeg(4)
list.insertBeg(3)
list.insertBeg(2)
list.insertBeg(1)

// list2.insertBeg(8)
// list2.insertBeg(7)
// list2.insertBeg(6)




// list.insertmiddle(41)
// list.insertmiddle(42)
// list.insertmiddle(43)
// list.insertmiddle(44)
// list.findMiddle()
// list.deleteEnd()
// list.deleteIndex(0)
// list.deleteValue(40)
// list.search(41)
// console.log(list.size());
// list.deleteBeg()
// console.log(list.size());
// list.makeCycle()
// list.isCycle()
// list.reverse()
// list.removeDup()
// list.print()
// merge(list, list2)
// list.cyclePrint()
// list.pop()
// list.push(99)
// list.shift()
// list.unshift(100)



// list.print()



// let array = [1,2,3,4,5,6]
// arrayLL(array)

// LLarray(list)

// list.reversePrint()

// list.isPalindrome()

// list.deleteMiddle()
// list.deleteMiddle()
// list.deleteMiddle()
// list.deleteMiddle()
// list.deleteMiddle()
// list.deleteMiddle()
// list.deleteMiddle()
// list.print()

// findNthFromEnd(list, 7)
// mergeSortedLL(list, list2)






// list.print()
// list.makeCycle();
// list.cyclePrint()

// list.findLoopAndDelete()
// list.print()
