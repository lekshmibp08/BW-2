class Node {
  constructor(val) {
    this.value = val;
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
    if(!this.root) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }
  insertNode(root, newNode) {
    if(newNode.value < root.value) {
        if(!root.left)
            root.left = newNode;
        else 
            this.insertNode(root.left, newNode);
    } else {
        if(!root.right)
            root.right = newNode;
        else 
            this.insertNode(root.right, newNode);
    }
  }
  countTotalNodes(root) {
    let count = 0;
    if (!root) return count;
    count++;
    return (
      count + this.countTotalNodes(root.left) + this.countTotalNodes(root.right)
    );
  }
  countAllLeftNodes(root) {
    let count = 0;
    if(!root) return count;
    if(root.left) {
        count++;
    }
    return count + this.countAllLeftNodes(root.left) + this.countAllLeftNodes(root.right);
  }
  countLeftSubtTree(root) {
    if(!root || !this.root.left) return 0;
    return this.countTotalNodes(root.left);
  }
}

let values = [10, 5, 15, 2, 7, 12, 20];

let bst = new BST();
values.forEach((v) => bst.insert(v));

console.log(bst.countTotalNodes(bst.root));         // 7  ( total num of nodes in the BST )             {10,5,15,2,7,12,20}
console.log(bst.countTotalNodes(bst.root.left));    // 3  ( num of nodes in the left side of a BST )    {5,2,7}
console.log(bst.countTotalNodes(bst.root.right));   // 3  ( num of nodes in the right side of a BST )   {15,12,20}
console.log(bst.countAllLeftNodes(bst.root));       // 3  ( num of all left nodes in a BST )            {5,2,12}
console.log(bst.countLeftSubtTree(bst.root));       // 3                                                {5,2,7}
/*

                10
               /  \
              5    15
             / \   / \
            2   7 12 20

*/    