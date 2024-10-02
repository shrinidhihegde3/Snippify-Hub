import CodeSnippet from "../../components/codeSnippet";

const AStar = () => {
  // Object containing code snippets for each language
  const exampleCode = {
    java: `
// Java implementation of iterative Binary Search

import java.util.*;

class Node implements Comparable<Node> {
    public int[] position;
    public int gCost;
    public int hCost;
    public int fCost;

    public Node(int[] position, int gCost, int hCost) {
        this.position = position;
        this.gCost = gCost;
        this.hCost = hCost;
        this.fCost = gCost + hCost;
    }

    @Override
    public int compareTo(Node other) {
        return Integer.compare(this.fCost, other.fCost);
    }
}

public class AStarPathfinding {
    
    public static int heuristic(int[] a, int[] b) {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    }

    public static List<int[]> astar(int[] start, int[] goal, int[][] grid) {
        PriorityQueue<Node> openSet = new PriorityQueue<>();
        openSet.add(new Node(start, 0, heuristic(start, goal)));
        
        Map<String, int[]> cameFrom = new HashMap<>();
        Map<String, Integer> gCosts = new HashMap<>();
        gCosts.put(Arrays.toString(start), 0);
        
        while (!openSet.isEmpty()) {
            Node currentNode = openSet.poll();
            int[] currentPos = currentNode.position;
            
            if (Arrays.equals(currentPos, goal)) {
                List<int[]> path = new ArrayList<>();
                while (cameFrom.containsKey(Arrays.toString(currentPos))) {
                    path.add(currentPos);
                    currentPos = cameFrom.get(Arrays.toString(currentPos));
                }
                Collections.reverse(path);
                return path;
            }
            
            int[][] neighbors = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
            for (int[] direction : neighbors) {
                int[] neighborPos = {currentPos[0] + direction[0], currentPos[1] + direction[1]};
                
                if (neighborPos[0] >= 0 && neighborPos[0] < grid.length &&
                    neighborPos[1] >= 0 && neighborPos[1] < grid[0].length &&
                    grid[neighborPos[0]][neighborPos[1]] == 0) {
                    
                    int tentativeGCost = gCosts.getOrDefault(Arrays.toString(currentPos), Integer.MAX_VALUE) + 1;
                    
                    if (tentativeGCost < gCosts.getOrDefault(Arrays.toString(neighborPos), Integer.MAX_VALUE)) {
                        cameFrom.put(Arrays.toString(neighborPos), currentPos);
                        gCosts.put(Arrays.toString(neighborPos), tentativeGCost);
                        openSet.add(new Node(neighborPos, tentativeGCost, heuristic(neighborPos, goal)));
                    }
                }
            }
        }
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        // Hardcoded grid (5x5) with obstacles
        int[][] grid = {
            {0, 0, 0, 0, 0},
            {0, 1, 1, 1, 0},
            {0, 0, 0, 1, 0},
            {0, 1, 0, 0, 0},
            {0, 0, 0, 0, 0}
        };

        // Hardcoded start and goal positions
        int[] start = {0, 0}; // Start position
        int[] goal = {4, 4};  // Goal position

        List<int[]> path = astar(start, goal, grid);

        if (!path.isEmpty()) {
            System.out.println("Path found:");
            for (int[] p : path) {
                System.out.println(Arrays.toString(p));
            }
        } else {
            System.out.println("No path found.");
        }
    }
}

    `,
    cpp: `
// C++ implementation of iterative Binary Search

#include <iostream>
#include <vector>
#include <queue>
#include <cmath>
#include <unordered_map>
#include <algorithm>

using namespace std;

struct Node {
    pair<int, int> position;
    int gCost;
    int hCost;
    int fCost;

    Node(pair<int, int> pos, int g, int h) : position(pos), gCost(g), hCost(h) {
        fCost = g + h;
    }

    bool operator<(const Node& other) const {
        return fCost > other.fCost;
    }
};

int heuristic(pair<int, int> a, pair<int, int> b) {
    return abs(a.first - b.first) + abs(a.second - b.second);
}

vector<pair<int, int>> astar(pair<int, int> start, pair<int, int> goal, vector<vector<int>>& grid) {
    priority_queue<Node> openSet;
    openSet.emplace(start, 0, heuristic(start, goal));

    unordered_map<string, pair<int, int>> cameFrom;
    unordered_map<string, int> gCosts;
    gCosts[to_string(start.first) + "," + to_string(start.second)] = 0;

    while (!openSet.empty()) {
        Node currentNode = openSet.top();
        openSet.pop();
        pair<int, int> currentPos = currentNode.position;

        if (currentPos == goal) {
            vector<pair<int, int>> path;
            while (cameFrom.find(to_string(currentPos.first) + "," + to_string(currentPos.second)) != cameFrom.end()) {
                path.push_back(currentPos);
                currentPos = cameFrom[to_string(currentPos.first) + "," + to_string(currentPos.second)];
            }
            reverse(path.begin(), path.end());
            return path;
        }

        vector<pair<int, int>> neighbors = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        for (auto& direction : neighbors) {
            pair<int, int> neighborPos = {currentPos.first + direction.first, currentPos.second + direction.second};

            if (neighborPos.first >= 0 && neighborPos.first < grid.size() &&
                neighborPos.second >= 0 && neighborPos.second < grid[0].size() &&
                grid[neighborPos.first][neighborPos.second] == 0) {

                int tentativeGCost = gCosts[to_string(currentPos.first) + "," + to_string(currentPos.second)] + 1;

                if (tentativeGCost < gCosts[to_string(neighborPos.first) + "," + to_string(neighborPos.second)]) {
                    cameFrom[to_string(neighborPos.first) + "," + to_string(neighborPos.second)] = currentPos;
                    gCosts[to_string(neighborPos.first) + "," + to_string(neighborPos.second)] = tentativeGCost;
                    openSet.emplace(neighborPos, tentativeGCost, heuristic(neighborPos, goal));
                }
            }
        }
    }

    return {};
}

int main() {
    // Hardcoded grid (5x5) with obstacles
    vector<vector<int>> grid = {
        {0, 0, 0, 0, 0},
        {0, 1, 1, 1, 0},
        {0, 0, 0, 1, 0},
        {0, 1, 0, 0, 0},
        {0, 0, 0, 0, 0}
    };

    // Hardcoded start and goal positions
    pair<int, int> start = {0, 0};  // Start position
    pair<int, int> goal = {4, 4};   // Goal position

    vector<pair<int, int>> path = astar(start, goal, grid);

    if (!path.empty()) {
        cout << "Path found:\n";
        for (auto& p : path) {
            cout << "(" << p.first << ", " << p.second << ")\n";
        }
    } else {
        cout << "No path found.\n";
    }

    return 0;
}

    `,
    python: `# Python implementation of iterative Binary Search

import heapq

class Node:
    def __init__(self, position, g_cost=0, h_cost=0):
        self.position = position  # (x, y) coordinates
        self.g_cost = g_cost  # Cost from start to current node
        self.h_cost = h_cost  # Heuristic cost to goal
        self.f_cost = g_cost + h_cost  # Total cost

    def __lt__(self, other):
        return self.f_cost < other.f_cost

def heuristic(a, b):
    """Calculate the Manhattan distance heuristic."""
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

def astar(start, goal, grid):
    open_set = []
    heapq.heappush(open_set, Node(start))

    came_from = {}
    g_costs = {start: 0}
    f_costs = {start: heuristic(start, goal)}

    while open_set:
        current_node = heapq.heappop(open_set)
        current_pos = current_node.position

        # Check if we've reached the goal
        if current_pos == goal:
            path = []
            while current_pos in came_from:
                path.append(current_pos)
                current_pos = came_from[current_pos]
            return path[::-1]  # Return reversed path

        # Generate neighbors (4-directional movement)
        neighbors = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        for dx, dy in neighbors:
            neighbor_pos = (current_pos[0] + dx, current_pos[1] + dy)

            # Check if the neighbor is within bounds and not an obstacle
            if (0 <= neighbor_pos[0] < len(grid) and
                    0 <= neighbor_pos[1] < len(grid[0]) and
                    grid[neighbor_pos[0]][neighbor_pos[1]] == 0):  # 0 means walkable

                # Calculate costs
                tentative_g_cost = g_costs[current_pos] + 1  # Assuming cost between neighbors is 1

                # If this path to neighbor is better, record it
                if tentative_g_cost < g_costs.get(neighbor_pos, float('inf')):
                    came_from[neighbor_pos] = current_pos
                    g_costs[neighbor_pos] = tentative_g_cost
                    f_costs[neighbor_pos] = tentative_g_cost + heuristic(neighbor_pos, goal)

                    # Add neighbor to open set if it's not already there
                    if neighbor_pos not in [node.position for node in open_set]:
                        heapq.heappush(open_set, Node(neighbor_pos, tentative_g_cost, heuristic(neighbor_pos, goal)))

    return []  # No path found

# Example usage
if __name__ == "__main__":
    # 0 = walkable, 1 = obstacle
    grid = [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]

    start = (0, 0)  # Starting position
    goal = (4, 4)   # Goal position
    path = astar(start, goal, grid)

    if path:
        print("Path found:", path)
    else:
        print("No path found.")

    `,
  };

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">A* Pathfinding Algorithm</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
          The A* algorithm is an efficient pathfinding and graph traversal algorithm used for finding the 
          shortest path in weighted graphs. With a time complexity that varies based on the heuristic used, 
          it is particularly suited for applications in robotics, video games, and navigation systems, 
          where it effectively balances optimal pathfinding with computational efficiency. A* is ideal 
          for scenarios that require dynamic obstacle avoidance and real-time path adjustments.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
          For more information on the A* algorithm, refer to the book Artificial Intelligence for Games by Millington and Funge. 
            <br />
            Additionally, Java and C++ provide built-in support for pathfinding in libraries like AWT (Java) and Boost Graph Library (C++), which can be explored in the official documentation:
            <br />
            <a
              href="https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html"
              className="text-blue-400 hover:underline"
            >
              Java Pathfinding Documentation
            </a>
            <br />
            <a
              href="https://www.boost.org/doc/libs/1_86_0/libs/graph/doc/index.html"
              className="text-blue-400 hover:underline"
            >
              C++ Boost Graph Library Documentation
            </a>
            <br></br>
            For Python, the networkx library provides pathfinding algorithms including A*:
            <br />
            <a
              href="https://networkx.org/documentation/stable/reference/index.html"
              className="text-blue-400 hover:underline"
            >
              Python networkx A* Documentation
            </a>
          </p>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            Copy the code into any compiler or IDE for the respective language:
            <ul>
              <li>For Java: Use the Java Development Kit (JDK), Eclipse, IntelliJ IDEA, or NetBeans.</li>
              <li>For C++: Use a C++ compiler like GCC, or an IDE like Code::Blocks or CLion.</li>
              <li>For Python: Use any Python IDE or text editor like PyCharm, VSCode, or even an online Python compiler.</li>
            </ul>
            <br></br>
            The program implements the A* pathfinding algorithm on a predefined grid to find the shortest path 
            from a start position to a goal while avoiding obstacles. 
            It will print the path coordinates or a message if no path exists, 
            showcasing its effectiveness in real-time navigation scenarios.
          </p>
        </div>

        <h2 className="text-4xl font-semibold mb-2 mt-8">Java Code Example</h2>
        <CodeSnippet code={exampleCode.java} language="java" />

        <div className="my-6" /> {/* Spacer between code examples */}

        <h2 className="text-4xl font-semibold mb-2">C++ Code Example</h2>
        <CodeSnippet code={exampleCode.cpp} language="cpp" />

        <div className="my-6" /> {/* Spacer between code examples */}

        <h2 className="text-4xl font-semibold mb-2">Python Code Example</h2>
        <CodeSnippet code={exampleCode.python} language="python" />
      </div>
    </div>
  );
};

export default AStar;
