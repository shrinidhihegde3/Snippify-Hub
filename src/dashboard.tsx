import Card from "./components/card";

const Dashboard = ({ searchTerm }: { searchTerm: string }) => {
  const cards = [
    { title: "Bubble Sort", route: "/bubblesort" },
    { title: "Merge Sort", route: "/mergesort" },
    { title: "Heap Sort", route: "/heapsort" },
    { title: "A Star", route: "/astar" },
    { title: "ChaCha20 Cipher", route: "/chacha_cipher20" },
    { title: "Binary Search", route: "/binarysearch" },
    { title: "Depth First Search", route: "/dfs" },
    { title: "Breadth First Search", route: "/bfs" },
    { title: "Bellman Ford", route: "/bellmanford" },
    { title: "Rate Limiting Middleware", route: "/rateLimitingMiddleware" },
    { title: "Debounce Function", route: "/debounceFunction" },
    { title: "Chaining Promises", route: "/chainingPromises" },
    { title: "Dijkstra Algorithm", route: "/dijkstraalgorithm" },
    { title: "Jwt Authentication Flow", route: "/jwtauthentication" },
    { title: "Thread Synchronization", route: "/threadsynchronization" },
    { title: "Fetch API", route: "/fetchAPI" },
    { title: "Axios", route: "/axios" },
    { title: "XMLHttpRequest", route: "/xmlhttprequest" },
    { title: "WebSocket", route: "/WebSocket" },
    { title: "Blowfish Cipher", route: "/blowfishcipher" },
    { title: "Hill Cipher", route: "/hillcipher" },
    { title: "List Comprehension", route: "/listcomprehension" },
    { title: "Web Scraper", route: "/Web-scraper" },
    { title: "Affine Cipher", route: "/affine-cipher" },
    { title: "Caeser Cipher", route: "/caesercipher" },
    { title: "Vigenère Cipher", route: "/vigenere-cipher" },
    { title: "SHA-3 Hashing Algorithm", route: "/sha3-hash" },
    { title: "OAuth2", route: "/OAuth2_Authorization" },
    { title: "Advanced Encryption Standard (AES)", route: "/aes" },
    { title: "Playfair Cipher", route: "/playfaircipher" },
    { title: "Vernam Cipher (One-Time Pad)", route: "/vernam-cipher" }
  ];

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm)
  );
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="px-10 md:px-44 py-14 flex flex-col items-center text-center">
          <h1 className="font-bold text-3xl md:text-5xl py-10">Welcome to SnippyfyHub</h1>
          <p className="text-base md:text-lg lg:text-xl">
            Welcome to SnippifyHub 🤖✨—the ultimate hub for all things algorithms! Whether you're diving into sorting 🌀, searching 🔍, cryptography 🛡️, or pathfinding 🛤️, we’ve got you covered with in-depth explanations, hands-on sample tests, and clean code in both Java ☕ and Python 🐍. Each algorithm is broken down step by step, making it easy to understand and apply. Ready to geek out and level up your coding game? 💻🚀 Explore, test, and master the algorithms that power the digital world!
          </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {filteredCards.map((card) => (
            <Card key={card.title} title={card.title} route={card.route} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
