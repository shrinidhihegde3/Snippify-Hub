import CodeSnippet from "../../components/codeSnippet";

const RateLimitingMiddlewareExpress = () => {
    const exampleCode = `
// Express rate limiting middleware
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Create a rate limiter middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true, // Return rate limit info in the RateLimit-* headers
    legacyHeaders: false, // Disable the X-RateLimit-* headers
});

// Apply rate limiting middleware to all requests
app.use(limiter);

app.get('/', (req, res) => {
    res.send('This is a rate-limited endpoint.');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
`;

    return (
        <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
            <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
                <h1 className="text-4xl font-bold mb-4">Rate Limiting Middleware in Express</h1>
                <div className="mt-8">
                    <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
                    <p className="mb-4">
                        Rate limiting is essential for preventing excessive requests to your server, 
                        which can help mitigate Denial of Service (DoS) attacks and protect your API resources.
                        This example provides a straightforward rate limiting setup for an Express.js server, 
                        making it ideal for reducing abuse by limiting how often clients can hit your endpoints.
                    </p>

                    <h2 className="text-4xl font-semibold mb-2">References</h2>
                    <p>
                        For more information on rate limiting, refer to the official 
                        {" "}
                        <a
                            href="https://www.npmjs.com/package/express-rate-limit"
                            className="text-blue-400 hover:underline"
                        >
                            express-rate-limit documentation
                        </a>
                        {" "} or the 
                        {" "}
                        <a
                            href="https://expressjs.com/"
                            className="text-blue-400 hover:underline"
                        >
                            Express.js documentation
                        </a>
                        {" "} to explore further usage of middleware.
                    </p>

                    <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
                    <p>
                        Copy the code below into your Express.js server file. Make sure to install the 
                        {" "}
                        <code>express-rate-limit</code> package using 
                        {" "}
                        <code>npm install express-rate-limit</code>. This code sets a limit of 100 requests 
                        per 15 minutes per IP, which can be adjusted based on your specific needs.
                    </p>
                </div>

                <p className="mb-4">
                    Below is an implementation of a <strong>rate limiting middleware</strong> 
                    in Express.js, which limits how many requests can be made by a single IP address 
                    within a given timeframe.
                </p>
            </div>
            <CodeSnippet code={exampleCode} language="javascript" />
        </div>
    );
};

export default RateLimitingMiddlewareExpress;
