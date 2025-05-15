"use client";
import { Disclosure } from "@headlessui/react";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FAQAccordion() {
  const t = useTranslations("faq");

  const faqs = t.raw("items") as { q: string; a: string }[];

  return (
    <section id="faq" className="bg-background text-foreground py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-2xl font-extrabold text-center">
          {t("title")}
        </h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div className="border border-border rounded-lg p-4 bg-muted">
                  <Disclosure.Button className="flex w-full justify-between items-center">
                    <span className="font-medium">{item.q}</span>
                    {open ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 text-foreground/70">
                    {item.a}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
