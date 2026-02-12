"use client";

import { useTheme } from "@/context/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">Theme:</span>
      <div className="flex gap-1">
        <button
          className={`h-8 px-3 text-sm border rounded-md transition-colors ${
            theme === "orange"
              ? "bg-orange-500 text-white border-orange-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
          onClick={() => setTheme("orange")}
        >
          Orange
        </button>
        <button
          className={`h-8 px-3 text-sm border rounded-md transition-colors ${
            theme === "cyan"
              ? "bg-cyan-500 text-white border-cyan-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
          onClick={() => setTheme("cyan")}
        >
          Cyan
        </button>
        <button
          className={`h-8 px-3 text-sm border rounded-md transition-colors ${
            theme === "gray"
              ? "bg-gray-500 text-white border-gray-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
          onClick={() => setTheme("gray")}
        >
          Gray
        </button>
      </div>
    </div>
  );
}
