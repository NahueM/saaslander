"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/logos/apple.svg",
  "/logos/google.svg",
  "/logos/xrp.svg",
  "/logos/amazon.svg",
];

export default function LogoCloud() {
  return (
    <section id="logo-cloud" className="bg-background text-foreground py-16">
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {logos.map((src, idx) => (
            <div key={idx} className="flex justify-center">
              <Image
                src={src}
                alt={`Logo ${idx}`}
                width={120}
                height={60}
                className="filter grayscale dark:invert-0 opacity-70 hover:filter-none hover:opacity-100 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
