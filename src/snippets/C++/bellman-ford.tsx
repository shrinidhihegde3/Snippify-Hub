import CodeSnippet from "../../components/codeSnippet";

const BellmanFordCode = () => {
  const exampleCode = `
#include <iostream>
#include <vector>
#include <climits>

using namespace std;

// Structure to represent a weighted edge in the graph
struct Edge {
    int src, dest, weight;
};

// Function to run Bellman-Ford algorithm
void bellmanFord(vector<Edge>& edges, int V, int src) {
    // Initialize distance of all vertices as infinite.
    vector<int> dist(V, INT_MAX);
    dist[src] = 0;

    // Relax all edges V-1 times.
    for (int i = 1; i <= V - 1; i++) {
        for (auto& edge : edges) {
            int u = edge.src;
            int v = edge.dest;
            int weight = edge.weight;
            if (dist[u] != INT_MAX && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
            }
        }
    }

    // Check for negative-weight cycles.
    for (auto& edge : edges) {
        int u = edge.src;
        int v = edge.dest;
        int weight = edge.weight;
        if (dist[u] != INT_MAX && dist[u] + weight < dist[v]) {
            cout << "Graph contains negative weight cycle" << endl;
            return;
        }
    }

    // Print distances from the source
    cout << "Vertex Distance from Source " << src << ":" << endl;
    for (int i = 0; i < V; i++) {
        if (dist[i] == INT_MAX) {
            cout << i << " : " << "INFINITY" << endl;
        } else {
            cout << i << " : " << dist[i] << endl;
        }
    }
}

int main() {
    int V, E, src;
    
    // Input number of vertices and edges
    cout << "Enter the number of vertices: ";
    cin >> V;
    cout << "Enter the number of edges: ";
    cin >> E;

    vector<Edge> edges(E);

    // Input the edges with source, destination and weight
    cout << "Enter the edges (source, destination, weight): " << endl;
    for (int i = 0; i < E; i++) {
        cout << "Edge " << i+1 << ": ";
        cin >> edges[i].src >> edges[i].dest >> edges[i].weight;
    }

    // Input the source vertex
    cout << "Enter the source vertex: ";
    cin >> src;

    // Run Bellman-Ford algorithm
    bellmanFord(edges, V, src);

    return 0;
}
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Bellman-Ford Algorithm in C++</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            The Bellman-Ford algorithm is used for finding the shortest path from a source node to all other nodes in a graph, especially when there are negative weight edges. It's slower compared to algorithms like Dijkstra's but can handle graphs with negative weight cycles.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more details on graph algorithms, you can refer to the book{" "}
            <em>Introduction to Algorithms</em> by Cormen, Leiserson, Rivest, and Stein.
            You can also check out the{" "}
            <a
              href="https://en.cppreference.com/w/cpp/algorithm"
              className="text-blue-400 hover:underline"
            >
              C++ Algorithm Library
            </a>{" "}
            for additional algorithms related to graphs and shortest paths.
          </p>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            Copy the code into any C++ compiler or run it using an IDE such as Code::Blocks, CLion, or VS Code. This program accepts a user-defined number of vertices and edges and implements the Bellman-Ford algorithm to find the shortest paths. The output will include the distances from the source vertex to all other vertices.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of the <strong>Bellman-Ford</strong> algorithm in C++. The <code>bellmanFord</code> function computes the shortest distances, and it checks for negative-weight cycles.
        </p>
      </div>
      <CodeSnippet code={exampleCode} language="cpp" />
    </div>
  );
};

export default BellmanFordCode;
