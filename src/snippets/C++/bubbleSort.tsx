import CodeSnippet from "../../components/codeSnippet";

const HelloWorldCode = () => {
  const exampleCode = `
  // C++ program for the implementation of Bubble sort
#include <bits/stdc++.h>
using namespace std;

void bubbleSort(vector<int>& v) {
    int n = v.size();

    // Outer loop that corresponds to the number of
    // elements to be sorted
    for (int i = 0; i < n - 1; i++) {

        // Last i elements are already
        // in place
        for (int j = 0; j < n - i - 1; j++) {
          
              // Comparing adjacent elements
            if (v[j] > v[j + 1])
              
                  // Swapping if in the wrong order
                swap(v[j], v[j + 1]);
        }
    }
}

int main() {
    vector<int> v = {5, 1, 4, 2, 8};

    // Sorting the vector v
    bubbleSort(v);
    for (auto i : v)
        cout << i << " ";
    return 0;
}
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Bubble Sort Code in C++</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            This Bubble Sort algorithm can be used to sort small datasets.
            Although its time complexity is <strong>O(n²)</strong>, which makes
            it inefficient for large datasets, it is easy to understand and
            implement, making it suitable for educational purposes and
            introductory sorting examples.
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
            vector of integers using the bubble sort algorithm and print the
            sorted result.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of the <strong>Bubble Sort</strong>{" "}
          algorithm in C++. The <code>bubbleSort</code> function sorts an array
          of integers by repeatedly swapping adjacent elements if they are in
          the wrong order.
        </p>
      </div>
      <CodeSnippet code={exampleCode} language="cpp" />
    </div>
  );
};

export default HelloWorldCode;
