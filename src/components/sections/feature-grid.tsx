"use client";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function FeatureGrid() {
  const t = useTranslations("features");

  const features = [
    {
      key: "instantPayments",
    },
    {
      key: "multiLanguage",
    },
    {
      key: "seoPerformance",
    },
    {
      key: "notionDocs",
    },
  ];

  return (
    <section
      id="features"
      className="mx-auto max-w-6xl px-2 py-10 bg-background text-foreground"
    >
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start rounded-xl border border-border bg-muted p-6 shadow-sm transition hover:shadow-md"
          >
            <CheckCircle className="mb-4 h-7 w-7 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">
              {t(`${f.key}.title`)}
            </h3>
            <p className="text-sm text-foreground/70 dark:text-foreground/50">
              {t(`${f.key}.desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
