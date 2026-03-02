"use client";

import { useState } from "react";
import { diffLines } from "diff";

export default function DiffChecker() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const diffs = diffLines(text1, text2);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            Original Text
          </label>
          <textarea
            className="w-full h-80 border border-gray-300 rounded-lg p-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
            placeholder="Paste the original text here..."
            value={text1}
            onChange={(e) => setText1(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            Modified Text
          </label>
          <textarea
            className="w-full h-80 border border-gray-300 rounded-lg p-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
            placeholder="Paste the modified text here..."
            value={text2}
            onChange={(e) => setText2(e.target.value)}
          />
        </div>
      </div>

      {/* Diff View */}
      {(text1 || text2) && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Differences</h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {diffs.map((part, i) => (
              <div
                key={i}
                className={`px-3 py-1 text-xs font-mono whitespace-pre-wrap break-words ${
                  part.added
                    ? "bg-green-100 text-green-700"
                    : part.removed
                    ? "bg-red-100 text-red-700"
                    : "bg-white text-gray-700"
                }`}
              >
                {part.added ? "+ " : part.removed ? "- " : "  "}
                {part.value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
