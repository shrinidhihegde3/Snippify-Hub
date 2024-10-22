import Card from "./components/card";

const Dashboard = ({ searchTerm }: { searchTerm: string }) => {
	const cards = [
		{ title: "Bubble Sort", route: "/bubblesort" },
		{ title: "Merge Sort", route: "/mergesort" },
		{ title: "Heap Sort", route: "/heapsort" },
		{ title: "A Star", route: "/astar" },
		{ title: "ChaCha20 Cipher", route: "/chacha_cipher20" },
		{ title: "Binary Search", route: "/binaysearch" },
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
	];

	const filteredCards = cards.filter((card) =>
		card.title.toLowerCase().includes(searchTerm)
	);
	return (
		<div>
			<div className="w-full flex flex-col items-center">
				<div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
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
					<Card
						title="Dijkstra Algorithm"
						route="/dijkstraalgorithm"
					/>
					<Card
						title="Jwt Authentication Flow"
						route="/jwtauthentication"
					/>
					<Card
						title="Thread Synchronization"
						route="/threadsynchronization"
					/>
					<Card
						title="Thread Synchronization Java"
						route="/threadsynchronizationJava"
					/>

					<Card title="Fetch API" route="/fetchAPI" />
					<Card title="Axios" route="/axios" />
					<Card title="XMLHttpRequest" route="/xmlhttprequest" />
					<Card title="WebSocket" route="/WebSocket" />
					<Card title="Blowfish Cipher" route="/blowfishcipher" />
					<Card title="Hill Cipher" route="/hillcipher" />
					<Card title="Playfair Cipher" route="/playfaircipher" />

					{filteredCards.map((card) => (
						<Card
							key={card.title}
							title={card.title}
							route={card.route}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
