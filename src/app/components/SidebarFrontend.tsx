"use client";

import React from "react";
import Link from "next/link";
import config from "../common/ConfigReader";

export default function Sidebar({
  list,
  current,
}: {
  list: string[];
  current: string;
}) {
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
      {list.map((file) => {
        const isActive =
          file.toLowerCase() === current.toLowerCase();

        return (
          <Link
            key={file}
            href={`/doc?md=${encodeURIComponent(file)}`}
            onClick={() => document.getElementById("markdown-content")?.scrollTo(0, 0)}
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