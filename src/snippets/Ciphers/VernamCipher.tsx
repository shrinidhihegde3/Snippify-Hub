import { useState } from "react";
import CodeSnippet from "../../components/codeSnippet";

// Vernam Cipher Encryption Function
const vernamCipherEncrypt = (message : string, key: string) => {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let cipherText = "";
    const cipher = [];
    for (let i = 0; i < key.length; i++) {
        cipher[i] = message.charCodeAt(i) - 'A'.charCodeAt(0) + key.charCodeAt(i) - 'A'.charCodeAt(0);
    }
    for (let i = 0; i < key.length; i++) {
        if (cipher[i] > 25) {
            cipher[i] = cipher[i] - 26;
        }
    }
    for (let i = 0; i < key.length; i++) {
        const x = cipher[i] + 'A'.charCodeAt(0);
        cipherText += String.fromCharCode(x);
    }
    return cipherText;
}

// Vernam Cipher Decryption Function
const vernamCipherDecrypt = (cipherText: string, key: string) => {
    cipherText = cipherText.toUpperCase();
    key = key.toUpperCase();
    let plainText = "";
    const plain = [];

     for (let i = 0; i < key.length; i++) {
         plain[i] = cipherText.charCodeAt(i) - 'A'.charCodeAt(0) - (key.charCodeAt(i) - 'A'.charCodeAt(0));
     }

     for (let i = 0; i < key.length; i++) {
         if (plain[i] < 0) {
             plain[i] = plain[i] + 26;
         }
     }
     for (let i = 0; i < key.length; i++) {
         const x = plain[i] + 'A'.charCodeAt(0);
         plainText += String.fromCharCode(x);
     }
     return plainText;
}

