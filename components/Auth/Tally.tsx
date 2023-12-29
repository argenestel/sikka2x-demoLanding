"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "@/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/navigation'
import LoadingPage from "../Loading/Loading";

const Tally = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [user, loading, error] = useAuthState(auth);
  const   router = useRouter();
  useEffect(() => {
    if (loading) {
      <LoadingPage />
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      router.push("/dashboard")
  console.log(user)};
  }, [user, loading]);

  return (
    <>
      {/* <!-- ===== SignIn Form Start ===== --> */}
      <section className="pt-32.5 lg:pt-45 xl:pt-50 pb-12.5 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1016 relative z-1 pt-10 lg:pt-15 xl:pt-20 pb-7.5 px-7.5 lg:px-15 xl:px-20">
          <div className="absolute -z-1 rounded-lg left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#F8F9FF] to-[#dee7ff47] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
          <div className="absolute -z-1 bottom-17.5 left-0 w-full h-1/3">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top shadow-solid-8 rounded-lg bg-white  pt-7.5 xl:pt-15 px-7.5 xl:px-15"
          >
            {/* dark:bg-black dark:border dark:border-strokedark */}
            <h2 className="text-black text-3xl xl:text-sectiontitle2 font-semibold mb-15 text-center">
              Login to Your Account
            </h2>
            <div className="embed-tally">
                <iframe
                  src="https://tally.so/embed/mKx9G7?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  height="500px"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  style={{ border: "none" }}
                  allowFullScreen
                ></iframe>
              </div>

          </motion.div>
        </div>
      </section>
      {/* <!-- ===== SignIn Form End ===== --> */}
    </>
  );
};

export default Tally;
