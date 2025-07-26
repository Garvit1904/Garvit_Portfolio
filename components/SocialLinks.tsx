import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

const SocialLinks: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col items-center fixed top-1/2 -translate-y-1/2 left-0 z-30">
      <AnimateOnScroll className="transition-all duration-500 delay-500">
        <div className="flex flex-col gap-2 bg-white/50 dark:bg-slate-800/50 p-2 rounded-r-lg backdrop-blur-sm">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="p-2 text-slate-500 dark:text-slate-400 rounded-full hover:bg-[--primary-100] dark:hover:bg-[--primary-900]/50 hover:text-[--primary-600] dark:hover:text-[--primary-300] transition-all duration-300 transform hover:scale-110"
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default SocialLinks;
