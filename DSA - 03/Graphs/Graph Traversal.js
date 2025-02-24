


class Graphs {
    constructor() {
        this.adj = {}
    }

    addVertex(v) {
        if (!this.adj[v]) {
            this.adj[v] = new Set();
        } else {
            return console.log("Already There");
        }
    }

    addEdges(v1, v2) {
        if (!this.adj[v1]) {
            this.addVertex(v1)
        }
        if (!this.adj[v2]) {
            this.addVertex(v2)
        }

        this.adj[v1].add(v2)
        this.adj[v2].add(v1)
    }

    BFS(start) {
        let queue = [start]
        let visited = new Set();
        let result = [];

        visited.add(start)

        while (queue.length) {
            let vertex = queue.shift();
            result.push(vertex);
            for (let neighbor of this.adj[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor)
                }
            }
        }
        return result

    }

    DFS(start) {
        let stack = [start];
        let visited = new Set();
        let result = [];
        visited.add(start)

        while (stack.length) {
            let vertex = stack.pop();
            result.push(vertex)

            for (let neighbor of this.adj[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor)
                }
            }
        }
        return result
    }
}


let g = new Graphs();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addEdges("A", "B");
g.addEdges("A", "C");
g.addEdges("B", "D");
g.addEdges("B", "E");
g.addEdges("C", "F");
console.log(g.adj);


console.log("---------------- > ");
console.log(g.BFS("A")); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log("---------------- > ");
console.log(g.DFS("A")); // Output: [ 'A', 'C', 'F', 'B', 'E', 'D' ]
console.log("---------------- > ");

