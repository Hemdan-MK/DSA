class maxHeap {
    constructor() {
        this.heap = [];
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    insert(value) {
        this.heap.push(value);
        this.heapify_up();
    }

    heapify_up() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = this.parentIndex(index);
            if (this.heap[index] > this.heap[parentIndex]) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    leftIndex(index) {
        return 2 * index + 1;
    }

    rightIndex(index) {
        return 2 * index + 2;
    }

    removeRoot() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify_Down();
        return root;
    }

    heapify_Down(index = 0) {
        let leftChild = this.leftIndex(index);
        let rightChild = this.rightIndex(index);
        let largest = index;

        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild;
        }

        if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
        }

        if (largest !== index) {
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            this.heapify_Down(largest);
        }
    }

    // Heap Sort Function
    heapSort() {
        let sortedArray = [];
        while (this.heap.length > 0) {
            sortedArray.push(this.removeRoot());
        }
        return sortedArray;
    }
}



// ---------- > 

let max = new maxHeap();

max.insert(10);
max.insert(20);
max.insert(5);
max.insert(30);
max.insert(15);

console.log(max.heap);

// ---------- > 

console.log("Removed :", max.removeRoot());
console.log(max.heap);

// ---------- > 
console.log("Sorted Array:", max.heapSort());



