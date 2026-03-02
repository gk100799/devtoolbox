"use client";

import { useState } from "react";

export default function UnitConverter() {
  const [value, setValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("foot");

  const conversions: Record<string, Record<string, number>> = {
    // Length
    meter: { meter: 1, foot: 3.28084, inch: 39.3701, kilometer: 0.001, mile: 0.000621371, yard: 1.09361 },
    foot: { meter: 0.3048, foot: 1, inch: 12, kilometer: 0.0003048, mile: 0.000189394, yard: 0.333333 },
    inch: { meter: 0.0254, foot: 0.0833333, inch: 1, kilometer: 0.0000254, mile: 0.0000157828, yard: 0.0277778 },
    kilometer: { meter: 1000, foot: 3280.84, inch: 39370.1, kilometer: 1, mile: 0.621371, yard: 1093.61 },
    mile: { meter: 1609.34, foot: 5280, inch: 63360, kilometer: 1.60934, mile: 1, yard: 1760 },
    yard: { meter: 0.9144, foot: 3, inch: 36, kilometer: 0.0009144, mile: 0.000568182, yard: 1 },
    // Temperature
    celsius: { celsius: 1, fahrenheit: 1.8, kelvin: 273.15 },
    fahrenheit: { celsius: (5 / 9) * (1 - 32), fahrenheit: 1, kelvin: (5 / 9) * (1 - 32) + 273.15 },
    kelvin: { celsius: 1 - 273.15, fahrenheit: (1 - 273.15) * (9 / 5) + 32, kelvin: 1 },
    // Weight
    kilogram: { kilogram: 1, pound: 2.20462, ounce: 35.274, gram: 1000 },
    pound: { kilogram: 0.453592, pound: 1, ounce: 16, gram: 453.592 },
    ounce: { kilogram: 0.0283495, pound: 0.0625, ounce: 1, gram: 28.3495 },
    gram: { kilogram: 0.001, pound: 0.00220462, ounce: 0.035274, gram: 1 },
  };

  const units = ["meter", "foot", "inch", "kilometer", "mile", "yard", "kilogram", "pound", "ounce", "gram", "celsius", "fahrenheit", "kelvin"];

  const convert = () => {
    const num = parseFloat(value) || 0;
    if (conversions[fromUnit] && conversions[fromUnit][toUnit]) {
      return (num * conversions[fromUnit][toUnit]).toFixed(6);
    }
    return "";
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Value</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">From Unit</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-900 dark:text-white"
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {u.charAt(0).toUpperCase() + u.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => {
            setFromUnit(toUnit);
            setToUnit(fromUnit);
          }}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:opacity-80 transition"
        >
          ⇄ Swap
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Result</label>
          <input
            type="text"
            value={convert()}
            readOnly
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">To Unit</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-900 dark:text-white"
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {u.charAt(0).toUpperCase() + u.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>✓ Convert length, weight, temperature</p>
        <p>✓ Multiple unit support</p>
        <p>✓ Instant conversion</p>
      </div>
    </div>
  );
}
