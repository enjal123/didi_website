import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-[#0a0105]">
      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              A Bit <br />
              <span className="text-[#ff2d85] italic">About Me</span>
            </h2>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
              <p>{PERSONAL_INFO.aboutFull}</p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="border-l border-[#ff2d85]/30 pl-4">
                  <span className="block text-[#ff2d85] font-bold text-sm uppercase tracking-widest mb-1">
                    Education
                  </span>
                  <span className="text-white text-sm">UC Berkeley, EECS</span>
                </div>

                <div className="border-l border-[#ff2d85]/30 pl-4">
                  <span className="block text-[#ff2d85] font-bold text-sm uppercase tracking-widest mb-1">
                    Location
                  </span>
                  <span className="text-white text-sm">Berkeley, CA</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative group w-full max-w-sm aspect-[4/5]">
              <div className="absolute inset-0 border border-[#ff2d85]/20 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
              <div className="absolute inset-0 border border-[#ff2d85]/10 rounded-3xl rotate-6 group-hover:rotate-0 transition-transform duration-500" />

              <div className="w-full h-full glass rounded-3xl overflow-hidden border border-white/5">
                <img
                  src="/didi.png"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;