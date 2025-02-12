


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

    deletion(val) {
        function remove(node, val) {

            if (!this.root) {
                return "Empty Tree"
            }

            if (val < node.val) {
                node.left = remove(node.left, val)
                return node
            } else if (val > node.val) {
                node.right = remove(node.right, val)
                return node
            } else {

            }

        }

        this.root = remove(this.root, val)
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

}

let root = new BST();

root.insert(10)
root.insert(5)
root.insert(15)
root.insert(7)
root.insert(8)
root.insert(4);
console.log(root.root);
console.log("-------------------------------------------------------| ");
console.log(root.search(11));

