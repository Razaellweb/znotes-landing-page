"use client";
import React from "react";
import { Download, Smartphone, Monitor } from "lucide-react";

const AppDownload = () => (
  <section
    className="py-16 px-4 sm:px-8 bg-slate-950 text-slate-100"
    aria-label="App download section"
  >
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-sans">Get Znotes on all your devices</h2>
      <p className="text-slate-300 mb-8 max-w-xl">
        Znotes is available on web and mobile. Sync seamlessly across devices. Integrate with Google Drive and Dropbox for backup.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-400 text-slate-900 font-semibold shadow-lg hover:bg-blue-500 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          aria-label="Download for iOS"
        >
          <Smartphone className="w-5 h-5 mr-2" aria-hidden="true" /> iOS (Coming Soon)
        </a>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-400 text-slate-900 font-semibold shadow-lg hover:bg-blue-500 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          aria-label="Download for Android"
        >
          <Smartphone className="w-5 h-5 mr-2" aria-hidden="true" /> Android (Coming Soon)
        </a>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-400 text-slate-900 font-semibold shadow-lg hover:bg-blue-500 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          aria-label="Use Znotes on Web"
        >
          <Monitor className="w-5 h-5 mr-2" aria-hidden="true" /> Web App
        </a>
      </div>
    </div>
  </section>
);

export default AppDownload;
