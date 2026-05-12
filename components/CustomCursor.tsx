
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<{ x: number, y: number, id: number }[]>([]);
  const countRef = useRef(0);

  // Snappier spring configuration to reduce delay
  const springConfig = { damping: 35, stiffness: 600, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorX.set(clientX - 16); // Centering the 32px ring (w-8/h-8)
      cursorY.set(clientY - 16);

      // Add to trail with unique IDs
      countRef.current += 1;
      const newPoint = { x: clientX, y: clientY, id: countRef.current };
      
      setTrail(prev => {
        const next = [...prev, newPoint];
        if (next.length > 10) return next.slice(1);
        return next;
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button, a, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Particle Trail */}
      {trail.map((point) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 pointer-events-none z-[99]"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            x: point.x,
            y: point.y,
            width: 4,
            height: 4,
            backgroundColor: '#ff2d85',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* Main Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#ff2d85] pointer-events-none z-[100] flex items-center justify-center"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          scale: isHovering ? 2.2 : 1,
          backgroundColor: isHovering ? 'rgba(255, 45, 133, 0.15)' : 'transparent',
        }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-[#ff2d85] rounded-full shadow-[0_0_10px_#ff2d85]"
          animate={{
            scale: isHovering ? 0.4 : 1
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
