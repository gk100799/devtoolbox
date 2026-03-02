import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { Tool } from "@/lib/tools";

interface ToolLayoutProps {
  tool: Tool;
  children: React.ReactNode;
}

export default function ToolLayout({ tool, children }: ToolLayoutProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{tool.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <span>{tool.icon}</span>
          {tool.name}
        </h1>
        <p className="mt-2 text-gray-600 text-lg">{tool.description}</p>
      </div>

      {/* Top Ad */}
      <AdBanner slot="1234567890" format="horizontal" className="mb-6" />

      {/* Tool Content */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        {children}
      </div>

      {/* Middle Ad */}
      <AdBanner slot="0987654321" format="rectangle" className="mt-8" />

      {/* Long Description / SEO Content */}
      <div className="mt-8 prose prose-gray max-w-none">
        <h2 className="text-xl font-semibold text-gray-800">About this tool</h2>
        <p className="text-gray-600 mt-2">{tool.longDescription}</p>
      </div>

      {/* Bottom Ad */}
      <AdBanner slot="1122334455" format="horizontal" className="mt-8" />
    </div>
  );
}
