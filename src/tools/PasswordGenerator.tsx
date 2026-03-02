"use client";

import { useState } from "react";

const CHARS = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

function generate(length: number, options: Record<string, boolean>): string {
  const pool = Object.entries(CHARS)
    .filter(([key]) => options[key])
    .map(([, val]) => val)
    .join("");
  if (!pool) return "";
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (n) => pool[n % pool.length]).join("");
}

function strength(pwd: string): { label: string; color: string; width: string } {
  if (pwd.length < 8) return { label: "Weak", color: "bg-red-500", width: "w-1/4" };
  if (pwd.length < 12) return { label: "Fair", color: "bg-yellow-500", width: "w-2/4" };
  if (pwd.length < 16) return { label: "Good", color: "bg-blue-500", width: "w-3/4" };
  return { label: "Strong", color: "bg-green-500", width: "w-full" };
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    numbers: true,
    symbols: false,
  });
  const [password, setPassword] = useState(() =>
    generate(16, { upper: true, lower: true, numbers: true, symbols: false })
  );
  const [copied, setCopied] = useState(false);

  function toggle(key: string) {
    const next = { ...options, [key]: !options[key as keyof typeof options] };
    if (!Object.values(next).some(Boolean)) return; // at least one must be on
    setOptions(next);
    setPassword(generate(length, next));
  }

  function refresh() {
    setPassword(generate(length, options));
  }

  function copy() {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const s = strength(password);

  return (
    <div className="space-y-5">
      {/* Password display */}
      <div className="flex items-center gap-2">
        <div className="flex-1 font-mono text-lg tracking-widest bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 overflow-x-auto whitespace-nowrap">
          {password}
        </div>
        <button
          onClick={copy}
          className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium shrink-0"
        >
          {copied ? "✓" : "Copy"}
        </button>
        <button
          onClick={refresh}
          className="px-3 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm shrink-0"
          title="Regenerate"
        >
          🔄
        </button>
      </div>

      {/* Strength */}
      <div>
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Strength</span>
          <span className="font-semibold">{s.label}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all ${s.color} ${s.width}`} />
        </div>
      </div>

      {/* Length */}
      <div>
        <label className="flex justify-between text-sm font-medium text-gray-700 mb-1">
          <span>Length</span>
          <span className="font-bold text-blue-600">{length}</span>
        </label>
        <input
          type="range"
          min={4}
          max={64}
          value={length}
          onChange={(e) => {
            const l = Number(e.target.value);
            setLength(l);
            setPassword(generate(l, options));
          }}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>4</span><span>64</span>
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {(Object.keys(CHARS) as Array<keyof typeof CHARS>).map((key) => (
          <label
            key={key}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <input
              type="checkbox"
              checked={options[key]}
              onChange={() => toggle(key)}
              className="accent-blue-600 w-4 h-4"
            />
            <span className="text-sm text-gray-700 capitalize">
              {key === "upper" && "Uppercase (A-Z)"}
              {key === "lower" && "Lowercase (a-z)"}
              {key === "numbers" && "Numbers (0-9)"}
              {key === "symbols" && "Symbols (!@#...)"}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
