import CodeSnippet from "../../components/codeSnippet";

const ChainingProimises = () => {
    const exampleCode = `
// Chaining multiple promises in JavaScript
function firstAsyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('First operation complete');
            resolve('Data from first operation');
        }, 1000);
    });
}

function secondAsyncOperation(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Second operation complete:', data);
            resolve('Data from second operation');
        }, 1000);
    });
}

function thirdAsyncOperation(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Third operation complete:', data);
            resolve('Data from third operation');
        }, 1000);
    });
}

// Chain promises to execute them sequentially
firstAsyncOperation()
    .then(result1 => {
        return secondAsyncOperation(result1);
    })
    .then(result2 => {
        return thirdAsyncOperation(result2);
    })
    .then(result3 => {
        console.log('All operations completed:', result3);
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
`;

    return (
        <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
            <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
                <h1 className="text-4xl font-bold mb-4">Chaining Multiple Promises in JavaScript</h1>
                <div className="mt-8">
                    <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
                    <p className="mb-4">
                        Promise chaining is useful for executing multiple asynchronous 
                        operations sequentially, especially when the result of one operation 
                        is required for the next. This technique can be used for complex 
                        workflows, such as fetching data from multiple APIs or performing 
                        sequential data processing tasks.
                    </p>

                    <h2 className="text-4xl font-semibold mb-2">References</h2>
                    <p>
                        For more information on promises, you can refer to the 
                        {" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"
                            className="text-blue-400 hover:underline"
                        >
                            MDN Web Docs - Using Promises
                        </a>
                        {" "} or check out the 
                        {" "}
                        <a
                            href="https://javascript.info/promise-chaining"
                            className="text-blue-400 hover:underline"
                        >
                            JavaScript.info - Promise Chaining
                        </a>.
                    </p>

                    <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
                    <p>
                        Copy the code below to understand how to chain multiple promises in JavaScript. 
                        The example involves three asynchronous operations, each dependent on the completion 
                        of the previous one. This pattern helps ensure that each step is executed in order.
                    </p>
                </div>

                <p className="mb-4">
                    Below is an implementation of <strong>chaining multiple promises</strong> in JavaScript. 
                    Each promise represents an asynchronous operation, and they are executed sequentially, 
                    allowing for a structured flow of data between them.
                </p>
            </div>
            <CodeSnippet code={exampleCode} language="javascript" />
        </div>
    );
};

export default ChainingProimises;
