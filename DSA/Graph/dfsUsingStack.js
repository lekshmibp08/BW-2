const dfsInGraph = (graph, start) => {
    let stack = [start];
    let visited = new Set();
    while(stack.length) {
        let vertex = stack.pop();
        if(!visited.has(vertex)) {
            console.log(vertex);
            visited.add(vertex);

            for(let neighbour of graph[vertex]) {
                if(!visited.has(neighbour)) {
                    stack.push(neighbour);
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
};

dfsInGraph(graph, 'A'); // A C F E B D