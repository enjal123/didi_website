import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0d0206]">
      <div className="container mx-auto">
        
        {/* Only this header section is moved to the right using max-w and px */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif">Selected Creations</h2>
          </motion.div>
          
          <motion.p 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-white/40 max-w-sm"
          >
            A collection of engineering projects focused on precision and elegance.
          </motion.p>
        </div>

        {/* The Grid stays at the original full container width */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl aspect-[16/10] bg-[#1a050d] border border-white/5 interactive"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0105] to-transparent z-10 opacity-60" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#ff2d85" strokeWidth="0.5">
                   <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                   <circle cx="8.5" cy="8.5" r="1.5" />
                   <polyline points="21 15 16 10 5 21" />
                 </svg>
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <span className="text-[#ff2d85] text-xs uppercase tracking-[0.3em] font-bold mb-2">
                  {proj.category}
                </span>
                <h3 className="text-3xl font-serif mb-2">{proj.title}</h3>
                <p className="text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {proj.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;