export const dynamic = "force-dynamic";

import fs from "fs";
import path from "path";
import MarkdownViewer from "./MarkdownViewer";
import list from "../../../md/list.json";
import Menubar from "../components/Menubar";
import Sidebar from "../components/Sidebar";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ md?: string }>;
}) {
  const params = await searchParams;

  const selectedFileRaw = params.md || "index.md";

  const selectedFile = decodeURIComponent(selectedFileRaw)
    .trim()
    .toLowerCase();

  const safeFile =
    list.List.find(
      (file) => file.trim().toLowerCase() === selectedFile
    ) || "index.md";

  const filePath = path.join(process.cwd(), "md", safeFile);

  let markdown = "# File not found";

// TODO: Fix the try and catch to not error cause it doesn't exist when we know it doesnt exist

  try {
    markdown = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.error(err);
  }

  return (
    <>
      <Sidebar />
      <MarkdownViewer markdown={markdown} />
      <Menubar />
    </>
  );
}