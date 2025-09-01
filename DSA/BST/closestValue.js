class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  findClosestValue(target) {
    let curr = this.root;
    let closest = this.root.value;
    while (curr !== null) {
      if (Math.abs(target - curr.value) < Math.abs(target - closest)) {
        closest = curr.value;
      }
      if (Math.abs(target - curr.value) === Math.abs(target - closest)) {
        closest = curr.value;
      }
      if (target < curr.value) {
        curr = curr.left;
      } else if (target > curr.value) {
        curr = curr.right;
      } else {
        break;
      }
    }
    return closest;
  }
}

const bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(65);
bst.insert(80);

console.log(bst.findClosestValue(67)); // 65
console.log(bst.findClosestValue(68)); // 70
