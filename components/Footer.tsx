
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 relative border-t border-white/5 bg-[#0a0105]">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-8 text-glow">Let's Connect</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">
            Currently open to new opportunities and collaborations. <br/>"{PERSONAL_INFO.aboutPlaceholder}" for professional inquiries.
          </p>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="text-2xl md:text-4xl text-[#ff2d85] font-serif italic luxury-border py-2 interactive"
          >
            {PERSONAL_INFO.email}
          </a>
        </motion.div>

        <div className="flex justify-center gap-8 mb-16">
          {SOCIAL_LINKS.map(social => (
            <a 
              key={social.name} 
              href={social.url} 
              className="text-xs uppercase tracking-[0.3em] text-white/40 hover:text-[#ff2d85] transition-all interactive"
            >
              {social.name}
            </a>
          ))}
        </div>

        <div className="text-[10px] uppercase tracking-[0.5em] text-white/20">
          © {new Date().getFullYear()} {PERSONAL_INFO.fullName.toUpperCase()} — {PERSONAL_INFO.university.toUpperCase()} EECS — LUXE EDITION
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff2d85]/30 to-transparent" />
    </footer>
  );
};

export default Footer;
