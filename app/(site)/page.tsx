
import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import Video from "@/components/Video";
import FeatureSikka from "@/components/FeatureSikka";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Sikka2x - Win 2x every 10 seconds",
  description: "Play Cricket every 10 second and win 2x. Play Now!",
  keywords: ["cricket quiz", "win cash", "skill based game", "sikka", "earn money games"]  // Add more metadata properties as needed
};


export default function Home() {
  return (
    <main>
      <SpeedInsights />
      <Header />
      <Hero />
      <Brands />

      <Testimonial />
      <Video />
      <FeatureSikka />
      {/* <Feature /> */}

      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact />
      <Integration /> */}
      {/* <CTA /> */}
      <FAQ />
      {/* <Pricing /> */}
      {/* <Contact /> */}

      {/* <Blog /> */}
      <Footer />

      <Analytics />

    </main>
  );
}
