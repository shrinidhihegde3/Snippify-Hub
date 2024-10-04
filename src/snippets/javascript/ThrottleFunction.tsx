import { useState, useEffect } from 'react';

// Throttle function implementation
const throttle = <T extends (...args: unknown[]) => void>(func: T, delay: number) => {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

const ThrottleFunction = () => {
  const [counter, setCounter] = useState(0);

  // Throttled version of the increment function
  const throttledIncrement = throttle(() => {
    setCounter((prev) => prev + 1);
  }, 1000); // 1 second delay for throttling

  useEffect(() => {
    const handleScroll = throttledIncrement;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [throttledIncrement]);

  return (
    <div className="p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900 max-w-lg mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-4">Throttle Function Example</h1>
      <p className="text-lg mb-4">
        This example demonstrates a throttle function. Try scrolling the page, and the counter will only update at most once every second, no matter how fast you scroll.
      </p>
      <div className="bg-gray-200 p-4 rounded-lg text-2xl">
        <strong>Counter: {counter}</strong>
      </div>
      <p className="mt-4">
        The throttle function ensures that the <strong>scroll</strong> event handler is not called more than once every second, improving performance.
      </p>
    </div>
  );
};

export default ThrottleFunction;
