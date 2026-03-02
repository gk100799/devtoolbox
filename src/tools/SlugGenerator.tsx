"use client";

import { useState } from "react";

export default function SlugGenerator() {
  const [input, setInput] = useState("");
  const [slug, setSlug] = useState("");

  const generateSlug = (text: string) => {
    const result = text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
    setSlug(result);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInput(text);
    generateSlug(text);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(slug);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Enter Text</label>
        <textarea
          value={input}
          onChange={handleChange}
          placeholder="Enter text to convert to URL slug..."
          className="w-full h-32 p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Generated Slug</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={slug}
            readOnly
            className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white"
          />
          {slug && (
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition"
            >
              Copy
            </button>
          )}
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>✓ Converts to lowercase</p>
        <p>✓ Replaces spaces with hyphens</p>
        <p>✓ Removes special characters</p>
        <p>✓ Perfect for URLs and filenames</p>
      </div>
    </div>
  );
}
