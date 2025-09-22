const dfsInGraph = (graph, start, visited=new Set()) => {
    if(!visited.has(start)) {
        console.log(start);
        visited.add(start);
    }
    for(let neighbour of graph[start]) {
        if(!visited.has(neighbour)) {
            dfsInGraph(graph, neighbour, visited)
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

dfsInGraph(graph, 'A');