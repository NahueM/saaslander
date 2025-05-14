"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme(); // ← usa resolvedTheme
  const [mounted, setMounted] = useState(false);

  // Evita renderizar hasta que pasemos del SSR al CSR
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="h-5 w-5" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded-full p-2 transition hover:bg-muted"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
