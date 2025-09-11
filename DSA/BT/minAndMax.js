class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insertNode(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      if (!node.left) {
        node.left = newNode;
        return;
      } else {
        queue.push(node.left);
      }
      if (!node.right) {
        node.right = newNode;
        return;
      } else {
        queue.push(node.right);
      }
    }
  }
  findMax(node = this.root) {
    if(!node) return -Infinity;

    let leftMax = this.findMax(node.left);
    let rightMax = this.findMax(node.right);

    return Math.max(node.value, leftMax, rightMax);
  }
  findMin(node = this.root) {
    if(!node) return Infinity;

    let leftMax = this.findMin(node.left);
    let rightMax = this.findMin(node.right);

    return Math.min(node.value, leftMax, rightMax);
  }
}

const bt = new BinaryTree();

bt.insertNode(10);
bt.insertNode(20);
bt.insertNode(5);
bt.insertNode(15);
bt.insertNode(30);
bt.insertNode(2);
console.log(bt.findMax());  // 30
console.log(bt.findMin());  // 2
