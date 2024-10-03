import CodeSnippet from "../../components/codeSnippet";

const WebSocket = () => {
  const clientSideCode = `
// Client-Side WebSocket implementation
const socket = new WebSocket('ws://localhost:8080');

// Event listener for when the connection opens
socket.addEventListener('open', (event) => {
    console.log('Connected to WebSocket server');
    socket.send('Hello from the client!');
});

// Event listener for receiving messages from the server
socket.addEventListener('message', (event) => {
    console.log('Message from server:', event.data);
});

// Handle WebSocket close event
socket.addEventListener('close', (event) => {
    console.log('WebSocket connection closed:', event);
});

// Example function to send messages to the server
function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(message);
    } else {
        console.error('WebSocket connection is not open');
    }
});
`;

const serverSideCode = `
// Server-Side WebSocket implementation (Node.js)
// Requires 'ws' library: npm install ws

const WebSocket = require('ws');

// Create a WebSocket server listening on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    // Send a welcome message to the client
    ws.send('Hello from the server!');

    // Listen for messages from the client
    ws.on('message', (message) => {
        console.log('Received from client:', message);
        // Respond back to the client
        ws.send(\`Server received: \${message}\`);
    });

    // Handle when the client disconnects
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
`;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">
          WebSocket implementation in JavaScript
        </h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            WebSockets allow real-time communication between a client (like a
            web browser) and a server. Unlike regular HTTP requests, WebSockets
            keep the connection open, so data can be sent and received at any
            time without reloading the page. This is called bidirectional
            communication because both the client and server can send messages
            to each other. The connection is full-duplex, meaning data can flow
            both ways at the same time, making WebSockets great for things like
            live chat or real-time games.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more information on WebSocket, you can refer to the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
              className="text-blue-400 hover:underline"
            >
              MDN WebSocket API documentation
            </a>
            {". "}
            You can also check out the
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"
              className="text-blue-400 hover:underline"
            >
              {" "}
              WebSocket documentation
            </a>{" "}
            for detailed information on how to use WebSockets effectively in
            your applications.
          </p>
          <br />

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            You can use the provided WebSocket implementation in any JavaScript
            environment, such as a browser's developer console, or include it in
            a script file for a web project. If you're using an editor like VS
            Code, you can run the client-side code in a browser, and for the
            server-side WebSocket, you can run it using Node.js.
          </p>
        </div>
        <br />
        <p className="mb-4">
          Below is an implementation of <strong>WebSockets</strong> in
          JavaScript. The client establishes a WebSocket connection to the
          server, allowing real-time, bidirectional communication where both
          parties can send and receive messages without needing to reopen the
          connection.
        </p>
      </div>
      <h2 className="text-3xl font-semibold mb-2">Client-Side Code</h2>
      <CodeSnippet code={clientSideCode} language="javascript" />

      <h2 className="text-3xl font-semibold mt-8 mb-2">Server-Side Code</h2>
      <CodeSnippet code={serverSideCode} language="javascript" />
    </div>
  );
};

export default WebSocket;
