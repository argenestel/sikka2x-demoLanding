
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

export const metadata: Metadata = {
  title: "Sikka2x - Win 2x every 10 seconds",
  description: "Play Cricket Quiz every 10 second and win 2x. Truly Zero Commission Game. Play Now!",
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
     
    <div className="container">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R0RR6G0308" />
      <Script async id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-R0RR6G0308');
        `}
      </Script>
</div>
    </main>
  );
}
