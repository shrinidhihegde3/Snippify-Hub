import CodeSnippet from "../../components/codeSnippet";

const FetchAPICode = () => {
  const fetchAPIExample = `
   // Using Fetch API to make a 'GET' request
fetch('https://api.example.com/data') // Replace with the actual API URL
  .then(response => {
    // Check if the 'response' status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the 'response' body as JSON
    return response.json();
  })
  .then(data => {
    // Handle the parsed data
    console.log('Data received:', data);
  })
  .catch(error => {
    // Handle errors such as network issues or response failures
    console.error('There was a problem with the fetch operation:', error);
  });
`;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-emerald-600">
        <h1 className="text-4xl font-bold mb-4">Fetch API</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            The Fetch API can be used to make network requests to retrieve or
            send data to web servers. It provides a modern way to handle HTTP
            requests and responses, replacing older technologies like
            XMLHttpRequest. The Fetch API works with Promises, making it easier
            to handle asynchronous requests. While it is widely supported in
            modern browsers, error handling for network issues and response
            status needs careful consideration. The Fetch API is ideal for
            making AJAX requests in web applications, fetching JSON data, or
            submitting form data to a server.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more information on Fetch API, refer to the page{" "}
            <em>Using the FetchAPI</em> by MDN.You can also check out the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
              className="text-blue-400 hover:underline"
            >
              FetchAPI Documentation
            </a>{" "}
            for detailed information on Fetch API.
          </p>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            Copy the provided code into any JavaScript environment, such as a
            browser's developer console, or include it in a script file for a
            web project.If you are using an editor like VS Code, you can run the
            code in a browser or through Node.js with appropriate polyfills, as
            the Fetch API is natively supported in modern browsers, but not in
            Node.js without additional libraries.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of the <strong>Fetch API</strong> in
          JavaScript. The <code>fetch</code> function sends an HTTP GET request
          to a specified URL and handles the server's response asynchronously
          using Promises
        </p>
      </div>
      <CodeSnippet code={fetchAPIExample} language="js" />
    </div>
  );
};

export default FetchAPICode;
