import CodeSnippet from "../../components/codeSnippet";

const BreadthFirstSearch = () => {
  const bfsCode = `
  // C++ program to demonstrate Breadth First Search (BFS)
#include <bits/stdc++.h>
using namespace std;

void BFS(int start, const vector<vector<int>>& adj, vector<bool>& visited) {
    queue<int> q;
    q.push(start);
    visited[start] = true;

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";

        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                q.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
}

int main() {
    int vertices = 5;
    vector<vector<int>> adj(vertices);

    adj[0] = {1, 2};
    adj[1] = {0, 3, 4};
    adj[2] = {0};
    adj[3] = {1};
    adj[4] = {1};

    vector<bool> visited(vertices, false);

    int startNode = 0;
    cout << "BFS traversal starting from node " << startNode << ": ";
    BFS(startNode, adj, visited);

    return 0;
}
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Breadth First Search Code in C++</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            Breadth First Search (BFS) is a traversal algorithm used for searching 
            and traversing graph data structures. BFS explores the neighbor nodes 
            first, before moving to the next level of nodes.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more information on graph algorithms, refer to the book{" "}
            <em>Introduction to Algorithms</em> by Cormen, Leiserson, Rivest,
            and Stein. You can also check out the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Breadth-first_search"
              className="text-blue-400 hover:underline"
              target="blank"
            >
              BFS wikipedia
            </a>{" "}
            for more methods.
          </p>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            Copy the code into any C++ compiler, such as GCC, or run it using an
            IDE like Code::Blocks or CLion. The program will perform a BFS traversal 
            starting from a predefined node.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of the <strong>Breadth First Search (BFS)</strong>{" "}
          algorithm in C++. The <code>BFS</code> function explores the graph level by 
          level, using a queue to keep track of nodes to visit.
        </p>
      </div>
      <CodeSnippet code={bfsCode} language="cpp" />
    </div>
  );
};

export default BreadthFirstSearch;
