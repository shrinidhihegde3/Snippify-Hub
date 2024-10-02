import CodeSnippet from "../../components/codeSnippet";

const AdvancedMultiLangThreadSynchronization = () => {
  const javaExampleCode = `
  // Advanced Java thread synchronization with multiple resources
import java.util.ArrayList;
import java.util.List;

class SharedResources {
    private int counter1 = 0;
    private int counter2 = 0;
    private List<String> sharedList = new ArrayList<>();

    // Increment counter1 using synchronized block
    public void incrementCounter1() {
        synchronized (this) {
            counter1++;
            System.out.println(Thread.currentThread().getName() + " incremented counter1 to: " + counter1);
        }
    }

    // Increment counter2 using synchronized method
    public synchronized void incrementCounter2() {
        counter2++;
        System.out.println(Thread.currentThread().getName() + " incremented counter2 to: " + counter2);
    }

    // Modify sharedList using synchronized block
    public void addToList(String value) {
        synchronized (sharedList) {
            sharedList.add(value);
            System.out.println(Thread.currentThread().getName() + " added to sharedList: " + value);
        }
    }

    // Read sharedList safely
    public void printList() {
        synchronized (sharedList) {
            System.out.println("Shared list: " + sharedList);
        }
    }

    public int getCounter1() {
        return counter1;
    }

    public int getCounter2() {
        return counter2;
    }
}

class ComplexWorker extends Thread {
    private SharedResources resources;
    private boolean modifyList;

    public ComplexWorker(SharedResources resources, boolean modifyList) {
        this.resources = resources;
        this.modifyList = modifyList;
    }

    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            resources.incrementCounter1();
            resources.incrementCounter2();
            if (modifyList) {
                resources.addToList(Thread.currentThread().getName() + "-Element" + i);
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        SharedResources resources = new SharedResources();

        Thread t1 = new ComplexWorker(resources, true);
        Thread t2 = new ComplexWorker(resources, false);

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        resources.printList();
        System.out.println("Final counter1: " + resources.getCounter1());
        System.out.println("Final counter2: " + resources.getCounter2());
    }
}
  `;

  const pythonExampleCode = `
# Advanced Python thread synchronization with multiple resources
import threading
import time

class SharedResources:
    def __init__(self):
        self.counter1 = 0
        self.counter2 = 0
        self.shared_list = []
        self.lock1 = threading.Lock()
        self.lock2 = threading.Lock()

    def increment_counter1(self):
        with self.lock1:
            self.counter1 += 1
            print(f"{threading.current_thread().name} incremented counter1 to: {self.counter1}")
            time.sleep(0.1)

    def increment_counter2(self):
        with self.lock2:
            self.counter2 += 1
            print(f"{threading.current_thread().name} incremented counter2 to: {self.counter2}")
            time.sleep(0.1)

    def modify_list(self, value):
        with threading.Lock():  # Lock around the list modification
            self.shared_list.append(value)
            print(f"{threading.current_thread().name} added to shared_list: {value}")
            time.sleep(0.1)

    def print_list(self):
        print(f"Shared list: {self.shared_list}")

# Worker function
def worker(resource, modify_list=False):
    for i in range(5):
        resource.increment_counter1()
        resource.increment_counter2()
        if modify_list:
            resource.modify_list(f"{threading.current_thread().name}-Element{i}")

if __name__ == "__main__":
    resources = SharedResources()

    t1 = threading.Thread(target=worker, args=(resources, True), name="Thread-1")
    t2 = threading.Thread(target=worker, args=(resources, False), name="Thread-2")

    t1.start()
    t2.start()

    t1.join()
    t2.join()

    resources.print_list()
    print(f"Final counter1: {resources.counter1}")
    print(f"Final counter2: {resources.counter2}")
  `;

  const cppExampleCode = `
  // Advanced C++ thread synchronization with multiple resources
#include <iostream>
#include <thread>
#include <vector>
#include <mutex>

class SharedResources {
private:
    int counter1 = 0;
    int counter2 = 0;
    std::vector<std::string> sharedList;
    std::mutex mtx1, mtx2, listMtx;

public:
    void incrementCounter1() {
        std::lock_guard<std::mutex> lock(mtx1);
        counter1++;
        std::cout << std::this_thread::get_id() << " incremented counter1 to: " << counter1 << std::endl;
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
    }

    void incrementCounter2() {
        std::lock_guard<std::mutex> lock(mtx2);
        counter2++;
        std::cout << std::this_thread::get_id() << " incremented counter2 to: " << counter2 << std::endl;
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
    }

    void modifyList(const std::string& value) {
        std::lock_guard<std::mutex> lock(listMtx);
        sharedList.push_back(value);
        std::cout << std::this_thread::get_id() << " added to sharedList: " << value << std::endl;
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
    }

    void printList() {
        std::lock_guard<std::mutex> lock(listMtx);
        std::cout << "Shared list: ";
        for (const auto& item : sharedList) {
            std::cout << item << " ";
        }
        std::cout << std::endl;
    }

    int getCounter1() {
        return counter1;
    }

    int getCounter2() {
        return counter2;
    }
};

void worker(SharedResources& resource, bool modifyList) {
    for (int i = 0; i < 5; ++i) {
        resource.incrementCounter1();
        resource.incrementCounter2();
        if (modifyList) {
            resource.modifyList("Thread-" + std::to_string(i));
        }
    }
}

int main() {
    SharedResources resource;

    std::thread t1(worker, std::ref(resource), true);
    std::thread t2(worker, std::ref(resource), false);

    t1.join();
    t2.join();

    resource.printList();
    std::cout << "Final counter1: " << resource.getCounter1() << std::endl;
    std::cout << "Final counter2: " << resource.getCounter2() << std::endl;

    return 0;
}
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Thread Synchronization Across Multiple Languages</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            In this example, multiple shared resources such as counters and lists are accessed concurrently by threads. 
            We use synchronization mechanisms to ensure thread-safe operations in Java, Python, and C++.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more details, refer to the following documentation:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <a href="https://docs.oracle.com/javase/tutorial/essential/concurrency/" className="text-blue-400 hover:underline">
                Java Concurrency Documentation
              </a>
            </li>
            <li>
              <a href="https://docs.python.org/3/library/threading.html" className="text-blue-400 hover:underline">
                Python Threading Documentation
              </a>
            </li>
            <li>
              <a href="https://en.cppreference.com/w/cpp/thread/mutex" className="text-blue-400 hover:underline">
                C++ Mutex Documentation
              </a>
            </li>
          </ul>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            Copy the code snippets below into the respective language environments. The code demonstrates advanced 
            thread synchronization mechanisms, ensuring thread-safe access to shared counters and lists.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Java Example</h2>
          <CodeSnippet code={javaExampleCode} language="java" />
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Python Example</h2>
          <CodeSnippet code={pythonExampleCode} language="python" />
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">C++ Example</h2>
          <CodeSnippet code={cppExampleCode} language="cpp" />
        </div>
      </div>
    </div>
  );
};

export default AdvancedMultiLangThreadSynchronization