import CodeSnippet from "../../components/codeSnippet";

const DijkstraAlgorithm = () => {
  const exampleCode = `
  // C++ program for implementation of Dijkstra's Algorithm
#include <bits/stdc++.h>
using namespace std;

// Function to find the vertex with minimum distance value
int minDistance(vector<int>& dist, vector<bool>& sptSet, int V) {
    int min = INT_MAX, min_index;

    for (int v = 0; v < V; v++)
        if (!sptSet[v] && dist[v] <= min)
            min = dist[v], min_index = v;

    return min_index;
}

// Function to print the shortest distance from the source
void printSolution(vector<int>& dist, int V) {
    cout << "Vertex \t Distance from Source\\n";
    for (int i = 0; i < V; i++)
        cout << i << " \t\t " << dist[i] << "\\n";
}

// Function that implements Dijkstra's single source shortest path algorithm
// for a graph represented using adjacency matrix representation
void dijkstra(vector<vector<int>>& graph, int src, int V) {
    vector<int> dist(V); // Output array. dist[i] holds the shortest distance from src to i
    vector<bool> sptSet(V); // sptSet[i] is true if vertex i is included in shortest path tree

    // Initialize all distances as INFINITE and sptSet[] as false
    for (int i = 0; i < V; i++)
        dist[i] = INT_MAX, sptSet[i] = false;

    // Distance of source vertex from itself is always 0
    dist[src] = 0;

    // Find shortest path for all vertices
    for (int count = 0; count < V - 1; count++) {
        // Pick the minimum distance vertex from the set of vertices
        // not yet processed. u is always equal to src in the first iteration.
        int u = minDistance(dist, sptSet, V);

        // Mark the picked vertex as processed
        sptSet[u] = true;

        // Update dist value of the adjacent vertices of the picked vertex.
        for (int v = 0; v < V; v++)
            // Update dist[v] only if is not in sptSet, there is an edge from u to v,
            // and total weight of path from src to v through u is smaller than current value of dist[v]
            if (!sptSet[v] && graph[u][v] && dist[u] != INT_MAX
                && dist[u] + graph[u][v] < dist[v])
                dist[v] = dist[u] + graph[u][v];
    }

    // Print the constructed distance array
    printSolution(dist, V);
}

int main() {
    // Example graph represented by an adjacency matrix
    vector<vector<int>> graph = {
        { 0, 10, 0, 30, 100 },
        { 10, 0, 50, 0, 0 },
        { 0, 50, 0, 20, 10 },
        { 30, 0, 20, 0, 60 },
        { 100, 0, 10, 60, 0 }
    };

    // Number of vertices
    int V = 5;

    // Run Dijkstra's algorithm from vertex 0 (the source)
    dijkstra(graph, 0, V);

    return 0;
}
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Dijkstra's Algorithm Code in C++</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            Dijkstra's algorithm is used to find the shortest paths from a single
            source node to all other nodes in a weighted graph. It is useful in
            networking, GPS navigation, and any scenario where the shortest path
            is required. The time complexity is <strong>O(V²)</strong> for this 
            adjacency matrix implementation, where V is the number of vertices.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more details on graph algorithms, you can refer to the book{" "}
            <em>Introduction to Algorithms</em> by Cormen, Leiserson, Rivest,
            and Stein. More information on graph algorithms in C++ can also be
            found on the{" "}
            <a
              href="https://en.cppreference.com/w/cpp/algorithm"
              className="text-blue-400 hover:underline"
            >
              C++ Algorithm Library
            </a>.
          </p>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            Copy the code into a C++ compiler, such as GCC, or run it using an
            IDE like Code::Blocks or CLion. The program will calculate and print
            the shortest path from the source vertex (in this case, vertex 0) to
            all other vertices.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of <strong>Dijkstra's Algorithm</strong> in C++. 
          The <code>dijkstra</code> function finds the shortest path from a source 
          vertex to all other vertices using an adjacency matrix.
        </p>
      </div>
      <CodeSnippet code={exampleCode} language="cpp" />
    </div>
  );
};

export default DijkstraAlgorithm;
