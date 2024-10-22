import CodeSnippet from "../../components/codeSnippet";

const ListComprehension = () => {
    // Object containing code snippets for each language
const listComprehensionCode = {
    python: `
Here are detailed Python code snippets showcasing various ways to use list comprehension 
for filtering, transforming, and more complex operations.

### 1. Basic Transformation with List Comprehension
- Transform each element in a list by applying an operation (e.g., squaring the elements).

# List of numbers
numbers = [1, 2, 3, 4, 5]

# Squaring each element
squared_numbers = [x**2 for x in numbers]

print(squared_numbers)

Output

[1, 4, 9, 16, 25]


### 2. Filtering with List Comprehension
Filter elements in a list based on a condition (e.g., keeping only even numbers).

python
# List of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Keeping only even numbers
even_numbers = [x for x in numbers if x % 2 == 0]

print(even_numbers)


Output

[2, 4, 6, 8]


### 3. Filtering and Transformation Combined
Filter a list based on a condition and transform it (e.g., keeping even numbers and then squaring them).

python
# List of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Keeping even numbers and squaring them
squared_evens = [x**2 for x in numbers if x % 2 == 0]

print(squared_evens)


Output

[4, 16, 36, 64, 100]


### 4. Conditional Transformation
Apply different transformations based on conditions (e.g., square even numbers and cube odd numbers).

python
# List of numbers
numbers = [1, 2, 3, 4, 5]

# Square even numbers, cube odd numbers
transformed_numbers = [x**2 if x % 2 == 0 else x**3 for x in numbers]

print(transformed_numbers)


Output

[1, 4, 27, 16, 125]


### 5. Nested Loops with List Comprehension
Generate combinations from two lists using a nested loop.

python
# Two lists of numbers
list1 = [1, 2, 3]
list2 = [4, 5, 6]

# Generate all combinations of pairs (x, y) from list1 and list2
combinations = [(x, y) for x in list1 for y in list2]

print(combinations)


Output

[(1, 4), (1, 5), (1, 6), (2, 4), (2, 5), (2, 6), (3, 4), (3, 5), (3, 6)]


### 6. Flatten a Nested List with List Comprehension
Flatten a 2D list (list of lists) into a single list.

python
# 2D list (list of lists)
matrix = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]

# Flatten the matrix into a single list
flattened_list = [item for sublist in matrix for item in sublist]

print(flattened_list)


Output

[1, 2, 3, 4, 5, 6, 7, 8, 9]


### 7. Using List Comprehension with Strings
Filter and transform a list of strings, for example, converting to uppercase if 
the string starts with a specific letter.

python
# List of names
names = ["Alice", "Bob", "Charlie", "David", "Eve"]

# Convert names starting with 'A' or 'D' to uppercase
uppercase_names = [name.upper() for name in names if name.startswith(('A', 'D'))]

print(uppercase_names)


Output

['ALICE', 'DAVID']


### 8. Dictionary Comprehension from a List
Create a dictionary from a list using list comprehension.

python
# List of words
words = ['apple', 'banana', 'cherry']

# Create a dictionary with word lengths as values
word_lengths = {word: len(word) for word in words}

print(word_lengths)


Output

{'apple': 5, 'banana': 6, 'cherry': 6}


### 9. Set Comprehension
Create a set using list comprehension (to ensure unique elements).

python
# List with duplicate numbers
numbers = [1, 2, 2, 3, 4, 4, 5]

# Create a set of unique squared numbers
unique_squared_numbers = {x**2 for x in numbers}

print(unique_squared_numbers)


Output

{1, 4, 9, 16, 25}


### 10. Filtering out \`None\` or Falsey Values
Remove \`None\` values from a list.

python
# List with None and valid numbers
numbers_with_none = [1, None, 2, None, 3, 4, None, 5]

# Filter out None values
filtered_numbers = [x for x in numbers_with_none if x is not None]

print(filtered_numbers)


Output

[1, 2, 3, 4, 5]


These snippets showcase a wide range of possibilities with list comprehension for different
scenarios such as filtering, transformation, combining, and even working with strings, dictionaries, and sets.
`,
};

    return (
        <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
            <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
                <h1 className="text-4xl font-bold mb-4">List Comprehension</h1>
                <div className="mt-8">
                    <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
                    <p className="mb-4">
                        List comprehension is a concise way to create lists in Python. It is commonly used for filtering, transforming, and combining lists. This technique is widely used in data processing, web development, and scientific computing.
                    </p>
                    <h2 className="text-4xl font-semibold mb-2">References</h2>
                    <p>
                        For more information on list comprehension, refer to the official Python documentation:
                        <br />
                        <a
                            href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions"
                            className="text-blue-400 hover:underline"
                        >
                            Python List Comprehensions Documentation
                        </a>
                    </p>
                    <h2 className="text-4xl font-semibold mb-2">How to Use</h2>
                    <p>
                        Copy the list comprehension code into any Python IDE or text editor like PyCharm, VSCode, or even an online Python compiler. The code snippets will demonstrate various ways to use list comprehension for different scenarios.
                    </p>
                </div>
                <h2 className="text-4xl font-semibold mb-2 mt-8">Python Code Example</h2>
                <CodeSnippet code={listComprehensionCode.python} language="python" />
            </div>
        </div>
    );
};

export default ListComprehension;