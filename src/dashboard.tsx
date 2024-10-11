import Card from "./components/card";

const Dashboard = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          <Card title="Bubble Sort" route="/bubblesort" />
          <Card title="Merge Sort" route="/mergesort" />
          <Card title="Heap Sort" route="/heapsort" />
          <Card title="A Star" route="/astar" />
          <Card title="Binary Search" route="/binaysearch" />
          <Card title="Depth First Search" route="/dfs" />
          <Card title="Breadth First Search" route="/bfs" />
          <Card title="Bellman Ford" route="/bellmanford" />
          <Card
            title="Rate Limiting Middleware"
            route="/rateLimitingMiddleware"
          />
          <Card title="Debounce Function" route="/debounceFunction" />
          <Card title="Chaining Promises" route="/chainingPromises" />
          <Card title="Dijkstra Algorithm" route="/dijkstraalgorithm" />
          <Card title="Jwt Authentication Flow" route="/jwtauthentication" />
          <Card title="Thread Synchronization" route="/threadsynchronization" />
          <Card title="Thread Synchronization Java" route="/threadsynchronizationJava" />

          <Card title="Fetch API" route="/fetchAPI" />
          <Card title="Axios" route="/axios" />
          <Card title="XMLHttpRequest" route="/xmlhttprequest" />
          <Card title="WebSocket" route="/WebSocket" />
          <Card title="Blowfish Cipher" route="/blowfishcipher" />
          <Card title="Hill Cipher" route="/hillcipher" />
          <Card title="List Comprehension" route="/listcomprehension" />
          <Card title="Web Scraper" route="/Web-scraper" />
          <Card title="Affine Cipher" route="/affine-cipher" />
          <Card title="Caeser Cipher" route="/caesercipher" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
