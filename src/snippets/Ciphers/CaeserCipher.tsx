import { useState } from "react";
import CodeSnippet from "../../components/codeSnippet";

const CaesarCipher = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState<number | "">("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  // Caesar Cipher Function
  const CaesarCipherFunction = (message: string, shift: number, action: "encrypt" | "decrypt") => {
    let result = "";
    const shiftValue = action === "encrypt" ? shift : -shift;

    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + shiftValue + 26) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + shiftValue + 26) % 26) + 97;
      }

      result += String.fromCharCode(charCode);
    }

    return result;
  };

  const handleSubmit = () => {
    if (!key || !text) {
      alert("Please enter both key and text!");
      return;
    }

    const shiftKey = typeof key === "number" ? key : parseInt(key, 10);

    if (mode === "encrypt") {
      const encrypted = CaesarCipherFunction(text, shiftKey, "encrypt");
      setOutput(encrypted);
    } else {
      const decrypted = CaesarCipherFunction(text, shiftKey, "decrypt");
      setOutput(decrypted);
    }
  };
  const caesercipherjava = `/*
  * Java Program to Implement Caesar Cipher
  */
  
 package com.sanfoundry.setandstring;
  
 import java.util.Scanner;
  
 public class CaesarCipher
 {
     public static final String ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  
     public static String encrypt(String plainText, int shiftKey)
     {
         plainText = plainText.toLowerCase();
         String cipherText = "";
         for (int i = 0; i < plainText.length(); i++)
         {
             int charPosition = ALPHABET.indexOf(plainText.charAt(i));
             int keyVal = (shiftKey + charPosition) % 26;
             char replaceVal = ALPHABET.charAt(keyVal);
             cipherText += replaceVal;
         }
         return cipherText;
     }
  
     public static String decrypt(String cipherText, int shiftKey)
     {
         cipherText = cipherText.toLowerCase();
         String plainText = "";
         for (int i = 0; i < cipherText.length(); i++)
         {
             int charPosition = ALPHABET.indexOf(cipherText.charAt(i));
             int keyVal = (charPosition - shiftKey) % 26;
             if (keyVal < 0)
             {
                 keyVal = ALPHABET.length() + keyVal;
             }
             char replaceVal = ALPHABET.charAt(keyVal);
             plainText += replaceVal;
         }
         return plainText;
     }
  
     public static void main(String[] args)
     {
         Scanner sc = new Scanner(System.in);
         System.out.println("Enter the String for Encryption: ");
         String message = new String();
         message = sc.next();
         System.out.println(encrypt(message, 3));
         System.out.println(decrypt(encrypt(message, 3), 3));
         sc.close();
     }
 }`

  const caeserciphercode = `def caesar_cipher(text, shift, mode='encrypt'):
  result = ''
  shift_value = shift if mode == 'encrypt' else -shift

  for char in text:
      if char.isalpha():
          base = ord('A') if char.isupper() else ord('a')
          char_code = (ord(char) - base + shift_value) % 26 + base
          result += chr(char_code)
      else:
          result += char

  return result

# Usage example
text = 'Hello World'
shift = 3
encrypted = caesar_cipher(text, shift, mode='encrypt')
decrypted = caesar_cipher(encrypted, shift, mode='decrypt')
print(f'Encrypted: {encrypted}')
print(f'Decrypted: {decrypted}')
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      {/* Caesar Cipher Explanation */}
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Caesar Cipher Code</h1>
        <h2 className="text-4xl font-semibold mb-2">Explanation</h2>
        <p className="mb-4">
          The Caesar cipher is a type of substitution cipher where each letter
          in the plaintext is shifted by a certain number of positions down or
          up the alphabet. Named after Julius Caesar, who used it to encrypt his
          military messages, it involves shifting each letter of a message by a
          fixed number of positions based on the key.
        </p>
        <h2 className="text-4xl font-semibold mb-2">How to Use It</h2>
        <p className="mb-4">
          To encrypt a message, simply choose a key (shift) value and shift each
          character by that number. To decrypt, shift the characters back by the
          same key. For example, with a key of 3, the letter 'A' becomes 'D'. To
          decrypt, 'D' becomes 'A' again.
        </p>
        <p className="mb-4">
          The Caesar cipher is often used in simple encryption tasks and as an
          educational tool to teach cryptography fundamentals, particularly
          modular arithmetic. While not secure for modern use, it serves well
          for puzzles, encoding non-sensitive data, and teaching basic
          encryption.
        </p>
        <h2 className="text-4xl font-semibold mb-2">References</h2>
        <ul className="list-disc ml-5">
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Caesar_cipher"
              target="_blank"
              rel="noopener noreferrer"
            >
              Caesar Cipher - Wikipedia
            </a>
          </li>
          <li>
            <a
              href="https://www.sanfoundry.com/java-program-implement-caesar-cypher/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cryptography and Network Security Principles - Sanfoundry
            </a>
          </li>
        </ul>
      </div>

      {/* Use Cases Section */}
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h2 className="text-4xl font-semibold mb-2">Use Cases</h2>
        <p className="mb-4">
          The Caesar cipher is mainly used for simple encryption needs, such as:
        </p>
        <ul className="list-disc ml-5 mb-4">
          <li>Puzzle games that involve encryption</li>
          <li>Basic encryption for non-sensitive data</li>
          <li>Learning and teaching cryptography</li>
          <li>Encoding of information in basic systems</li>
        </ul>
      </div>

      {/* Caesar Cipher Test Section */}
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h2 className="text-4xl font-semibold mb-2">Test the Caesar Cipher</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter key"
            value={key}
            onChange={(e) =>
              setKey(e.target.value === "" ? "" : parseInt(e.target.value))
            }
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

      {/* Python Code Snippet */}
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h2 className="text-4xl font-semibold mb-2 mt-6">Java Code</h2>
        <CodeSnippet code={caesercipherjava} language="java" />

        <h2 className="text-4xl font-semibold mb-2 mt-6">Python Code</h2>
        <CodeSnippet code={caeserciphercode} language="python" />
      </div>
    </div>
  );
};

export default CaesarCipher;
