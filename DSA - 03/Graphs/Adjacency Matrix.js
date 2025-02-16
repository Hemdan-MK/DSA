class GraphMatrix {
    constructor() {
        this.matrix = [];
        this.size = 0;
    }

    addVertex() {
        this.size++;

        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[i].push(0);
        }

        this.matrix.push(new Array(this.size).fill(0));
        return this.size - 1;
    }

    addEdge(v1, v2) {
        while (this.size <= Math.max(v1, v2)) {
            this.addVertex();
        }
        this.matrix[v1][v2] = 1;
        this.matrix[v2][v1] = 1;
    }

    printGraph() {
        console.log(this.matrix);
    }
}


let gMatrix = new GraphMatrix();
gMatrix.addEdge(0, 1);
gMatrix.addEdge(0, 2);
gMatrix.addEdge(1, 3);
gMatrix.addEdge(2, 3);
gMatrix.addEdge(5, 5);

gMatrix.printGraph();

