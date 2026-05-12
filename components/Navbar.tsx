
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Experience', id: 'experience' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass m-4 rounded-full"
    >
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-xl font-serif text-[#ff2d85] font-bold tracking-widest cursor-pointer interactive"
      >
        {PERSONAL_INFO.firstName.toUpperCase()}<span className="text-white opacity-50 ml-1">.</span>
      </div>
      
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleNavClick(e, link.id)}
            className="text-sm uppercase tracking-widest text-white/70 hover:text-[#ff2d85] transition-colors luxury-border pb-1 interactive"
          >
            {link.name}
          </a>
        ))}
      </div>

      <button className="px-6 py-2 rounded-full border border-[#ff2d85]/40 text-[#ff2d85] text-xs uppercase tracking-widest hover:bg-[#ff2d85] hover:text-white transition-all duration-300 interactive">
        Resume
      </button>
    </motion.nav>
  );
};

export default Navbar;
