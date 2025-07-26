// import React, { useState, useEffect, useRef } from 'react';
// import { MoonIcon } from './icons/MoonIcon';
// import { SunIcon } from './icons/SunIcon';

// interface HeaderProps {
//   isDarkMode: boolean;
//   toggleDarkMode: () => void;
// }

// const navLinks = [
//   { href: "#home", label: "Home" },
//   { href: "#about", label: "About" },
//   { href: "#skills", label: "Skills" },
//   { href: "#projects", label: "Projects" },
//   { href: "#experience", label: "Experience" },
//   { href: "#contact", label: "Contact" },
// ];

// const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const headerRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll, { passive: true });

//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) setActiveSection(entry.target.id);
//         });
//       },
//       { rootMargin: '-30% 0px -70% 0px' }
//     );
//     navLinks.forEach(link => {
//       const el = document.querySelector(link.href);
//       if (el) observer.observe(el);
//     });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       navLinks.forEach(link => {
//         const el = document.querySelector(link.href);
//         if (el) observer.unobserve(el);
//       });
//     };
//   }, []);

//   const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     event.preventDefault();
//     const targetId = href.substring(1);
//     const targetElement = document.getElementById(targetId);

//     if (targetElement) {
//       const headerHeight = headerRef.current?.offsetHeight || 72;
//       const elementPosition = targetElement.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.scrollY - headerHeight;
//       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
//       setActiveSection(targetId);
//     }
//     setIsMenuOpen(false);
//   };
  
//   return (
//     <header ref={headerRef} className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
//       <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
//         <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
//           Garvit Solanki
//         </a>
        
//         <div className="hidden md:flex items-center space-x-2">
//           {navLinks.map(link => (
//              <a 
//                 key={link.href} 
//                 href={link.href} 
//                 onClick={(e) => handleNavClick(e, link.href)}
//                 className={`px-3 py-2 rounded-md transition-colors duration-300 font-medium ${activeSection === link.href.substring(1) ? 'text-[--primary-600] dark:text-[--primary-400]' : 'text-slate-600 dark:text-slate-300 hover:text-[--primary-500] dark:hover:text-[--primary-400]'}`}
//              >
//               {link.label}
//             </a>
//           ))}
//         </div>

//         <div className="flex items-center space-x-4">
//           {/* <button onClick={toggleDarkMode} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" aria-label="Toggle dark mode">
//             {isDarkMode ? <SunIcon /> : <MoonIcon />}
//           </button> */}

//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-300" aria-label="Open menu">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-800 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
//         <div className="flex flex-col items-center space-y-2 py-4">
//           {navLinks.map(link => (
//             <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={`w-full text-center py-2 ${activeSection === link.href.substring(1) ? 'text-[--primary-600] dark:text-[--primary-400] font-semibold' : 'text-slate-600 dark:text-slate-300'}`}>
//               {link.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { MoonIcon } from './icons/MoonIcon';
// import { SunIcon } from './icons/SunIcon';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#activities", label: "Activities" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
          Garvit Solanki
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
             <a key={link.href} href={link.href} className="text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-medium">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* <button onClick={toggleDarkMode} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button> */}

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 pb-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
