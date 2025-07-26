import React from 'react';
import type { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col hover:shadow-xl dark:hover:shadow-[--primary-500]/20">
      <img src={project.image} alt={project.title} className="w-auto h-auto object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map(tech => (
            <span key={tech} className="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-end space-x-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-[--primary-500] dark:hover:text-[--primary-400] transition-colors">
            <GitHubIcon className="h-6 w-6" />
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-[--primary-500] dark:hover:text-[--primary-400] transition-colors">
              <ExternalLinkIcon className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
