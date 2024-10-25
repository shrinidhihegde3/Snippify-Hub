import { useState } from "react";
import CodeSnippet from "../../components/codeSnippet";
import CryptoJS from "crypto-js"; // Make sure to install this package

const AESComponent = () => {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [keySize, setKeySize] = useState<128 | 192 | 256>(128); // Default to 128 bits

  const handleSubmit = () => {
    if (!inputText || !key) {
      alert("Please enter valid inputs!");
      return;
    }

    const adjustedKey = CryptoJS.enc.Utf8.parse(key.padEnd(keySize / 8, '0').slice(0, keySize / 8)); // Adjust key size
    if (mode === "encrypt") {
      const encrypted = CryptoJS.AES.encrypt(inputText, adjustedKey, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }).toString();
      setOutput(encrypted);
    } else {
      const bytes = CryptoJS.AES.decrypt(inputText, adjustedKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      setOutput(decrypted || "Decryption failed! Ensure the correct key is used.");
    }
  };

  const pythonCode = `
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from base64 import b64encode, b64decode

def aes_encrypt(plain_text, key):
    cipher = AES.new(key.encode('utf-8'), AES.MODE_CBC)
    ct_bytes = cipher.encrypt(pad(plain_text.encode('utf-8'), AES.block_size))
    return b64encode(cipher.iv + ct_bytes).decode('utf-8')

def aes_decrypt(encrypted_text, key):
    b64 = b64decode(encrypted_text)
    iv = b64[:16]
    ct = b64[16:]
    cipher = AES.new(key.encode('utf-8'), AES.MODE_CBC, iv)
    return unpad(cipher.decrypt(ct), AES.block_size).decode('utf-8')
`;

  const cppCode = `
#include <iostream>
#include <openssl/aes.h>
#include <openssl/rand.h>
#include <string>

void aes_encrypt(const std::string &plainText, const std::string &key, std::string &cipherText) {
    AES_KEY enc_key;
    AES_set_encrypt_key((unsigned char*)key.c_str(), 128, &enc_key);
    unsigned char iv[AES_BLOCK_SIZE];
    RAND_bytes(iv, AES_BLOCK_SIZE);
    cipherText.resize(plainText.size() + AES_BLOCK_SIZE);
    int numBytesEncrypted;
    AES_cbc_encrypt((unsigned char*)plainText.c_str(), (unsigned char*)cipherText.data(), plainText.size(), &enc_key, iv, AES_ENCRYPT);
}

void aes_decrypt(const std::string &cipherText, const std::string &key, std::string &plainText) {
    AES_KEY dec_key;
    AES_set_decrypt_key((unsigned char*)key.c_str(), 128, &dec_key);
    plainText.resize(cipherText.size());
    AES_cbc_encrypt((unsigned char*)cipherText.c_str(), (unsigned char*)plainText.data(), cipherText.size(), &dec_key, iv, AES_DECRYPT);
}
`;

  const javaCode = `
import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import javax.crypto.spec.IvParameterSpec;
import java.util.Base64;

public class AESExample {

    public static String encrypt(String plainText, String key) throws Exception {
        SecretKeySpec secretKey = new SecretKeySpec(key.getBytes("UTF-8"), "AES");
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        byte[] iv = new byte[16]; // 16 bytes IV
        IvParameterSpec ivParams = new IvParameterSpec(iv);
        cipher.init(Cipher.ENCRYPT_MODE, secretKey, ivParams);
        return Base64.getEncoder().encodeToString(cipher.doFinal(plainText.getBytes("UTF-8")));
    }

    public static String decrypt(String encryptedText, String key) throws Exception {
        SecretKeySpec secretKey = new SecretKeySpec(key.getBytes("UTF-8"), "AES");
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        byte[] iv = new byte[16]; // 16 bytes IV
        IvParameterSpec ivParams = new IvParameterSpec(iv);
        cipher.init(Cipher.DECRYPT_MODE, secretKey, ivParams);
        return new String(cipher.doFinal(Base64.getDecoder().decode(encryptedText)));
    }
}
`;

  return (
    <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
      <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
        <h1 className="text-4xl font-bold mb-4">AES Encryption</h1>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Use Case</h2>
          <p className="mb-4">
            AES (Advanced Encryption Standard) is a widely adopted symmetric encryption algorithm used to secure sensitive data. It encrypts data in fixed-size blocks of 128 bits and supports key sizes of 128, 192, or 256 bits, providing a high level of security and performance.
          </p>
          <h3 className="text-xl font-semibold mb-2">Key Features of AES:</h3>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Symmetric Encryption:</strong> The same key is used for both encryption and decryption, making it crucial to keep the key secret.</li>
            <li><strong>Block Size:</strong> AES operates on 128-bit blocks, meaning that data is processed in fixed chunks.</li>
            <li><strong>Key Sizes:</strong> AES can use keys of different lengths (128, 192, or 256 bits), with longer keys offering stronger security.</li>
            <li><strong>Efficiency:</strong> AES is designed to be fast and efficient in both software and hardware implementations.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Common Applications of AES:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Secure communication protocols (e.g., HTTPS, VPNs) to protect data in transit.</li>
            <li>Data encryption for file systems and databases to secure stored information.</li>
            <li>Protection of sensitive information in applications (e.g., passwords, credit card data).</li>
            <li>Compliance with regulations requiring data security (e.g., GDPR, HIPAA).</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">AES Modes of Operation:</h3>
          <p className="mb-4">
            AES can operate in various modes, each offering different advantages in terms of security and performance:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>ECB (Electronic Codebook):</strong> Simplest mode; each block is encrypted independently, but not recommended due to pattern leakage.</li>
            <li><strong>CBC (Cipher Block Chaining):</strong> Each block is XORed with the previous ciphertext block before being encrypted, improving security.</li>
            <li><strong>CFB (Cipher Feedback) and OFB (Output Feedback):</strong> Allow encryption of data streams by turning block ciphers into stream ciphers.</li>
            <li><strong>CTR (Counter):</strong> Turns block ciphers into stream ciphers by encrypting a counter value, making it highly parallelizable.</li>
          </ul>
          <p className="mb-4">
            Due to its robust security and versatility, AES is a foundational element in modern cryptographic practices.
          </p>

          <h3 className="text-xl font-semibold mb-2">References:</h3>
          <ul className="list-disc list-inside mb-4">
            <li><a href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard" className="text-blue-500">Wikipedia: Advanced Encryption Standard</a></li>
            <li><a href="https://csrc.nist.gov/publications/detail/fips/197/final" className="text-blue-500">NIST FIPS 197: Advanced Encryption Standard (AES)</a></li>
            <li><a href="https://cryptobook.nikiv.dev/" className="text-blue-500">The Cryptography and Network Security Book</a></li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
<p className="mb-4">
    To utilize this AES encryption component, follow these steps:
</p>
<ul className="list-disc list-inside mb-4">
    <li>
        <strong>Enter a Key:</strong> 
        <p className="mb-2">
            Provide a key that will be used for both encryption and decryption. The key must be of a specific length depending on the AES key size you choose:
            <ul className="list-disc list-inside mb-4">
                <li>For <strong>128-bit</strong> AES, the key should be 16 bytes long.</li>
                <li>For <strong>192-bit</strong> AES, the key should be 24 bytes long.</li>
                <li>For <strong>256-bit</strong> AES, the key should be 32 bytes long.</li>
            </ul>
            Ensure that your key is kept secret, as anyone with access to the key can decrypt the data.
        </p>
    </li>
    <li>
        <strong>Input the Text:</strong> 
        <p className="mb-2">
            In the designated text area, enter the plain text you wish to encrypt or the encrypted text you wish to decrypt. 
            Keep in mind that the text must adhere to the block size of 128 bits. If the text length is not a multiple of 128 bits, 
            padding will be applied automatically during encryption.
        </p>
    </li>
    <li>
        <strong>Select Encryption or Decryption:</strong> 
        <p className="mb-2">
            You can choose to either encrypt or decrypt the text. 
            Click the corresponding button (Encrypt or Decrypt) to indicate your choice. 
            This action will determine whether the input text is processed for encryption or decryption.
        </p>
    </li>
    <li>
        <strong>Choose Key Size:</strong>
        <p className="mb-2">
            Before proceeding, you need to select the key size for encryption. Click the appropriate button to set the key size to either 
            <strong>128 bits</strong>, <strong>192 bits</strong>, or <strong>256 bits</strong>. 
            The key size directly impacts the security level of the encryption; longer keys provide stronger security.
        </p>
    </li>
    <li>
        <strong>Submit:</strong> 
        <p className="mb-2">
            Once you have filled in the required fields and selected the desired options, click the <strong>Submit</strong> button. 
            The component will process your request and provide the encrypted or decrypted output in the designated output area below.
        </p>
    </li>
</ul>
<p className="mb-4">
    After submission, the resulting output will be displayed in a read-only text area. 
    If you performed encryption, the output will be the encrypted text, which can be safely stored or transmitted. 
    If you performed decryption, ensure that you use the correct key, as using an incorrect key will result in a failure to decrypt the text properly. 
    Always verify that the input text for decryption matches the expected encrypted format.
</p>
<p className="mb-4">
    This component is designed for educational purposes. For production use, consider using well-tested libraries and ensuring proper security practices.
</p>

        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter key (16, 24, or 32 bytes for AES-128, 192, or 256)"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            placeholder="Enter text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
          />

          <div className="flex mb-4 gap-4">
            <button
              onClick={() => {
                setMode("encrypt");
                setKeySize(128);
              }}
              className={`flex-1 p-3 rounded-lg transition-all duration-200 ${
                mode === "encrypt" && keySize === 128
                  ? "bg-purple-700 text-white"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              128 Bit
            </button>
            <button
              onClick={() => {
                setMode("encrypt");
                setKeySize(192);
              }}
              className={`flex-1 p-3 rounded-lg transition-all duration-200 ${
                mode === "encrypt" && keySize === 192
                  ? "bg-purple-700 text-white"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              192 Bit
            </button>
            <button
              onClick={() => {
                setMode("encrypt");
                setKeySize(256);
              }}
              className={`flex-1 p-3 rounded-lg transition-all duration-200 ${
                mode === "encrypt" && keySize === 256
                  ? "bg-purple-700 text-white"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              256 Bit
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
        codeTitle="AES Encryption - Python"
      />
      <CodeSnippet
        language="cpp"
        code={cppCode}
        codeTitle="AES Encryption - C++"
      />
      <CodeSnippet
        language="java"
        code={javaCode}
        codeTitle="AES Encryption - Java"
      />
    </div>
  );
};

export default AESComponent;
