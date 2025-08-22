"use client";
import React from "react";

const testimonials = [
  {
    name: "Jordan Lee",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "Znotes is the first notes app I actually enjoy using. The UI is so clean and the search is a lifesaver.",
    role: "Software Engineer",
  },
  {
    name: "Sara Müller",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    text: "I switched from Evernote and never looked back. Znotes is fast and reliable.",
    role: "PhD Candidate",
  },
];

const Testimonials = () => (
  <section
    className="py-16 px-4 sm:px-8 bg-slate-900 text-slate-100"
    aria-label="Testimonials and reviews"
  >
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-sans">What users say</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="flex flex-col items-center bg-slate-950/80 border border-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 flex-1"
          >
            <img
              src={t.avatar}
              alt={`Avatar of ${t.name}`}
              className="w-14 h-14 rounded-full border-2 border-blue-400 mb-4 object-cover"
              loading="lazy"
            />
            <blockquote className="italic text-slate-300 mb-2">“{t.text}”</blockquote>
            <figcaption className="text-blue-200 font-semibold text-sm">{t.name}</figcaption>
            <span className="text-slate-400 text-xs">{t.role}</span>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
