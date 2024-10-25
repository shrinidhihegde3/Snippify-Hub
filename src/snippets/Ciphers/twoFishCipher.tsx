import { useState } from "react";
import CodeSnippet from "../../components/codeSnippet";
import {encrypt,decrypt,makeSession} from "twofish-ts";

const TwofishCipher = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const handleTwofishEncryption = () => {
    const keyArray = new TextEncoder().encode(key);
  const textArray = new TextEncoder().encode(text);

  if (![16, 24, 32].includes(keyArray.length)) {
    alert("Invalid key length! Twofish requires a 16, 24, or 32-byte key.");
    return;
  }

  const session = makeSession(keyArray);

  if (mode === "encrypt") {
    // Pad the plaintext array to a multiple of 16 bytes (PKCS7 padding)
    const paddingSize = 16 - (textArray.length % 16);
    const paddedTextArray = new Uint8Array(textArray.length + paddingSize);
    paddedTextArray.set(textArray);
    paddedTextArray.fill(paddingSize, textArray.length); // PKCS7 padding bytes

    const outputArray = new Uint8Array(paddedTextArray.length);
    encrypt(paddedTextArray, 0, outputArray, 0, session);

    const encryptedResult = Array.from(outputArray)
      .map((byte) => String.fromCharCode(byte))
      .join("");
    setOutput(encryptedResult);
  } else {
    const encryptedArray = new Uint8Array(text.split("").map((char) => char.charCodeAt(0)));
    const outputArray = new Uint8Array(encryptedArray.length);

    decrypt(encryptedArray, 0, outputArray, 0, session);

    // Remove PKCS7 padding after decryption
    const paddingSize = outputArray[outputArray.length - 1];
    const unpaddedArray = outputArray.slice(0, outputArray.length - paddingSize);

    const decryptedText = new TextDecoder().decode(unpaddedArray);
    setOutput(decryptedText);
  }
  };

  const pythonCode = `
import pyaes

def twofish_encrypt(key, plaintext):
    twofish = pyaes.Twofish(key.encode('utf-8'))
    return twofish.encrypt(plaintext.encode('utf-8'))

def twofish_decrypt(key, ciphertext):
    twofish = pyaes.Twofish(key.encode('utf-8'))
    return twofish.decrypt(ciphertext).decode('utf-8')

key = "examplekey1234"
plaintext = "Hello, Twofish!"
ciphertext = twofish_encrypt(key, plaintext)
print("Encrypted:", ciphertext)

decrypted_text = twofish_decrypt(key, ciphertext)
print("Decrypted:", decrypted_text)
`;

  const cppCode = `
// Twofish implementation in C++ (requires third-party library)
#include <twofish.h>
#include <iostream>
#include <string>

std::string twofishEncrypt(const std::string &key, const std::string &plaintext) {
    // Encryption function using Twofish
    Twofish twofish(key);
    return twofish.encrypt(plaintext);
}

std::string twofishDecrypt(const std::string &key, const std::string &ciphertext) {
    // Decryption function using Twofish
    Twofish twofish(key);
    return twofish.decrypt(ciphertext);
}

int main() {
    std::string key = "examplekey1234";
    std::string plaintext = "Hello, Twofish!";
    
    std::string ciphertext = twofishEncrypt(key, plaintext);
    std::cout << "Encrypted: " << ciphertext << std::endl;
    
    std::string decryptedText = twofishDecrypt(key, ciphertext);
    std::cout << "Decrypted: " << decryptedText << std::endl;
}
`;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Twofish Cipher</h1>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            Twofish is a symmetric key block cipher, considered secure for a variety of encryption purposes, including file and data encryption.
          </p>

          <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
          <p className="mb-4">
            Enter a key and the message to encrypt or decrypt. Choose the mode (encrypt or decrypt) and click "Submit" to get the output.
          </p>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter key, ex: examplekey1234"
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
            onClick={handleTwofishEncryption}
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

      {/* Container for Code Snippets */}
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h2 className="text-4xl font-semibold mb-2">Python Code</h2>
        <CodeSnippet code={pythonCode} language="python" />

        <h2 className="text-4xl font-semibold mb-2 mt-6">C++ Code</h2>
        <CodeSnippet code={cppCode} language="cpp" />
      </div>
    </div>
  );
};

export default TwofishCipher;