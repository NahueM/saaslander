"use client";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Instant Payments",
    desc: "Integrate Stripe in minutes and start charging customers.",
  },
  {
    title: "Multi‑language",
    desc: "Reach global audiences with built‑in i18n support.",
  },
  {
    title: "SEO & Performance",
    desc: "Lighthouse 100/100 out of the box on mobile.",
  },
  {
    title: "Notion‑style Docs",
    desc: "Host your documentation inside the same codebase.",
  },
];

export default function FeatureGrid() {
  return (
    <section
      id="features"
      className="mx-auto max-w-6xl px-2 py-10 bg-background text-foreground"
    >
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              flex flex-col items-start
              rounded-xl border border-border
              bg-muted
              p-6 shadow-sm transition hover:shadow-md
            "
          >
            <CheckCircle className="mb-4 h-7 w-7 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
            <p className="text-sm text-foreground/70 dark:text-foreground/50">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
