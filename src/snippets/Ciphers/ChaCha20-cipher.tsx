import { useState } from "react";
import CodeSnippet from "../../components/codeSnippet";

const ChaChaCipher20 = () => {
    const [inputText, setInputText] = useState("");
    const [keyArray, setKeyArray] = useState<number[]>([]);
    const [resultText, setResultText] = useState("");
    const [cipherMode, setCipherMode] = useState<"encrypt" | "decrypt">("encrypt");

    // ChaCha20 Cipher Function
    const chaCha20Cipher = (text: string, key: number[], nonce: number, counter: number) => {
        const quarterRounds = (state: number[]) => {
            for (let i = 0; i < 10; i++) {
                state[0] += state[4]; state[12] ^= state[0]; state[12] = (state[12] >>> 16) | (state[12] << 16);
                state[8] += state[12]; state[4] ^= state[8]; state[4] = (state[4] >>> 12) | (state[4] << 20);
                state[0] += state[4]; state[12] ^= state[0]; state[12] = (state[12] >>> 8) | (state[12] << 24);
                state[8] += state[12]; state[4] ^= state[8]; state[4] = (state[4] >>> 7) | (state[4] << 25);
            }
        };

        const generateKeystreamBlock = (key: number[], nonce: number, counter: number) => {
            const constants = [0x61707865, 0x3320646e, 0x79622d32, 0x6b206574];
            const keyWords = key.map(k => k >>> 0);
            const nonceWords = [nonce >>> 32, nonce & 0xffffffff];
            const initialState = [...constants, ...keyWords, counter >>> 0, ...nonceWords];

            let state = [...initialState];
            quarterRounds(state);
            return state.map((word, i) => (word + initialState[i]) >>> 0);
        };

        const keystream = generateKeystreamBlock(key, nonce, counter);
        let output = "";

        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            const keystreamByte = keystream[i % keystream.length];
            output += String.fromCharCode(charCode ^ keystreamByte);
        }

        return output;
    };

    const handleFormSubmit = () => {
        if (!keyArray.length || !inputText) {
            alert("Please provide both a key and text!");
            return;
        }

        const nonceValue = 0; // Replace with actual nonce logic
        const counterValue = 0; // Replace with actual counter logic

        if (cipherMode === "encrypt") {
            const encryptedText = chaCha20Cipher(inputText, keyArray, nonceValue, counterValue);
            setResultText(encryptedText);
        } else {
            const decryptedText = chaCha20Cipher(inputText, keyArray, nonceValue, counterValue);
            setResultText(decryptedText);
        }
    };

    return (
        <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
            {/* ChaCha20 Cipher Explanation */}
            <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
                <h1 className="text-4xl font-bold mb-4">ChaCha20 Cipher Code</h1>
                <h2 className="text-4xl font-semibold mb-2">Overview</h2>
                <p className="mb-4">
                    ChaCha20 is a secure stream cipher designed for high-speed encryption. It utilizes a 256-bit key and a unique nonce to generate a pseudorandom keystream that is XORed with plaintext to produce ciphertext. This method is resistant to various cryptographic attacks and is widely adopted in modern security protocols.
                </p>
                <h2 className="text-4xl font-semibold mb-2">Usage Instructions</h2>
                <p className="mb-4">
                    To encrypt or decrypt a message using ChaCha20, you need to provide a valid 256-bit key and a unique nonce. The encryption process involves generating a keystream from the key and nonce which is then combined with the plaintext. For decryption, the same key and nonce are applied to retrieve the original message.
                </p>
                <h2 className="text-4xl font-semibold mb-2">References</h2>
                <ul className="list-disc ml-5">
                    <li>
                        <a href="https://cr.yp.to/chacha.html" target="_blank" rel="noopener noreferrer">
                            ChaCha20 Specification by Daniel J. Bernstein
                        </a>
                    </li>
                    <li>
                        <a href="https://boringssl.googlesource.com/boringssl/" target="_blank" rel="noopener noreferrer">
                            BoringSSL Documentation by Google
                        </a>
                    </li>
                </ul>
            </div>

            {/* Use Cases Section */}
            <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
                <h2 className="text-4xl font-semibold mb-2">Use Cases</h2>
                <p className="mb-4">
                    The ChaCha20 cipher is primarily utilized in:
                </p>
                <ul className="list-disc ml-5 mb-4">
                    <li>Securing web communications via TLS.</li>
                    <li>Ensuring data privacy in VPNs.</li>
                    <li>Real-time communication in encrypted messaging apps like Signal.</li>
                    <li>Disk encryption where performance is critical.</li>
                    <li>Mobile devices benefiting from its speed and resistance to timing attacks compared to older ciphers like AES.</li>
                </ul>
            </div>

            {/* ChaCha20 Cipher Test Section */}
            <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
                <h2 className="text-4xl font-semibold mb-2">Test the ChaCha20 Cipher</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter key"
                        value={keyArray.join(",")}
                        onChange={(e) => setKeyArray(e.target.value.split(',').map(v => parseInt(v.trim(), 10)).filter(Boolean))}
                        className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
                    />
                    <textarea
                        placeholder="Enter text to encrypt"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="border border-purple-600 p-3 mb-4 w-full text-black rounded-lg focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-600"
                    />
                    <div className="flex mb-4 gap-4">
                        <button
                            onClick={() => setCipherMode("encrypt")}
                            className={`flex-1 p-3 rounded-lg transition-all duration-200 ${cipherMode === "encrypt" ? "bg-purple-700 text-white" : "bg-purple-100 text-purple-700 hover:bg-purple-200"}`}
                        >
                            Encrypt
                        </button>
                        <button
                            onClick={() => setCipherMode("decrypt")}
                            className={`flex-1 p-3 rounded-lg transition-all duration-200 ${cipherMode === "decrypt" ? "bg-purple-700 text-white" : "bg-purple-100 text-purple-700 hover:bg-purple-200"}`}
                        >
                            Decrypt
                        </button>
                    </div>
                    <button
                        onClick={handleFormSubmit}
                        className="bg-purple-700 text-white p-3 w-full rounded-lg hover:bg-purple-800 transition duration-200"
                    >
                        Submit
                    </button>
                </div>

                <h2 className="text-4xl font-semibold mb-2">Output</h2>
                <textarea
                    value={resultText}
                    readOnly
                    className="border border-purple-600 p-3 mb-4 w-full text-black h-20 rounded-lg focus:outline-none"
                />
            </div>

            {/* Code Snippets Section */}
            <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
                {/* Java Code Snippet */}
                <h2 className="text-4xl font-semibold mb-2 mt-6">Java Code Example</h2>
                <CodeSnippet code={`/*
 * Java Program to Implement ChaCha20 - Cipher
 */

import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;

public class ChaCha20 {
    private static final int BLOCK_SIZE = 64;

    public static void main(String[] args) {
        // Example usage
        byte[] key = new byte[32]; // 256-bit key
        byte[] nonce = new byte[8]; // 64-bit nonce
        int counter = 1; // Initial counter value
        String plaintext = "Hello, World!";
        
        // Encrypt
        byte[] ciphertext = chacha20(key, nonce, counter, plaintext.getBytes(StandardCharsets.UTF_8));
        System.out.println("Ciphertext: " + bytesToHex(ciphertext));

        // Decrypt
        byte[] decrypted = chacha20(key, nonce, counter, ciphertext);
        System.out.println("Decrypted: " + new String(decrypted, StandardCharsets.UTF_8));
    }

    public static byte[] chacha20(byte[] key, byte[] nonce, int counter, byte[] input) {
        byte[] output = new byte[input.length];
        byte[] state = new byte[BLOCK_SIZE];
        
        // Initialize state
        ByteBuffer buffer = ByteBuffer.wrap(state);
        buffer.put("expand 32-byte k".getBytes(StandardCharsets.UTF_8)); // Constants
        buffer.put(key);
        buffer.putInt(counter);
        buffer.put(nonce);

        for (int i = 0; i < input.length; i++) {
            if (i % BLOCK_SIZE == 0) {
                // Generate a new block
                generateBlock(state);
            }
            output[i] = (byte) (input[i] ^ state[i % BLOCK_SIZE]);
        }
        
        return output;
    }

    private static void generateBlock(byte[] state) {
        // ChaCha20 block generation logic here (not fully implemented for brevity)
    }

    private static String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }
}`} language="java" />

                {/* Python Code Snippet */}
                <h2 className="text-4xl font-semibold mb-2 mt-6">Python Code Example</h2>
                <CodeSnippet code={`import struct

def chacha20(key, nonce, counter, plaintext):
    def quarter_round(a, b, c, d):
        a += b; d ^= a; d = (d << 16 | d >> (32 - 16)) & 0xffffffff
        c += d; b ^= c; b = (b << 12 | b >> (32 - 12)) & 0xffffffff
        a += b; d ^= a; d = (d << 8 | d >> (32 - 8)) & 0xffffffff
        c += d; b ^= c; b = (b << 7 | b >> (32 - 7)) & 0xffffffff
        return a, b, c, d

    def generate_block(key, nonce, counter):
        # Initialize state
        state = [
            0x61707865,
            0x3320646e,
            0x79622d32,
            0x6b206574,
            *struct.unpack('<8L', key),
            counter,
            *struct.unpack('<2L', nonce)
        ]

        # Perform the ChaCha20 rounds
        for _ in range(10):
            state[0], state[4], state[8], state[12] = quarter_round(state[0], state[4], state[8], state[12])
            state[1], state[5], state[9], state[13] = quarter_round(state[1], state[5], state[9], state[13])
            state[2], state[6], state[10], state[14] = quarter_round(state[2], state[6], state[10], state[14])
            state[3], state[7], state[11], state[15] = quarter_round(state[3], state[7], state[11], state[15])

        return bytes((x + y) & 0xffffffff for x, y in zip(state, [0] * len(state)))

    # Encrypt or decrypt the plaintext
    output = bytearray()
    for i in range(len(plaintext)):
        if i % BLOCK_SIZE == 0:
            block = generate_block(key, nonce, counter)
            counter += 1
        
        output.append(plaintext[i] ^ block[i % BLOCK_SIZE])

    return bytes(output)

# Example usage
key = b'\x00' * 32  # Replace with your actual key
nonce = b'\x00' * 8   # Replace with your actual nonce
plaintext = b"Hello, World!"
ciphertext = chacha20(key, nonce, 1, plaintext)
print("Ciphertext:", ciphertext)
decrypted_text = chacha20(key, nonce, 1, ciphertext)
print("Decrypted:", decrypted_text.decode())`} language="python" />
            </div>
        </div>
    );
};

export default ChaChaCipher20;