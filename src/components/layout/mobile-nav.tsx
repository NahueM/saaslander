"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

export default function MobileNav({
  open,
  setOpen,
  links,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  links: { href: string; label: string }[];
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed inset-y-0 right-0 z-50 w-64 bg-background p-6 shadow-lg md:hidden"
        >
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="mb-6 rounded-full p-2 hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
          <nav className="flex flex-col gap-4">
            {links.map(({ href, label }: { href: string; label: string }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium"
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
