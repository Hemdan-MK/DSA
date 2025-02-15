


class Tree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    }

    validation(node, minVal = -Infinity, maxVal = Infinity) {

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

    maxValue(node) {

        if (node === null) {
            return -Infinity
        }

        let left = this.maxValue(node.left)
        let right = this.maxValue(node.right);

        return Math.max(node.val, left, right)

    }

    minValue(node) {
        if (node === null) {
            return Infinity
        }

        let left = this.minValue(node.left)
        let right = this.minValue(node.right)

        return Math.min(node.val, left, right)
    }
}


let root = new Tree(10);
root.left = new Tree(5);
root.right = new Tree(15);
root.left.left = new Tree(2);
root.left.right = new Tree(7);

console.log(root);

console.log(root.validation(root));

console.log(root.maxValue(root));
console.log(root.minValue(root));
