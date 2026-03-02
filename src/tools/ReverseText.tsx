"use client";

import { useState } from "react";

export default function ReverseText() {
  const [input, setInput] = useState("");
  const [reversed, setReversed] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInput(text);
    setReversed(text.split("").reverse().join(""));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(reversed);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Text to Reverse</label>
        <textarea
          value={input}
          onChange={handleChange}
          placeholder="Enter text to reverse..."
          className="w-full h-32 p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Reversed Text</label>
        <div className="flex gap-2">
          <textarea
            value={reversed}
            readOnly
            className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white h-32"
          />
          {reversed && (
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
        <p>✓ Reverses text character by character</p>
        <p>✓ Instant results</p>
        <p>✓ Works with multi-line text</p>
      </div>
    </div>
  );
}
