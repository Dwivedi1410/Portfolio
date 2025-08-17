"use client";
import { motion } from "framer-motion";
const ExperienceTimeline = () => {
  const experiences = [
    {
      period: "July 2024",
      title: "Mentor",
      company: "KIET Group of Institutions",
      description:
        "I completed an internship as a mentor in the Digital Skills Bootcamp organized during the 2024 Student Induction Program for first-year B.Tech students.",
    },
    {
      period: "November 2023",
      title: "Volunteer Vega Processor Nation wide Roadshow",
      company: "IEEE, CDAC, VEGAPROCESSOR",
      description:
        "In collaboration with the Vega Processor team, I helped organize a workshop that gave college students and faculty members a practical, hands-on experience with India’s first indigenously developed processor, Vega Processor.",
    },
    {
      period: "January 2023 - Present",
      title: "DSA Coordinator",
      company: "DevUP",
      description:
        "In DevUP, I provide mentorship to peers on enhancing their logic-building abilities, and we collaborate on coding to excel in programming.",
    },
  ];

  return (
    <div className="py-12">
      <div className="relative mx-auto max-w-4xl px-4">
        <div className="absolute top-0 h-full w-0.5 bg-gray-300 left-4 md:left-1/2 md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative md:grid md:grid-cols-2 md:items-center md:gap-12"
            >
              <div className="absolute -left-1.5 top-1 z-10 size-4 rounded-full bg-[#D96F32] md:left-1/2 md:-translate-x-1/2"></div>

              {index % 2 === 0 ? (
                <>
                  <div className="md:col-start-1 md:row-start-1 md:text-right">
                    <div className="relative mr-0 md:mr-8">
                      <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <div className="absolute top-4 -right-2 hidden size-4 rotate-45 bg-black/80 md:block"></div>
                        <div className="ml-12 rounded-lg bg-black/50 backdrop-blur-sm p-4 shadow-white/10 shadow-lg md:ml-0">
                          <div className="text-sm font-semibold text-white">{exp.period}</div>
                          <h3 className="mt-1 text-xl font-bold text-[#D96F32]">{exp.title}</h3>
                          <div className="font-medium ">{exp.company}</div>
                          <p className="mt-2 ">{exp.description}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block"></div>
                  <div className="md:col-start-2 md:row-start-1">
                    <div className="relative ml-0 md:ml-8">
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <div className="absolute top-4 -left-2 hidden size-4 rotate-45 bg-black md:block"></div>
                        <div className="ml-12 rounded-lg bg-black/50 backdrop-blur-sm p-4 shadow-white/10 shadow-lg md:ml-0">
                          <div className="text-sm font-semibold ">{exp.period}</div>
                          <h3 className="mt-1 text-xl font-bold text-[#D96F32]">{exp.title}</h3>
                          <div className="font-medium ">{exp.company}</div>
                          <p className="mt-2 ">{exp.description}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
