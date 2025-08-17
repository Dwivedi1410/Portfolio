"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import githubIcon from "@/assets/icons/github-brands-solid-full.svg";
import instaIcon from "@/assets/icons/instagram-brands-solid-full.svg";
import facebookIcon from "@/assets/icons/facebook-brands-solid-full.svg";
import linkedInIcon from "@/assets/icons/linkedin-in-brands-solid-full.svg";
import twitterIcon from "@/assets/icons/square-twitter-brands-solid-full.svg";

export const ContactSection = () => {
  return (
    <section id="Contact" className="mx-auto mt-10 md:mt-16 max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">Contact</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <form className="flex flex-col justify-center p-8 bg-black/50 backdrop-blur-sm shadow-white/10 rounded-xl shadow-lg">
            <input
              type="text"
              placeholder="Name"
              className="bg-zinc-800/60 py-3 px-4 mb-4 text-white placeholder-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96F32] transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-zinc-800/60 py-3 px-4 mb-4 text-white placeholder-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96F32] transition"
            />
            <textarea
              placeholder="Message"
              className="bg-zinc-800/60 h-40 px-4 py-3 mb-4 text-white placeholder-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96F32] transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#D96F32] hover:bg-[#c35f28] transition text-white font-medium rounded-lg px-6 py-3 shadow-md"
            >
              Send
            </button>
          </form>
        </motion.div>

        {/* Contact Info and Socials */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="w-full h-full">
            <p className="text-lg text-gray-300 mb-2">Looking for my next opportunity!</p>
            <h1 className="font-bold text-[40px]">Let's Work Together</h1>
            <p className="mt-2 text-lg text-gray-400">Reach out to me</p>
            <p className="mt-2 underline text-lg text-gray-200 font-semibold">
              pd14102003@gmail.com
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#">
                <Image src={githubIcon} alt="githubIcon" className="size-9 md:size-12 text-white" />
              </a>
              <a href="#">
                <Image
                  src={instaIcon}
                  alt="instagramIcon"
                  className="size-9 md:size-12 text-white"
                />
              </a>
              <a href="#">
                <Image
                  src={facebookIcon}
                  alt="facebookIcon"
                  className="size-9 md:size-12 text-white"
                />
              </a>
              <a href="#">
                <Image
                  src={linkedInIcon}
                  alt="linkedInIcon"
                  className="size-9 md:size-12 text-white"
                />
              </a>
              <a href="#">
                <Image
                  src={twitterIcon}
                  alt="twitterIcon"
                  className="size-9 md:size-12 text-white"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
