"use client";

import config from "../common/ConfigReader";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";

import { useState } from "react";

export default function MarkdownViewer({ markdown }: { markdown: string }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  return (
    <div
      style={{ backgroundColor: config["global-colors"]["background-color"] }}
      className="h-screen w-screen flex overflow-hidden"
    >
      <div className="flex-1 overflow-y-auto overflow-x-hidden pt-16 px-6">
        <div className="max-w-4xl mx-auto break-words">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold mb-4" style={{ color: config["global-colors"]["text-color"] }}>{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-semibold mb-3" style={{ color: config["markdown-grays"]["gray-100"] }}>{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-semibold mb-3" style={{ color: config["markdown-grays"]["gray-200"] }}>{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-xl font-medium mb-2" style={{ color: config["markdown-grays"]["gray-300"] }}>{children}</h4>
              ),
              h5: ({ children }) => (
                <h5 className="text-lg font-medium mb-2" style={{ color: config["markdown-grays"]["gray-300"] }}>{children}</h5>
              ),
              h6: ({ children }) => (
                <h6 className="text-base font-medium mb-2" style={{ color: config["markdown-grays"]["gray-400"] }}>{children}</h6>
              ),

              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border rounded-lg" style={{ color: config["markdown-grays"]["gray-500"] }}>{children}</table>
                </div>
              ),

              thead: ({ children }) => (
                <thead
                  style={{
                    backgroundColor: `${config["markdown-grays"]["gray-700"]}80`, // 80 = ~50% opacity in hex
                    color: config["markdown-grays"]["gray-700"],
                  }}
                >
                  {children}
                </thead>
              ),

              tbody: ({ children }) => (
                <tbody
                  className="divide-y"
                  style={{
                    "--tw-divide-color": config["markdown-grays"]["gray-600"],
                  } as React.CSSProperties}
                >
                  {children}
                </tbody>
              ),

              tr: ({ children }) => (
                <tr
                  style={{
                    backgroundColor: config["markdown-grays"]["gray-700"] + "4D", // ~30% hover substitute handled below if needed
                  }}
                  className="hover:transition-colors"
                >
                  {children}
                </tr>
              ),

              th: ({ children }) => (
                <th
                  style={{
                    color: config["markdown-grays"]["gray-200"],
                    borderBottomColor: config["markdown-grays"]["gray-600"],
                  }}
                  className="px-4 py-2 text-left font-semibold border-b"
                >
                  {children}
                </th>
              ),

              td: ({ children }) => (
                <td
                  style={{
                    color: config["markdown-grays"]["gray-300"],
                    borderRightColor: config["markdown-grays"]["gray-700"],
                  }}
                  className="px-4 py-2 border-r last:border-r-0"
                >
                  {children}
                </td>
              ),

              p: ({ children }) => (
                <p
                  style={{
                    color: config["markdown-grays"]["gray-300"],
                  }}
                  className="leading-7 mb-3"
                >
                  {children}
                </p>
              ),

              a: ({ href, children }) => (
                <a href={href} className="underline" style={{ color: "#60a5fa" }}>
                  {children}
                </a>
              ),

              ul: ({ children }) => (
                <ul
                  style={{ color: config["markdown-grays"]["gray-300"] }}
                  className="list-disc ml-6 mb-3"
                >
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol
                  style={{ color: config["markdown-grays"]["gray-300"] }}
                  className="list-decimal ml-6 mb-3"
                >
                  {children}
                </ol>
              ),

              li: ({ children }) => (
                <li style={{ color: config["markdown-grays"]["gray-300"] }} className="mb-1">
                  {children}
                </li>
              ),

              hr: ({ children }) => (
                <hr className="mb-2 border-white border-t-2">{children}</hr>
              ),

              code({ className, children, node }) {
                const match = /language-(\w+)/.exec(className || "");
                const language = match?.[1];
                const codeId = node?.position?.start?.line ?? Math.random();

                const handleCopy = () => {
                  navigator.clipboard.writeText(String(children)).then(() => {
                    setCopiedIndex(codeId);
                    setTimeout(() => setCopiedIndex(null), 2000);
                  });
                };

                return (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                      {language && (
                        <span className="text-xs text-gray-400 uppercase tracking-wider">
                          {language}
                        </span>
                      )}
                      <button
                        onClick={handleCopy}
                        className="cursor-pointer ml-auto text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-white/10"
                      >
                        {copiedIndex === codeId ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto text-white">
                      <code className="break-words">{children}</code>
                    </pre>
                  </div>
                );
              },
            }}
          >
            {markdown}
          </Markdown>
        </div>
      </div>
    </div>
  );
}