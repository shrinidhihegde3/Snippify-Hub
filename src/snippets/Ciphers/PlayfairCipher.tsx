import { useState } from "react";
import CodeSnippet from "../../components/codeSnippet";

const PlayfairCipher = () => {
  const exampleCode = `
// C++ code for Playfair Cipher (as provided)
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

// Function to prepare the key matrix
void createKeyMatrix(const string &key, vector<vector<char>> &matrix) {
    bool charUsed[26] = { false };
    int x = 0, y = 0;

    for (char ch : key) {
        if (ch == 'j') ch = 'i'; // Treat 'j' as 'i'
        if (!charUsed[ch - 'a']) {
            matrix[x][y++] = ch;
            charUsed[ch - 'a'] = true;
            if (y == 5) {
                x++;
                y = 0;
            }
        }
    }

    // Fill the rest of the matrix with remaining letters
    for (char ch = 'a'; ch <= 'z'; ++ch) {
        if (ch == 'j') continue;
        if (!charUsed[ch - 'a']) {
            matrix[x][y++] = ch;
            if (y == 5) {
                x++;
                y = 0;
            }
        }
    }
}

// Function to format the plaintext
string prepareText(const string &text) {
    string prepared;
    for (int i = 0; i < text.size(); ++i) {
        char currentChar = text[i];
        if (currentChar == 'j') currentChar = 'i'; // Treat 'j' as 'i'
        if (isalpha(currentChar)) {
            prepared += tolower(currentChar);
            if (i < text.size() - 1 && prepared.back() == tolower(text[i + 1])) {
                prepared += 'x'; // Add filler if two consecutive letters are the same
            }
        }
    }
    if (prepared.size() % 2 != 0) {
        prepared += 'x'; // Add filler if length is odd
    }
    return prepared;
}

// Function to find the position of a letter in the matrix
void findPosition(const vector<vector<char>> &matrix, char ch, int &row, int &col) {
    for (int i = 0; i < 5; ++i) {
        for (int j = 0; j < 5; ++j) {
            if (matrix[i][j] == ch) {
                row = i;
                col = j;
                return;
            }
        }
    }
}

// Encrypt a digraph
string encryptDigraph(const vector<vector<char>> &matrix, char a, char b) {
    int rowA, colA, rowB, colB;
    findPosition(matrix, a, rowA, colA);
    findPosition(matrix, b, rowB, colB);

    if (rowA == rowB) {
        return string(1, matrix[rowA][(colA + 1) % 5]) + matrix[rowB][(colB + 1) % 5];
    } else if (colA == colB) {
        return string(1, matrix[(rowA + 1) % 5][colA]) + matrix[(rowB + 1) % 5][colB];
    } else {
        return string(1, matrix[rowA][colB]) + matrix[rowB][colA];
    }
}

// Decrypt a digraph
string decryptDigraph(const vector<vector<char>> &matrix, char a, char b) {
    int rowA, colA, rowB, colB;
    findPosition(matrix, a, rowA, colA);
    findPosition(matrix, b, rowB, colB);

    if (rowA == rowB) {
        return string(1, matrix[rowA][(colA + 4) % 5]) + matrix[rowB][(colB + 4) % 5];
    } else if (colA == colB) {
        return string(1, matrix[(rowA + 4) % 5][colA]) + matrix[(rowB + 4) % 5][colB];
    } else {
        return string(1, matrix[rowA][colB]) + matrix[rowB][colA];
    }
}

string playfairEncrypt(const string &text, const string &key) {
    vector<vector<char>> matrix(5, vector<char>(5));
    createKeyMatrix(key, matrix);
    string preparedText = prepareText(text);
    string encrypted;

    for (int i = 0; i < preparedText.size(); i += 2) {
        encrypted += encryptDigraph(matrix, preparedText[i], preparedText[i + 1]);
    }
    return encrypted;
}

string playfairDecrypt(const string &cipherText, const string &key) {
    vector<vector<char>> matrix(5, vector<char>(5));
    createKeyMatrix(key, matrix);
    string decrypted;

    for (int i = 0; i < cipherText.size(); i += 2) {
        decrypted += decryptDigraph(matrix, cipherText[i], cipherText[i + 1]);
    }
    return decrypted;
}

int main() {
    string key = "keyword";
    string input = "helloworld";
    string encrypted = playfairEncrypt(input, key);
    string decrypted = playfairDecrypt(encrypted, key);

    cout << "Encrypted: " << encrypted << endl;
    cout << "Decrypted: " << decrypted << endl;

    return 0;
}
`;

const [text, setText] = useState("");
    const [key, setKey] = useState("");
    const [output, setOutput] = useState("");
    const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

    const handleSubmit = () => {
        if (!key || !text) {
            alert("Please enter both key and text!");
            return;
        }

        try {
            if (mode === "encrypt") {
                const encrypted = playfairEncrypt(text, key);
                setOutput(encrypted);
            } else {
                const decrypted = playfairDecrypt(text, key);
                setOutput(decrypted);
            }
        } catch (error) {
            alert("An error occurred: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    };

    // Functions for Playfair Cipher logic
    const playfairEncrypt = (plaintext: string, key: string): string => {
        const matrix: string[][] = createKeyMatrix(key);
        const preparedText = prepareText(plaintext);
        let encrypted = '';

        for (let i = 0; i < preparedText.length; i += 2) {
            const a = preparedText[i];
            const b = preparedText[i + 1] || 'x'; // Handle odd length by filling with 'x'
            encrypted += encryptDigraph(matrix, a, b);
        }
        return encrypted;
    };

    const playfairDecrypt = (ciphertext: string, key: string): string => {
        const matrix: string[][] = createKeyMatrix(key);
        let decrypted = '';

        for (let i = 0; i < ciphertext.length; i += 2) {
            const a = ciphertext[i];
            const b = ciphertext[i + 1] || 'x'; // Same handling for decryption
            decrypted += decryptDigraph(matrix, a, b);
        }
        return decrypted;
    };

    // Helper Functions
    const createKeyMatrix = (key: string): string[][] => {
        const matrix: string[][] = Array.from({ length: 5 }, () => Array(5).fill(''));
        const charUsed: boolean[] = Array(26).fill(false);
        let x = 0, y = 0;

        // Process the key
        for (const ch of key.toLowerCase()) {
            const currentChar = ch === 'j' ? 'i' : ch; // Treat 'j' as 'i'
            if (currentChar >= 'a' && currentChar <= 'z' && !charUsed[currentChar.charCodeAt(0) - 'a'.charCodeAt(0)]) {
                matrix[x][y++] = currentChar;
                charUsed[currentChar.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
                if (y === 5) {
                    x++;
                    y = 0;
                }
            }
        }

        // Fill the remaining letters
        for (let ch = 'a'.charCodeAt(0); ch <= 'z'.charCodeAt(0); ++ch) {
            if (ch === 'j'.charCodeAt(0)) continue; // Skip 'j'
            if (!charUsed[ch - 'a'.charCodeAt(0)]) {
                matrix[x][y++] = String.fromCharCode(ch);
                if (y === 5) {
                    x++;
                    y = 0;
                }
            }
        }

        return matrix;
    };

    const prepareText = (text: string): string => {
        let prepared = '';
        for (let i = 0; i < text.length; i++) {
            const currentChar = text[i].toLowerCase();
            if (currentChar === 'j') prepared += 'i'; // Treat 'j' as 'i'
            else if (/[a-z]/.test(currentChar)) {
                prepared += currentChar;
                // Add filler for the same letter
                if (i < text.length - 1 && prepared[prepared.length - 1] === text[i + 1].toLowerCase()) {
                    prepared += 'x'; 
                }
            }
        }
        if (prepared.length % 2 !== 0) {
            prepared += 'x'; // Add filler if odd length
        }
        return prepared;
    };

    const findPosition = (matrix: string[][], ch: string): [number, number] => {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (matrix[i][j] === ch) {
                    return [i, j];
                }
            }
        }
        throw new Error(`Character ${ch} not found in matrix`);
    };

    const encryptDigraph = (matrix: string[][], a: string, b: string): string => {
        const [rowA, colA] = findPosition(matrix, a);
        const [rowB, colB] = findPosition(matrix, b);

        if (rowA === rowB) {
            return matrix[rowA][(colA + 1) % 5] + matrix[rowB][(colB + 1) % 5];
        } else if (colA === colB) {
            return matrix[(rowA + 1) % 5][colA] + matrix[(rowB + 1) % 5][colB];
        } else {
            return matrix[rowA][colB] + matrix[rowB][colA];
        }
    };

    const decryptDigraph = (matrix: string[][], a: string, b: string): string => {
        const [rowA, colA] = findPosition(matrix, a);
        const [rowB, colB] = findPosition(matrix, b);

        if (rowA === rowB) {
            return matrix[rowA][(colA + 4) % 5] + matrix[rowB][(colB + 4) % 5];
        } else if (colA === colB) {
            return matrix[(rowA + 4) % 5][colA] + matrix[(rowB + 4) % 5][colB];
        } else {
            return matrix[rowA][colB] + matrix[rowB][colA];
        }
    };

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Playfair Cipher Code in C++</h1>
        
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
          The Playfair cipher is a digraph substitution cipher used for securely encrypting messages in 
          communication systems. It enhances data confidentiality by obscuring original text and serves 
          as an educational tool for demonstrating encryption concepts in cryptography.
          </p>
          <h2 className="text-4xl font-semibold mb-2">Reference</h2>
          <p className="mb-4">
            - Simon Singh, "The Code Book," Doubleday, 1999.<br />
            - William Stallings, "Cryptography and Network Security: Principles and Practice," Pearson, 7th Edition, 2017.
          </p>
          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            The Playfair cipher encrypts digraphs (pairs of letters) using a
            5x5 matrix of letters generated from the key. For encryption, each 
            letter pair is processed based on their positions in the matrix. 
            Decryption uses the same logic to reverse the encryption process.
          </p>
        </div>
      </div>

      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h2 className="text-4xl font-semibold mb-2">Test the Playfair Cipher</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            placeholder="Enter text to encrypt/decrypt"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
          />
          <div className="flex mb-4 gap-4">
            <button
              onClick={() => setMode("encrypt")}
              className={`flex-1 p-3 rounded-lg transition-all duration-200 ${
                mode === "encrypt"
                  ? "bg-purple-700 text-white"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              Encrypt
            </button>
            <button
              onClick={() => setMode("decrypt")}
              className={`flex-1 p-3 rounded-lg transition-all duration-200 ${
                mode === "decrypt"
                  ? "bg-purple-700 text-white"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              Decrypt
            </button>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-purple-700 text-white p-3 w-full rounded-lg hover:bg-purple-800 transition duration-200"
          >
            Submit
          </button>
        </div>

        <h2 className="text-4xl font-semibold mb-2">Output</h2>
        <textarea
          value={output}
          readOnly
          className="border border-purple-600 p-3 mb-4 w-full text-black h-20 rounded-lg focus:outline-none"
        />
      </div>

      <CodeSnippet code={exampleCode} language="cpp" />
    </div>
  );
};

export default PlayfairCipher;
