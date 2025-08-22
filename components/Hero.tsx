"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 pt-20 pb-16 text-center bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 sm:px-8 md:pt-32 md:pb-24 overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-3xl absolute -top-40 -left-40 animate-pulse" />
        <div className="w-[400px] h-[400px] bg-blue-700/20 rounded-full blur-2xl absolute -bottom-32 -right-32 animate-pulse" />
      </div>
      <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-100 mb-6 font-sans">
        The smart way to <span className="text-blue-400">notes</span>
      </h1>
      <p className="relative z-10 max-w-xl mx-auto text-lg sm:text-xl text-slate-300 mb-8 font-sans">
        Znotes is a simple, modern notes app for students and professionals. Create, edit, and search your notes with ease.
      </p>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="relative z-10 px-8 py-4 text-lg font-semibold border-2 border-blue-400 text-blue-100 bg-transparent hover:bg-blue-400 hover:text-slate-900 transition-colors duration-200 shadow-xl rounded-xl group focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
        aria-label="Get Started with Znotes"
      >
        <a href="#signup">
          Get Started
          <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
        </a>
      </Button>
      <div className="relative z-10 mt-12 flex justify-center">
        <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950/70 backdrop-blur-lg p-6 flex flex-col items-center">
          <img
            src="/znotes-hero-mockup.png"
            alt="Znotes app interface preview"
            className="w-full h-auto rounded-lg shadow-lg border border-slate-800 object-cover bg-slate-800/40"
            style={{ minHeight: 180 }}
            loading="lazy"
            onError={(e) => {
              // fallback to a placeholder if image not found
              (e.target as HTMLImageElement).src = "https://placehold.co/600x360/0f172a/f1f5f9?text=Znotes+App";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
