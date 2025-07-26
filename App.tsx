import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import SocialLinks from './components/SocialLinks';
import ThemeSwitcher from './components/ThemeSwitcher';
import { THEMES } from './constants';
import Activities from './components/Activities';

function App(): React.ReactNode {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Default to light theme unless 'dark' is explicitly saved in localStorage.
    return localStorage.getItem('theme') === 'dark';
  });

  const [themeIndex, setThemeIndex] = useState(() => {
    return parseInt(localStorage.getItem('colorThemeIndex') || '0', 10);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const currentTheme = THEMES[themeIndex];
    Object.keys(currentTheme).forEach(key => {
      if(key !== 'name') {
        document.documentElement.style.setProperty(`--primary-${key}`, currentTheme[key]);
      }
    });
    localStorage.setItem('colorThemeIndex', themeIndex.toString());
  }, [themeIndex]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const cycleTheme = () => setThemeIndex(prev => (prev + 1) % THEMES.length);

  return (
    <div className="transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <SocialLinks />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
        <ThemeSwitcher cycleTheme={cycleTheme} />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Education from './components/Education';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Activities from './components/Activities';

// function App(): React.ReactNode {
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     if (typeof window !== 'undefined' && window.localStorage) {
//       const storedTheme = window.localStorage.getItem('theme');
//       return storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
//     }
//     return true; // Default to dark mode
//   });

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   return (
//     <div className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
//       <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
//       <main className="container mx-auto px-6 md:px-12">
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Experience />
//         <Education />
//         <Activities />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
