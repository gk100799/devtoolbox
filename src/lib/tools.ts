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
  {
    slug: "slug-generator",
    name: "URL Slug Generator",
    description: "Convert text to URL-friendly slugs instantly.",
    longDescription:
      "Free online URL slug generator. Convert any text into clean, URL-friendly slugs perfect for blogs, URLs, and file names. Automatically handles spacing, special characters, and formatting.",
    category: "Developer Tools",
    keywords: ["slug generator", "url slug", "create slug", "slug creator online"],
    icon: "🔗",
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    description: "Generate QR codes from text or URLs instantly.",
    longDescription:
      "Free online QR code generator. Create QR codes from any text, URL, or data. Download as PNG image. Perfect for marketing, contact info, URLs, and sharing links digitally.",
    category: "Developer Tools",
    keywords: ["qr code generator", "generate qr code online", "qr code maker", "free qr code"],
    icon: "📱",
  },
  {
    slug: "reverse-text",
    name: "Reverse Text Generator",
    description: "Reverse text or strings instantly.",
    longDescription:
      "Free online text reversal tool. Reverse any text, word, or string backwards. Perfect for checking palindromes, creative writing, and fun text manipulation.",
    category: "Text Tools",
    keywords: ["reverse text", "reverse string", "backwards text", "text reversal tool"],
    icon: "🔄",
  },
  {
    slug: "email-validator",
    name: "Email Address Validator",
    description: "Validate email addresses instantly.",
    longDescription:
      "Free online email validator. Check if an email address is valid format. Validates domain structure and identifies potential issues with email addresses.",
    category: "Utilities",
    keywords: ["email validator", "check email valid", "email address validator", "validate email online"],
    icon: "✉️",
  },
  {
    slug: "remove-duplicates",
    name: "Remove Duplicate Lines / Words",
    description: "Remove duplicate lines or words from text.",
    longDescription:
      "Free online duplicate remover. Remove duplicate lines or words from any text. Preserves order and quickly cleans up repeating content from lists, logs, or documents.",
    category: "Text Tools",
    keywords: ["remove duplicates", "duplicate remover", "remove duplicate lines", "delete duplicates online"],
    icon: "🗑️",
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    description: "Generate RFC4122 UUIDs instantly.",
    longDescription:
      "Free online UUID generator. Generate unique identifiers (RFC4122 v4) for databases, applications, and unique identification. Generate single or multiple UUIDs at once.",
    category: "Developer Tools",
    keywords: ["uuid generator", "generate uuid", "uuid v4 generator", "unique id generator online"],
    icon: "🆔",
  },
  {
    slug: "unit-converter",
    name: "Unit Converter",
    description: "Convert between different units of measurement.",
    longDescription:
      "Free online unit converter. Convert between length (meter, feet, miles), weight (kg, pounds, ounces), and temperature (celsius, fahrenheit, kelvin) units instantly.",
    category: "Calculators",
    keywords: ["unit converter", "convert units online", "length converter", "weight converter", "temperature converter"],
    icon: "⚖️",
  },
  {
    slug: "text-hash",
    name: "Text Hash Generator",
    description: "Generate SHA-256 hashes of text.",
    longDescription:
      "Free online text hashing tool. Generate SHA-256 cryptographic hashes of any text. Perfect for password hashing, data integrity checking, and security applications.",
    category: "Developer Tools",
    keywords: ["hash generator", "sha256 hash", "text hash", "generate hash online"],
    icon: "🔐",
  },
  {
    slug: "morse-code",
    name: "Morse Code Converter",
    description: "Convert text to Morse code and vice versa.",
    longDescription:
      "Free online Morse code converter. Translate text to Morse code (dots and dashes) or decode Morse code to text. Perfect for learning, communication, and signal practice.",
    category: "Developer Tools",
    keywords: ["morse code converter", "text to morse code", "morse code translator", "morse code online"],
    icon: "📡",
  },
];

export const categories = [...new Set(tools.map((t) => t.category))];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
