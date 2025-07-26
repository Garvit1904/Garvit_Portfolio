import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <AnimateOnScroll>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-[--primary-500] dark:text-[--primary-400] mb-12 font-semibold">My professional journey so far</p>
        </div>
        <div className="max-w-4xl mx-auto relative border-l-4 border-[--primary-200] dark:border-[--primary-800]">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="mb-12 ml-10 relative">
              <div className="absolute -left-[48px] top-1.5 w-6 h-6 bg-slate-50 dark:bg-slate-900 border-4 border-[--primary-500] rounded-full" />
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <span className="text-sm font-medium text-[--primary-500] dark:text-[--primary-400] whitespace-nowrap mt-2 sm:mt-0 sm:ml-4">{exp.period}</span>
                </div>
                <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">{exp.company}</p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                  {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </Section>
  );
};

export default Experience;
