

class Graphs {
    constructor() {
        this.adj = {}
    }

    addVertex(vertex) {
        if (!this.adj[vertex]) {
            this.adj[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if(!this.adj[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adj[vertex2]){
            this.addVertex(vertex2)
        }

        this.adj[vertex1].add(vertex2)
        this.adj[vertex2].add(vertex1)
    }

    display(){
        for(let x in this.adj){
            console.log(`${x} --> ${[...this.adj[x]]}`);
        }
    }
}


let graph = new Graphs();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C");
graph.addEdge("A","D")
graph.addEdge("A","B")
graph.addEdge("A","C")

console.log(graph.adj);
graph.display()