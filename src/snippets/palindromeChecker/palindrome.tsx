import CodeSnippet from "../../components/codeSnippet";

const PalindromeChecker = () => {
  // Object containing code snippets for each language
  const palindromeCode = {
    java: `
// Java implementation of Palindrome Checker

import java.io.*;

public class PalindromeChecker {
    // Function to check if a string is a palindrome
    public static boolean isPalindrome(String str) {
        int left = 0;  // Pointer at the start of the string
        int right = str.length() - 1;  // Pointer at the end of the string

        // Compare characters from both ends towards the center
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;  // Return false if mismatch found
            }
            left++;
            right--;
        }
        return true;  // Return true if no mismatches
    }

    public static void main(String[] args) {
        String input = "madam";
        System.out.println(isPalindrome(input));
    }
}

    `,
    cpp: `
// C++ implementation of Palindrome Checker

#include <iostream>
using namespace std;

// Function to check if a string is a palindrome
bool isPalindrome(std::string str) {
    int left = 0;  // Pointer at the start of the string
    int right = str.size() - 1;  // Pointer at the end of the string

    // Compare characters from both ends towards the center
    while (left < right) {
        if (str[left] != str[right]) {
            return false;  // Return false if mismatch found
        }
        left++;
        right--;
    }
    return true;  // Return true if no mismatches
}

int main() {
    std::string input = "madam";  // Test string
    std::cout << isPalindrome(input) << std::endl;  // Output: 1 (true)
}

    `,
    python: `# Python implementation of Palindrome Checker

# Function to check if a string is a palindrome
def is_palindrome(s):
    # Check if the string equals its reverse
    return s == s[::-1]

input_str = "madam"  # Test string
print(is_palindrome(input_str))
    `,
    javascript: `
    // Function to check if a string is a palindrome
function isPalindrome(str) {
    // Check if the string equals its reverse
    return str === str.split('').reverse().join('');
}

let input = "madam";  // Test string
console.log(isPalindrome(input));  // Output: true

    `,
  };

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Palindrome Checker</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            A Palindrome Checker is a useful tool in text processing and pattern
            recognition. It can be applied in various fields such as data
            validation, natural language processing, and cryptography. For
            instance, palindrome detection is employed in DNA sequence analysis,
            where certain palindromic patterns are key to identifying biological
            structures. In addition, palindrome checkers are used in word
            puzzles, software testing, and even in algorithms for text
            compression, as recognizing repeating patterns can optimize storage
            and retrieval systems.
          </p>
          u<h2 className="text-4xl font-semibold mb-2">References</h2>
          <p>
            For more information on palindrome algorithms, refer to the book
            "Introduction to the Theory of Computation" by Michael Sipser.
            <br />
            Additionally, Java provides built-in methods that can help with
            string manipulation in palindrome checking, which can be explored in
            the official documentation:
            <br />
            <a
              href="https://docs.oracle.com/javase/8/docs/api/java/lang/String.html"
              className="text-blue-400 hover:underline"
            >
              Java String Documentation
            </a>
            <br />
            For C++, refer to the documentation for the STL `std::string` class:
            <br />
            <a
              href="https://en.cppreference.com/w/cpp/string/basic_string"
              className="text-blue-400 hover:underline"
            >
              C++ std::string Documentation
            </a>
            <br />
            For Python, string manipulation functions can be explored in the
            Python documentation:
            <br />
            <a
              href="https://docs.python.org/3/library/stdtypes.html#str"
              className="text-blue-400 hover:underline"
            >
              Python String Documentation
            </a>
            <br />
            For JavaScript, string functions like `split()`, `reverse()`, and
            `join()` are documented here:
            <br />
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
              className="text-blue-400 hover:underline"
            >
              JavaScript String Documentation
            </a>
          </p>
          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            Copy the palindrome checker code into any compiler or IDE for the
            respective language:
            <ul>
              <li>
                For Java: Use the Java Development Kit (JDK), Eclipse, IntelliJ
                IDEA, or NetBeans.
              </li>
              <li>
                For C++: Use a C++ compiler like GCC, or an IDE like
                Code::Blocks or CLion.
              </li>
              <li>
                For Python: Use any Python IDE or text editor like PyCharm,
                VSCode, or even an online Python compiler.
              </li>
              <li>
                For JavaScript: You can run the code in any browser console,
                Node.js, or an IDE like VSCode.
              </li>
            </ul>
            <br />
            The program will check if the provided string is a palindrome and
            return true or false.
          </p>
        </div>
        <h2 className="text-4xl font-semibold mb-2 mt-8">Java Code Example</h2>
        <CodeSnippet code={palindromeCode.java} language="java" />
        <div className="my-6" /> {/* Spacer between code examples */}
        <h2 className="text-4xl font-semibold mb-2">C++ Code Example</h2>
        <CodeSnippet code={palindromeCode.cpp} language="cpp" />
        <div className="my-6" /> {/* Spacer between code examples */}
        <h2 className="text-4xl font-semibold mb-2">Python Code Example</h2>
        <CodeSnippet code={palindromeCode.python} language="python" />
        <div className="my-6" /> {/* Spacer between code examples */}
        <h2 className="text-4xl font-semibold mb-2 mt-8">
          JavaScript Code Example
        </h2>
        <CodeSnippet code={palindromeCode.javascript} language="javascript" />
      </div>
    </div>
  );
};

export default PalindromeChecker;
