import Image from "next/image";
import myImage from "@/assets/images/My-image.png";
import Link from "next/link";
import githubIcon from "@/assets/icons/github-brands-solid-full.svg";
import instaIcon from "@/assets/icons/instagram-brands-solid-full.svg";
import facebookIcon from "@/assets/icons/facebook-brands-solid-full.svg";
import linkedInIcon from "@/assets/icons/linkedin-in-brands-solid-full.svg";
import xIcon from "@/assets/icons/x.png"

export const HeroSection = () => {
  return (
    <section id="Home" className="md:mt-12 mx-auto max-w-screen-xl px-4 py-8 sm:px-10 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 sm:gap-2 md:grid-cols-2 items-center">
        <div className="flex justify-center items-end order-1 md:order-2">
          <Image
            src={myImage}
            alt="Prakash Dwivedi"
            width={300} 
            height={300}
            className="fade-bottom h-auto w-64 md:w-80" 
          />
        </div>

        <div className="order-2 md:order-1 flex flex-col justify-center sm:mt-8 md:mt-16 items-center md:items-start">
          <p className="text-lg">Hey there!</p>
          <h1 className="text-center md:text-left text-[35px] lg:text-5xl font-bold leading-tight">
            I&apos;m <span className="text-[#D96F32]">Prakash Dwivedi</span>
            <br />a Web Developer
          </h1>
          <p className="text-sm text-white/45 text-center md:text-start px-4 md:px-0 mt-2">
            Welcome to my digital portfolio, Where creativity meets code. I specialize in crafting
            responsive, user-centric website that brings your vision to life. Whether it&apos;s
            desigining sleek user interface or developing robust back-end systems, I&apos;m
            passionate about delivering impactful web solutions.
          </p>
          <Link href="/Prakash_Dwivedi_Resume.pdf" target="_blank" className="mt-4 border-1 border-[#D96F32] px-4 py-2 rounded-2xl flex gap-2 font-semibold text-[#D96F32]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            DownloadCV
          </Link>
          <div className="mt-8 border hidden md: border-white/15 px-4 py-2 rounded-2xl bg-white/10 md:flex gap-4">
            <a href="https://github.com/Dwivedi1410" target="_blank">
              <Image src={githubIcon} alt="githubIcon" className="size-9 md:size-12 text-white" />
            </a>
            <a href="https://www.instagram.com/dwivedi_prakash1410/" target="_blank">
              <Image src={instaIcon} alt="instagramIcon" className="size-9 md:size-12 text-white" />
            </a>
            <a href="https://www.facebook.com/prakash.dwivedi.5680" target="_blank">
              <Image src={facebookIcon} alt="facebookIcon" className="size-9 md:size-12 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/prakash-dwivedi-16851a257/" target="_blank">
              <Image src={linkedInIcon} alt="linkedInIcon" className="size-9 md:size-12 text-white" />
            </a>
            <a href="https://x.com/Prakash65850321" target="_blank">
              <Image src={xIcon} alt="twitterIcon" className="size-9 md:size-12 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
