"use client";

import { useState } from "react";

export default function EmailValidator() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(value);
    setIsValid(value.trim() ? emailRegex.test(value) : null);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Enter Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
          placeholder="example@domain.com"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-900 dark:text-white"
        />
      </div>

      {isValid !== null && (
        <div
          className={`p-4 rounded-lg text-center font-medium ${
            isValid
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
          }`}
        >
          {isValid ? "✓ Valid Email" : "✗ Invalid Email"}
        </div>
      )}

      {email && isValid && (
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-sm space-y-2">
          <p>
            <strong>Local Part:</strong> {email.split("@")[0]}
          </p>
          <p>
            <strong>Domain:</strong> {email.split("@")[1]}
          </p>
        </div>
      )}

      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>✓ Checks email format</p>
        <p>✓ Validates domain structure</p>
        <p>✓ Instant results</p>
      </div>
    </div>
  );
}
