"use client";
import React from "react";
import { FileText, Edit3, Search, FolderOpen } from "lucide-react";

const features = [
  {
    icon: <FileText className="w-7 h-7 text-blue-400" aria-hidden="true" />,
    title: "Create Notes Instantly",
    description: "Jot down thoughts, ideas, and todos in seconds with a distraction-free editor.",
  },
  {
    icon: <Edit3 className="w-7 h-7 text-blue-400" aria-hidden="true" />,
    title: "Effortless Editing",
    description: "Edit and organize your notes with intuitive controls and keyboard shortcuts.",
  },
  {
    icon: <Search className="w-7 h-7 text-blue-400" aria-hidden="true" />,
    title: "Powerful Search",
    description: "Find any note instantly with blazing-fast search and smart filters.",
  },
  {
    icon: <FolderOpen className="w-7 h-7 text-blue-400" aria-hidden="true" />,
    title: "Stay Organized",
    description: "Group notes by folders or tags. Integrate with Google Drive & Dropbox.",
  },
];

const Features = () => (
  <section
    className="py-20 px-4 sm:px-8 bg-slate-950 text-slate-100"
    aria-label="Features and benefits"
  >
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center font-sans">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-6 rounded-xl bg-slate-900/80 border border-slate-800 shadow-md hover:shadow-xl transition-shadow duration-200 group focus-within:ring-2 focus-within:ring-blue-400"
            tabIndex={0}
            aria-label={feature.title}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-100 font-sans">{feature.title}</h3>
            <p className="text-slate-300 text-base font-sans text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
