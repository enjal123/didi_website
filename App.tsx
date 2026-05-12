
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-pink-500/30 overflow-x-hidden">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#ff2d85] origin-left z-[100]" 
        style={{ scaleX }} 
      />

      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-[#0a0105] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="text-4xl font-serif text-[#ff2d85] italic"
            >
              {PERSONAL_INFO.firstName}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <AboutMe />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#ff2d85] blur-[150px] opacity-[0.05] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-[#ff2d85] blur-[150px] opacity-[0.05] rounded-full" />
      </div>
    </div>
  );
};

export default App;
