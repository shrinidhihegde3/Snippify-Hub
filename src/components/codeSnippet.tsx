import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeSnippetProps {
  code: string;
  language: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ language, code }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopySuccess("Copied Successfully!");
        setTimeout(() => setCopySuccess(""), 3000); // Clear message after 3 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="w-full max-w-sm sm:max-w-lg lg:max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900 p-4">
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={copyToClipboard}
          className="bg-gray-800 text-white rounded px-2 py-1 hover:bg-gray-700 text-sm sm:text-base"
        >
          {copySuccess ? copySuccess : "Copy to Clipboard"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={darcula}
        className="bg-transparent border border-gray-700 rounded-lg text-xs sm:text-sm md:text-base p-4"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
