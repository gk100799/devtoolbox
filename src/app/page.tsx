import Link from "next/link";
import { tools, categories } from "@/lib/tools";
import AdBanner from "@/components/AdBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevToolbox — Free Online Developer & Utility Tools",
  description:
    "Free online utility tools for developers and everyone. Word counter, JSON formatter, Base64 encoder, password generator, diff checker, color converter, age calculator, and more — all running locally in your browser.",
};

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3">
          🛠️ Free Online Dev &amp; Utility Tools
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Fast, free, and privacy-friendly. All tools run entirely in your
          browser — nothing is sent to any server.
        </p>
      </div>

      {/* Top Ad */}
      <AdBanner slot="1234567890" format="horizontal" className="mb-12" />

      {/* Tools by category */}
      {categories.map((category) => (
        <section key={category} className="mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools
              .filter((t) => t.category === category)
              .map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-md transition-all duration-150"
                >
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <h3 className="font-semibold group-hover:opacity-70 transition">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {tool.description}
                  </p>
                </Link>
              ))}
          </div>
        </section>
      ))}

      {/* Bottom Ad */}
      <AdBanner slot="0987654321" format="horizontal" className="mt-4" />
    </div>
  );
}
