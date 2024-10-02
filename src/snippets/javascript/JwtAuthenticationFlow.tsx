import CodeSnippet from "../../components/codeSnippet";

const JWTAuthenticationFlow = () => {
  const exampleCode = `
// Install dependencies: npm install express jsonwebtoken

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const SECRET_KEY = "your_secret_key"; // Replace with a secure secret key

// Middleware to verify JWT token
const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (token) {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }

      req.user = user; // Store user information in request object
      next(); // Proceed to the next middleware/route
    });
  } else {
    res.status(401).json({ message: "Token missing or unauthorized" });
  }
};

// Example route to generate a token (login simulation)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "user" && password === "password") {
    // Generate a JWT token with the username
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

    return res.json({ token });
  }

  res.status(403).json({ message: "Invalid username or password" });
});

// Protected route that requires JWT authentication
app.get("/protected", authenticateJWT, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// Public route
app.get("/", (req, res) => {
  res.json({ message: "This is a public route" });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">JWT-based Authentication Flow in Node.js</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            JWT (JSON Web Token) is a widely used method for securing APIs and routes in web applications. 
            This snippet shows how to protect routes using JWT tokens in a Node.js/Express app.
            It includes generating tokens and middleware for verifying them.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more information about JWT authentication, refer to 
            {" "}
            <a
              href="https://jwt.io/introduction"
              className="text-blue-400 hover:underline"
            >
              the JWT documentation
            </a>{" "}
            or the
            {" "}
            <a
              href="https://expressjs.com/"
              className="text-blue-400 hover:underline"
            >
              Express.js documentation
            </a>
            {" "} for more middleware usage.
          </p>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            Copy the code below into your Express.js server. After installing the necessary dependencies,
            you can simulate a login using a POST request to `/login`. Once authenticated, you can use the JWT token 
            in the `Authorization` header to access protected routes.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of <strong>JWT-based authentication</strong> in JavaScript for a Node.js app.
          The code includes generating tokens for user login and verifying those tokens to protect routes.
        </p>
      </div>
      <CodeSnippet code={exampleCode} language="javascript" />
    </div>
  );
};

export default JWTAuthenticationFlow;
