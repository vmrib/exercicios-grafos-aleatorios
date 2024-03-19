import { addEdge, createGraph, type Graph } from "./graph";

const gnmGraph = (n: number, m: number): Graph => {
  const graph = createGraph(n);
  let edges = 0;
  while (edges < m) {
    const u = Math.floor(Math.random() * n);
    const v = Math.floor(Math.random() * n);

    if (u === v) continue;
    if (graph.adjList[u * n + v] === 0) {
      addEdge(graph, u, v);
      edges++;
    }
  }
  return graph;
};
