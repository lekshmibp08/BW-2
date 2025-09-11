function maxHeapify(arr, n, i) {
    let largest = i;
    let left = (2 * i) + 1;
    let right = (2 * i) + 2;
    if(left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if(right < n && arr[right] > arr[largest]) {
        largest = right
    }
    if(largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        maxHeapify(arr, n, largest);
    }
}

function heapSortAscending(arr) {
    let n = arr.length;
    for(let i = Math.floor(n/2) - 1; i >= 0; i--) {
        maxHeapify(arr, n, i);
    }
    for(let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        maxHeapify(arr, i, 0)
    }
}
/*  create maxheap and swap last with root again heapify to find the next largest value*/
function minHeapify(arr, n, i) {
    let smallest = i;
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
    
    if(leftChild < n && arr[leftChild] < arr[smallest]) smallest = leftChild;
    if(rightChild < n && arr[rightChild] < arr[smallest]) smallest = rightChild;

    if(smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        minHeapify(arr, n, smallest);
    }
}

function heapSortDescending(arr) {
    let n = arr.length;
    for(let i = Math.floor(n/2) - 1; i >= 0; i--) {
        minHeapify(arr, n, i);
    }
    for(let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        minHeapify(arr, i, 0);
    }
}

let arr = [12, 11, 13, 5, 6, 7];
heapSortAscending(arr);
console.log("Sorted array is:", arr); // [ 5, 6, 7, 11, 12, 13 ]
heapSortDescending(arr);
console.log("Sorted array is:", arr); // [ 13, 12, 11, 7, 6, 5 ]
