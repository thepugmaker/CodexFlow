import fs from "fs";
import path from "path";
import MarkdownViewer from "./MarkdownViewer";

export default function Home() {
  const filePath = path.join(process.cwd(), "md/index.md");
  const markdown = fs.readFileSync(filePath, "utf8");

  return <MarkdownViewer markdown={markdown} />;
}