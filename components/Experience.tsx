
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">The Journey</h2>
          <div className="w-24 h-1 bg-[#ff2d85] mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex gap-8 group"
            >
              <div className="hidden md:block w-1/4 text-right">
                <span className="text-3xl font-serif text-[#ff2d85] opacity-40 group-hover:opacity-100 transition-opacity">{exp.year}</span>
              </div>
              <div className="flex-1 glass p-8 rounded-2xl group-hover:border-[#ff2d85]/40 transition-all border border-white/5 relative">
                <div className="md:hidden text-[#ff2d85] font-bold mb-2">{exp.year}</div>
                <h3 className="text-xl font-bold mb-1 text-white">{exp.role}</h3>
                <p className="text-[#ff2d85] text-sm mb-4 uppercase tracking-widest">{exp.company}</p>
                <p className="text-white/60 leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
