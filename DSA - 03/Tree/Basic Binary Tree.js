


class Tree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}


let root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);

console.log(root);
