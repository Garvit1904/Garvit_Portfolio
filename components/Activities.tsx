
import React, { useState } from 'react';
import Section from './Section';
import { ACTIVITIES_DATA } from '../constants';

const Activities: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="activities">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Extracurricular Activities</h2>
        <p className="text-indigo-500 dark:text-indigo-400 mb-12">Achievements and Involvement</p>
      </div>

      <div className="max-w-6xl mx-auto md:grid md:grid-cols-5 md:gap-12 items-start">
        {/* Left Column: List of Activities */}
        <div className="md:col-span-2 flex flex-col gap-4 mb-8 md:mb-0">
          {ACTIVITIES_DATA.map((activity, index) => (
            <div
              key={activity.title}
              onMouseEnter={() => setActiveIndex(index)}
              className={`p-4 rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-white dark:bg-slate-800 border-indigo-500 shadow-lg'
                  : 'bg-slate-50 dark:bg-slate-900 border-transparent hover:bg-white/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <h3 className={`font-bold text-lg mb-1 ${activeIndex === index ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                {activity.title}
              </h3>
              <p className={`text-sm ${activeIndex === index ? 'text-slate-600 dark:text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                {activity.description}
              </p>
               {/* Image for mobile view */}
               <img
                src={activity.image}
                alt={activity.title}
                className="md:hidden mt-4 w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Right Column: Image Display (hidden on mobile) */}
        <div className="hidden md:block md:col-span-3 sticky top-24">
          <div className="relative w-full h-[450px] bg-slate-100 dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden">
            {ACTIVITIES_DATA.map((activity, index) => (
              <img
                key={activity.title}
                src={activity.image}
                alt={activity.title}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Activities;
