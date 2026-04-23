"use client";

import Menubar from "../components/Menubar";
import Sidebar from "../components/Sidebar";
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
      style={{ backgroundColor: config.global["background-color"] }}
      className="h-screen w-screen flex overflow-hidden"
    >
      <div className="flex-1 overflow-y-auto overflow-x-hidden pt-16 px-6">
        <div className="max-w-4xl mx-auto break-words">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold mb-4 text-white">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-semibold mb-3 text-gray-100">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-semibold mb-3 text-gray-200">{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-xl font-medium mb-2 text-gray-300">{children}</h4>
              ),
              h5: ({ children }) => (
                <h5 className="text-lg font-medium mb-2 text-gray-300">{children}</h5>
              ),
              h6: ({ children }) => (
                <h6 className="text-base font-medium mb-2 text-gray-400">{children}</h6>
              ),

              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-600 rounded-lg">{children}</table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-700/50">{children}</thead>
              ),
              tbody: ({ children }) => (
                <tbody className="divide-y divide-gray-600">{children}</tbody>
              ),
              tr: ({ children }) => (
                <tr className="hover:bg-gray-700/30 transition-colors">{children}</tr>
              ),
              th: ({ children }) => (
                <th className="px-4 py-2 text-left text-gray-200 font-semibold border-b border-gray-600">{children}</th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-2 text-gray-300 border-r border-gray-700 last:border-r-0">{children}</td>
              ),

              p: ({ children }) => (
                <p className="text-gray-300 leading-7 mb-3">{children}</p>
              ),

              a: ({ href, children }) => (
                <a href={href} className="text-blue-400 underline">
                  {children}
                </a>
              ),

              ul: ({ children }) => (
                <ul className="list-disc ml-6 mb-3 text-gray-300">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal ml-6 mb-3 text-gray-300">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="mb-1 text-gray-300">{children}</li>
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