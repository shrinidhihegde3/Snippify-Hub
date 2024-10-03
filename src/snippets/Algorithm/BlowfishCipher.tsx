import { useState } from "react";
import CodeSnippet from "../../components/codeSnippet";
import * as CryptoJS from "crypto-js";

const BlowfishCipher = () => {
  const exampleCode = `
#include <iostream>
#include <string>
#include <cryptlib.h>
#include <osrng.h>
#include <filters.h>
#include <hex.h>
#include <blowfish.h>

void encrypt(const std::string &input, std::string &output, const std::string &key) {
    using namespace CryptoPP;

    // Initialize Blowfish cipher
    Blowfish::Encryption encryption;
    encryption.SetKey((byte*)key.data(), key.size());

    // Prepare the output string
    std::string cipherText;

    // Encrypt the input
    try {
        StringSource ss(input, true, 
            new StreamTransformationFilter(encryption,
                new StringSink(cipherText)
            )
        );
    } catch (const Exception &e) {
        std::cerr << "Encryption error: " << e.what() << std::endl;
        return;
    }

    // Encode to hex format for display purposes
    StringSource ss(cipherText, true, 
        new HexEncoder(
            new StringSink(output)
        )
    );
}


void decrypt(const std::string &input, std::string &output, const std::string &key) {
    using namespace CryptoPP;

    // Decode hex input back to binary
    std::string cipherText;
    StringSource(input, true, new HexDecoder(new StringSink(cipherText)));

    // Initialize Blowfish cipher for decryption
    Blowfish::Decryption decryption;
    decryption.SetKey((byte*)key.data(), key.size());

    // Prepare the output string
    std::string plainText;

    // Decrypt the input
    try {
        StringSource ss(cipherText, true, 
            new StreamTransformationFilter(decryption,
                new StringSink(plainText)
            )
        );
    } catch (const Exception &e) {
        std::cerr << "Decryption error: " << e.what() << std::endl;
        return;
    }

    output = plainText;
}


int main() {
    std::string key = "your-secret-key"; // Use a proper key size for Blowfish (16 to 56 bytes)
    std::string input = "text to encrypt";
    std::string encrypted;
    std::string decrypted;

    // Encrypt the input
    encrypt(input, encrypted, key);
    std::cout << "Encrypted: " << encrypted << std::endl;

    // Decrypt the output
    decrypt(encrypted, decrypted, key);
    std::cout << "Decrypted: " << decrypted << std::endl;

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
        // Encrypt the text using Blowfish
        const encrypted = CryptoJS.Blowfish.encrypt(text, key).toString();
        setOutput(encrypted);
      } else {
        // Decrypt the text using Blowfish
        const decrypted = CryptoJS.Blowfish.decrypt(text, key).toString(CryptoJS.enc.Utf8);
        setOutput(decrypted);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("An error occurred: " + error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Blowfish Cipher Code in C++</h1>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            Blowfish is a fast block cipher that encrypts data in 64-bit blocks.
            It is commonly used in various applications like File Encryption, VPNs, Secure Communication, Embedded Systems for securing sensitive data.
          </p>
          <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
          <p>
            To use the Blowfish cipher, start by generating a key that is between 32 and 448 bits in length. Next, initialize the cipher by utilizing a library such as PyCryptodome in Python to create a Blowfish cipher object. For the encryption process, simply pass the plaintext to this cipher object. When it comes to decryption, use the same key and cipher object on the ciphertext to retrieve the original plaintext. This straightforward approach allows for secure encryption and decryption of data.
          </p>
        </div>

        <h2 className="text-4xl font-semibold mb-2">Test the Blowfish Cipher</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="border border-gray-300 p-2 mb-2 w-full text-black"
          />
          <textarea
            placeholder="Enter text to encrypt/decrypt"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-gray-300 p-2 mb-2 w-full text-black"
          />
          <div className="flex mb-2">
            <button
              onClick={() => setMode("encrypt")}
              className={`flex-1 p-2 ${mode === "encrypt" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            >
              Encrypt
            </button>
            <button
              onClick={() => setMode("decrypt")}
              className={`flex-1 p-2 ${mode === "decrypt" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            >
              Decrypt
            </button>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-purple-500 text-white p-2 w-full hover:bg-purple-600 transition duration-200"
          >
            Submit
          </button>
        </div>

        <h2 className="text-4xl font-semibold mb-2">Output</h2>
        <textarea
          value={output}
          readOnly
          className="border border-gray-300 p-2 mb-2 w-full text-black h-20"
        />
      </div>
      <CodeSnippet code={exampleCode} language="cpp" />
    </div>
  );
};

export default BlowfishCipher;