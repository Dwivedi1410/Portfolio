"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import githubIcon from "@/assets/icons/github-brands-solid-full.svg";
import instaIcon from "@/assets/icons/instagram-brands-solid-full.svg";
import facebookIcon from "@/assets/icons/facebook-brands-solid-full.svg";
import linkedInIcon from "@/assets/icons/linkedin-in-brands-solid-full.svg";
import twitterIcon from "@/assets/icons/square-twitter-brands-solid-full.svg";
import xIcon from "@/assets/icons/x.png"
import { useState, type FormEvent } from "react";
import Link from "next/link";

export const ContactSection = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accessKeyToSendEmail = process.env.NEXT_PUBLIC_KEY_TO_SEND_EMAIL;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    try {
      const formElement = event.currentTarget;
      const formData = new FormData(formElement);
      if (!accessKeyToSendEmail) {
        setIsSubmitting(false);
        setResult("Contact form is not configured. Please try again later.");
        console.error(
          "Missing NEXT_PUBLIC_API_KEY_TO_SEND_EMAIL. Add it to .env.local and restart the dev server."
        );
        return;
      }
      formData.append("access_key", accessKeyToSendEmail as string);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form submitted successfully!");
        formElement.reset();
      } else {
        console.error("Submission error:", data);
        setResult(data.message || "Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="mx-auto mt-10 md:mt-16 max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <form
            className="flex flex-col justify-center p-8 bg-black/50 backdrop-blur-sm shadow-white/10 rounded-xl shadow-lg"
            onSubmit={onSubmit}
          >
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
              className="bg-zinc-800/60 py-3 px-4 mb-4 text-white placeholder-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96F32] transition"
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="bg-zinc-800/60 py-3 px-4 mb-4 text-white placeholder-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96F32] transition"
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className="bg-zinc-800/60 h-40 px-4 py-3 mb-4 text-white placeholder-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96F32] transition resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#D96F32] hover:bg-[#c35f28] transition text-white font-medium rounded-lg px-6 py-3 shadow-md"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {result && <p className="mt-4 text-center text-white">{result}</p>}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="w-full h-full">
            <p className="text-lg text-gray-300 mb-2">Looking for my next opportunity!</p>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] break-words">Let&apos;s Work Together</h1>
            <p className="mt-2 text-lg text-gray-400">Reach out to me</p>
            <p className="mt-2 underline text-lg text-gray-200 font-semibold">
              <a href="mailto:pd14102003@gmail.com">pd14102003@gmail.com</a>
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href="https://github.com/Dwivedi1410" target="_blank">
                <Image src={githubIcon} alt="githubIcon" className="size-9 md:size-12 text-white" />
              </Link>
              <Link href="https://www.instagram.com/dwivedi_prakash1410/" target="_blank">
                <Image src={instaIcon} alt="instagramIcon" className="size-9 md:size-12 text-white" />
              </Link>
              <Link href="https://www.facebook.com/prakash.dwivedi.5680" target="_blank">
                <Image src={facebookIcon} alt="facebookIcon" className="size-9 md:size-12 text-white" />
              </Link>
              <Link href="https://www.linkedin.com/in/prakash-dwivedi-16851a257/" target="_blank">
                <Image src={linkedInIcon} alt="linkedInIcon" className="size-9 md:size-12 text-white" />
              </Link>
              <Link href="https://x.com/Prakash65850321" target="_blank">
                <Image src={xIcon} alt="twitterIcon" className="size-9 md:size-12 text-white" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
