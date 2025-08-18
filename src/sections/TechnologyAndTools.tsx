"use client";
import Image from "next/image";
import html from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import javascript from "@/assets/icons/javascript.png";
import react from "@/assets/icons/react.png";
import nextjs from "@/assets/icons/nextjs.png";
import tailwind from "@/assets/icons/tailwind.png";
import nodejs from "@/assets/icons/nodejs.png";
import express from "@/assets/icons/express.png";
import mongodb from "@/assets/icons/mongodb.png";
import git from "@/assets/icons/git.png";
import github from "@/assets/icons/github (2).png";
import vscode from "@/assets/icons/vscode.png";
import postman from "@/assets/icons/postman.png";
import linux from "@/assets/icons/linux.png";
import cplusplus from "@/assets/icons/c++.png";
import postgreSQL from "@/assets/icons/postgreSQL.png";
import { motion } from "framer-motion";

export const TechAndTools = () => {
  const icons = [
    { src: html, alt: "HTML5" },
    { src: cssIcon, alt: "CSS3" },
    { src: javascript, alt: "JavaScript" },
    { src: react, alt: "React" },
    { src: nextjs, alt: "Next.js" },
    { src: tailwind, alt: "Tailwind CSS" },
    { src: nodejs, alt: "Node.js" },
    { src: express, alt: "Express.js" },
    { src: mongodb, alt: "MongoDB" },
    { src: git, alt: "Git" },
    { src: github, alt: "GitHub" },
    { src: vscode, alt: "VS Code" },
    { src: postman, alt: "Postman" },
    { src: linux, alt: "Linux" },
    { src: cplusplus, alt: "C++" },
    { src: postgreSQL, alt: "PostgreSQL" },
  ];

  return (
    <section className="mx-auto mt-10 md:mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
      <h1 className="text-[30px] md:text-[35px] font-semibold mb-6">Technology & Tools</h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
          {icons.map(({ src, alt }, i) => (
            <div
              key={i}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center bg-black/50 p-2 md:p-0  rounded-full shadow-lg shadow-white/10 transition-transform transform hover:scale-105"
            >
              <Image src={src} alt={alt} width={64} height={64} className="object-contain" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
