import CodeSnippet from "../../components/codeSnippet";

const MergeSort = () => {
  const mergesortcode = `
  // C++ program for the implementation of Merge sort
#include <bits/stdc++.h>
using namespace std;

void merge(vector<int>& v, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    vector<int> L(n1), R(n2);

    for (int i = 0; i < n1; i++)
        L[i] = v[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = v[mid + 1 + j];

    int i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            v[k] = L[i];
            i++;
        } else {
            v[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        v[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        v[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(vector<int>& v, int left, int right) {
    if (left >= right) return;

    int mid = left + (right - left) / 2;

    mergeSort(v, left, mid);
    mergeSort(v, mid + 1, right);
    merge(v, left, mid, right);
}

int main() {
    vector<int> v = {12, 11, 13, 5, 6, 7};

    // Sorting the vector v
    mergeSort(v, 0, v.size() - 1);
    for (auto i : v)
        cout << i << " ";
    return 0;
}
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Merge Sort Code in C++</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            Merge Sort is a highly efficient, comparison-based sorting algorithm
            with a time complexity of <strong>O(n log n)</strong>. It is 
            preferred for large datasets due to its divide-and-conquer approach.
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
            vector of integers using the merge sort algorithm and print the
            sorted result.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of the <strong>Merge Sort</strong>{" "}
          algorithm in C++. The <code>mergeSort</code> function recursively
          divides the array into two halves, sorts them, and then merges them
          back together.
        </p>
      </div>
      <CodeSnippet code={mergesortcode} language="cpp" />
    </div>
  );
};

export default MergeSort;
