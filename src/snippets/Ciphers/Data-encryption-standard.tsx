import { useState } from "react";
import CodeSnippet from "../../components/codeSnippet";

const DESCipher = () => {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [resultText, setResultText] = useState("");
  const [cipherMode, setCipherMode] = useState<"encrypt" | "decrypt">("encrypt");

  
  const desEncrypt = (text: string, key: string) => {
    const cipher = require("crypto").createCipheriv("des-ecb", Buffer.from(key), null);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  };

 
  const desDecrypt = (encryptedText: string, key: string) => {
    const decipher = require("crypto").createDecipheriv("des-ecb", Buffer.from(key), null);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  };

  const pythonCode = `
def vernam_encrypt(message, key):
    message, key = message.upper(), key.upper()
    return ''.join(
        chr(((ord(m) - 65 + ord(k) - 65) % 26) + 65)
        for m, k in zip(message, key)
    )

def vernam_decrypt(cipher, key):
    cipher, key = cipher.upper(), key.upper()
    return ''.join(
        chr(((ord(c) - ord(k) + 26) % 26) + 65)
        for c, k in zip(cipher, key)
    )
`;

const cppCode = `
#include <iostream>
#include <string>
using namespace std;

string vernamEncrypt(const string& message, const string& key) {
    string cipherText;
    for (size_t i = 0; i < message.size(); ++i) {
        char encryptedChar = ((message[i] - 'A' + key[i] - 'A') % 26) + 'A';
        cipherText += encryptedChar;
    }
    return cipherText;
}

string vernamDecrypt(const string& cipher, const string& key) {
    string plainText;
    for (size_t i = 0; i < cipher.size(); ++i) {
        char decryptedChar = ((cipher[i] - key[i] + 26) % 26) + 'A';
        plainText += decryptedChar;
    }
    return plainText;
}
`;
    
const javaCode = `
public class VernamCipher {
    public static String vernamEncrypt(String message, String key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        StringBuilder cipherText = new StringBuilder();

        for (int i = 0; i < message.length(); i++) {
            char encryptedChar = (char) (((message.charAt(i) - 'A' + key.charAt(i) - 'A') % 26) + 'A');
            cipherText.append(encryptedChar);
        }
        return cipherText.toString();
    }

    public static String vernamDecrypt(String cipher, String key) {
        cipher = cipher.toUpperCase();
        key = key.toUpperCase();
        StringBuilder plainText = new StringBuilder();

        for (int i = 0; i < cipher.length(); i++) {
            char decryptedChar = (char) (((cipher.charAt(i) - key.charAt(i) + 26) % 26) + 'A');
            plainText.append(decryptedChar);
        }
        return plainText.toString();
    }
}
`;


  const handleFormSubmit = () => {
    if (key.length !== 8) {
      alert("Key must be exactly 8 characters (64 bits) long!");
      return;
    }
    if (!inputText) {
      alert("Please enter some text to encrypt or decrypt!");
      return;
    }

    if (cipherMode === "encrypt") {
      const encryptedText = desEncrypt(inputText, key);
      setResultText(encryptedText);
    } else {
      try {
        const decryptedText = desDecrypt(inputText, key);
        setResultText(decryptedText);
      } catch (error) {
        alert("Invalid input or key for decryption.");
      }
    }
  };

  return (
    <div className="max-w-l mx-auto p-6 my-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
      <h1 className="text-4xl font-bold mb-4">DES Encryption / Decryption</h1>

      {/* Use Case Reference Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Use Case Reference</h2>
        <p className="mb-4">
          DES (Data Encryption Standard) is a symmetric-key algorithm that encrypts 64-bit blocks using a 56-bit key (represented by 8 characters here).
          It is widely used in:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Securing passwords and authentication data.</li>
          <li>Encrypting personal communications (e.g., emails or messages).</li>
          <li>Storing sensitive information such as credit card details or identification numbers.</li>
          <li>
            Legacy systems that still use DES for encryption, though modern algorithms like AES are preferred today.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">How to Use</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Enter an 8-character key:</strong> This key must be exactly 8 characters long, as it corresponds to the 64-bit key size used by DES.
          </li>
          <li>
            <strong>Enter the text to encrypt or decrypt:</strong> This text can be any message or data you wish to secure.
          </li>
          <li>
            <strong>Select "Encrypt" or "Decrypt":</strong> Choose the operation you want to perform. For decryption, ensure you provide the correct encrypted text and key.
          </li>
          <li>
            <strong>Press "Submit":</strong> The result will appear in the output field below.
          </li>
        </ol>
      </div>

      {/* Input Form Section */}
      <div className="mt-8">
        <input
          type="text"
          placeholder="Enter 8-character key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
        />

        <textarea
          placeholder="Enter text to encrypt or decrypt"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border border-purple-600 p-3 mb-4 w-full text-black h-24 rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
        />

        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setCipherMode("encrypt")}
            className={`flex-1 p-3 rounded-lg transition-all duration-200 ${
              cipherMode === "encrypt"
                ? "bg-purple-700 text-white"
                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
            }`}
          >
            Encrypt
          </button>
          <button
            onClick={() => setCipherMode("decrypt")}
            className={`flex-1 p-3 rounded-lg transition-all duration-200 ${
              cipherMode === "decrypt"
                ? "bg-purple-700 text-white"
                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
            }`}
          >
            Decrypt
          </button>
        </div>

        <button
          onClick={handleFormSubmit}
          className="bg-purple-700 text-white p-3 w-full rounded-lg hover:bg-purple-800 transition duration-200"
        >
          Submit
        </button>
      </div>

      {/* Output Section */}
      <h2 className="text-4xl font-semibold mt-8 mb-2">Output</h2>
      <textarea
        value={resultText}
        readOnly
        className="border border-purple-600 p-3 w-full text-black h-20 rounded-lg focus:outline-none"
      />
       <CodeSnippet language="python" code={pythonCode} codeTitle="Python Code" />
      <CodeSnippet language="cpp" code={cppCode} codeTitle="C++ Code" />
      <CodeSnippet language="java" code={javaCode} codeTitle="Java Code" />
    </div>
  );
};

export default DESCipher;
