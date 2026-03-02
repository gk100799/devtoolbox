import { getToolBySlug, tools } from "@/lib/tools";
import ToolLayout from "@/components/ToolLayout";
import WordCounter from "@/tools/WordCounter";
import CaseConverter from "@/tools/CaseConverter";
import JsonFormatter from "@/tools/JsonFormatter";
import Base64Tool from "@/tools/Base64Tool";
import PasswordGenerator from "@/tools/PasswordGenerator";
import AgeCalculator from "@/tools/AgeCalculator";
import HexRgbConverter from "@/tools/HexRgbConverter";
import DiffChecker from "@/tools/DiffChecker";
import MarkdownPreview from "@/tools/MarkdownPreview";
import UrlEncoder from "@/tools/UrlEncoder";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const toolComponents: Record<string, React.ComponentType> = {
  "word-counter": WordCounter,
  "case-converter": CaseConverter,
  "json-formatter": JsonFormatter,
  base64: Base64Tool,
  "password-generator": PasswordGenerator,
  "age-calculator": AgeCalculator,
  "hex-rgb": HexRgbConverter,
  "diff-checker": DiffChecker,
  "markdown-preview": MarkdownPreview,
  "url-encoder": UrlEncoder,
};

export async function generateMetadata(
  { params }: PageProps,
): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: tool.name,
    description: tool.longDescription,
    keywords: tool.keywords,
  };
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tool Not Found</h1>
          <p className="text-gray-600">The tool you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  const Component = toolComponents[slug];

  if (!Component) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tool Not Available</h1>
          <p className="text-gray-600">This tool is not yet implemented.</p>
        </div>
      </div>
    );
  }

  return (
    <ToolLayout tool={tool}>
      <Component />
    </ToolLayout>
  );
}
