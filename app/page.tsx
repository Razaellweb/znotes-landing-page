// pages/landing.tsx
import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SocialProof from "../components/SocialProof";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import AppDownload from "../components/AppDownload";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <Head>
        <title>Znotes – The smart way to a notes app called znotes</title>
        <meta name="description" content="A notes app called Znotes. Create, edit, and search your notes with ease. Simple, modern, and perfect for students and professionals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Znotes – The smart way to a notes app called znotes" />
        <meta property="og:description" content="A notes app called Znotes. Create, edit, and search your notes with ease. Simple, modern, and perfect for students and professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/znotes-og.png" />
      </Head>
      <main className="bg-slate-900 text-slate-100 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Testimonials />
        <AppDownload />
        <FAQ />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Landing;
