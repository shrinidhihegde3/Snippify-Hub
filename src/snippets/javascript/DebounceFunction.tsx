import CodeSnippet from "../../components/codeSnippet";

const DebounceFunction = () => {
    const exampleCode = `
// Debounce function in JavaScript
function debounce(func, delay) {
    let timerId;

    return function (...args) {
        // Clear the previous timer
        if (timerId) {
            clearTimeout(timerId);
        }
        
        // Set a new timer
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage Example:
const logMessage = () => {
    console.log('Debounced Function Executed');
};

// Wrap the function in debounce
const debouncedLogMessage = debounce(logMessage, 1000);

// When invoked repeatedly, it will only execute after 1 second of inactivity.
window.addEventListener('resize', debouncedLogMessage);
`;

    return (
        <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
            <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
                <h1 className="text-4xl font-bold mb-4">Debounce Function in JavaScript</h1>
                <div className="mt-8">
                    <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
                    <p className="mb-4">
                        The debounce function is used to limit how often a function can be called. 
                        It is especially useful for handling events that trigger multiple times 
                        in quick succession, such as resizing the window, searching a query, or 
                        handling user input. By delaying the function execution, you can 
                        improve performance and reduce the load on your system.
                    </p>

                    <h2 className="text-4xl font-semibold mb-2">References</h2>
                    <p>
                        For more information on the debounce pattern, you can refer to the 
                        {" "}
                        <a
                            href="https://lodash.com/docs/4.17.15#debounce"
                            className="text-blue-400 hover:underline"
                        >
                            Lodash Debounce Documentation
                        </a>
                        {" "} or read articles on debouncing like on 
                        {" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events"
                            className="text-blue-400 hover:underline"
                        >
                            MDN Web Docs
                        </a>.
                    </p>

                    <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
                    <p>
                        Copy the code below to debounce a function. For example, you might use 
                        it to debounce a window resize handler, ensuring that the event handler 
                        is only called after a specified delay (e.g., 1000ms) has passed since 
                        the last invocation.
                    </p>
                </div>

                <p className="mb-4">
                    Below is an implementation of a <strong>debounce function</strong> in JavaScript. 
                    The function delays the processing of a given function until after a specified 
                    time interval, which is useful for optimizing high-frequency events like user input.
                </p>
            </div>
            <CodeSnippet code={exampleCode} language="javascript" />
        </div>
    );
};

export default DebounceFunction;
