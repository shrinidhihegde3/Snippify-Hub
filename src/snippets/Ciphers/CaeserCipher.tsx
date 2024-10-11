import { useState } from "react";

const CaesarCipher = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState<number | "">("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

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
  return(
<div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
  <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
    <h1 className="text-4xl font-bold mb-4">Caesar Cipher Code</h1>

    <div className="mt-8">
      <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
      <p className="mb-4">
        The Caesar cipher is widely used for simple encryption tasks and is often employed as an educational tool 
        for teaching the fundamentals of cryptography, particularly in schools and academic environments. 
        It's useful for introducing concepts such as modular arithmetic and substitution ciphers. Additionally, 
        it is sometimes applied in low-security scenarios like puzzles, encoding non-sensitive data, and creating 
        fun challenges for beginners learning programming or encryption. Historically, it played an important role 
        in early cryptographic methods, being attributed to Julius Caesar, who used it to encrypt military messages.
      </p>

    </div>
  </div>


<div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h2 className="text-4xl font-semibold mb-2">Test the Caeser Cipher</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
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
</div>
        );
};

export default CaesarCipher;
