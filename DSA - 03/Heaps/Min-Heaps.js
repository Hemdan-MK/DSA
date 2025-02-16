

class minHeap {
    constructor() {
        this.heap = []
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    insert(value) {
        this.heap.push(value);
        this.heapify_Up()
    }

    heapify_Up() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = this.parentIndex(index);
            if (this.heap[index] < this.heap[parentIndex]) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // --------------- Remove Root ----------------

    leftIndex(index) {
        return 2 * index + 1
    }

    rightIndex(index) {
        return 2 * index + 2
    }

    removeRoot() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop();

        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify_Down()

        return root
    }

    // method (2)
    // ------- --
    heapify_Down(index = 0) {

        while (this.leftIndex(index) < this.heap.length) {
            let leftChild = this.leftIndex(index);
            let rightChild = this.rightIndex(index);

            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[leftChild]) {
                leftChild = rightChild;
            }

            if (this.heap[index] > this.heap[leftChild]) {
                [this.heap[index], this.heap[leftChild]] = [this.heap[leftChild], this.heap[index]];
                index = leftChild;
            } else {
                break;
            }
        }
    }


    // Build Heap from Unsortd Array

    build(arr) {
        this.heap = arr;

        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.heapify_Down(i)
        }
        return this.heap
    }
}


// ---------- > 
let min = new minHeap();

min.insert(10)
min.insert(15)
min.insert(20)
min.insert(30)
min.insert(40)

console.log(min.heap);

// ---------- > 

console.log("Removed :", min.removeRoot());
console.log(min.heap);

// ---------- > 
console.log("Build :", min.build([100,15,20,30,40]));
console.log(min.heap);

// ---------- > 