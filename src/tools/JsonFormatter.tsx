"use client";

import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function format() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e: unknown) {
      setError((e as Error).message);
      setOutput("");
    }
  }

  function minify() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e: unknown) {
      setError((e as Error).message);
      setOutput("");
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
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={format}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          Prettify
        </button>
        <button
          onClick={minify}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800"
        >
          Minify
        </button>
        <button
          onClick={copy}
          disabled={!output}
          className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-30"
        >
          {copied ? "Copied!" : "Copy Output"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            Input JSON
          </label>
          <textarea
            className="w-full h-72 border border-gray-300 rounded-lg p-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
            placeholder='{"key": "value"}'
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
              setOutput("");
            }}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            Output
          </label>
          {error ? (
            <div className="h-72 border border-red-300 bg-red-50 rounded-lg p-3 text-sm text-red-700 font-mono overflow-auto">
              ❌ {error}
            </div>
          ) : (
            <textarea
              readOnly
              className="w-full h-72 border border-gray-300 rounded-lg p-3 text-sm font-mono bg-gray-50 resize-y"
              value={output}
              placeholder="Output will appear here..."
            />
          )}
        </div>
      </div>
    </div>
  );
}
