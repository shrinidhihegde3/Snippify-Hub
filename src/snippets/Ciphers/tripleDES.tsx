import { useState } from "react";
import CryptoJS from "crypto-js";

const TripleDES = () => {
  const [key, setKey] = useState<string>(""); // 24-byte key for 3DES
  const [message, setMessage] = useState<string>("");
  const [encryptedMessage, setEncryptedMessage] = useState<string | null>(null);
  const [decryptedMessage, setDecryptedMessage] = useState<string | null>(null);

  const handleEncryption = () => {
    if (key.length !== 24) {
      alert("Key must be exactly 24 characters (168 bits) for Triple DES!");
      return;
    }
    // Encrypt the message
    const encrypted = CryptoJS.TripleDES.encrypt(message, key).toString();

    // Decrypt the message
    const decrypted = CryptoJS.TripleDES.decrypt(encrypted, key).toString(
      CryptoJS.enc.Utf8
    );

    setEncryptedMessage(encrypted);
    setDecryptedMessage(decrypted);
  };

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">
          Triple DES (3DES) Encryption Example
        </h1>
        <p className="mb-4">
          This example demonstrates Triple DES (3DES) encryption and decryption.
        </p>

        <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
        <p className="mb-4">
          1. Enter a **24-character key** (24 bytes).
          <br />
          2. Enter a **Message** to encrypt.
          <br />
          3. Click **Encrypt & Decrypt** to see the encrypted and decrypted
          messages.
        </p>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter 24-character Key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg"
          />
          <input
            type="text"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg"
          />

          <button
            onClick={handleEncryption}
            className="bg-purple-700 text-white p-3 w-full rounded-lg hover:bg-purple-800 transition duration-200"
          >
            Encrypt & Decrypt
          </button>
        </div>

        {encryptedMessage && decryptedMessage && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Output</h2>
            <p>Encrypted Message: {encryptedMessage}</p>
            <p>Decrypted Message: {decryptedMessage}</p>
          </>
        )}

        <h2 className="text-2xl font-semibold mb-2 mt-6">
          Understanding Triple DES (3DES)
        </h2>
        <p className="mb-4">
          **Triple DES (3DES)** applies the DES algorithm three times to each
          data block. It uses a key length of 168 bits, which is more secure
          than DES alone. Triple DES is used in applications like financial
          services and legacy systems for encryption.
        </p>

        <h3 className="text-xl font-semibold mb-2">Real-World Applications</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>ATM PIN encryption in banking</li>
          <li>Encryption for secure database access</li>
          <li>VPNs and certain email encryption services</li>
        </ul>

        <p className="mb-4">
          For more on Triple DES, visit the
          <a
            href="https://en.wikipedia.org/wiki/Triple_DES"
            target="_blank"
            className="text-purple-400 underline ml-1"
          >
            Triple DES Wikipedia page
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TripleDES;
