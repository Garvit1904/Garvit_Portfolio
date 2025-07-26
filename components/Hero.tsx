import React from "react";
import Section from "./Section";
import AnimateOnScroll from "./AnimateOnScroll";
import { useTypingEffect } from "../hooks/useTypingEffect";

const ROLES = [
  "Frontend Developer",
  "AI/ML Enthusiast",
  "Data Analyst",
  "Creative Problem-Solver",
];

const Hero: React.FC = () => {
  const typedRole = useTypingEffect(ROLES);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      const headerHeight = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <Section
      id="home"
      className="min-h-screen flex flex-col justify-center -mt-20"
    >
      <AnimateOnScroll>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
          <div className="md:w-3/5 text-center md:text-left mt-10 md:mt-0">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Hi, I'm Garvit <span className="wave-emoji">👋</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[--primary-500] dark:text-[--primary-400] mt-2 h-8">
              <span className="border-r-2 border-[--primary-500] pr-1">
                {typedRole}
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto md:mx-0">
              Data analyst & frontend developer with a strong AI foundation and
              passionate about building intelligent and intuitive user
              experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://drive.google.com/file/d/1WQWRQ1vL1fYd1jK2FGxj0RCm4OcYC_9k/view?usp=sharing"
                download
                className="px-6 py-3 bg-[--primary-600] text-white font-semibold rounded-lg shadow-md hover:bg-[--primary-700] transition-transform transform hover:scale-105"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="px-6 py-3 bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200 font-semibold rounded-lg shadow-md hover:bg-slate-300 dark:hover:bg-slate-600 transition-transform transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[--primary-400] to-slate-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
              {/* <img src="https://drive.google.com/file/d/1QzFPiS6jwLYqx4m5CXZ61pUgW1OW8BnK/view?usp=drive_link" alt="HELLLLLLLLLLLLLLLLLL" className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border-4 border-slate-200 dark:border-slate-700"/> */}
              <img
                src="/PIC1.png"
                alt="Garvit Solanki"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border-4 border-slate-200 dark:border-slate-700"
              />
            </div>
          </div>
        </div>
      </AnimateOnScroll>
      <style>{`.wave-emoji{display:inline-block;animation:wave 2.5s infinite;transform-origin:70% 70%}@keyframes wave{0%{transform:rotate(0deg)}10%{transform:rotate(14deg)}20%{transform:rotate(-8deg)}30%{transform:rotate(14deg)}40%{transform:rotate(-4deg)}50%{transform:rotate(10deg)}60%{transform:rotate(0deg)}100%{transform:rotate(0deg)}}`}</style>
    </Section>
  );
};

export default Hero;
