"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    author: "Jane Doe",
    role: "CEO at Acme Corp",
    text: "TurboSaaS nos permitió lanzar nuestro producto en tiempo récord. ¡Totalmente recomendado!",
  },
  {
    author: "John Smith",
    role: "CTO at BetaTech",
    text: "La integración de Stripe y la documentación in-app son simplemente fantásticas.",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  // Avanza automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5000); // 5000ms = 5 segundos

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-background text-foreground py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <p className="mb-6 text-lg italic">“{testimonials[index].text}”</p>
            <h4 className="font-semibold">{testimonials[index].author}</h4>
            <span className="text-sm text-foreground/70">
              {testimonials[index].role}
            </span>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous"
            className="p-2 rounded-full hover:bg-muted"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="p-2 rounded-full hover:bg-muted"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
