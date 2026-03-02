"use client";

import { useState } from "react";

export default function UUIDGenerator() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(1);

  const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const handleGenerate = () => {
    const newUUIDs = Array.from({ length: count }, () => generateUUID());
    setUuids(newUUIDs);
  };

  const copyToClipboard = (uuid: string) => {
    navigator.clipboard.writeText(uuid);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join("\n"));
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Generate Count</label>
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-900 dark:text-white"
          />
        </div>
        <button
          onClick={handleGenerate}
          className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition font-medium"
        >
          Generate
        </button>
      </div>

      {uuids.length > 0 && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Generated UUIDs</h3>
            {uuids.length > 1 && (
              <button
                onClick={copyAll}
                className="text-sm px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded hover:opacity-80 transition"
              >
                Copy All
              </button>
            )}
          </div>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {uuids.map((uuid, i) => (
              <div
                key={i}
                className="flex gap-2 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg items-center"
              >
                <code className="flex-1 text-sm font-mono break-all">{uuid}</code>
                <button
                  onClick={() => copyToClipboard(uuid)}
                  className="px-3 py-1 text-sm bg-black text-white dark:bg-white dark:text-black rounded hover:opacity-80 transition"
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>✓ Generate RFC4122 v4 UUIDs</p>
        <p>✓ Unique identifiers for databases</p>
        <p>✓ Generate multiple at once</p>
      </div>
    </div>
  );
}
