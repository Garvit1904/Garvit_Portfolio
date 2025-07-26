import React from 'react';
import Section from './Section';
import { EDUCATION_DATA } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

const Education: React.FC = () => {
  return (
    <Section id="education">
      <AnimateOnScroll>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-[--primary-500] dark:text-[--primary-400] mb-12 font-semibold">My academic background</p>
        </div>
        <div className="max-w-4xl mx-auto relative border-l-4 border-[--primary-200] dark:border-[--primary-800]">
            <div className="ml-10 relative">
              <div className="absolute -left-[48px] top-1.5 w-6 h-6 bg-slate-50 dark:bg-slate-900 border-4 border-[--primary-500] rounded-full" />
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{EDUCATION_DATA.degree}</h3>
                  <span className="text-sm font-medium text-[--primary-500] dark:text-[--primary-400] mt-2 sm:mt-0 sm:ml-4">{EDUCATION_DATA.period}</span>
                </div>
                <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">{EDUCATION_DATA.institution}</p>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Key Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION_DATA.courses.map(course => (
                      <span key={course} className="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>  
            </div>
        </div>
      </AnimateOnScroll>
    </Section>
  );
};

export default Education;
