import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 relative pt-20"
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-12">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="z-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#ff2d85] uppercase tracking-[0.4em] text-sm mb-4 font-bold"
          >
            {PERSONAL_INFO.major}
          </motion.p>

          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
            {PERSONAL_INFO.firstName} <br />
            <span className="italic text-[#ff2d85]">
              {PERSONAL_INFO.lastName}
            </span>
          </h1>

          <p className="text-white/60 text-lg max-w-md mb-8 leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-8 py-4 gradient-pink rounded-lg font-bold tracking-widest text-sm uppercase hover:shadow-[0_0_30px_rgba(255,45,133,0.4)] transition-all interactive flex items-center"
            >
              Explore Works
            </a>

            <div className="flex items-center gap-4 ml-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#ff2d85] hover:text-[#ff2d85] transition-all cursor-pointer interactive"
                >
                  <div className="w-4 h-4 bg-current rounded-sm opacity-50" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 border border-[#ff2d85]/20 rounded-2xl rotate-3 -z-10" />
          <div className="absolute inset-0 border border-[#ff2d85]/10 rounded-2xl -rotate-6 -z-10" />

          <div className="w-full h-full bg-[#1a050d] rounded-2xl overflow-hidden glass border border-white/5 group relative">
            <img
              src="/background.jpg"
              alt="Mountain landscape"
              className="w-full h-full object-cover"
            />

            {/* Unsplash Attribution */}
            <div className="absolute bottom-2 right-3 text-[10px] text-white/40">
              Photo by{' '}
              <a
                href="https://unsplash.com/@taguwan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#ff2d85]"
              >
                Cristian Grecu
              </a>{' '}
              on{' '}
              <a
                href="https://unsplash.com/photos/mountain-covered-by-snow-6yBAQeeNROU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#ff2d85]"
              >
                Unsplash
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#ff2d85] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;