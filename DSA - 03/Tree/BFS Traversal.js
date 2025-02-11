

class Tree {
    constructor(val) {
        this.val = val;
        this.left = null
        this.right = null
    }
}

let root = new Tree(5)
root.left = new Tree(3)
root.left.left = new Tree(2)
root.left.right = new Tree(4)
root.right = new Tree(7)
root.right.left = new Tree(6)
root.right.right = new Tree(8)

console.log(root);
console.log("==================");


function BFS() {
    if (!root) {
        return
    }

    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.val);
        
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
}

BFS(root)