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
  isEmpty() {
    return this.root === null;
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  search(root, value) {
    if (root === null) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  // DFS
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.inOrder(root.left);
      this.inOrder(root.right);
      console.log(root.value);
    }
  }
  // BFS
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  minValue(root) {
    if (!root.left) return root.value;
    else return this.minValue(root.left);
  }
  maxValue(root) {
    if (!root.right) return root.value;
    else return this.maxValue(root.right);
  }
  delete(value) {
    this.root = this.removeNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) return root;
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // node to be deleted is leaf node
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        // only right child
        return root.right;
      } else if (!root.right) {
        // only left child
        return root.left;
      } else {
        // both leaves present
        root.value = this.minValue(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
    }
  }
  // bst elements as array with ascending order
  toArrayAscending() {
    let result = [];
    function inOrder(node) {
      if (node) {
        inOrder(node.left);
        result.push(node.value);
        inOrder(node.right);
      }
    }
    inOrder(this.root);
    return result;
  }
  // bst elements as array with descending order
  toArrayDescending() {
    let result = [];
    function reverseInOrder(node) {
      if (node) {
        reverseInOrder(node.right);
        result.push(node.value);
        reverseInOrder(node.left);
      }
    }
    reverseInOrder(this.root);
    return result;
  }
}

const bst = new BST();
console.log(bst.isEmpty()); // true
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
// console.log(bst.search(bst.root, 10)); // true
// console.log(bst.search(bst.root, 5)); // true
// console.log(bst.search(bst.root, 15)); // true
// console.log(bst.search(bst.root, 115)); // false
// bst.preOrder(bst.root); // 10, 5, 3, 7, 15
// bst.inOrder(bst.root); // 3, 5, 7, 10, 15
// bst.postOrder(bst.root); // 3, 5, 7, 15, 10
// bst.levelOrder();   // 10, 5, 15, 3, 7

console.log(bst.minValue(bst.root)); // 3
console.log(bst.maxValue(bst.root)); // 15
console.log(bst.toArrayAscending()); // [ 3, 5, 7, 10, 15 ]
console.log(bst.toArrayDescending()); // [ 15, 10, 7, 5, 3 ]
