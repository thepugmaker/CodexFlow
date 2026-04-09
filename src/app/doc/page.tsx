import Menubar from "../components/Menubar";
import Sidebar from "../components/Sidebar";

import config from "../common/ConfigReader";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";

import fs from "fs";
import path from "path";

export default function Home() {
  const filePath = path.join(process.cwd(), "README.md");
  const markdown = fs.readFileSync(filePath, "utf8");

return (
    <div
        style={{ backgroundColor: config.global["background-color"] }}
        className="h-screen w-screen flex overflow-hidden"
    >
        <Menubar />
        {/* <Sidebar />  here is sidebar unfinsihed plus broken*/}

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
            // doesnt work
            h6: ({ children }) => (
            <h6 className="text-base font-medium mb-2 text-gray-400">{children}</h6>
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

            
            code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            const language = match?.[1];

            return (
                <div className="mb-6">
                {language && (
                    <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                    {language}
                    </div>
                )}

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