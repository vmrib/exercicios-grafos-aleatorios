export type Edge = 0 | 1;

export type Graph = {
  n: number;
  adjList: Edge[];
};

export const createGraph = (n: number): Graph => {
  return {
    n,
    adjList: Array(n * n).fill(0),
  };
};

export const addEdge = (graph: Graph, u: number, v: number): Graph => {
  graph.adjList[u * graph.n + v] = 1;
  graph.adjList[v * graph.n + u] = 1;
  return graph;
};
