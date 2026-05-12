import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, SKILL_CATEGORIES, PERSONAL_INFO } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Expertise & <br/><span className="text-[#ff2d85]">Aptitude</span></h2>
            <p className="text-white/60 mb-8 leading-relaxed italic">
              "{PERSONAL_INFO.aboutPlaceholder}" add stuff here.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map(tag => (
                <div key={tag} className="glass px-6 py-4 rounded-xl text-center border border-[#ff2d85]/10 text-white/80 hover:border-[#ff2d85]/40 transition-all interactive">
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {SKILLS.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm uppercase tracking-widest text-white/80">
                  <span>{skill.name}</span>
                  <span className="text-[#ff2d85]">{skill.level}%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="h-full bg-gradient-to-r from-[#ff2d85] to-[#ff8aba]"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;