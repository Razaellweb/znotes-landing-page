"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is Znotes free?",
    a: "Yes! Znotes is free to use with optional premium features coming soon.",
  },
  {
    q: "Can I sync notes across devices?",
    a: "Absolutely. Znotes syncs your notes across web and mobile.",
  },
  {
    q: "Does Znotes support folders and tags?",
    a: "Yes, organize your notes with folders and tags for easy retrieval.",
  },
  {
    q: "How secure is my data?",
    a: "Your notes are encrypted in transit and stored securely. Integrations use OAuth.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section
      className="py-16 px-4 sm:px-8 bg-slate-900 text-slate-100"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center font-sans">FAQ</h2>
        <dl className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-950/80 border border-slate-800 rounded-xl">
              <dt>
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-t-xl"
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {faq.q}
                  <ChevronDown
                    className={`ml-2 w-5 h-5 transition-transform duration-200 ${open === i ? "rotate-180" : "rotate-0"}`}
                    aria-hidden="true"
                  />
                </button>
              </dt>
              <dd
                id={`faq-panel-${i}`}
                className={`px-6 pb-4 text-slate-300 text-base transition-all duration-200 ${open === i ? "block" : "hidden"}`}
              >
                {faq.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
