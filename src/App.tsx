import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "./components/box/Box";
import Navbar from "./components/Navbar";
import Dashboard from "./dashboard";
import Footer from "./components/Footer";
import { useState } from "react";

// Import all components here
import BubbleSort from "./snippets/C++/bubbleSort";
import MergeSort from "./snippets/C++/MergeSort";
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
import PlayfairCipher from "./snippets/Ciphers/PlayfairCipher";
import ListComprehension from "./snippets/Python/Listcomprehension";
import WebScraper from "./snippets/Python/Web-scraper";
import AffineCipher from "./snippets/Ciphers/Affine-cipher";
import CaeserCipher from "./snippets/Ciphers/CaeserCipher";
import OAuth2_Authorization from "./snippets/javascript/OAuth2_Authorization";
import ChaChaCipher20 from "./snippets/Ciphers/ChaCha20-cipher";
import VigenereCipher from "./snippets/Ciphers/VigenereCipher";
import SHA3Hash from "./snippets/Algorithm/SHA3Hash";
import AESComponent from "./snippets/Algorithm/AES";
import VernamCipher from "./snippets/Ciphers/VernamCipher";
import DESCipher from "./snippets/Ciphers/Data-encryption-standard";
import DiffieHellman from "./snippets/Ciphers/DiffieHellman";
import TwofishCipher from "./snippets/Ciphers/twoFishCipher";
import EllipticCurveCryptography from "./snippets/Ciphers/ellipticCurve";
import TripleDES from "./snippets/Ciphers/tripleDES";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Define routes in an array of objects
  const routes = [
    { path: "/", element: <Dashboard searchTerm={searchTerm} /> },
    { path: "/bubblesort", element: <BubbleSort /> },
    { path: "/mergesort", element: <MergeSort /> },
    { path: "/astar", element: <AStar /> },
    { path: "/binarysearch", element: <BinarySearch /> },
    { path: "/dfs", element: <DepthFirstSearch /> },
    { path: "/bfs", element: <BreadthFirstSearch /> },
    { path: "/bellmanford", element: <BellmanFordCode /> },
    {
      path: "/rateLimitingMiddleware",
      element: <RateLimitingMiddlewareExpress />,
    },
    { path: "/debounceFunction", element: <DebounceFunction /> },
    { path: "/chainingPromises", element: <ChainingProimises /> },
    { path: "/heapSort", element: <HeapSort /> },
    { path: "/dijkstraalgorithm", element: <DijkstraAlgorithm /> },
    { path: "/jwtauthentication", element: <JWTAuthenticationFlow /> },
    {
      path: "/threadsynchronization",
      element: <AdvancedMultiLangThreadSynchronization />,
    },
    { path: "/fetchAPI", element: <FetchAPICode /> },
    { path: "/axios", element: <AxiosCode /> },
    { path: "/xmlhttprequest", element: <XMLHttpRequestCode /> },
    { path: "/WebSocket", element: <WebSocket /> },
    { path: "/OAuth2_Authorization", element: <OAuth2_Authorization /> },
    { path: "/checkPalindrome", element: <PalindromeChecker /> },
    { path: "/blowfishcipher", element: <BlowfishCipher /> },
    { path: "/hillcipher", element: <HillCipher /> },
    { path: "/playfaircipher", element: <PlayfairCipher /> },
    { path: "/chacha_cipher20", element: <ChaChaCipher20 /> },
    { path: "/listcomprehension", element: <ListComprehension /> },
    { path: "/Web-scraper", element: <WebScraper /> },
    { path: "/affine-cipher", element: <AffineCipher /> },
    { path: "/caesercipher", element: <CaeserCipher /> },
    { path: "/vigenere-cipher", element: <VigenereCipher /> },
    { path: "/sha3-hash", element: <SHA3Hash /> },
    { path: "/aes", element: <AESComponent /> },
    { path: "/vernam-cipher", element: <VernamCipher /> },
    { path: "/des", element: <DESCipher /> },
    { path: "/diffiehellman", element: <DiffieHellman /> },
    { path: "/twofish", element: <TwofishCipher /> },
    { path: "/elliptic", element: <EllipticCurveCryptography /> },
    { path: "/tripleDES", element: <TripleDES /> },
  ];

  return (
    <Router>
      <Box>
        <div className="w-full flex flex-col items-center overflow-x-hidden">
          <Navbar setSearchTerm={setSearchTerm} />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Footer />
        </div>
      </Box>
    </Router>
  );
};

export default App;
