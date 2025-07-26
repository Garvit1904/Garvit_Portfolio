import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-6 md:px-12 py-6 text-center text-slate-500 dark:text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
          {SOCIAL_LINKS.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-[--primary-500] dark:hover:text-[--primary-400] transition-colors">
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Garvit Solanki. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
