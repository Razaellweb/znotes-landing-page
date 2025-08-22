"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section
    className="py-16 px-4 sm:px-8 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-slate-100 text-center"
    aria-label="Call to action"
  >
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-sans">Ready to get organized?</h2>
      <p className="text-slate-300 mb-8 font-sans">
        Start using Znotes today and experience the smart, modern way to take notes.
      </p>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="px-8 py-4 text-lg font-semibold border-2 border-blue-400 text-blue-100 bg-transparent hover:bg-blue-400 hover:text-slate-900 transition-colors duration-200 shadow-xl rounded-xl group focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
        aria-label="Get Started with Znotes"
      >
        <a href="#signup">
          Get Started
          <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
        </a>
      </Button>
    </div>
  </section>
);

export default CTASection;
