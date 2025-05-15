"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations();
  return (
    <section
      id="hero"
      className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center bg-background text-foreground"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl"
      >
        {t("hero.title")}
      </motion.h1>

      <p className="mt-6 max-w-2xl text-lg text-foreground/70 dark:text-foreground/50 sm:text-xl">
        {t("hero.subtitle")}
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#pricing"
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-background transition hover:bg-primary/90 dark:hover:bg-primary/80"
        >
          {t("hero.getStarted")}
        </a>
        <Link
          href="/docs"
          className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition hover:bg-muted dark:border-border/70 dark:hover:bg-muted/90"
        >
          {t("hero.documentation")}
        </Link>
      </div>
    </section>
  );
}
