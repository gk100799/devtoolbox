"use client";

import { useState } from "react";

function count(text: string) {
  const trimmed = text.trim();
  const words = trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const sentences = trimmed === "" ? 0 : trimmed.split(/[.!?]+/).filter(Boolean).length;
  const paragraphs = trimmed === "" ? 0 : text.split(/\n{2,}/).filter((p) => p.trim()).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  return { words, chars, charsNoSpaces, sentences, paragraphs, readingTime };
}

export default function WordCounter() {
  const [text, setText] = useState("");
  const stats = count(text);

  const statItems = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.chars },
    { label: "Chars (no spaces)", value: stats.charsNoSpaces },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Reading time", value: `${stats.readingTime} min` },
  ];

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-56 border border-gray-300 rounded-lg p-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
        placeholder="Paste or type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {statItems.map(({ label, value }) => (
          <div
            key={label}
            className="bg-blue-50 rounded-lg p-3 text-center"
          >
            <div className="text-2xl font-bold text-blue-700">{value}</div>
            <div className="text-xs text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </div>
      {text && (
        <button
          onClick={() => setText("")}
          className="text-sm text-red-500 hover:underline"
        >
          Clear text
        </button>
      )}
    </div>
  );
}
