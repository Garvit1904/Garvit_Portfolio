import React from 'react';
import Section from './Section';
import AnimateOnScroll from './AnimateOnScroll';

const About: React.FC = () => {
  return (
    <Section id="about">
      <AnimateOnScroll>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        </div>
        <div className="max-w-4xl mx-auto text-lg text-slate-600 dark:text-slate-300 space-y-6 text-center md:text-left">
          <p>
           I'm a final-year AI & Data Science student skilled in data analytics, frontend development, and machine learning. I work with Python, SQL, and Power BI to analyze data and uncover insights, and use React.js, Tailwind CSS, and JavaScript to build clean, responsive interfaces.  </p>
          <p>
           With hands-on experience in ML and computer vision using tools like TensorFlow and OpenCV, I enjoy solving problems where data meets design. I’m seeking roles in data analytics or frontend development where I can contribute to impactful, user-centric solutions.
 </p>
        </div>
      </AnimateOnScroll>
    </Section>
  );
};

export default About;
