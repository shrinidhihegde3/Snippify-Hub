import CodeSnippet from "../../../components/codeSnippet";

const BinarySearch = () => {
  // Object containing code snippets for each language
  const exampleCode = {
    java: `
// Java implementation of iterative Binary Search

import java.io.*;

class BinarySearch {
  
    // Returns index of x if it is present in arr[].
    int binarySearch(int arr[], int x) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;

            // Check if x is present at mid
            if (arr[mid] == x)
                return mid;

            // If x greater, ignore left half
            if (arr[mid] < x)
                low = mid + 1;

            // If x is smaller, ignore right half
            else
                high = mid - 1;
        }

        // If we reach here, then element was not present
        return -1;
    }

    // Driver code
    public static void main(String args[]) {
        BinarySearch ob = new BinarySearch();
        int arr[] = { 2, 3, 4, 10, 40 };
        int n = arr.length;
        int x = 10;
        int result = ob.binarySearch(arr, x);
        if (result == -1)
            System.out.println("Element is not present in array");
        else
            System.out.println("Element is present at index " + result);
    }
}
    `,
    cpp: `
// C++ implementation of iterative Binary Search

#include <iostream>
using namespace std;

// Returns index of x if it is present in arr[]
int binarySearch(int arr[], int size, int x) {
    int low = 0, high = size - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        // Check if x is present at mid
        if (arr[mid] == x)
            return mid;

        // If x is greater, ignore left half
        if (arr[mid] < x)
            low = mid + 1;

        // If x is smaller, ignore right half
        else
            high = mid - 1;
    }

    // If we reach here, then element was not present
    return -1;
}

// Driver code
int main() {
    int arr[] = {2, 3, 4, 10, 40};
    int size = sizeof(arr) / sizeof(arr[0]);
    int x = 10;
    int result = binarySearch(arr, size, x);

    if (result == -1)
        cout << "Element is not present in array" << endl;
    else
        cout << "Element is present at index " << result << endl;

    return 0;
}
    `,
    python: `# Python implementation of iterative Binary Search

def binary_search(arr, x):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = low + (high - low) // 2

        # Check if x is present at mid
        if arr[mid] == x:
            return mid

        # If x is greater, ignore left half
        elif arr[mid] < x:
            low = mid + 1

        # If x is smaller, ignore right half
        else:
            high = mid - 1

    # If we reach here, then element was not present
    return -1

# Driver code
arr = [2, 3, 4, 10, 40]
x = 10
result = binary_search(arr, x)

if result == -1:
    print("Element is not present in array")
else:
    print("Element is present at index", result)
    `,
  };

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Binary Search Algorithm</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            Binary Search is an efficient algorithm for finding elements in large, 
            sorted datasets. With a time complexity of O(log n), 
            it is well-suited for quickly searching in databases, sorted lists, or arrays, 
            making it ideal for applications requiring fast lookups or range queries.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more information on the binary search algorithm, refer to the book "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein. 
            <br />
            Additionally, Java provides built-in support for binary search in the Arrays and Collections classes, which can be explored in the official documentation:
            <br />
            <a
              href="https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#binarySearch-int:A-int-"
              className="text-blue-400 hover:underline"
            >
              Java Arrays.binarySearch() Documentation
            </a>
            <br />
            <a
              href="https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#binarySearch-java.util.List-T-"
              className="text-blue-400 hover:underline"
            >
              Java Collections.binarySearch() Documentation.
            </a>
            <br />
            For C++, refer to the documentation for the STL `std::binary_search` function:
            <br />
            <a
              href="https://en.cppreference.com/w/cpp/algorithm/binary_search"
              className="text-blue-400 hover:underline"
            >
              C++ std::binary_search Documentation
            </a>
            <br />
            For Python, the `bisect` module provides binary search functionality:
            <br />
            <a
              href="https://docs.python.org/3/library/bisect.html"
              className="text-blue-400 hover:underline"
            >
              Python bisect Module Documentation
            </a>
          </p>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            Copy the code into any compiler or IDE for the respective language:
            <ul>
              <li>For Java: Use the Java Development Kit (JDK), Eclipse, IntelliJ IDEA, or NetBeans.</li>
              <li>For C++: Use a C++ compiler like GCC, or an IDE like Code::Blocks or CLion.</li>
              <li>For Python: Use any Python IDE or text editor like PyCharm, VSCode, or even an online Python compiler.</li>
            </ul>
            <br></br>
            The program will perform a binary search on a predefined sorted array of integers and 
            print the index of the found element or a message if the element is not found.
          </p>
        </div>

        <h2 className="text-4xl font-semibold mb-2 mt-8">Java Code Example</h2>
        <CodeSnippet code={exampleCode.java} language="java" />

        <div className="my-6" /> {/* Spacer between code examples */}

        <h2 className="text-4xl font-semibold mb-2">C++ Code Example</h2>
        <CodeSnippet code={exampleCode.cpp} language="cpp" />

        <div className="my-6" /> {/* Spacer between code examples */}

        <h2 className="text-4xl font-semibold mb-2">Python Code Example</h2>
        <CodeSnippet code={exampleCode.python} language="python" />
      </div>
    </div>
  );
};

export default BinarySearch;
