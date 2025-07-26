import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <AnimateOnScroll>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-[--primary-500] dark:text-[--primary-400] mb-12 font-semibold">My Work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </AnimateOnScroll>
    </Section>
  );
};

export default Projects;
