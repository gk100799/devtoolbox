import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

const PUBLISHER_ID = "ca-pub-1369989539841753";

export const metadata: Metadata = {
  title: {
    default: "DevToolbox — Free Online Developer & Utility Tools",
    template: "%s | DevToolbox",
  },
  description:
    "Free online tools for developers and everyone. Word counter, JSON formatter, Base64, password generator, diff checker, color converter, age calculator, and more.",
  keywords: [
    "online tools",
    "free tools",
    "developer tools",
    "utility tools",
    "json formatter",
    "word counter",
    "base64 encoder",
    "password generator",
  ],
  metadataBase: new URL("https://gk100799.github.io/"),
  openGraph: {
    type: "website",
    siteName: "DevToolbox",
  },
  other: {
    "google-adsense-account": "ca-pub-1369989539841753",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLISHER_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-semibold flex items-center gap-2 hover:opacity-70 transition"
            >
              <span>🛠️</span> DevToolbox
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/" className="hover:opacity-70 transition">
                All Tools
              </Link>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>
              © {new Date().getFullYear()} DevToolbox — Free online tools. All
              tools run entirely in your browser. No data is sent to any server.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
