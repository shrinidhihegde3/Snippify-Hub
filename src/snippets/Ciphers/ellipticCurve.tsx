import { useState } from "react";
import CodeSnippet from "../../components/codeSnippet"; // Assuming a CodeSnippet component for code examples

// Elliptic Curve-like public key generation (simplified for demonstration)
const generatePublicKey = (
  basePoint: number,
  privateKey: number,
  prime: number
) => (basePoint * privateKey) % prime;

// Shared secret generation function
const generateSharedSecret = (
  receivedPublicKey: number,
  privateKey: number,
  prime: number
) => (receivedPublicKey * privateKey) % prime;

// Simple encryption function
const encryptMessage = (message: string, sharedSecret: number) =>
  message
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + sharedSecret))
    .join("");

// Simple decryption function
const decryptMessage = (encryptedMessage: string, sharedSecret: number) =>
  encryptedMessage
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) - sharedSecret))
    .join("");

const EllipticCurveCryptography = () => {
  const basePoint = 5; // Base point
  const prime = 23; // Prime number
  const [privateKeyA, setPrivateKeyA] = useState<number>();
  const [privateKeyB, setPrivateKeyB] = useState<number>();
  const [sharedSecret, setSharedSecret] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [encryptedMessage, setEncryptedMessage] = useState<string | null>(null);
  const [decryptedMessage, setDecryptedMessage] = useState<string | null>(null);

  const handleEncryption = () => {
    if (!privateKeyA || !privateKeyB) {
      alert("Please enter valid private keys!");
      return;
    }

    // Generate public keys for both users
    const publicKeyA = generatePublicKey(basePoint, privateKeyA, prime);
    const publicKeyB = generatePublicKey(basePoint, privateKeyB, prime);

    // Calculate the shared secret
    const secretA = generateSharedSecret(publicKeyB, privateKeyA, prime);
    const secretB = generateSharedSecret(publicKeyA, privateKeyB, prime);

    if (secretA !== secretB) {
      alert("Error: Shared secrets do not match!");
      return;
    }

    setSharedSecret(secretA);

    // Encrypt the message
    const encrypted = encryptMessage(message, secretA);
    setEncryptedMessage(encrypted);

    // Decrypt the message
    const decrypted = decryptMessage(encrypted, secretA);
    setDecryptedMessage(decrypted);
  };

  const pythonCode = `
def generate_public_key(base_point, private_key, prime):
    return (base_point * private_key) % prime

def generate_shared_secret(received_public_key, private_key, prime):
    return (received_public_key * private_key) % prime

def xor_encrypt_decrypt(message, key):
    return ''.join(chr(ord(char) ^ key) for char in message)

base_point = 5
prime = 23
private_key_a = 6
private_key_b = 15

public_key_a = generate_public_key(base_point, private_key_a, prime)
public_key_b = generate_public_key(base_point, private_key_b, prime)

shared_secret_a = generate_shared_secret(public_key_b, private_key_a, prime)
shared_secret_b = generate_shared_secret(public_key_a, private_key_b, prime)

assert shared_secret_a == shared_secret_b

message = "hello"
encrypted_message = xor_encrypt_decrypt(message, shared_secret_a)
decrypted_message = xor_encrypt_decrypt(encrypted_message, shared_secret_a)

print("Shared Secret:", shared_secret_a)
print("Encrypted Message:", encrypted_message)
print("Decrypted Message:", decrypted_message)
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">ECC Encryption Example</h1>
        <p className="mb-4">
          This example demonstrates ECC-based key exchange and message
          encryption and decryption.
        </p>

        <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
        <p className="mb-4">
          1. Enter **Private Key A** and **Private Key B** for two users.
          <br />
          2. Enter a **Message** to encrypt.
          <br />
          3. Click **Encrypt & Decrypt** to see the encrypted and decrypted
          messages.
        </p>
        <h2 className="text-2xl font-semibold mb-2 mt-6">
          Understanding ECC and Use Cases
        </h2>
        <p className="mb-4">
          **Elliptic Curve Cryptography (ECC)** is widely used for secure
          communication due to its strong encryption with relatively small key
          sizes. ECC is particularly popular in mobile applications and IoT
          devices where computational power is limited.
        </p>

        <h3 className="text-xl font-semibold mb-2">Real-World Applications</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            **Secure Sockets Layer (SSL)** and **Transport Layer Security
            (TLS)** for HTTPS connections
          </li>
          <li>**Email encryption** in protocols like PGP</li>
          <li>
            Mobile communication encryption in apps such as WhatsApp and Signal
          </li>
        </ul>

        <p className="mb-4">
          For more on ECC and its applications, visit the
          <a
            href="https://en.wikipedia.org/wiki/Elliptic-curve_cryptography"
            target="_blank"
            className="text-purple-400 underline ml-1"
          >
            ECC Wikipedia page
          </a>
          .
        </p>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter Private Key A"
            value={privateKeyA || ""}
            onChange={(e) => setPrivateKeyA(parseInt(e.target.value))}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg"
          />
          <input
            type="number"
            placeholder="Enter Private Key B"
            value={privateKeyB || ""}
            onChange={(e) => setPrivateKeyB(parseInt(e.target.value))}
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

        {sharedSecret !== null && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Output</h2>
            <p>Shared Secret: {sharedSecret}</p>
            <p>Encrypted Message: {encryptedMessage}</p>
            <p>Decrypted Message: {decryptedMessage}</p>
          </>
        )}
      </div>

      <CodeSnippet
        language="python"
        code={pythonCode}
        codeTitle="ECC - Python"
      />
    </div>
  );
};

export default EllipticCurveCryptography;
