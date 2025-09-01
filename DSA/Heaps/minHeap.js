class MinHeap {
  constructor() {
    this.heap = [];
  }
  printHeap() {
    console.log(this.heap);
  }
  buildHeap(arr) {
    this.heap = arr;
    for(let i = Math.floor(this.heap.length/2) - 1; i >= 0; i--) {
        this.heapifyDown(i);
    }
  }
  heapifyDown(i) {
    let smallest = i;
    let leftChild = (2 * i) + 1;
    let rightChild = (2 * i) + 2;
    if(leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild;
    }
    if(rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild;
    }
    if(smallest !== i) {
        [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
        this.heapifyDown(smallest);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);    
  }
  heapifyUp(i) {
    let parentIndex = Math.floor((i - 1) / 2);
    while(i > 0 && this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];
        i = parentIndex;
        parentIndex = Math.floor((i - 1) / 2);
    }
  }
  remove() {
    if(this.heap.length === 0) return null;
    if(this.heap.length === 1) return this.heap.pop();
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  
}

const minHeap = new MinHeap();
minHeap.buildHeap([10, 20, 5, 6, 1, 8, 9]);
minHeap.insert(2)
minHeap.remove();
minHeap.printHeap();
