import React from "react";
import Section from "./Section";
import { SKILLS_DATA } from "../constants";
import type { SkillCategory } from "../types";
import AnimateOnScroll from "./AnimateOnScroll";

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-[--primary-500]/20 transition-shadow duration-300 h-full">
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
      {category.title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <span
          key={skill.name}
          className="bg-[--primary-800] text-[--primary-100] dark:bg-[--primary-300]/50 dark:text-[--primary-300] text-sm font-medium px-3 py-1 rounded-full transition-colors duration-100   transition-all hover:bg-[--primary-300] ease-in-out hover:text-[--primary-900] hover:scale-110 hover:shadow-xl hover:-translate-y-1 cursor-pointer duration-900 transition-transform transition-colors"
        >
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <AnimateOnScroll>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Skills
          </h2>
          <p className="text-[--primary-500] dark:text-[--primary-400] mb-12 font-semibold">
            My TechStack
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_DATA.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </AnimateOnScroll>
    </Section>
  );
};

export default Skills;
