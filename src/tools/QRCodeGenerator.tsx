"use client";

import { useState } from "react";

export default function QRCodeGenerator() {
  const [text, setText] = useState("https://example.com");
  const [qrCode, setQrCode] = useState<string>("");

  const generateQR = (value: string) => {
    if (!value.trim()) {
      setQrCode("");
      return;
    }
    // Using a free QR code API for generation
    const encodedText = encodeURIComponent(value);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedText}`;
    setQrCode(qrUrl);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    generateQR(value);
  };

  const downloadQR = () => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Text or URL</label>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter text or URL..."
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-900 dark:text-white"
        />
      </div>

      {qrCode && (
        <div className="flex flex-col items-center">
          <img src={qrCode} alt="QR Code" className="border border-gray-200 dark:border-gray-700 p-2" />
          <button
            onClick={downloadQR}
            className="mt-4 px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition"
          >
            Download QR Code
          </button>
        </div>
      )}

      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>✓ Generate QR codes instantly</p>
        <p>✓ Works with URLs and text</p>
        <p>✓ Download as PNG image</p>
        <p>✓ Scannable on all devices</p>
      </div>
    </div>
  );
}
