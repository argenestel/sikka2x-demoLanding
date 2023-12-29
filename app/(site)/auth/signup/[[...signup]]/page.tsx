import Signup from "@/components/Auth/Signup";
import Tally from "@/components/Auth/Tally";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sign Up Page -  sikka2x",
  description: "This is Sign Up page for sikka2x",
  // other metadata
};

export default function SignUpPage() {
  return (
      <>
      <Header />
      <Tally />
      <Footer />
      </>
  );
}
