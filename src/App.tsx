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
import HeapSort from "./snippets/C++/heapSort";
import DijkstraAlgorithm from "./snippets/Algorithm/DijkstraAlgorithm";
import JWTAuthenticationFlow from "./snippets/javascript/JwtAuthenticationFlow";
import AdvancedMultiLangThreadSynchronization from "./snippets/MultiLanguage/ThreadSynchronization";
import FetchAPICode from "./snippets/web/fetchAPI";
import AxiosCode from "./snippets/web/axios";
import XMLHttpRequestCode from "./snippets/web/XMLHttpRequest";
import WebSocket from "./snippets/javascript/WebSocket";
import PalindromeChecker from "./snippets/palindromeChecker/palindrome";
import BreadthFirstSearch from "./snippets/C++/BreadthFirstSearch";
import BlowfishCipher from "./snippets/Ciphers/BlowfishCipher";
import HillCipher from "./snippets/Ciphers/HillCipher";
import ListComprehension from "./snippets/Python/Listcomprehension";
import WebScraper from "./snippets/Python/Web-scraper";
import AffineCipher from "./snippets/Ciphers/Affine-cipher";
import CaeserCipher from "./snippets/Ciphers/CaeserCipher";
import OAuth2_Authorization from "./snippets/javascript/OAuth2_Authorization";

import { useState } from "react";
import ChaChaCipher20 from "./snippets/Ciphers/ChaCha20-cipher";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <Box>
        <div className="w-full flex flex-col items-center">
          <Navbar setSearchTerm={setSearchTerm} />
          <Routes>
            <Route path="/" element={<Dashboard searchTerm={searchTerm} />} />
            <Route path="/bubblesort" element={<BubbleSort />} />
            <Route path="/mergesort" element={<MergeSort />} />
            <Route path="/astar" element={<AStar />} />
            <Route path="/binaysearch" element={<BinarySearch />} />
            <Route path="/dfs" element={<DepthFirstSearch />} />
            <Route path="/bfs" element={<BreadthFirstSearch />} />
            <Route path="/bellmanford" element={<BellmanFordCode />} />
            <Route
              path="/rateLimitingMiddleware"
              element={<RateLimitingMiddlewareExpress />}
            />
            <Route path="/debounceFunction" element={<DebounceFunction />} />
            <Route path="/chainingPromises" element={<ChainingProimises />} />
            <Route path="/heapSort" element={<HeapSort />} />
            <Route path="/dijkstraalgorithm" element={<DijkstraAlgorithm />} />
            <Route
              path="/jwtauthentication"
              element={<JWTAuthenticationFlow />}
            />
            <Route
              path="/threadsynchronization"
              element={<AdvancedMultiLangThreadSynchronization />}
            />
            <Route path="/fetchAPI" element={<FetchAPICode />} />
            <Route path="/axios" element={<AxiosCode />} />
            <Route path="/xmlhttprequest" element={<XMLHttpRequestCode />} />
            <Route path="/WebSocket" element={<WebSocket />} />
            <Route path="/OAuth2_Authorization" element={<OAuth2_Authorization/>} />
            <Route path="/checkPalindrome" element={<PalindromeChecker />} />
            <Route path="/blowfishcipher" element={<BlowfishCipher />} />
            <Route path="/hillcipher" element={<HillCipher />} />
            <Route path="/chacha_cipher20" element={<ChaChaCipher20 />} />
            <Route path="/listcomprehension" element={<ListComprehension />} />
            <Route path="/Web-scraper" element={<WebScraper />} />
            <Route path="/affine-cipher" element={<AffineCipher />} />
            <Route path="/caesercipher" element={<CaeserCipher />} />
          </Routes>
        </div>
      </Box>
    </Router>
  );
};

export default App;
