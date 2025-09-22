const bfsInGraph = (graph, start) => {
    let queue = [start];
    let visited = new Set();
    while(queue.length) {
        let vertex = queue.shift();
        if(!visited.has(vertex)) {
            console.log(vertex);
            visited.add(vertex);
            for(let neighbour of graph[vertex]) {
                if(!visited.has(neighbour)) {
                    queue.push(neighbour);
                }
            }
        }
    }
}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
}

bfsInGraph(graph, "A"); // A B C D E F