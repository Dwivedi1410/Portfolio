import { Fragment } from "react";

const words = [
  "Secure",
  "Performant",
  "User Friendly",
  "Accessible",
  "Usable",
  "Scalable",
  "Maintainable",
  "Robust",
  "Efficient",
  "Innovative",
  "Responsive",
  "Intuitive",
  "Reliable",
  "Flexible",
  "Optimized",
  "Dynamic",
  "Versatile",
  "Compliant",
  "Modular",
];

export const TapeSection = () => {
  return (
    <div className="sm:py-12 md:py-16">
      <div className="bg-gradient-to-r from-[#D96F32] to-orange-400 overflow-hidden -rotate-1 sm:-rotate-2 md:-rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-2 sm:gap-3 md:gap-4 py-3 sm:py-3 md:py-3 whitespace-nowrap animate-scroll">
            {[...new Array(2)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {words.map((word, index) => (
                  <div key={index} className="inline-flex gap-2 sm:gap-3 md:gap-4 items-center">
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white">
                      {word}
                    </span>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-white rounded-full flex-shrink-0"></span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
