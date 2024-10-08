import CodeSnippet from "../../components/codeSnippet";

const AffineCipher = () => {
    const affineCipherCode = {
        python:`
        # Affine Cipher Encryption and Decryption

        # Function to find the modular inverse
        def mod_inverse(a, m):
            for x in range(1, m):
                if (a * x) % m == 1:
                    return x
            return None

        # Function to encrypt the plaintext
        def affine_encrypt(plaintext, a, b):
            result = ""
            for char in plaintext:
                if char.isalpha():
                    # Convert character to its numeric equivalent (0-25)
                    x = ord(char.upper()) - ord('A')
                    # Apply the affine transformation
                    encrypted_char = (a * x + b) % 26
                    # Convert back to a character
                    result += chr(encrypted_char + ord('A'))
                else:
                    result += char
            return result

        # Function to decrypt the ciphertext
        def affine_decrypt(ciphertext, a, b):
            result = ""
            a_inv = mod_inverse(a, 26)
            if a_inv is None:
                return "Inverse of a does not exist, decryption not possible."
            for char in ciphertext:
                if char.isalpha():
                    # Convert character to its numeric equivalent (0-25)
                    y = ord(char.upper()) - ord('A')
                    # Apply the inverse affine transformation
                    decrypted_char = (a_inv * (y - b)) % 26
                    # Convert back to a character
                    result += chr(decrypted_char + ord('A'))
                else:
                    result += char
            return result

        # Example usage
        plaintext = "HELLO"
        a = 5
        b = 8
        ciphertext = affine_encrypt(plaintext, a, b)
        decrypted_text = affine_decrypt(ciphertext, a, b)

        print(f"Plaintext: {plaintext}")
        print(f"Encrypted: {ciphertext}")
        print(f"Decrypted: {decrypted_text}")

        # Add input and output fields for experimentation
        plaintext_input = input("Enter plaintext: ")
        a_input = int(input("Enter value for a (must be coprime with 26): "))
        b_input = int(input("Enter value for b: "))

        encrypted_output = affine_encrypt(plaintext_input, a_input, b_input)
        decrypted_output = affine_decrypt(encrypted_output, a_input, b_input)

        print(f"Encrypted: {encrypted_output}")
        print(f"Decrypted: {decrypted_output}")
        `
    }

    return (
        <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
            <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
                <h1 className="text-4xl font-bold mb-4">Affine Cipher</h1>
                <div className="mt-8">
                    <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
                    <p className="mb-4">
                        Affine cipher is a type of substitution cipher that uses a mathematical function to encrypt and decrypt text. It is a simple and easy-to-implement encryption method.
                    </p>
                    <h2 className="text-4xl font-semibold mb-2">References</h2>
                    <p>
                        For more information on affine cipher, refer to the official Python documentation:
                        <br />
                        <a
                            href="https://www.geeksforgeeks.org/implementation-affine-cipher/"
                            className="text-blue-400 hover:underline"
                        >
                            Python Documentation
                        </a>
                    </p>
                </div>
                <CodeSnippet language="python" code={affineCipherCode.python} />
            </div>
        </div>
    );
};

export default AffineCipher;
