export interface Tool {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  keywords: string[];
  icon: string;
}

export const tools: Tool[] = [
  {
    slug: "word-counter",
    name: "Word & Character Counter",
    description: "Count words, characters, sentences, and paragraphs instantly.",
    longDescription:
      "Free online word and character counter. Paste or type any text to instantly see word count, character count (with and without spaces), sentence count, paragraph count, and average reading time. Perfect for writers, students, and social media posts.",
    category: "Text Tools",
    keywords: ["word counter", "character counter", "word count tool", "count words online"],
    icon: "📝",
  },
  {
    slug: "case-converter",
    name: "Text Case Converter",
    description: "Convert text to UPPER CASE, lower case, Title Case, camelCase, and more.",
    longDescription:
      "Free online text case converter. Convert any text to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, or kebab-case with one click.",
    category: "Text Tools",
    keywords: ["text case converter", "uppercase online", "lowercase converter", "title case tool"],
    icon: "🔡",
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter & Validator",
    description: "Prettify, minify, and validate JSON instantly.",
    longDescription:
      "Free online JSON formatter and validator. Paste your JSON to pretty-print it with proper indentation, minify it, or validate it for errors. Supports large JSON and highlights syntax errors.",
    category: "Developer Tools",
    keywords: ["json formatter", "json validator", "format json online", "pretty print json"],
    icon: "🧩",
  },
  {
    slug: "base64",
    name: "Base64 Encoder / Decoder",
    description: "Encode text or URLs to Base64 and decode Base64 strings instantly.",
    longDescription:
      "Free online Base64 encoder and decoder. Encode any text or URL to Base64 format, or decode Base64 strings back to plain text. Useful for developers working with APIs, email encoding, and data URIs.",
    category: "Developer Tools",
    keywords: ["base64 encode", "base64 decode", "base64 encoder decoder", "encode base64 online"],
    icon: "🔐",
  },
  {
    slug: "password-generator",
    name: "Strong Password Generator",
    description: "Generate secure, random passwords with custom length and character sets.",
    longDescription:
      "Free online strong password generator. Create secure random passwords with your choice of length, uppercase, lowercase, numbers, and special symbols. Passwords are generated entirely in your browser — never sent to any server.",
    category: "Security Tools",
    keywords: ["password generator", "strong password generator", "random password", "secure password tool"],
    icon: "🔑",
  },
  {
    slug: "age-calculator",
    name: "Age Calculator",
    description: "Calculate your exact age in years, months, days, hours, and minutes.",
    longDescription:
      "Free online age calculator. Enter your date of birth to find your exact age in years, months, days, hours, and minutes. Also calculates days until your next birthday.",
    category: "Calculators",
    keywords: ["age calculator", "how old am i", "calculate age", "birthday calculator"],
    icon: "🎂",
  },
  {
    slug: "hex-rgb",
    name: "HEX ↔ RGB Color Converter",
    description: "Convert HEX color codes to RGB values and vice versa.",
    longDescription:
      "Free online HEX to RGB color converter. Enter a HEX color code to get the RGB equivalent, or enter RGB values to get the HEX code. Includes a color preview and supports HSL conversion.",
    category: "Design Tools",
    keywords: ["hex to rgb", "rgb to hex", "hex color converter", "color code converter online"],
    icon: "🎨",
  },
  {
    slug: "diff-checker",
    name: "Text Diff Checker",
    description: "Compare two texts side by side and highlight the differences.",
    longDescription:
      "Free online text diff checker. Paste two versions of a text to see exactly what changed. Differences are highlighted line by line — additions in green, removals in red. Great for comparing code, documents, or any text.",
    category: "Developer Tools",
    keywords: ["diff checker", "text diff", "compare two texts online", "online diff tool"],
    icon: "🔍",
  },
  {
    slug: "markdown-preview",
    name: "Markdown Preview",
    description: "Write Markdown and see the live HTML preview side by side.",
    longDescription:
      "Free online Markdown editor and preview. Type Markdown on the left and see the rendered HTML preview instantly on the right. Supports all standard Markdown including headers, bold, italic, lists, code blocks, and links.",
    category: "Developer Tools",
    keywords: ["markdown preview", "markdown editor online", "markdown to html", "live markdown preview"],
    icon: "📄",
  },
  {
    slug: "url-encoder",
    name: "URL Encoder / Decoder",
    description: "Encode and decode URLs or query string parameters instantly.",
    longDescription:
      "Free online URL encoder and decoder. Encode special characters in URLs for safe transmission, or decode percent-encoded URLs back to readable text. Handles full URLs and individual query parameters.",
    category: "Developer Tools",
    keywords: ["url encoder", "url decoder", "encode url online", "percent encode url"],
    icon: "🌐",
  },
];

export const categories = [...new Set(tools.map((t) => t.category))];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
