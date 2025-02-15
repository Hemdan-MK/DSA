


class Node {
    constructor(val) {
        this.val = val;
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(val) {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return
        }

        let current = this.root;

        while (true) {
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return
                }
                current = current.right
            }

        }
    }

    search(val) {
        let current = this.root
        while (current) {
            if (current.val === val) {
                return "Found"
            }

            if (val < current.val) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return "Not Found"
    }

    min() {
        let current = this.root
        while (true) {
            if (!current.left) {
                console.log(` --->  Min : ${current.val} `);
                return
            }
            current = current.left
        }
    }

    max() {
        let current = this.root;
        while (true) {
            if (!current.right) {
                console.log(` --->  Max : ${current.val} `);
                return
            }
            current = current.right
        }
    }

    inOrderTraversal(node = this.root) {
        if (node === null) {
            return
        }
        this.inOrderTraversal(node.left)
        console.log(node.val);
        this.inOrderTraversal(node.right)
    }

    preOrdertraversal(node = this.root) {
        if (node === null) {
            return
        }

        console.log(node.val);
        this.preOrdertraversal(node.left)
        this.preOrdertraversal(node.right)

    }

    postOrderTraversal(node = this.root) {
        if (node === null) {
            return
        }

        this.postOrderTraversal(node.left)
        this.postOrderTraversal(node.right)
        console.log(node.val);

    }

    levelTraversal() {
        if (!this.root) {
            return
        }

        let queue = [this.root]
        while (queue.length > 0) {
            let node = queue.shift();

            console.log(node.val);

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    validation(node = this.root, minVal = -Infinity, maxVal = +Infinity) {

        if (node === null) {
            return true
        }
        if (!(node.val < maxVal && node.val > minVal)) {
            return false
        }
        let right = this.validation(node.right, node.val, maxVal)
        let left = this.validation(node.left, minVal, node.val);

        if (right === true && left === true) {
            return true
        } else {
            return false
        }
    }

    depth(node = this.root) {
        if (node === null) {
            return 0;
        }

        let left = this.depth(node.left)
        let right = this.depth(node.right)

        return 1 + Math.max(left, right)
    }

    secondlargest() {
        if (this.root === null || (this.root.left === null && this.root.right === null)) {
            return "No Second Largest"
        }

        let current = this.root
        let parent = null

        while (current.right) {
            parent = current;
            current = current.right;
        }

        if (current.left) {
            let temp = current.left;
            while (temp.right) {
                temp = temp.right;
            }
            return temp.val;
        }

        return parent.val;
    }

    closest(target, node = this.root,) {

        let closest = -Infinity;
        let current = node;

        while (current) {
            if (Math.abs(target - current.val) < Math.abs(target - closest)) {
                closest = current.val
            }

            if (target < current.val) {
                current = current.left
            } else if (target > current.val) {
                current = current.right
            } else {
                return current.val
            }
        }
        return closest
    }

    deletion(val) {
        function remove(node, val) {

            if (!node) {
                return null
            }

            if (val < node.val) {
                node.left = remove(node.left, val)
                return node
            } else if (val > node.val) {
                node.right = remove(node.right, val)
                return node
            } else {
                if (!node.left && !node.right) {
                    return null
                }

                if (!node.right) {
                    return node.left
                }
                if (!node.left) {
                    return node.right
                }
                
                let successor = minRight(node.right);
                node.val = successor.val;
                node.right  = remove(node.right,successor.val)
            }
            return node
            
        }
        
        let minRight = (node)=>{
            while (node.left) {
                node = node.left
            }
            return node
        }
        
        return this.root = remove(this.root, val)
    }
}

console.log("-------------------------------------------------------| ");
console.log("--- Creation ---")

let root = new BST();

root.insert(10)
root.insert(5)
root.insert(15)
root.insert(12)
root.insert(7)
root.insert(8)
root.insert(6);
root.insert(0);
console.log(root.root);

console.log("-------------------------------------------------------| ");

console.log("--- Search ---")
console.log(root.search(11));

console.log("-------------------------------------------------------| ");

console.log("--- min - MAX --- ")
root.min()
root.max()

console.log("-------------------------------------------------------| ");

console.log("--- inorder --- ")
root.inOrderTraversal()
console.log("--- preorder --- ")
root.preOrdertraversal()
console.log("--- postorder --- ")
root.postOrderTraversal()
console.log("--- levelorder --- ")
root.levelTraversal();

console.log("-------------------------------------------------------| ");

console.log("--- Validation --- ")
console.log(root.validation());

console.log("-------------------------------------------------------| ");

console.log("--- Depth (Height) --- ")
console.log(root.depth());

console.log("-------------------------------------------------------| ");

console.log("--- Second Largest ---")
console.log(root.secondlargest());

console.log("-------------------------------------------------------| ");

console.log("--- Closest ---")
console.log(root.closest(10));

console.log("-------------------------------------------------------| ");

console.log("--- Deletion ---")
console.log(root.deletion(10));

console.log("-------------------------------------------------------| ");
