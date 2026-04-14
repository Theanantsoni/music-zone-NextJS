"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // ⛔ Prevent hydration error
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
      className="
        rounded-full border border-gray-300 dark:border-gray-700
        px-4 py-2 text-sm font-medium
        bg-white dark:bg-black
        text-black dark:text-white
        hover:bg-gray-100 dark:hover:bg-gray-900
        transition-all
      "
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
