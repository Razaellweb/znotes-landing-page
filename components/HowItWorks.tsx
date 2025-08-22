"use client";
import React from "react";
import { PlusCircle, Edit, Search, Folder } from "lucide-react";

const steps = [
  {
    icon: <PlusCircle className="w-6 h-6 text-blue-400" aria-hidden="true" />,
    title: "1. Create",
    description: "Start a new note instantly with one click or keyboard shortcut.",
  },
  {
    icon: <Edit className="w-6 h-6 text-blue-400" aria-hidden="true" />,
    title: "2. Edit",
    description: "Format, organize, and tag your notes for easy retrieval.",
  },
  {
    icon: <Search className="w-6 h-6 text-blue-400" aria-hidden="true" />,
    title: "3. Search",
    description: "Find any note using full-text search and smart filters.",
  },
  {
    icon: <Folder className="w-6 h-6 text-blue-400" aria-hidden="true" />,
    title: "4. Organize",
    description: "Group notes by folders or tags. Integrate with Google Drive & Dropbox.",
  },
];

const HowItWorks = () => (
  <section
    className="py-16 px-4 sm:px-8 bg-slate-950 text-slate-100"
    aria-label="How Znotes works"
  >
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center font-sans">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 group focus-within:ring-2 focus-within:ring-blue-400"
            tabIndex={0}
            aria-label={step.title}
          >
            <div className="mb-3">{step.icon}</div>
            <h3 className="text-lg font-semibold mb-1 text-blue-100 font-sans">{step.title}</h3>
            <p className="text-slate-300 text-base text-center font-sans">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
