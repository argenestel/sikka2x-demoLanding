 import Signin from "@/components/Auth/Signin";
import Tally from "@/components/Auth/Tally";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Login Page - sikka2x",
  description: "This is Login page for sikka2x A Mock Interview Portal",
  // other metadata
};


export default function SignInPage() {
  return (
<>
<Header />
<Tally />
<Footer />
</>
  );
}
