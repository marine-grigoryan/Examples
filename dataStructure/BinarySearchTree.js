class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    addNode(newNode, node) {
        if (newNode.data > node.data) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                addNode(node, node.right);
            }
        } else if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                addNode(node, node.left);
            }
        } else {
            return false;
        }
    }

    add(data) {
        const node = new Node(data);

        if (this.root === null) {
            this.root = node;
        } else  {
            this.addNode(node, this.root);
        }
    }

    delete(data) {
        this.root = deleteNode(this.root, data);
    }

    deleteNode(node, data) {
        if (node.data === null) {
            return null;
        }
        if (data < node.data) {
            node.left = deleteNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = deleteNode(node.right, data);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            let tmpNode = node.right;

            while(tmpNode.left !== null) {
                tmpNode = tmpNode.left;
            }
            node.data = tmpNode.data;
            node.right = deleteNode(node.right, tmpNode.data);
            return node;
        }
    }

    getMinNode() {
        if (this.root === null) {
            return null;
        }
        let current = this.root;

        while ( current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    getMaxNode() {
        if (this.root === null) {
            return null;
        }
        let current = this.root;

        while ( current.right !== null){
            current = current.right;
        }
        return current.data;
    }
}