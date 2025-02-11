


class Tree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }

    preOrder(node) {
        if (node === null) {
            return
        }

        console.log(node.value);

        this.preOrder(node.left)
        this.preOrder(node.right)

    }

    inorder(node) {
        if (node === null) {
            return
        }

        this.inorder(node.left)
        console.log(node.value);
        this.inorder(node.right)

    }

    postOrder(node) {
        if (node === null) {
            return
        }

        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value);

    }
}


let root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);

console.log(root);

root.preOrder(root)
console.log(" ============= ");
root.inorder(root)
console.log(" ============= ");
root.postOrder(root)


