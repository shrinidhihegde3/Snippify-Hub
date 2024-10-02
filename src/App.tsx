import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "./components/box/Box";
import BubbleSort from "./snippets/C++/bubbleSort";
import MergeSort from "./snippets/C++/MergeSort";
import Navbar from "./components/Navbar";
import Dashboard from "./dashboard";
import AStar from "./snippets/Algorithm/AStar";
import BinarySearch from "./snippets/Algorithm/binarysearch";
import DepthFirstSearch from "./snippets/Algorithm/depthfirstsearch";
import BellmanFordCode from "./snippets/C++/bellman-ford";
import RateLimitingMiddlewareExpress from "./snippets/javascript/RateLimitMiddlewareExpress";
import DebounceFunction from "./snippets/javascript/DebounceFunction";
import ChainingProimises from "./snippets/javascript/ChainingPromises";
import FetchAPICode from "./snippets/web/fetchAPI";
import AxiosCode from "./snippets/web/axios";
import XMLHttpRequestCode from "./snippets/web/XMLHttpRequest";

const App = () => {
  return (
    <Router>
      <Box>
        <div className="w-full flex flex-col items-center">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bubblesort" element={<BubbleSort />} />
            <Route path="/mergesort" element={<MergeSort />} />
            <Route path="/astar" element={<AStar />} />
            <Route path="/binaysearch" element={<BinarySearch />} />
            <Route path="/dfs" element={<DepthFirstSearch />} />
            <Route path="/bellmanford" element={<BellmanFordCode />} />
            <Route
              path="/rateLimitingMiddleware"
              element={<RateLimitingMiddlewareExpress />}
            />
            <Route path="/debounceFunction" element={<DebounceFunction />} />
            <Route path="/chainingPromises" element={<ChainingProimises />} />
            <Route path="/fetchAPI" element={<FetchAPICode />} />
            <Route path="/axios" element={<AxiosCode />} />
            <Route path="/xmlhttprequest" element={<XMLHttpRequestCode />} />
          </Routes>
        </div>
      </Box>
    </Router>
  );
};

export default App;
