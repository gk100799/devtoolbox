"use client";

import { useState } from "react";

interface RGB {
  r: number;
  g: number;
  b: number;
}

function hexToRgb(hex: string): RGB | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
      .toUpperCase()
  );
}

function isValidHex(hex: string): boolean {
  return /^#?[a-f\d]{6}$/i.test(hex);
}

export default function HexRgbConverter() {
  const [hex, setHex] = useState("#FF6B6B");
  const [r, setR] = useState(255);
  const [g, setG] = useState(107);
  const [b, setB] = useState(107);
  const [mode, setMode] = useState<"hex" | "rgb">("hex");

  const hexValid = isValidHex(hex);
  const rgb = hexValid ? hexToRgb(hex) : { r, g, b };

  function handleHexChange(h: string) {
    setHex(h);
    if (isValidHex(h)) {
      const result = hexToRgb(h);
      if (result) {
        setR(result.r);
        setG(result.g);
        setB(result.b);
      }
    }
  }

  function handleRgbChange() {
    setHex(rgbToHex(r, g, b));
  }

  function copy(text: string) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="space-y-6">
      {/* Color Preview */}
      {hexValid && rgb && (
        <div
          className="w-full h-40 rounded-lg border-4 border-gray-300 shadow-md transition-colors"
          style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
        />
      )}

      {/* HEX Input */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          HEX Color Code
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="#FF6B6B"
            value={hex}
            onChange={(e) => handleHexChange(e.target.value)}
            maxLength={7}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => copy(hex)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
          >
            Copy
          </button>
        </div>
        {!hexValid && hex && (
          <p className="text-red-600 text-xs mt-1">Invalid HEX code</p>
        )}
      </div>

      {/* RGB Input */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          RGB Values
        </label>
        <div className="space-y-2">
          {[
            { label: "Red", value: r, setter: setR },
            { label: "Green", value: g, setter: setG },
            { label: "Blue", value: b, setter: setB },
          ].map(({ label, value, setter }) => (
            <div key={label} className="flex items-center gap-3">
              <label className="w-16 text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type="range"
                min={0}
                max={255}
                value={value}
                onChange={(e) => {
                  setter(Number(e.target.value));
                  handleRgbChange();
                }}
                className="flex-1 accent-blue-600"
              />
              <input
                type="number"
                min={0}
                max={255}
                value={value}
                onChange={(e) => {
                  setter(Number(e.target.value));
                  handleRgbChange();
                }}
                className="w-16 px-2 py-1 border border-gray-300 rounded text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => copy(`rgb(${r}, ${g}, ${b})`)}
          className="mt-2 text-sm text-blue-600 hover:underline"
        >
          Copy rgb({r}, {g}, {b})
        </button>
      </div>
    </div>
  );
}
