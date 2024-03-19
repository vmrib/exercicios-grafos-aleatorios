import { addEdge, createGraph, type Graph } from "./graph";

const gnpGraph = (n: number, p: number): Graph => {
  const graph = createGraph(n);
  for (let u = 0; u < n; u++) {
    for (let v = u + 1; v < n; v++) {
      if (Math.random() < p) {
        addEdge(graph, u, v);
      }
    }
  }
  return graph;
};
