"use client";

import { useState } from "react";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function encode() {
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
      setError("");
    } catch {
      setError("Failed to encode.");
    }
  }

  function decode() {
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
      setError("");
    } catch {
      setError("Invalid Base64 string.");
    }
  }

  function copy() {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1">
          Input
        </label>
        <textarea
          className="w-full h-36 border border-gray-300 rounded-lg p-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
          placeholder="Enter text to encode or Base64 to decode..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
            setOutput("");
          }}
        />
      </div>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={encode}
          disabled={!input}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-30"
        >
          Encode → Base64
        </button>
        <button
          onClick={decode}
          disabled={!input}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 disabled:opacity-30"
        >
          Decode ← Base64
        </button>
        <button
          onClick={copy}
          disabled={!output}
          className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-30"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      {error && (
        <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
          ❌ {error}
        </div>
      )}
      {output && (
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            Output
          </label>
          <textarea
            readOnly
            className="w-full h-36 border border-gray-300 rounded-lg p-3 text-sm font-mono bg-gray-50 resize-y"
            value={output}
          />
        </div>
      )}
    </div>
  );
}
