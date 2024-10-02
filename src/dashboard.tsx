import Card from './components/card'

const Dashboard = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          <Card title="Bubble Sort" route="/bubblesort" />
          <Card title="Merge Sort" route="/mergesort" />
          <Card title="A Star" route="/astar" />
          <Card title="Binary Search" route="/binaysearch" />
          <Card title="Depth First Search" route="/dfs" />
          <Card title="Bellman Ford" route="/bellmanford" />
          <Card title="Rate Limiting Middleware" route="/rateLimitingMiddleware" />
          <Card title="Debounce Function" route="/debounceFunction" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard