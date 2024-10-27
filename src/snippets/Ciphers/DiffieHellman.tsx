import { useState } from "react";
import CodeSnippet from "../../components/codeSnippet"; // Assuming a CodeSnippet component for code examples

// Generate the public key
const generatePublicKey = (base: number, privateKey: number, prime: number) =>
  Math.pow(base, privateKey) % prime;

// Generate the shared secret
const generateSharedSecret = (
  receivedPublicKey: number,
  privateKey: number,
  prime: number
) => Math.pow(receivedPublicKey, privateKey) % prime;

const DiffieHellman = () => {
  const base = 5; // Default base: 5
  const prime = 23; // Default prime: 23
  const [privateKeyA, setPrivateKeyA] = useState<number>();
  const [privateKeyB, setPrivateKeyB] = useState<number>();
  const [sharedSecret, setSharedSecret] = useState<number | null>(null);

  const handleSubmit = () => {
    if (!privateKeyA || !privateKeyB || !prime || !base) {
      alert("Please provide valid inputs!");
      return;
    }

    const publicKeyA = generatePublicKey(base, privateKeyA, prime);
    const publicKeyB = generatePublicKey(base, privateKeyB, prime);

    const secretA = generateSharedSecret(publicKeyB, privateKeyA, prime);
    const secretB = generateSharedSecret(publicKeyA, privateKeyB, prime);

    if (secretA === secretB) {
      setSharedSecret(secretA);
    } else {
      alert("Error: Secrets do not match!");
    }
  };

  const pythonCode = `
def generate_public_key(base, private_key, prime):
    return pow(base, private_key, prime)

def generate_shared_secret(received_public_key, private_key, prime):
    return pow(received_public_key, private_key, prime)

base = 5
prime = 23
private_key_a = 6
private_key_b = 15

public_key_a = generate_public_key(base, private_key_a, prime)
public_key_b = generate_public_key(base, private_key_b, prime)

shared_secret_a = generate_shared_secret(public_key_b, private_key_a, prime)
shared_secret_b = generate_shared_secret(public_key_a, private_key_b, prime)

assert shared_secret_a == shared_secret_b
print("Shared Secret:", shared_secret_a)
  `;

  const cppCode = `
#include <iostream>
#include <cmath>
using namespace std;

int generatePublicKey(int base, int privateKey, int prime) {
    return (int)pow(base, privateKey) % prime;
}

int generateSharedSecret(int receivedPublicKey, int privateKey, int prime) {
    return (int)pow(receivedPublicKey, privateKey) % prime;
}

int main() {
    int base = 5, prime = 23;
    int privateKeyA = 6, privateKeyB = 15;

    int publicKeyA = generatePublicKey(base, privateKeyA, prime);
    int publicKeyB = generatePublicKey(base, privateKeyB, prime);

    int sharedSecretA = generateSharedSecret(publicKeyB, privateKeyA, prime);
    int sharedSecretB = generateSharedSecret(publicKeyA, privateKeyB, prime);

    if (sharedSecretA == sharedSecretB) {
        cout << "Shared Secret: " << sharedSecretA << endl;
    } else {
        cout << "Error: Secrets do not match!" << endl;
    }
    return 0;
}
  `;

  const javaCode = `
public class DiffieHellman {
    public static int generatePublicKey(int base, int privateKey, int prime) {
        return (int)(Math.pow(base, privateKey) % prime);
    }

    public static int generateSharedSecret(int receivedPublicKey, int privateKey, int prime) {
        return (int)(Math.pow(receivedPublicKey, privateKey) % prime);
    }

    public static void main(String[] args) {
        int base = 5, prime = 23;
        int privateKeyA = 6, privateKeyB = 15;

        int publicKeyA = generatePublicKey(base, privateKeyA, prime);
        int publicKeyB = generatePublicKey(base, privateKeyB, prime);

        int sharedSecretA = generateSharedSecret(publicKeyB, privateKeyA, prime);
        int sharedSecretB = generateSharedSecret(publicKeyA, privateKeyB, prime);

        if (sharedSecretA == sharedSecretB) {
            System.out.println("Shared Secret: " + sharedSecretA);
        } else {
            System.out.println("Error: Secrets do not match!");
        }
    }
}
  `;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">Diffie-Hellman Key Exchange</h1>
        <p className="mb-4">
          Diffie-Hellman is a key exchange algorithm that allows two parties to establish
          a shared secret over an insecure channel. It forms the basis of many cryptographic protocols.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Use Case</h2>
        <p className="mb-4">
          This algorithm is widely used in protocols like TLS (for HTTPS connections) and PGP for secure communication. 
          It ensures that two parties can agree on a secret key, even if their communication is intercepted by an adversary.
        </p>

        <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
        <p className="mb-4">
          1. Enter **Private Key A** and **Private Key B** for two users.<br />
          2. Click **Submit** to generate the shared secret.<br />
          3. If the secrets match, you will see the shared secret in the output field.
        </p>

        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter Private Key A"
            value={privateKeyA || ""}
            onChange={(e) => setPrivateKeyA(parseInt(e.target.value))}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="number"
            placeholder="Enter Private Key B"
            value={privateKeyB || ""}
            onChange={(e) => setPrivateKeyB(parseInt(e.target.value))}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
          />

          <button
            onClick={handleSubmit}
            className="bg-purple-700 text-white p-3 w-full rounded-lg hover:bg-purple-800 transition duration-200"
          >
            Submit
          </button>
        </div>

        <h2 className="text-2xl font-semibold mb-2">Output</h2>
        <textarea
          value={sharedSecret !== null ? sharedSecret.toString() : ""}
          readOnly
          className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <CodeSnippet language="python" code={pythonCode} codeTitle="Diffie-Hellman - Python" />
      <CodeSnippet language="cpp" code={cppCode} codeTitle="Diffie-Hellman - C++" />
      <CodeSnippet language="java" code={javaCode} codeTitle="Diffie-Hellman - Java" />
    </div>
  );
};

export default DiffieHellman;
