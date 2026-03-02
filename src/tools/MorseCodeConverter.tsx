"use client";

import { useState } from "react";

const MORSE_CODE: Record<string, string> = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.-",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
};

const REVERSE_MORSE = Object.entries(MORSE_CODE).reduce(
  (acc, [char, code]) => {
    acc[code] = char;
    return acc;
  },
  {} as Record<string, string>
);

export default function MorseCodeConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isToMorse, setIsToMorse] = useState(true);

  const convertToMorse = (text: string) => {
    return text
      .toUpperCase()
      .split("")
      .map((char) => MORSE_CODE[char] || "?")
      .join(" ");
  };

  const convertFromMorse = (morse: string) => {
    return morse
      .split(" ")
      .map((code) => REVERSE_MORSE[code] || "?")
      .join("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInput(text);
    if (isToMorse) {
      setOutput(convertToMorse(text));
    } else {
      setOutput(convertFromMorse(text));
    }
  };

  const toggleMode = () => {
    setIsToMorse(!isToMorse);
    if (isToMorse) {
      setOutput(convertFromMorse(input));
    } else {
      setOutput(convertToMorse(input));
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button
          onClick={toggleMode}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            isToMorse
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          To Morse
        </button>
        <button
          onClick={toggleMode}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            !isToMorse
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          From Morse
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Input</label>
        <textarea
          value={input}
          onChange={handleChange}
          placeholder={isToMorse ? "Type text..." : "Type morse code (separate codes with spaces)..."}
          className="w-full h-32 p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Output</label>
        <div className="flex gap-2">
          <textarea
            value={output}
            readOnly
            className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white h-32 font-mono"
          />
          {output && (
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 h-fit bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition"
            >
              Copy
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
