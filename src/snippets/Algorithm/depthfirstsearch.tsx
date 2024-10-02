import CodeSnippet from "../../components/codeSnippet";

const DepthFirstSearch = () => {
  const cppCode = `
// C++ Implementation of Depth First Search
#include <iostream>
#include <vector>
using namespace std;

void dfs(int node, vector<bool>& visited, const vector<vector<int>>& graph) {
    visited[node] = true;
    cout << node << " ";

    for (int neighbor : graph[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, visited, graph);
        }
    }
}

int main() {
    vector<vector<int>> graph = {
        {1, 2},    // Neighbors of node 0
        {0, 3, 4}, // Neighbors of node 1
        {0},       // Neighbors of node 2
        {1},       // Neighbors of node 3
        {1}        // Neighbors of node 4
    };
    vector<bool> visited(graph.size(), false);
    dfs(0, visited, graph);
    return 0;
}
`;

  const javaCode = `
// Java Implementation of Depth First Search
import java.util.*;

public class DepthFirstSearch {
    public static void dfs(int node, boolean[] visited, List<List<Integer>> graph) {
        visited[node] = true;
        System.out.print(node + " ");

        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) {
                dfs(neighbor, visited, graph);
            }
        }
    }

    public static void main(String[] args) {
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            graph.add(new ArrayList<>());
        }
        graph.get(0).add(1);
        graph.get(0).add(2);
        graph.get(1).add(0);
        graph.get(1).add(3);
        graph.get(1).add(4);
        graph.get(2).add(0);
        graph.get(3).add(1);
        graph.get(4).add(1);

        boolean[] visited = new boolean[graph.size()];
        dfs(0, visited, graph);
    }
}
`;

  const pythonCode = `# Python Implementation of Depth First Search
def dfs(node, visited, graph):
    visited[node] = True
    print(node, end=' ')

    for neighbor in graph[node]:
        if not visited[neighbor]:
            dfs(neighbor, visited, graph)

if __name__ == "__main__":
    graph = [
        [1, 2],    # Neighbors of node 0
        [0, 3, 4], # Neighbors of node 1
        [0],       # Neighbors of node 2
        [1],       # Neighbors of node 3
        [1]        # Neighbors of node 4
    ]
    visited = [False] * len(graph)
    dfs(0, visited, graph)
`;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Depth First Search Algorithm</h1>

        

        <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
        <p className="mb-4">
          Depth First Search is a fundamental algorithm used for traversing or searching tree or graph data structures. 
          It explores as far down a branch as possible before backtracking, making it useful for tasks like maze solving, 
          topological sorting, and finding connected components.
        </p>

        <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
        <p>
          To use the Depth First Search algorithm, instantiate a graph in the required format (adjacency list) 
          and call the `dfs` function with the starting node and a list or array to track visited nodes.
        </p>

        <h2 className="text-4xl font-semibold mb-2">References</h2>
        <p>
          For more information on Depth First Search, refer to the following resources:
        </p>
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Depth-first_search" className="text-blue-400 hover:underline">
              Depth First Search - Wikipedia
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/depth-first-search-or-DFS-for-a-graph/" className="text-blue-400 hover:underline">
              Depth First Search - GeeksforGeeks
            </a>
          </li>
        </ul>
      </div>
      <h2 className="text-4xl font-semibold mb-2">C++ Implementation</h2>
        <CodeSnippet code={cppCode} language="cpp" />

        <h2 className="text-4xl font-semibold mb-2">Java Implementation</h2>
        <CodeSnippet code={javaCode} language="java" />

        <h2 className="text-4xl font-semibold mb-2">Python Implementation</h2>
        <CodeSnippet code={pythonCode} language="python" />
    </div>
  );
};

export default DepthFirstSearch;