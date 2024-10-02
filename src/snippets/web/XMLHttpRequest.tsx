import CodeSnippet from "../../components/codeSnippet";

const XMLHttpRequestCode = () => {
  const XMLHttpExample = `// Creating a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Configuring it: GET-request for the URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

// Setting up a function to handle the response
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Success! Handle the response
    console.log(JSON.parse(xhr.responseText));
  } else {
    // Handle errors
    console.error('Error fetching data:', xhr.statusText);
  }
};

// Handling network errors
xhr.onerror = function () {
  console.error('Network error occurred');
};

// Sending the request
xhr.send();
`;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">XMLHttpRequest</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            XMLHttpRequest is a built-in JavaScript object that allows
            developers to make network requests to retrieve or send data to web
            servers. It provides a way to handle HTTP requests and responses,
            enabling asynchronous communication in web applications. Although it
            was widely used before the advent of modern alternatives like the
            Fetch API, its syntax can be more complex and less intuitive.
            XMLHttpRequest operates using callbacks, which can complicate
            handling asynchronous operations and lead to "callback hell." While
            it is fully supported in all browsers, proper error handling for
            network issues and response statuses requires additional code.
            Despite its challenges, XMLHttpRequest remains suitable for making
            AJAX requests, fetching XML or JSON data, and submitting forms,
            especially in legacy systems that require backward compatibility.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more information on XMLHttpRequest, refer to the page{" "}
            <em>Using XMLHttpRequest</em> by MDN. You can also check out the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest"
              className="text-blue-400 hover:underline"
            >
              XMLHttpRequest Documentation
            </a>{" "}
            for detailed information on how to use XMLHttpRequest effectively in
            your applications.
          </p>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            To use XMLHttpRequest, you can copy the provided code into any
            JavaScript environment, such as a browser's developer console, or
            include it in a script file for a web project. The XMLHttpRequest
            object is natively supported in all modern browsers, allowing you to
            make network requests directly from your JavaScript code. If you're
            using an editor like VS Code, you can run the code in a browser
            without any additional libraries or polyfills, as XMLHttpRequest
            works seamlessly across different browser environments.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of <strong>XMLHttpRequest</strong> in
          JavaScript. The <code>XMLHttpRequest</code> object sends an HTTP GET
          request to a specified URL and handles the server's response
          asynchronously using callback functions. This approach allows for
          updating parts of a web page without reloading the entire page,
          enabling a more dynamic user experience.
        </p>
      </div>
      <CodeSnippet code={XMLHttpExample} language="js" />
    </div>
  );
};

export default XMLHttpRequestCode;
