/* import CodeSnippet from "../../components/codeSnippet";

const OAuth2_Authorization = () => {
  const exampleCode = `
// Install dependencies: npm install express passport passport-google-oauth20 express-session

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

export default OAuth2_Authorization; */

import CodeSnippet from "../../components/codeSnippet";

const OAuth2_Authorization = () => {
  const exampleCode = `
// Install dependencies: npm install express passport passport-google-oauth20 express-session

const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3000;

// Configure session middleware (necessary for passport.js)
app.use(
  session({
    secret: "your_secret_key", // Replace with a secure secret key
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize passport.js and session handling
app.use(passport.initialize());
app.use(passport.session());

// Passport.js configuration for Google OAuth2
passport.use(
  new GoogleStrategy(
    {
      clientID: "YOUR_GOOGLE_CLIENT_ID",
      clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, you can save the user profile to your database
      return done(null, profile); // Pass profile data to the session
    }
  )
);

// Serialize user info into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user info from the session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Route to start OAuth2 login with Google
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback URL for OAuth2 login
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/protected",
  })
);

// Protected route that requires authentication
app.get("/protected", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
  res.json({ message: "You have accessed a protected route", user: req.user });
});

// Logout route
app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/"); // Redirect to homepage after logout
  });
});

// Public route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the public route" });
});

// Server start
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">
          OAuth2 Authorization Code Flow in Node.js with Passport.js
        </h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            OAuth2 Authorization Code Flow is commonly used in web applications
            that need secure user authentication via third-party providers like
            Google. It simplifies the login process by redirecting users to the
            provider, where they grant access to the app. Upon authorization,
            the app receives an authorization code, which it exchanges for an
            access token to authenticate future requests. This flow ensures that
            sensitive user data, like passwords, are handled by the provider,
            not the app. It's ideal for apps that require login without directly
            handling credentials, offering a secure and user-friendly way to
            access protected resources.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more information about OAuth2 and Passport.js, please refer to
            the official documentation for both:
          </p>

          <ul className="list-disc ml-6">
            <li>
              <a
                href="http://www.passportjs.org/packages/passport-google-oauth20/"
                className="text-blue-400 hover:underline"
              >
                Passport.js Google OAuth2 Strategy Documentation
              </a>
              : This is the specific guide for implementing the Google OAuth2
              strategy using Passport.js.
            </li>
            <li>
              <a
                href="https://developers.google.com/identity/protocols/oauth2"
                className="text-blue-400 hover:underline"
              >
                Google OAuth2 Documentation
              </a>
              : This provides in-depth details about Google's OAuth2 protocol,
              including setup, permissions, and scopes.
            </li>
          </ul>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            First, install required packages like passport,
            passport-google-oauth20, express, and express-session. Configure
            Passport.js with your Google OAuth credentials (clientID,
            clientSecret, and callbackURL), replacing the placeholders in the
            provided code snippet. Set up routes for login (/auth/google) and
            callback (/auth/google/callback) to handle Google’s response after
            authentication. Use the middleware from the code snippet to protect
            routes like /profile by checking if the user is authenticated. Run
            the Node.js app, and test logging in via Google, ensuring users can
            access protected routes only after successful login.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of{" "}
          <strong>OAuth2 Authorization Code Flow</strong> using Passport.js. It
          demonstrates how to authenticate users with Google and protect routes
          in a Node.js application.
        </p>
      </div>
      <CodeSnippet code={exampleCode} language="javascript" />
    </div>
  );
};

export default OAuth2_Authorization;
