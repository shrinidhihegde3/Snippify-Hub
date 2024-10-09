import CodeSnippet from "../../components/codeSnippet";
import { useState } from "react";

const gcd = (a: number, b: number): number => {
  if (!b) return a;
  return gcd(b, a % b);
};

const modInverse = (a: number, m: number): number => {
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) return x;
  }
  return -1;
};

const AffineCipher = () => {
  const [text, setText] = useState("");
  const [keyA, setKeyA] = useState("");
  const [keyB, setKeyB] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const handleSubmit = () => {
    const a = parseInt(keyA);
    const b = parseInt(keyB);
    
    if (!text || isNaN(a) || isNaN(b) || gcd(a, 26) !== 1) {
      alert("Please enter valid inputs! Ensure 'a' is coprime with 26.");
      return;
    }

    if (mode === "encrypt") {
      const encrypted = affineEncrypt(text, a, b);
      setOutput(encrypted);
    } else {
      const decrypted = affineDecrypt(text, a, b);
      setOutput(decrypted);
    }
  };

  const affineEncrypt = (message: string, a: number, b: number) => {
    let result = "";
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (char.match(/[A-Za-z]/)) {
        let x = char.toUpperCase().charCodeAt(0) - 65;
        let cipherChar = (a * x + b) % 26;
        result += String.fromCharCode(cipherChar + 65);
      } else {
        result += char; // non-alphabet characters remain unchanged
      }
    }
    return result;
  };

  const affineDecrypt = (cipherText: string, a: number, b: number) => {
    const a_inv = modInverse(a, 26);
    if (a_inv === -1) {
      alert("Inverse of 'a' does not exist. Decryption failed.");
      return "";
    }

    let result = "";
    for (let i = 0; i < cipherText.length; i++) {
      let char = cipherText[i];
      if (char.match(/[A-Za-z]/)) {
        let y = char.toUpperCase().charCodeAt(0) - 65;
        let plainChar = (a_inv * (y - b + 26)) % 26;
        result += String.fromCharCode(plainChar + 65);
      } else {
        result += char;
      }
    }
    return result;
  };

    const pythonCode = `
        import math

        # Function to calculate modular inverse of a mod m
        def mod_inverse(a, m):
            for x in range(1, m):
                if (a * x) % m == 1:
                    return x
            return None

        # Function to encrypt the message using Affine Cipher
        def affine_encrypt(text, a, b):
            m = 26
            cipher_text = ""

            for char in text:
                if char.isalpha():  # Ensure it's a letter
                    x = ord(char.upper()) - 65
                    cipher_char = (a * x + b) % m
                    cipher_text += chr(cipher_char + 65)
                else:
                    cipher_text += char  # Non-alphabet characters remain unchanged

            return cipher_text

        # Function to decrypt the message using Affine Cipher
        def affine_decrypt(cipher_text, a, b):
            m = 26
            plain_text = ""
            a_inv = mod_inverse(a, m)

            if a_inv is None:
                raise ValueError("Modular inverse does not exist for a and m")

            for char in cipher_text:
                if char.isalpha():
                    y = ord(char.upper()) - 65
                    plain_char = (a_inv * (y - b)) % m
                    plain_text += chr(plain_char + 65)
                else:
                    plain_text += char

            return plain_text

        # Example usage
        a, b = 5, 8  # Example key
        message = "AFFINE CIPHER"
        cipher_text = affine_encrypt(message, a, b)
        print("Encrypted:", cipher_text)

        decrypted_message = affine_decrypt(cipher_text, a, b)
        print("Decrypted:", decrypted_message)

    `;

    const cppCode = `
        #include <iostream>
        #include <string>
        using namespace std;

        // Function to calculate modular inverse of a mod m
        int modInverse(int a, int m) {
            for (int x = 1; x < m; x++) {
                if ((a * x) % m == 1) {
                    return x;
                }
            }
            return -1;  // If no modular inverse exists
        }

        // Function to encrypt the message using Affine Cipher
        string affineEncrypt(string text, int a, int b) {
            string cipherText = "";
            int m = 26;

            for (char c : text) {
                if (isalpha(c)) {
                    int x = toupper(c) - 'A';
                    char cipherChar = (a * x + b) % m + 'A';
                    cipherText += cipherChar;
                } else {
                    cipherText += c;  // Non-alphabet characters remain unchanged
                }
            }

            return cipherText;
        }

        // Function to decrypt the message using Affine Cipher
        string affineDecrypt(string cipherText, int a, int b) {
            string plainText = "";
            int m = 26;
            int aInv = modInverse(a, m);

            if (aInv == -1) {
                throw invalid_argument("Modular inverse doesn't exist for a and m.");
            }

            for (char c : cipherText) {
                if (isalpha(c)) {
                    int y = toupper(c) - 'A';
                    char plainChar = (aInv * (y - b + m) % m) + 'A';
                    plainText += plainChar;
                } else {
                    plainText += c;
                }
            }

            return plainText;
        }

        int main() {
            int a = 5, b = 8;  // Example key values
            string message = "AFFINE CIPHER";

            string cipherText = affineEncrypt(message, a, b);
            cout << "Encrypted: " << cipherText << endl;

            string decryptedMessage = affineDecrypt(cipherText, a, b);
            cout << "Decrypted: " << decryptedMessage << endl;

            return 0;
        }
    `;

    const javaCode = `
        import java.util.Scanner;

        public class AffineCipher {
            
            // Function to find modular inverse of a under modulo m
            static int modInverse(int a, int m) {
                for (int x = 1; x < m; x++) {
                    if ((a * x) % m == 1) {
                        return x;
                    }
                }
                return -1;  // If no modular inverse exists
            }

            // Function to encrypt message using Affine Cipher
            static String affineEncrypt(String text, int a, int b) {
                StringBuilder cipherText = new StringBuilder();
                int m = 26;

                for (char c : text.toCharArray()) {
                    if (Character.isLetter(c)) {
                        int x = Character.toUpperCase(c) - 'A';
                        char cipherChar = (char) (((a * x + b) % m) + 'A');
                        cipherText.append(cipherChar);
                    } else {
                        cipherText.append(c);  // Non-alphabet characters remain unchanged
                    }
                }

                return cipherText.toString();
            }

            // Function to decrypt message using Affine Cipher
            static String affineDecrypt(String cipherText, int a, int b) {
                StringBuilder plainText = new StringBuilder();
                int m = 26;
                int aInv = modInverse(a, m);

                if (aInv == -1) {
                    throw new IllegalArgumentException("Modular inverse doesn't exist for a and m.");
                }

                for (char c : cipherText.toCharArray()) {
                    if (Character.isLetter(c)) {
                        int y = Character.toUpperCase(c) - 'A';
                        char plainChar = (char) (((aInv * (y - b)) % m + m) % m + 'A');
                        plainText.append(plainChar);
                    } else {
                        plainText.append(c);
                    }
                }

                return plainText.toString();
            }

            public static void main(String[] args) {
                int a = 5, b = 8;  // Example key values
                String message = "AFFINE CIPHER";

                String cipherText = affineEncrypt(message, a, b);
                System.out.println("Encrypted: " + cipherText);

                String decryptedMessage = affineDecrypt(cipherText, a, b);
                System.out.println("Decrypted: " + decryptedMessage);
            }
        }

    `;
  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Affine Cipher</h1>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            The Affine cipher is a type of monoalphabetic substitution cipher, commonly used in classical cryptography.
            It's useful for encrypting simple messages and is often used in educational settings to teach cryptographic
            principles like modular arithmetic and linear transformations.
          </p>

          <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
          <p className="mb-4">
            Enter the keys 'a' and 'b' for the affine transformation, and provide the message to encrypt or decrypt. Ensure
            that 'a' is coprime with 26 to enable encryption.
          </p>
        </div>

        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter key 'a'"
            value={keyA}
            onChange={(e) => setKeyA(e.target.value)}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="number"
            placeholder="Enter key 'b'"
            value={keyB}
            onChange={(e) => setKeyB(e.target.value)}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            placeholder="Enter text"
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

        <h2 className="text-2xl font-semibold mb-2">Output</h2>
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

export default AffineCipher;
