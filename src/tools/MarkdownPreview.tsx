"use client";

import { useState } from "react";
import { marked } from "marked";

export default function MarkdownPreview() {
  const [markdown, setMarkdown] = useState(
    `# Welcome to Markdown Preview\n\nTry typing **bold**, *italic*, or ~~strikethrough~~ text.\n\n## Features\n\n- Free and fast\n- No account needed\n- Instant preview\n\n\`\`\`\nconst hello = "world";\n\`\`\`\n`
  );

  const html = marked(markdown);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            Markdown Input
          </label>
          <textarea
            className="w-full h-96 border border-gray-300 rounded-lg p-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="# Markdown\n\nWrite your markdown here..."
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            HTML Preview
          </label>
          <div className="w-full h-96 border border-gray-300 rounded-lg p-3 text-sm bg-white overflow-auto prose prose-sm max-w-none">
            <div dangerouslySetInnerHTML={{ __html: String(html) }} />
          </div>
        </div>
      </div>
    </div>
  );
}