const VernamCipher = () => {
    const [text, setText] = useState("");
    const [key, setKey] = useState("");
    const [output, setOutput] = useState("");
    const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  
    const handleSubmit = () => {
      if (!text || !key) {
        alert("Please enter valid inputs!");
        return;
      }

      if (text.length !== key.length) {
        alert("The keyword and the text should be of same length!");
        return;
      }
  
      if (mode === "encrypt") {
        const encrypted = vernamCipherEncrypt(text, key);
        setOutput(encrypted);
      } else {
        const decrypted = vernamCipherDecrypt(text, key);
        setOutput(decrypted);
      }
    };

    const pythonCode = `
  def vernam_encrypt(message, key):
    message = message.upper()
    key = key.upper()
    cipherText = ""
    cipher = []
    for i in range(len(key)):
        cipher.append(ord(message[i]) - ord('A') + ord(key[i])-ord('A'))

    for i in range(len(key)):
        if cipher[i] > 25:
            cipher[i] = cipher[i] - 26

    for i in range(len(key)):
        x = cipher[i] + ord('A')
        cipherText += chr(x)

    return cipherText

  def vernam_decrypt(cipher_text, key):
    cipher_text = cipher_text.upper()
    key = key.upper()
    plainText = ""
    plain = []

    for i in range(len(key)):
        plain.append(ord(cipher_text[i]) - ord('A') - (ord(key[i]) - ord('A')))

    for i in range(len(key)):
        if (plain[i] < 0):
            plain[i] = plain[i] + 26

    for i in range(len(key)):
        x = plain[i] + ord('A')
        plainText += chr(x)

    return plainText
  `;

    const cppCode = `
  #include <iostream>
  #include <string>
  using namespace std;

  string vernamEncrypt(string message, string key) {
    for (int i = 0; i < key.length(); i++) {
        message[i] = toupper(message[i])
        key[i] = toupper(key[i])
    }
    string cipherText = "";
    int cipher[key.length()];

    for (int i = 0; i < key.length(); i++) {
        cipher[i] = message.at(i) - 'A' + key.at(i) - 'A';
    }

    for (int i = 0; i < key.length(); i++) {
        if (cipher[i] > 25) {
            cipher[i] = cipher[i] - 26;
        }
    }

    for (int i = 0; i < key.length(); i++) {
        int x = cipher[i] + 'A';
        cipherText += (char)x;
    }

    return cipherText;
  }

  string vernamDecrypt(string cipherText, string key) {
    for (int i = 0; i < key.length(); i++) {
        cipherText[i] = toupper(cipherText[i])
        key[i] = toupper(key[i])
    }
    string plainText = "";
    int plain[key.length()];

    for (int i = 0; i < key.length(); i++) {
        plain[i] = cipherText.at(i) - 'A' - (key.at(i) - 'A');
    }

    for (int i = 0; i < key.length(); i++) {
        if (plain[i] < 0) {
            plain[i] = plain[i] + 26;
        }
    }

    for (int i = 0; i < key.length(); i++) {
        int x = plain[i] + 'A';
        plainText += (char)x;
    }

    return plainText;
  }
  `;

    const javaCode = `
  public class VernamCipher {

      public static String vernamEncrypt(String message, String key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        String cipherText = "";
        int cipher[] = new int[key.length()];

        for (int i = 0; i < key.length(); i++) {
            cipher[i] = message.charAt(i) - 'A' + key.charAt(i) - 'A';
        }

        for (int i = 0; i < key.length(); i++) {
            if (cipher[i] > 25) {
                cipher[i] = cipher[i] - 26;
            }
        }

        for (int i = 0; i < key.length(); i++) {
            int x = cipher[i] + 'A';
            cipherText += (char)x;
        }

        return cipherText;
      }

      public static String vernamDecrypt(String cipherText, String key) {
        cipherText = cipherText.toUpperCase();
        key = key.toUpperCase();
        String plainText = "";
        int plain[] = new int[key.length()];

        for (int i = 0; i < key.length(); i++) {
            plain[i] = cipherText.charAt(i) - 'A' - (key.charAt(i) - 'A');
        }

        for (int i = 0; i < key.length(); i++) {
            if (plain[i] < 0) {
                plain[i] = plain[i] + 26;
            }
        }

        for (int i = 0; i < key.length(); i++) {
            int x = plain[i] + 'A';
            plainText += (char)x;
        }
        return plainText;
      }
  }
  `;
  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">
          Vernam Cipher (One-Time Pad)
        </h1>
        <p className="mb-4">
          It is a method of encrypting alphabetic plain text. It is one of the
          Substitution techniques which converts plain text into ciphertext. In
          this mechanism, we assign a number to each character of the
          Plain-Text. The two requirements for the One-Time pad are :
          <ul className="ml-8" style={{ listStyle: "square" }}>
            <li>
              The key should be randomly generated as long as the size of the
              message.
            </li>
            <li>
              The key is to be used to encrypt and decrypt a single message, and
              then it is discarded.
            </li>
          </ul>
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">References</h2>
          <p>
            - Frank Miller (1882). Telegraphic Code to Insure Privacy and
            Secrecy in the Transmission of Telegrams
            <br />
            -
            https://web.archive.org/web/20140314175211/http://www.cryptomuseum.com/crypto/otp.htm
            <br />
            - Shannon, Claude (1949). "Communication Theory of Secrecy Systems"
            <br />
            - Bellovin, Steven M. (2011). "Frank Miller: Inventor of the
            One-Time Pad"
            <br />
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">
            Real-World Applications and Use Cases
          </h2>
          <ul className="ml-8" style={{ listStyle: "square" }}>
            <li>
              It is the optimum cryptosystem with theoretically perfect secrecy
            </li>
            <li>
              It is one of the most practical methods of encryption where one or
              both parties must do all work by hand, without the aid of a
              computer. This made it important in the pre-computer era, and it
              could conceivably still be useful in situations where possession
              of a computer is illegal or incriminating or where trustworthy
              computers are not available.
            </li>
            <li>
              One-time pads are practical in situations where two parties in a
              secure environment must be able to depart from one another and
              communicate from two separate secure environments with perfect
              secrecy.
            </li>
            <li>Can be used in superencryption.</li>
            <li>
              The algorithm most commonly associated with quantum key
              distribution is the one-time pad.
            </li>
            <li>The one-time pad is mimicked by stream ciphers.</li>
            <li>
              Numbers stations often send messages encrypted with a one-time
              pad.
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
          <p className="mb-4">
            Enter a keyword for the cipher key and the message to encrypt or
            decrypt. The keyword and message are supposed to be of the same
            length for Vernam cipher. Each alphabet in the key and message are
            assigned to random numbers among 0 to 25. For the sake of
            simplicity, this implementation assigns the numbers linearly - ( A :
            0, B : 2, ... Z : 25). For encrypting the message, the number
            assigned to each character in the message is incremented with number
            assigned to the corresponding index character in the key. Subtract
            the number from 26 if the resulting number is greater than or equal
            to 26, if it isn’t then leave it. Decryption follows decrement of
            number assigned to each character in the cipher text with number
            assigned to the corresponding index character in the key.
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

      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <CodeSnippet
          language="python"
          code={pythonCode}
          codeTitle="Vernam Cipher - Python"
        />
      </div>
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <CodeSnippet
          language="cpp"
          code={cppCode}
          codeTitle="Vernam Cipher - C++"
        />
      </div>
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <CodeSnippet
          language="java"
          code={javaCode}
          codeTitle="Vernam Cipher - Java"
        />
      </div>
    </div>
  );
}
export default VernamCipher;