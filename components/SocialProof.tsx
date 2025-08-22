"use client";
import React from "react";

const users = [
  {
    name: "Alex Kim",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Znotes keeps my study notes organized and searchable. Love the clean UI!",
    role: "Student, NYU",
  },
  {
    name: "Priya Singh",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I use Znotes daily for meeting notes. The search is lightning fast.",
    role: "Product Manager",
  },
  {
    name: "Marco Rossi",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    quote: "Best notes app for professionals. Simple, modern, and powerful.",
    role: "Consultant",
  },
  {
    name: "Emily Chen",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "Folders and tags make my workflow effortless. Highly recommend!",
    role: "Graduate Student",
  },
];

const SocialProof = () => (
  <section
    className="py-16 px-4 sm:px-8 bg-slate-900 text-slate-100"
    aria-label="Social proof and trust"
  >
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-sans">Trusted by students & professionals worldwide</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {users.map((user, i) => (
          <figure
            key={i}
            className="flex flex-col items-center bg-slate-950/80 border border-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={user.avatar}
              alt={`Avatar of ${user.name}`}
              className="w-16 h-16 rounded-full border-2 border-blue-400 mb-4 object-cover"
              loading="lazy"
            />
            <blockquote className="italic text-slate-300 mb-2">“{user.quote}”</blockquote>
            <figcaption className="text-blue-200 font-semibold text-sm">{user.name}</figcaption>
            <span className="text-slate-400 text-xs">{user.role}</span>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
