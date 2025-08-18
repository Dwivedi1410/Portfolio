"use client";
import MovieAIPoster from "@/assets/images/Movie-AI-Poster.png";
import RestNestPoster from "@/assets/images/RestNest-Poster.png";
import Link from "next/link";
import MyPortfolioPoster from "@/assets/images/Portfolio-Poster.png";
import Image from "next/image";
import { motion } from "framer-motion";
export const ProjectSection = () => {
  return (
    <section id="Projects" className="mx-auto md:mt-8 mt-10 max-w-screen-xl px-4 py-8 sm:px-10 md:px-8 lg:px-12 overflow-hidden">
      <h1 className="text-[30px] md:text-[35px] font-semibold m:px-2">Projects</h1>

      <div className="grid mt-8 grid-cols-1 gap-6 md:grid-cols-2 ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-2xl overflow-hidden rounded-xl pb-8 bg-black/50 backdrop-blur-sm shadow-white/10 shadow-lg">
            <Image src={MovieAIPoster} alt="Project Poster" className="object-cover w-full" />
            <div className="flex flex-col gap-3 pt-4 px-2 pb-4">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">MovieAI</h1>
                <p className="text-sm text-slate-400">July 2025</p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="https://movie-ai-rho.vercel.app/" target="_blank" className="flex items-center gap-1 text-[#D96F32] border border-[#D96F32] display-inline px-3 py-1 rounded-full">
                  <span>Visit Site</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 font-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
                <Link href="https://github.com/Dwivedi1410/MovieAI" target="_blank" className="flex items-center gap-1 bg-[#D96F32] text-white display-inline px-3 py-1 rounded-full">
                  <span>Github</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 font-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex flex-wrap mt-3 gap-2">
                <span className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300">
                  React
                </span>
                <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
                  TailwindCSS
                </span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  MongoDB
                </span>
                <span className="rounded-full bg-rose-400/10 px-3 py-1 text-xs font-semibold text-rose-300">
                  Express
                </span>
                <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
                  Nodemailer
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mt-4 md:mt-0 max-w-2xl overflow-hidden rounded-xl pb-8 bg-black/50 backdrop-blur-sm shadow-white/10 shadow-xl">
            <Image src={RestNestPoster} alt="Project Poster" className="object-cover w-full" />
            <div className="flex flex-col gap-3 pt-4 px-2 pb-4">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">RestNest</h1>
                <p className="text-sm text-slate-400">May 2025</p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="https://restnest.vercel.app/" target="_blank" className="flex items-center gap-1 text-[#D96F32] border border-[#D96F32] display-inline px-3 py-1 rounded-full">
                  <span>Visit Site</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 font-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
                <Link href="https://github.com/Dwivedi1410/Airbnb" target="_blank" className="flex items-center gap-1 bg-[#D96F32] text-white display-inline px-3 py-1 rounded-full">
                  <span>Github</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 font-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex mt-3 flex-wrap gap-2">
                <span className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300">
                  React
                </span>
                <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
                  TailwindCSS
                </span>
                <span className="rounded-full bg-rose-400/10 px-3 py-1 text-xs font-semibold text-rose-300">
                  Express
                </span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  MongoDB
                </span>
                <span className="rounded-full bg-rose-400/10 px-3 py-1 text-xs font-semibold text-rose-300">
                  Multer
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 pb-8 md:pb-0 md:grid-cols-3 overflow-hidden mt-4 md:mt-8 shadow-lg shadow-white/10 bg-black/50 backdrop-blur-sm rounded-xl">
          <div className="md:col-span-2">
            <Image
              src={MyPortfolioPoster}
              alt="Project Poster"
              className="object-cover w-full h-auto"
            />
          </div>
          <div>
            <div className="flex flex-col gap-3 pt-4 px-2 pb-4 md:pb-0">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Portfolio</h1>
                <p className="text-sm text-slate-400">August 2025</p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="#" target="_blank" className="flex items-center gap-1 text-[#D96F32] border border-[#D96F32] display-inline px-3 py-1 rounded-full">
                  <span>Visit Site</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 font-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
                <Link href="https://github.com/Dwivedi1410/Portfolio" target="_blank" className="flex items-center gap-1 bg-[#D96F32] text-white display-inline px-3 py-1 rounded-full">
                  <span>Github</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 font-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="rounded-full bg-rose-400/10 px-3 py-1 text-xs font-semibold text-rose-300">
                  NextJS
                </span>
                <span className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300">
                  Typescript
                </span>
                <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
                  TailwindCSS
                </span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Framer Motion
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
