export const dynamic = "force-dynamic";

import React from "react";
import fs from "fs";
import path from "path";
import MarkdownViewer from "./MarkdownViewer";
import list from "../../../md/list.json";
import Menubar from "../components/DocsMenubar";
import Sidebar from "../components/SidebarFrontend";
import config from "../common/ConfigReader";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ md?: string }>;
}) {
  const params = await searchParams;
// Error handle for index-md being incorrect

  let markdown = "# File not found"
  let currentFile = config.docs["index-md"];
  let previousFile: string | null = null;
  let nextFile: string | null = null;

  const indexMDpath = path.join(process.cwd(), config.markdown["md-files-location"], config.docs["index-md"]);

  if (fs.existsSync(indexMDpath)) {
    const selectedFileRaw = params.md || config.docs["index-md"];

    const selectedFile = decodeURIComponent(selectedFileRaw)
      .trim()
      .toLowerCase();

    currentFile =
      list.List.find(
        (file) => file.trim().toLowerCase() === selectedFile
      ) || currentFile;

    const currentIndex = list.List.indexOf(currentFile);
    previousFile = currentIndex > 0 ? list.List[currentIndex - 1] : null;
    nextFile =
      currentIndex >= 0 && currentIndex < list.List.length - 1
        ? list.List[currentIndex + 1]
        : null;

    const filePath = path.join(process.cwd(), config.markdown["md-files-location"], currentFile);

    // TODO: Fix the try and catch to not error cause it doesn't exist when we know it doesnt exist

    try {
      markdown = fs.readFileSync(filePath, "utf8");
    } catch (err) {
      console.error(err);
    }
  } else {
    markdown = '### In config.json there is no index-md inside of docs set or it is set to the wrong file name <br> This means you have no markdown file set to be on the home page of your documentation'
  }

  return (
    <>
      <Sidebar list={list.List} current={currentFile} />
      <MarkdownViewer
        markdown={markdown}
        previousFile={previousFile}
        nextFile={nextFile}
      />
      <Menubar />
    </>
  );
}