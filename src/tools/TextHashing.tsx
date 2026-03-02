"use client";

import { useState } from "react";

export default function TextHashing() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<Record<string, string>>({});

  const hashString = async (str: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);

    // SHA-256
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const sha256 = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

    // Simple hash functions (for demo)
    const simpleHash = (s: string) => {
      let hash = 0;
      for (let i = 0; i < s.length; i++) {
        const char = s.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
      return Math.abs(hash).toString(16);
    };

    return {
      SHA256: sha256,
      SimpleHash: simpleHash(str),
    };
  };

  const handleChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInput(text);
    if (text.trim()) {
      const result = await hashString(text);
      setHashes(result);
    } else {
      setHashes({});
    }
  };

  const copyToClipboard = (hash: string) => {
    navigator.clipboard.writeText(hash);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Text to Hash</label>
        <textarea
          value={input}
          onChange={handleChange}
          placeholder="Enter text..."
          className="w-full h-24 p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-900 dark:text-white"
        />
      </div>

      {Object.entries(hashes).length > 0 && (
        <div className="space-y-4">
          {Object.entries(hashes).map(([name, hash]) => (
            <div key={name}>
              <label className="block text-sm font-medium mb-2">{name}</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={hash}
                  readOnly
                  className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white font-mono text-xs break-all"
                />
                <button
                  onClick={() => copyToClipboard(hash)}
                  className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition"
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>✓ SHA-256 hashing</p>
        <p>✓ One-way encryption</p>
        <p>✓ Instant results</p>
      </div>
    </div>
  );
}
