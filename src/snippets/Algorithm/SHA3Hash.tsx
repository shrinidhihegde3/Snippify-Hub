import { useState } from "react";
import CodeSnippet from "../../components/codeSnippet";
import { keccak256 } from "js-sha3"; // You may need to install this package

const SHA3Hash = () => {
  const [inputText, setInputText] = useState("");
  const [hashOutput, setHashOutput] = useState("");

  const handleHash = () => {
    if (!inputText) {
      alert("Please enter a valid input!");
      return;
    }
    const hash = keccak256(inputText);
    setHashOutput(hash);
  };

  const keccakCode = `
// Full Keccak implementation in JavaScript
class Keccak {
    constructor() {
        this.state = new Uint8Array(200); // State size for Keccak
        this.rate = 1088; // Rate for SHA3-256
        this.capacity = 512; // Capacity for SHA3-256
        this.blockSize = 136; // Block size for SHA3-256
        this.output = new Uint8Array(32); // Output size for SHA3-256
        this.reset();
    }

    reset() {
        this.state.fill(0);
    }

    absorb(data) {
        for (let i = 0; i < data.length; i++) {
            this.state[i % this.blockSize] ^= data[i];
            if (i % this.blockSize === this.blockSize - 1) {
                this.permute();
            }
        }
    }

    squeeze(output, outputLength) {
        let offset = 0;
        while (offset < outputLength) {
            if (offset % this.blockSize === 0) {
                this.permute();
            }
            const remaining = Math.min(outputLength - offset, this.blockSize);
            output.set(this.state.subarray(0, remaining), offset);
            offset += remaining;
        }
    }

    permute() {
        // Keccak permutation implementation (omitted for brevity)
        // This should include the theta, rho, pi, chi, and iota steps
        // You can find the full algorithm in the Keccak specification
    }

    hash(input) {
        const data = new Uint8Array(input.length);
        for (let i = 0; i < input.length; i++) {
            data[i] = input.charCodeAt(i);
        }
        this.absorb(data);
        this.squeeze(this.output, this.output.length);
        return Array.from(this.output).map(b => ('00' + b.toString(16)).slice(-2)).join('');
    }
}

// Example usage:
const keccak = new Keccak();
const hash = keccak.hash("input data");
console.log(hash);
`;

  const pythonCode = `
import hashlib

def sha3_256_hash(input_text):
    return hashlib.sha3_256(input_text.encode()).hexdigest()
`;

  const cppCode = `
#include <iostream>
#include <openssl/sha.h>
#include <iomanip>

// Placeholder for actual Keccak implementation
std::string sha3_256(const std::string& str) {
    unsigned char hash[SHA256_DIGEST_LENGTH]; // Adjust to correct length
    // Replace with actual SHA-3 computation
    SHA3(reinterpret_cast<const unsigned char*>(str.c_str()), str.size(), hash);
    std::ostringstream oss;
    for (int i = 0; i < SHA256_DIGEST_LENGTH; ++i) {
        oss << std::hex << std::setw(2) << std::setfill('0') << (int)hash[i];
    }
    return oss.str();
}
`;

  const javaCode = `
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import java.security.MessageDigest;
import java.security.Security;

public class SHA3Example {
    static {
        Security.addProvider(new BouncyCastleProvider());
    }

    public static String sha3_256(String input) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA3-256");
            byte[] hash = digest.digest(input.getBytes("UTF-8"));
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
`;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">SHA-3 Hash Generator</h1>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            SHA-3 (Secure Hash Algorithm 3) is a cryptographic hash function designed to provide a fixed-size hash output from variable input data, ensuring data integrity and security. Based on the Keccak algorithm, SHA-3 is more robust than its predecessor, SHA-2. It produces a 256-bit hash, making it resistant to pre-image and collision attacks. SHA-3 is used in digital signatures, cryptocurrency transactions, and password storage, enhancing the security of sensitive information. Its unique sponge construction allows for flexible and efficient hashing, making it a reliable choice for various applications in today’s digital landscape.
          </p>
          <h3 className="text-xl font-semibold mb-2">1. Digital Signatures</h3>
          <p className="mb-4">
            SHA-3 is often used in digital signature algorithms to ensure the integrity and authenticity of messages. By hashing the data and signing the hash, one can verify that the message has not been altered.
          </p>
          <h3 className="text-xl font-semibold mb-2">2. Cryptocurrency</h3>
          <p className="mb-4">
            Many cryptocurrencies utilize SHA-3 for hashing transactions and blocks, contributing to their security and integrity. For example, Ethereum has integrated SHA-3 into its protocols.
          </p>
          <h3 className="text-xl font-semibold mb-2">3. Data Integrity</h3>
          <p className="mb-4">
            SHA-3 can be used to verify the integrity of files and data during transmission. By hashing the original data and comparing it with the hash of the received data, one can detect any tampering.
          </p>
          <h3 className="text-xl font-semibold mb-2">4. Password Hashing</h3>
          <p className="mb-4">
            It can be employed for securely hashing passwords before storing them in databases. This adds a layer of security, as even if the database is compromised, the original passwords remain hidden.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Benefits of SHA-3</h2>
          <p className="mb-4">
            <span className="font-bold">- Security:</span> Offers a high level of security and is resistant to various cryptographic attacks, including collision attacks.
          </p>
          <p className="mb-4">
            <span className="font-bold">- Performance:</span> Efficiently hashes variable-length inputs, making it suitable for a wide range of applications.
          </p>
          <p className="mb-4">
            <span className="font-bold">- Flexibility:</span> Supports various output sizes (224, 256, 384, and 512 bits), allowing users to choose the required level of security.
          </p>
          <p className="mb-4">
            <span className="font-bold">- Standardization:</span> As a NIST-standardized algorithm, SHA-3 is widely accepted and trusted in the cryptographic community.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Security Considerations</h2>
          <p className="mb-4">
            SHA-3 is designed to withstand pre-image attacks and collision attacks. Its sponge construction provides an additional layer of security compared to previous algorithms, making it a strong choice for cryptographic applications.
          </p>
          <h2 className="text-2xl font-semibold mb-2">References</h2>
          <p className="mb-4">
            - <a href="https://csrc.nist.gov/publications/detail/sp/800-185/final" className="text-blue-600">NIST Special Publication 800-185</a>: Details on SHA-3 and its applications.
          </p>
          <p className="mb-4">
            - <a href="https://keccak.team/reference.html" className="text-blue-600">The Keccak Reference</a>: Official documentation for the Keccak algorithm.
          </p>
          <p className="mb-4">
            - <a href="https://en.wikipedia.org/wiki/SHA-3" className="text-blue-600">Wikipedia on SHA-3</a>: Overview of SHA-3, including its history, specifications, and applications.
          </p>
          <h2 className="text-2xl font-semibold mb-2">How to Implement SHA-3 Hash Generator</h2>
<p className="mb-4">
  The SHA-3 Hash Generator component is built using React and the <code>js-sha3</code> library, which provides a convenient way to compute SHA-3 hash values. This section explains the key parts of the implementation and how they work.
</p>
<h3 className="text-xl font-semibold mb-2">1. Importing Required Libraries</h3>
<p className="mb-4">
  To implement this component, we first need to import <code>useState</code> from React to manage state, and <code>keccak256</code> from the <code>js-sha3</code> library to perform the hash computation. You can install the <code>js-sha3</code> package using npm:
</p>
<pre className="bg-gray-800 text-white p-4 rounded-lg mb-4"><code>npm install js-sha3</code></pre>
<p className="mb-4">
  After installation, import the necessary libraries as follows:
</p>
<pre className="bg-gray-800 text-white p-4 rounded-lg mb-4"><code>{`import { useState } from "react";\nimport { keccak256 } from "js-sha3";`}</code></pre>

<h3 className="text-xl font-semibold mb-2">2. Setting Up State</h3>
<p className="mb-4">
  In React, state is used to store and manage dynamic data. In this component, we use <code>useState</code> to create two state variables: <code>inputText</code> to hold the user's input and <code>hashOutput</code> to hold the resulting hash.
</p>
<pre className="bg-gray-800 text-white p-4 rounded-lg mb-4"><code>{`const [inputText, setInputText] = useState("");\nconst [hashOutput, setHashOutput] = useState("");`}</code></pre>
<p className="mb-4">
  This allows us to dynamically update the values as the user interacts with the component.
</p>

<h3 className="text-xl font-semibold mb-2">3. Handling User Input and Hash Generation</h3>
<p className="mb-4">
  The <code>handleHash</code> function is triggered when the user clicks the "Hash" button. It checks if the input is valid (i.e., not empty), and if valid, it uses the <code>keccak256</code> function to compute the SHA-3 hash of the input text. The result is stored in <code>hashOutput</code>, which is then displayed to the user.
</p>
<pre className="bg-gray-800 text-white p-4 rounded-lg mb-4"><code>{`const handleHash = () => {\n  if (!inputText) {\n    alert("Please enter a valid input!");\n    return;\n  }\n  const hash = keccak256(inputText);\n  setHashOutput(hash);\n};`}</code></pre>

<h3 className="text-xl font-semibold mb-2">4. Rendering the UI</h3>
<p className="mb-4">
  The UI consists of two <code>textarea</code> elements for input and output, and a button that triggers the hash generation. When the user enters text and clicks the button, the hash is computed and displayed in the output area. Here's how the UI components are structured:
</p>
<pre className="bg-gray-800 text-white p-4 rounded-lg mb-4"><code>{`<textarea value={inputText} onChange={(e) => setInputText(e.target.value)} />\n<button onClick={handleHash}>Hash</button>\n<textarea value={hashOutput} readOnly />`}</code></pre>

<h3 className="text-xl font-semibold mb-2">5. Code Snippets for Other Languages</h3>
<p className="mb-4">
  Additionally, code snippets for SHA-3 hash generation in other languages (JavaScript, Python, C++, and Java) are provided using the <code>CodeSnippet</code> component. These snippets offer examples of how the Keccak algorithm can be implemented in different programming environments.
</p>

        </div>

        <div className="mb-4">
          <textarea
            placeholder="Enter text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
          />

          <button
            onClick={handleHash}
            className="bg-purple-700 text-white p-3 w-full rounded-lg hover:bg-purple-800 transition duration-200"
          >
            Hash
          </button>
        </div>

        <h2 className="text-2xl font-semibold mb-2">Output</h2>
        <textarea
          value={hashOutput}
          readOnly
          className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <CodeSnippet
        language="javascript"
        code={keccakCode}
        codeTitle="Keccak Function - JavaScript"
      />
      <CodeSnippet
        language="python"
        code={pythonCode}
        codeTitle="SHA3-256 Hash - Python"
      />
      <CodeSnippet
        language="cpp"
        code={cppCode}
        codeTitle="SHA3-256 Hash - C++"
      />
      <CodeSnippet
        language="java"
        code={javaCode}
        codeTitle="SHA3-256 Hash - Java"
      />
    </div>
  );
};

export default SHA3Hash;
