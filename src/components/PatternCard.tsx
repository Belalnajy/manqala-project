import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface PatternCardProps {
  src: string;
  label: string;
  hoverLabel?: string; // Optional to maintain backward compatibility
  onClick?: () => void; // Add onClick handler prop
  images?: string[]; // Additional images for the modal
}

const PatternCard = ({ src, label, hoverLabel, onClick }: PatternCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-t-2xl rounded-b-2xl">
        <img
          className={`w-full transition-transform duration-500 ease-out ${isHovered ? 'scale-120' : 'scale-100'} `}
          src={src}
          alt=""
        />
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="relative h-[100px] overflow-hidden">
          {/* Container for both labels with fixed position */}
          <div className="absolute bottom-0 w-full">
            {/* Default label */}
            <div
              className={`backdrop-blur-sm bg-black/40 text-2xl p-[32px] rounded-b-2xl w-full text-center text-white absolute bottom-0 left-0 transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            >
              {label}
            </div>

            {/* Hover label */}
            <div
              className={`backdrop-blur-sm bg-black/40 text-2xl p-[32px] rounded-b-2xl w-full text-center text-white absolute bottom-0 left-0 transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              {hoverLabel || label}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PatternCard;
