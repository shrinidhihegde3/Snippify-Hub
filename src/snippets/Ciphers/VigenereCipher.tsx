import CodeSnippet from "../../components/codeSnippet";
import { useState } from "react";

// Vigenère Cipher Encryption Function
const vigenereEncrypt = (message: string, key: string) => {
  let result = "";
  let keyIndex = 0;
  key = key.toUpperCase();

  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (char.match(/[A-Za-z]/)) {
      let base = char.charCodeAt(0) < 97 ? 65 : 97;
      let x = char.charCodeAt(0) - base;
      let k = key.charCodeAt(keyIndex % key.length) - 65;
      let cipherChar = (x + k) % 26;
      result += String.fromCharCode(cipherChar + base);
      keyIndex++;
    } else {
      result += char;
    }
  }
  return result;
};

// Vigenère Cipher Decryption Function
const vigenereDecrypt = (cipherText: string, key: string) => {
  let result = "";
  let keyIndex = 0;
  key = key.toUpperCase();

  for (let i = 0; i < cipherText.length; i++) {
    let char = cipherText[i];
    if (char.match(/[A-Za-z]/)) {
      let base = char.charCodeAt(0) < 97 ? 65 : 97;
      let y = char.charCodeAt(0) - base;
      let k = key.charCodeAt(keyIndex % key.length) - 65;
      let plainChar = (y - k + 26) % 26;
      result += String.fromCharCode(plainChar + base);
      keyIndex++;
    } else {
      result += char;
    }
  }
  return result;
};

const VigenereCipher = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const handleSubmit = () => {
    if (!text || !key) {
      alert("Please enter valid inputs!");
      return;
    }

    if (mode === "encrypt") {
      const encrypted = vigenereEncrypt(text, key);
      setOutput(encrypted);
    } else {
      const decrypted = vigenereDecrypt(text, key);
      setOutput(decrypted);
    }
  };

  const pythonCode = `
def vigenere_encrypt(message, key):
    key = key.upper()
    result = []
    key_index = 0
    for char in message:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            x = ord(char) - base
            k = ord(key[key_index % len(key)]) - ord('A')
            result.append(chr((x + k) % 26 + base))
            key_index += 1
        else:
            result.append(char)
    return ''.join(result)

def vigenere_decrypt(cipher_text, key):
    key = key.upper()
    result = []
    key_index = 0
    for char in cipher_text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            y = ord(char) - base
            k = ord(key[key_index % len(key)]) - ord('A')
            result.append(chr((y - k + 26) % 26 + base))
            key_index += 1
        else:
            result.append(char)
    return ''.join(result)
`;

  const cppCode = `
#include <iostream>
#include <string>
using namespace std;

string vigenereEncrypt(string message, string key) {
    string result = "";
    int keyIndex = 0;
    for (char &c : message) {
        if (isalpha(c)) {
            char base = isupper(c) ? 'A' : 'a';
            char k = toupper(key[keyIndex % key.length()]) - 'A';
            result += (c - base + k) % 26 + base;
            keyIndex++;
        } else {
            result += c;
        }
    }
    return result;
}

string vigenereDecrypt(string cipherText, string key) {
    string result = "";
    int keyIndex = 0;
    for (char &c : cipherText) {
        if (isalpha(c)) {
            char base = isupper(c) ? 'A' : 'a';
            char k = toupper(key[keyIndex % key.length()]) - 'A';
            result += (c - base - k + 26) % 26 + base;
            keyIndex++;
        } else {
            result += c;
        }
    }
    return result;
}
`;

  const javaCode = `
public class VigenereCipher {

    public static String vigenereEncrypt(String message, String key) {
        StringBuilder result = new StringBuilder();
        key = key.toUpperCase();
        int keyIndex = 0;

        for (char c : message.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isUpperCase(c) ? 'A' : 'a';
                int k = key.charAt(keyIndex % key.length()) - 'A';
                result.append((char)((c - base + k) % 26 + base));
                keyIndex++;
            } else {
                result.append(c);
            }
        }
        return result.toString();
    }

    public static String vigenereDecrypt(String cipherText, String key) {
        StringBuilder result = new StringBuilder();
        key = key.toUpperCase();
        int keyIndex = 0;

        for (char c : cipherText.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isUpperCase(c) ? 'A' : 'a';
                int k = key.charAt(keyIndex % key.length()) - 'A';
                result.append((char)((c - base - k + 26) % 26 + base));
                keyIndex++;
            } else {
                result.append(c);
            }
        }
        return result.toString();
    }
}
`;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Vigenère Cipher</h1>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            The Vigenère cipher is a method of encrypting alphabetic text by
            using a simple form of polyalphabetic substitution, making it
            stronger than simple monoalphabetic ciphers.
          </p>

          <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
          <p className="mb-4">
            Enter a keyword for the cipher key and the message to encrypt or
            decrypt. This cipher uses the key to perform a repeating series of
            Caesar ciphers.
          </p>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter keyword"
            value={key}
            onChange={(e) => setKey(e.target.value)}
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
          className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <CodeSnippet
      language="python"
      code={pythonCode}
      codeTitle="Vigenère Cipher - Python"
    />
    <CodeSnippet
      language="cpp"
      code={cppCode}
      codeTitle="Vigenère Cipher - C++"
    />
    <CodeSnippet
      language="java"
      code={javaCode}
      codeTitle="Vigenère Cipher - Java"
    />
    </div>
  );
};

export default VigenereCipher;
