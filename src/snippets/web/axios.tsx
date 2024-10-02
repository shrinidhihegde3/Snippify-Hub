import CodeSnippet from "../../components/codeSnippet";

const AxiosCode = () => {
  const axiosCodeExample = `// Importing axios module
const axios = require('axios');

// Making a GET request to a sample API (JSONPlaceholder)
axios.get('https://jsonplaceholder.typicode.com/posts/1') // URL of the API endpoint
  .then(response => {
    // This block runs when the request is successful
    // The 'response' object contains the full HTTP response
    console.log(response.data);
  })
  .catch(error => {
    // This block runs if there is an error during the request
    console.error('Error fetching data:', error);
  });
`;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Axios</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            Axios is a popular JavaScript library used to make network requests
            for retrieving or sending data to web servers. It offers a modern
            and intuitive interface to handle HTTP requests and responses,
            serving as a more feature-rich alternative to the built-in fetch API
            and older technologies like XMLHttpRequest.
          </p>
          <p>
            Axios is built on top of Promises, which simplifies the process of
            managing asynchronous operations and allows for cleaner and more
            readable code. It supports all modern browsers and Node.js, making
            it versatile for both client-side and server-side applications.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more information on Axios, refer to the page{" "}
            <em>Getting Started with Axios</em> by Axios. You can also check out
            the{" "}
            <a
              href="https://axios-http.com/docs/intro"
              className="text-blue-400 hover:underline"
            >
              Axios Documentation
            </a>{" "}
            for detailed information on how to use Axios effectively in your
            applications.
          </p>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            To use Axios, first install it in your project using npm or yarn by
            running <code>npm install axios</code> or{" "}
            <code>yarn add axios</code>. You can then import Axios into your
            JavaScript files. Copy the provided code into any JavaScript
            environment, such as a browser's developer console, or include it in
            a script file for a web project. If you are using an editor like VS
            Code, you can run the code in a browser or through Node.js, as Axios
            is fully supported in both environments without the need for
            additional polyfills.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of <strong>Axios</strong> in JavaScript.
          The <code>axios.get</code> function sends an HTTP GET request to a
          specified URL and handles the server's response asynchronously using
          Promises. Axios provides an easy-to-use API and additional features
          such as automatic JSON transformation and built-in error handling.
        </p>
      </div>
      <CodeSnippet code={axiosCodeExample} language="js" />
    </div>
  );
};

export default AxiosCode;
