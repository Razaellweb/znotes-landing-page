"use client";
import React from "react";

const Footer = () => (
  <footer
    className="py-8 px-4 sm:px-8 bg-slate-950 text-slate-400 text-center border-t border-slate-800"
    aria-label="Footer"
  >
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-bold text-slate-100 text-lg font-sans">Znotes</span>
      <nav className="flex flex-wrap gap-4 text-sm">
        <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
        <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
        <a href="#download" className="hover:text-blue-400 transition-colors">Download</a>
        <a href="#signup" className="hover:text-blue-400 transition-colors">Get Started</a>
      </nav>
      <span className="text-xs">&copy; {new Date().getFullYear()} Znotes. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
