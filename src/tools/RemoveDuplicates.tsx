"use client";

import { useState } from "react";

export default function RemoveDuplicates() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lineMode, setLineMode] = useState(true);

  const removeDups = (text: string, byLine: boolean) => {
    if (byLine) {
      const lines = text.split("\n");
      const unique = [...new Set(lines)];
      return unique.join("\n");
    } else {
      const words = text.split(/\s+/);
      const unique = [...new Set(words)];
      return unique.join(" ");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInput(text);
    setOutput(removeDups(text, lineMode));
  };

  const toggleMode = () => {
    setLineMode(!lineMode);
    setOutput(removeDups(input, !lineMode));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button
          onClick={toggleMode}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            lineMode
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          By Lines
        </button>
        <button
          onClick={toggleMode}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            !lineMode
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          By Words
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Input</label>
        <textarea
          value={input}
          onChange={handleChange}
          placeholder="Paste text..."
          className="w-full h-32 p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Output (Duplicates Removed)</label>
        <div className="flex gap-2">
          <textarea
            value={output}
            readOnly
            className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white h-32"
          />
          {output && (
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 h-fit bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition"
            >
              Copy
            </button>
          )}
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>✓ Remove duplicate lines or words</p>
        <p>✓ Preserves first occurrence</p>
      </div>
    </div>
  );
}
