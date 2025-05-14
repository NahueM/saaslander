"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import MobileNav from "@/components/layout/mobile-nav";
import { useState } from "react";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header
      className="fixed inset-x-0 top-0 z-40 border-b
  bg-white dark:bg-gray-900
  border-gray-200 dark:border-gray-700
  text-gray-800 dark:text-gray-200
  backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Turbo<span className="text-primary">SaaS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-primary/80 ${
                pathname === href ? "text-primary" : "text-foreground/70"
              }`}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden rounded-full p-2 hover:bg-muted"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {/* Drawer */}
      <MobileNav open={open} setOpen={setOpen} links={links} />
    </header>
  );
}
