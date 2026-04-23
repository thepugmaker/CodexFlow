"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import config from "../common/ConfigReader";
import list from "../../../md/list.json";

export default function Sidebar() {
  const searchParams = useSearchParams();
  const current = decodeURIComponent(searchParams.get("md") || "index.md");

  return (
    <div
      className="flex flex-col rounded-2xl border border-white mt-20 ml-4 h-[80vh] w-64 p-4 gap-2 overflow-y-auto fixed"
      style={{ backgroundColor: config.global["sidebar-color"] }}
    >
      {list.List.map((file) => {
        const isActive =
          file.toLowerCase() === current.toLowerCase();

        return (
          <Link
            key={file}
            href={`/doc?md=${encodeURIComponent(file)}`}
            className={`px-2 py-1 rounded transition-colors ${
              isActive
                ? "bg-white text-black font-semibold"
                : "text-white hover:bg-white/10"
            }`}
          >
            {file.replace(".md", "")}
          </Link>
        );
      })}
    </div>
  );
}