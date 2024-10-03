import CodeSnippet from "../../components/codeSnippet";

const BreadthFirstSearch = () => {
  const bfsCppCode = `
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

  const bfsJavaScriptCode = `
  // JavaScript implementation of Breadth First Search (BFS)
function bfs(start, adj) {
    const visited = new Array(adj.length).fill(false);
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node);

        adj[node].forEach(neighbor => {
            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
            }
        });
    }
}

const adj = [
    [1, 2],
    [0, 3, 4],
    [0],
    [1],
    [1],
];

const startNode = 0;
console.log("BFS traversal starting from node", startNode + ":");
bfs(startNode, adj);
  `;

  const bfsJavaCode = `
  // Java program to demonstrate Breadth First Search (BFS)
import java.util.*;

public class BFS {
    public static void bfs(int start, List<List<Integer>> adj, boolean[] visited) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(start);
        visited[start] = true;

        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");

            for (int neighbor : adj.get(node)) {
                if (!visited[neighbor]) {
                    queue.add(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
    }

    public static void main(String[] args) {
        int vertices = 5;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adj.add(new ArrayList<>());
        }

        adj.get(0).add(1); adj.get(0).add(2);
        adj.get(1).add(0); adj.get(1).add(3); adj.get(1).add(4);
        adj.get(2).add(0);
        adj.get(3).add(1);
        adj.get(4).add(1);

        boolean[] visited = new boolean[vertices];
        int startNode = 0;
        System.out.println("BFS traversal starting from node " + startNode + ":");
        bfs(startNode, adj, visited);
    }
}
  `;

  const bfsPythonCode = `
  # Python program to demonstrate Breadth First Search (BFS)
from collections import deque

def bfs(start, adj):
    visited = [False] * len(adj)
    queue = deque([start])
    visited[start] = True

    while queue:
        node = queue.popleft()
        print(node, end=' ')

        for neighbor in adj[node]:
            if not visited[neighbor]:
                queue.append(neighbor)
                visited[neighbor] = True

if __name__ == "__main__":
    adj = [
        [1, 2],
        [0, 3, 4],
        [0],
        [1],
        [1]
    ]

    startNode = 0
    print("BFS traversal starting from node", startNode, ":")
    bfs(startNode, adj)
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Breadth First Search Code Snippets</h1>
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
            Copy the code into your preferred compiler or IDE for the language of your choice.
          </p>
        </div>

        <h2 className="text-4xl font-semibold mb-2">C++ Code</h2>
        <CodeSnippet code={bfsCppCode} language="cpp" />

        <h2 className="text-4xl font-semibold mb-2">JavaScript Code</h2>
        <CodeSnippet code={bfsJavaScriptCode} language="javascript" />

        <h2 className="text-4xl font-semibold mb-2">Java Code</h2>
        <CodeSnippet code={bfsJavaCode} language="java" />

        <h2 className="text-4xl font-semibold mb-2">Python Code</h2>
        <CodeSnippet code={bfsPythonCode} language="python" />
      </div>
    </div>
  );
};

export default BreadthFirstSearch;
