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
            stronger than simple monoalphabetic ciphers. In simpler terms, it
            scrambles letters using a keyword to create a more complex pattern,
            which makes it much harder for someone to decode the message without
            knowing the keyword.
          </p>
          <p className="mb-4">
            How Does It Work?
          </p>
          <p className="mb-4">
            <strong>Alphabet Basics:</strong> In a simple cipher, each letter is replaced by another letter in a fixed way. For example, with a Caesar cipher, you might shift every letter by 3 places (A becomes D, B becomes E, etc.). This method is predictable and can be easily broken if someone is trying to figure it out.
          </p>
          <p className="mb-4">
            <strong>Using a Keyword:</strong> The Vigenère cipher uses a keyword (like a secret code) to change the way letters are scrambled. The keyword is repeated to match the length of the message. For example, if your keyword is "KEY" and your message is "HELLO", you repeat "KEY" to get "KEYKE".
          </p>
          <p className="mb-4">
            <strong>Letter Shifting:</strong> Each letter in your message is shifted based on the corresponding letter in the keyword. If you are encrypting the letter "H" (which is the 8th letter in the alphabet) and the corresponding letter in the keyword is "K" (the 11th letter), you shift "H" by 10 places (because "K" is the 11th letter). So "H" becomes "R".
          </p>
          <p className="mb-4">
            <strong>Different Shifts for Each Letter:</strong> Since the keyword can have different letters, the shifts will change for each letter in the message. This makes it much harder for someone to guess how the letters are being scrambled, because the same letter can be encrypted in different ways depending on its position and the keyword.
          </p>
          <p className="mb-4">
            <strong>Why Is It Stronger?</strong>
          </p>
          <p className="mb-4">
            <strong>More Complexity:</strong> Because the Vigenère cipher uses different shifts for different letters, it creates a more complex pattern compared to a simple substitution cipher. This makes it much harder for someone to crack the code using frequency analysis (a common method for breaking ciphers by studying letter frequencies).
          </p>

          <h2 className="text-2xl font-semibold mb-2">Real-World Applications and Use Cases</h2>
          <p className="mb-4">
            Historically, the Vigenère cipher was used for centuries in encrypting military, diplomatic, and personal communications. Its strength lies in the fact that the same letter can be encrypted in different ways, making frequency analysis, which works on monoalphabetic ciphers, much harder to perform. Despite its vulnerabilities to modern cryptanalysis techniques, it was considered unbreakable until the late 19th century.
          </p>

          <h3 className="text-xl font-semibold mb-2">1. Historical Encryption of Sensitive Messages</h3>
          <p className="mb-4">
            The Vigenère cipher was notably used by the Confederate Army during the American Civil War to protect military correspondence. Before the advent of modern cryptography, it provided a strong means of encrypting messages that would otherwise be susceptible to basic decoding techniques.
          </p>

          <h3 className="text-xl font-semibold mb-2">2. Modern Educational Use</h3>
          <p className="mb-4">
            While the cipher itself is outdated for modern cryptographic purposes, it is still widely used in education to teach basic principles of encryption. This is because it illustrates the concept of a polyalphabetic substitution cipher, which is foundational to understanding more complex cryptographic systems. Many introductory courses in cryptography or data security still use the Vigenère cipher as an example of historical encryption techniques.
          </p>

          <h3 className="text-xl font-semibold mb-2">3. Classic Ciphers in Puzzles and Escape Rooms</h3>
          <p className="mb-4">
            The Vigenère cipher is also commonly used in puzzles, escape rooms, and cryptographic challenges. Enthusiasts in puzzle-solving and cryptography often include Vigenère-encoded messages to test a player’s knowledge of classical cryptography. In these contexts, the cipher serves as a fun and challenging tool for users to decrypt hidden messages or clues.
          </p>

          <h3 className="text-xl font-semibold mb-2">4. Data Obfuscation in Applications</h3>
          <p className="mb-4">
            Although it’s not recommended for securing sensitive information today due to vulnerabilities against modern cryptanalysis, the Vigenère cipher can still be used for simple data obfuscation in applications where cryptographic strength is not a major concern. For example, it can be used in games to hide game data or in basic applications where a lightweight cipher is needed without the overhead of modern encryption algorithms.
          </p>

          <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
          <p className="mb-4">
            Enter a keyword for the cipher key and the message to encrypt or decrypt. The Vigenère cipher uses the key to perform a series of shifting Caesar ciphers, where each letter is shifted based on the corresponding character in the key. This can be useful for encrypting or decrypting alphabetic text, where the strength of the cipher increases with the length and randomness of the key.
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
