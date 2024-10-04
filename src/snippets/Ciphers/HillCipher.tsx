import { useState } from "react";
import CodeSnippet from "../../components/codeSnippet";

const HillCipher = () => {
  const cppCode = `
#include <iostream>
#include <string>
#include <vector>

using namespace std;

void getKeyMatrix(const string &key, vector<vector<int>> &keyMatrix, int size) {
    int k = 0;
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            keyMatrix[i][j] = (key[k]) % 65;
            k++;
        }
    }
}

void encrypt(const string &message, const vector<vector<int>> &keyMatrix, int size, string &cipherText) {
    int n = message.length();
    vector<int> messageVector(size), cipherVector(size);

    for (int i = 0; i < n; i += size) {
        for (int x = 0; x < size; x++) {
            messageVector[x] = message[i + x] % 65;
        }

        for (int x = 0; x < size; x++) {
            cipherVector[x] = 0;
            for (int y = 0; y < size; y++) {
                cipherVector[x] += keyMatrix[x][y] * messageVector[y];
            }
            cipherVector[x] = cipherVector[x] % 26;
            cipherText += cipherVector[x] + 65;
        }
    }
}

int main() {
    string key = "GYBNQKURP";
    string message = "ACT";

    int size = 3; // Size of the key matrix (3x3)
    vector<vector<int>> keyMatrix(size, vector<int>(size, 0));

    // Generate the key matrix
    getKeyMatrix(key, keyMatrix, size);

    // Encrypt the message
    string cipherText;
    encrypt(message, keyMatrix, size, cipherText);

    cout << "Cipher Text: " << cipherText << endl;
    return 0;
}
`;

  const pythonCode = `
import numpy as np

def getKeyMatrix(key, size):
    keyMatrix = np.zeros((size, size), dtype=int)
    k = 0
    for i in range(size):
        for j in range(size):
            keyMatrix[i][j] = ord(key[k]) % 65
            k += 1
    return keyMatrix

def encrypt(message, keyMatrix, size):
    messageVector = [ord(char) % 65 for char in message]
    cipherVector = np.dot(keyMatrix, messageVector) % 26
    cipherText = ''.join(chr(int(num) + 65) for num in cipherVector)
    return cipherText

key = "GYBNQKURP"
message = "ACT"
size = 3

keyMatrix = getKeyMatrix(key, size)
cipherText = encrypt(message, keyMatrix, size)
print("Cipher Text:", cipherText)
`;

  const javaCode = `
import java.util.Scanner;

public class HillCipher {
    static void getKeyMatrix(String key, int[][] keyMatrix, int size) {
        int k = 0;
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                keyMatrix[i][j] = (key.charAt(k)) % 65;
                k++;
            }
        }
    }

    static String encrypt(String message, int[][] keyMatrix, int size) {
        int[] messageVector = new int[size];
        int[] cipherVector = new int[size];

        for (int i = 0; i < size; i++) {
            messageVector[i] = message.charAt(i) % 65;
        }

        for (int i = 0; i < size; i++) {
            cipherVector[i] = 0;
            for (int j = 0; j < size; j++) {
                cipherVector[i] += keyMatrix[i][j] * messageVector[j];
            }
            cipherVector[i] = cipherVector[i] % 26;
        }

        StringBuilder cipherText = new StringBuilder();
        for (int i : cipherVector) {
            cipherText.append((char) (i + 65));
        }

        return cipherText.toString();
    }

    public static void main(String[] args) {
        String key = "GYBNQKURP";
        String message = "ACT";
        int size = 3;

        int[][] keyMatrix = new int[size][size];
        getKeyMatrix(key, keyMatrix, size);

        String cipherText = encrypt(message, keyMatrix, size);
        System.out.println("Cipher Text: " + cipherText);
    }
}
`;

  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const matrixSize = Math.sqrt(key.length);

  const isValidKey = () => {
    return matrixSize === Math.floor(matrixSize);
  };

  const handleSubmit = () => {
    if (!key || !text || !isValidKey()) {
      alert("Please enter a valid key and text! The key length must be a perfect square.");
      return;
    }

    if (mode === "encrypt") {
      const encrypted = hillCipherEncrypt(text, key);
      setOutput(encrypted);
    } else {
      alert("Decryption is not yet implemented.");
    }
  };

  const hillCipherEncrypt = (message: string, key: string) => {
    const size = matrixSize;
    let keyMatrix: number[][] = Array.from({ length: size }, () => Array(size).fill(0));
    let result = "";

    let k = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        keyMatrix[i][j] = key.charCodeAt(k++) % 65;
      }
    }

    for (let i = 0; i < message.length; i += size) {
      let messageVector: number[] = Array(size).fill(0);
      for (let x = 0; x < size; x++) {
        messageVector[x] = message.charCodeAt(i + x) % 65;
      }

      let cipherVector: number[] = Array(size).fill(0);
      for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
          cipherVector[x] += keyMatrix[x][y] * messageVector[y];
        }
        cipherVector[x] = cipherVector[x] % 26;
        result += String.fromCharCode(cipherVector[x] + 65);
      }
    }

    return result;
  };

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      {/* Container for Hill Cipher Intro, Use Case, References, How to Use */}
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Hill Cipher Code</h1>

        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
        The Hill cipher is primarily used for securely encrypting messages to protect sensitive 
        information and for data obfuscation, which helps hide data patterns to enhance confidentiality 
        in various applications. It also serves as an educational tool for teaching cryptographic concepts 
        and linear algebra in academic settings. Additionally, the cipher can be employed to encrypt files, 
        preventing unauthorized access, and is sometimes utilized in game development to protect game assets 
        and prevent cheating. Its historical significance lies in demonstrating early cryptographic methods 
        that contributed to the evolution of secure communication.
        </p>

        {/* References */}
        <h2 className="text-4xl font-semibold mb-2">Reference</h2>
        <p className="mb-4">
          - Lester S. Hill, "Cryptography in an Algebraic Alphabet," The American Mathematical Monthly, Vol. 36, No. 6, 1929.
          <br />
          - William Stallings, "Cryptography and Network Security: Principles and Practice," Pearson, 7th Edition, 2017.
          </p>

        {/* How to Use */}
        <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
        <p className="mb-4">
          <p>
            Copy the code into any compiler or IDE for the respective language:
            <ul>
              <li>For Java: Use the Java Development Kit (JDK), Eclipse, IntelliJ IDEA, or NetBeans.</li>
              <li>For C++: Use a C++ compiler like GCC, or an IDE like Code::Blocks or CLion.</li>
              <li>For Python: Use any Python IDE or text editor like PyCharm, VSCode, or even an online Python compiler.</li>
            </ul>
            <br></br>
            To encrypt a message using the Hill cipher, you need a key matrix (n x n) where 'n' is the length of the key.
          The length of the message should be a multiple of the matrix size, and the key length must be a perfect square.
          Enter a key and a message to encrypt in the form below.
          </p>
        </p>
      </div>
      </div>

      {/* Container for Testing Hill Cipher */}
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h2 className="text-4xl font-semibold mb-2">Test the Hill Cipher</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            placeholder="Enter text to encrypt"
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

      {/* Container for Hill Cipher Code Snippets */}
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h2 className="text-4xl font-semibold mb-2">C++ Code</h2>
        <CodeSnippet code={cppCode} language="cpp" />

        <h2 className="text-4xl font-semibold mb-2 mt-6">Python Code</h2>
        <CodeSnippet code={pythonCode} language="python" />

        <h2 className="text-4xl font-semibold mb-2 mt-6">Java Code</h2>
        <CodeSnippet code={javaCode} language="java" />
      </div>
    </div>
    
  );
};

export default HillCipher;
