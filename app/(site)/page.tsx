
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

export const metadata: Metadata = {
  title: "sikka2x - Expert Mock Interviews and Peer Learning Platform",
  description: "Advance your career with professional mock interviews and peer feedback on sikka2x. Join today!",
  keywords: ["job interviews", "mock interviews", "career development", "peer learning", "professional feedback"]  // Add more metadata properties as needed
};


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <Testimonial />
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact />
      <Integration /> */}
      <CTA />
      <FAQ />
      {/* <Pricing /> */}
      <Contact />

      {/* <Blog /> */}
      <Footer />
    </main>
  );
}
