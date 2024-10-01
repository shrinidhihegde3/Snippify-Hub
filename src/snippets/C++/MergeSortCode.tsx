import CodeSnippet from "../../components/codeSnippet";

const MergeSortCode = () => {
  const exampleCode = `
  // C++ program for the implementation of Merge Sort
#include <bits/stdc++.h>
using namespace std;

void merge(vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    vector<int> L(n1), R(n2);

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    vector<int> arr = {12, 11, 13, 5, 6, 7};

    // Sorting the array
    mergeSort(arr, 0, arr.size() - 1);
    for (auto i : arr)
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
            Merge Sort is a highly efficient sorting algorithm that follows the 
            divide and conquer approach. It is suitable for large datasets, 
            with a time complexity of <strong>O(n log n)</strong>. Merge Sort is 
            stable and works well with linked lists as well.
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
            array of integers using the merge sort algorithm and print the
            sorted result.
          </p>
        </div>

        <p className="mb-4">
          Below is an implementation of the <strong>Merge Sort</strong>{" "}
          algorithm in C++. The <code>mergeSort</code> function recursively
          divides the array into halves, sorts them, and then merges them back 
          together.
        </p>
      </div>
      <CodeSnippet code={exampleCode} language="cpp" />
    </div>
  );
};

export default MergeSortCode;
