import CodeSnippet from "../../components/codeSnippet";

const HeapSort = () => {
  const exampleCode = `
  // C++ program for the implementation of Heap Sort
#include <bits/stdc++.h>
using namespace std;

// Function to heapify a subtree rooted with node i, n is the size of the heap
void heapify(vector<int>& v, int n, int i) {
    int largest = i; // Initialize largest as root
    int left = 2 * i + 1; // left child
    int right = 2 * i + 2; // right child

    // If left child is larger than root
    if (left < n && v[left] > v[largest])
        largest = left;

    // If right child is larger than largest so far
    if (right < n && v[right] > v[largest])
        largest = right;

    // If largest is not root
    if (largest != i) {
        swap(v[i], v[largest]);

        // Recursively heapify the affected sub-tree
        heapify(v, n, largest);
    }
}

// Main function to sort an array using heap sort
void heapSort(vector<int>& v) {
    int n = v.size();

    // Build heap (rearrange the array)
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(v, n, i);

    // Extract elements from heap one by one
    for (int i = n - 1; i > 0; i--) {
        // Move current root to end
        swap(v[0], v[i]);

        // Call heapify on the reduced heap
        heapify(v, i, 0);
    }
}

int main() {
    vector<int> v = {12, 11, 13, 5, 6, 7};

    // Sorting the vector v using heap sort
    heapSort(v);
    
    // Print sorted array
    cout << "Sorted array is \\n";
    for (int i = 0; i < v.size(); ++i)
        cout << v[i] << " ";
    return 0;
}
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Heap Sort Code in C++</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            Heap Sort is a comparison-based sorting algorithm with a time
            complexity of <strong>O(n log n)</strong>. It is more efficient than
            Bubble Sort and works well for larger datasets. The algorithm uses a
            binary heap data structure and is useful when sorting needs to be
            done in-place.
          </p>

          <h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more information on sorting algorithms, refer to the book{" "}
            <em>Introduction to Algorithms</em> by Cormen, Leiserson, Rivest,
            and Stein. You can also check out the{" "}
            <a
              href="https://en.cppreference.com/w/cpp/algorithm"
              className="text-blue-400 hover:underline"
            >
              C++ Algorithm Library
            </a>{" "}
            for more sorting methods.
          </p>

          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            Copy the code into any C++ compiler, such as GCC, or run it using an
            IDE like Code::Blocks or CLion. The program will sort a predefined
            vector of integers using the Heap Sort algorithm and print the
            sorted result.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of the <strong>Heap Sort</strong>{" "}
          algorithm in C++. The <code>heapSort</code> function sorts an array of
          integers by first building a max heap and then extracting elements
          from it one by one.
        </p>
      </div>
      <CodeSnippet code={exampleCode} language="cpp" />
    </div>
  );
};

export default HeapSort;
