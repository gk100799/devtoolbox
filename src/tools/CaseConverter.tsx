"use client";

import { useState } from "react";

type Mode =
  | "uppercase"
  | "lowercase"
  | "titlecase"
  | "sentencecase"
  | "camelcase"
  | "pascalcase"
  | "snakecase"
  | "kebabcase";

function convert(text: string, mode: Mode): string {
  switch (mode) {
    case "uppercase":
      return text.toUpperCase();
    case "lowercase":
      return text.toLowerCase();
    case "titlecase":
      return text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    case "sentencecase":
      return text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    case "camelcase":
      return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
    case "pascalcase":
      return text
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)(.)/g, (_, __, c) => c.toUpperCase());
    case "snakecase":
      return text
        .replace(/\s+/g, "_")
        .replace(/[^a-zA-Z0-9_]/g, "")
        .toLowerCase();
    case "kebabcase":
      return text
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9-]/g, "")
        .toLowerCase();
    default:
      return text;
  }
}

const modes: { label: string; value: Mode; example: string }[] = [
  { label: "UPPER CASE", value: "uppercase", example: "HELLO WORLD" },
  { label: "lower case", value: "lowercase", example: "hello world" },
  { label: "Title Case", value: "titlecase", example: "Hello World" },
  { label: "Sentence case", value: "sentencecase", example: "Hello world" },
  { label: "camelCase", value: "camelcase", example: "helloWorld" },
  { label: "PascalCase", value: "pascalcase", example: "HelloWorld" },
  { label: "snake_case", value: "snakecase", example: "hello_world" },
  { label: "kebab-case", value: "kebabcase", example: "hello-world" },
];

export default function CaseConverter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState<Mode | null>(null);

  function copy(mode: Mode) {
    navigator.clipboard.writeText(convert(text, mode));
    setCopied(mode);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-36 border border-gray-300 rounded-lg p-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
        placeholder="Type or paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {modes.map(({ label, value }) => (
          <div
            key={value}
            className="border border-gray-200 rounded-lg p-3 flex items-center justify-between gap-2"
          >
            <div className="min-w-0">
              <div className="text-xs font-semibold text-gray-500 mb-1">{label}</div>
              <div className="text-sm font-mono text-gray-800 truncate">
                {text ? convert(text, value) : <span className="text-gray-400 italic">preview</span>}
              </div>
            </div>
            <button
              onClick={() => copy(value)}
              disabled={!text}
              className="shrink-0 text-xs px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-30"
            >
              {copied === value ? "✓" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
