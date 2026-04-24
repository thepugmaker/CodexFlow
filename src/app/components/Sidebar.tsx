"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import config from "../common/ConfigReader";
import list from "../../../md/list.json";

export default function Sidebar() {
  const searchParams = useSearchParams();
  const current =
    decodeURIComponent(searchParams.get("md") || config.docs["index-md"]);

  return (
    <div
      className={`flex flex-col rounded-2xl mt-20 ml-4 h-[80vh] w-64 p-4 gap-2 overflow-y-auto fixed ${
        config.sidebar["show-border"] ? "border border-white" : "border-0"
      }`}
      style={{
        backgroundColor: config.sidebar["sidebar-color"],
        "--sidebar-button": config.sidebar["hovered-unhighlighted-color"],
      } as React.CSSProperties}
    >
      {list.List.map((file) => {
        const isActive =
          file.toLowerCase() === current.toLowerCase();

        return (
          <Link
            key={file}
            href={`/doc?md=${encodeURIComponent(file)}`}
            className={`px-2 py-1 rounded transition-colors sidebar-item ${
              isActive ? "is-active" : ""
            }`}
            style={{
              "--sidebar-hover": config.sidebar["hovered-unhighlighted-color"],

              color: isActive
                ? config.sidebar["highlighted-text-color"]
                : config["global-colors"]["text-color"],

              backgroundColor: isActive
                ? config.sidebar["highlighted-doc-color"]
                : "transparent",
            } as React.CSSProperties}
          >
            {file.replace(".md", "")}
          </Link>
        );
      })}
    </div>
  );
}