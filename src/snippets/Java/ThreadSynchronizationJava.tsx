import CodeSnippet from "../../components/codeSnippet";

const ThreadSynchronizationJava = () => {
  const exampleCode = `
  // Java program to demonstrate thread synchronization using synchronized blocks
class SharedResource {
    private int counter = 0;

    // Method to increment the counter safely using synchronized block
    public void increment() {
        synchronized (this) { // Synchronizing on the current instance
            counter++;
            System.out.println(Thread.currentThread().getName() + " incremented counter to: " + counter);
        }
    }

    public int getCounter() {
        return counter;
    }
}

class CounterThread extends Thread {
    private SharedResource resource;

    public CounterThread(SharedResource resource) {
        this.resource = resource;
    }

    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            resource.increment();
            try {
                Thread.sleep(100); // Simulate some work with sleep
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Shared resource that will be accessed by multiple threads
        SharedResource resource = new SharedResource();

        // Create multiple threads that access the shared resource
        Thread t1 = new CounterThread(resource);
        Thread t2 = new CounterThread(resource);

        // Start the threads
        t1.start();
        t2.start();

        // Wait for the threads to finish
        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Final counter value
        System.out.println("Final counter value: " + resource.getCounter());
    }
}
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Thread Synchronization Using Synchronized Blocks in Java</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            In multithreaded applications, managing access to shared resources is critical to avoid 
            race conditions. This snippet shows how to use synchronized blocks to safely manage 
            access to shared data across multiple threads in Java.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more information on Java concurrency, refer to the{" "}
            <a
              href="https://docs.oracle.com/javase/tutorial/essential/concurrency/"
              className="text-blue-400 hover:underline"
            >
              Java Concurrency Documentation
            </a>{" "} or the{" "}
            <a
              href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html#wait()"
              className="text-blue-400 hover:underline"
            >
              Java Synchronized Block Documentation
            </a>.
          </p>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            Copy the code below into a Java IDE or editor. The `SharedResource` class demonstrates 
            synchronized access to a shared counter variable, while the `CounterThread` class runs 
            two concurrent threads, incrementing the counter in a synchronized block.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of <strong>Thread Synchronization</strong> in Java using synchronized blocks.
        </p>
      </div>
      <CodeSnippet code={exampleCode} language="java" />
    </div>
  );
};

export default ThreadSynchronizationJava;