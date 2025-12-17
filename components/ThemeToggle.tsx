"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition"
    >
      {theme === "light" ? <Moon className="text-black" /> : <Sun className="text-yellow-400" />}
    </button>
  );
}
