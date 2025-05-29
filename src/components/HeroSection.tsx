import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ImageWithSEO from './ImageWithSEO';

const HeroSection = () => {
  const backgroundImages = [
    '..//hero-section/1.png',
    '..//hero-section/2.png',
    '..//hero-section/3.png',
    '..//hero-section/4.png',
    '..//hero-section/5.png',
    '..//hero-section/6.png',
    '..//hero-section/7.png',
    '..//hero-section/8.png',
    '..//hero-section/9.png',
    '..//hero-section/10.png',
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden">
      {backgroundImages.map((image, index) => (
        <motion.div 
          key={index}
          className="absolute top-0 left-0 z-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentImageIndex ? 1 : 0 
          }}
          transition={{ duration: 1.2 }}
        >
          <ImageWithSEO
            className="w-full h-full object-cover"
            src={image}
            alt={`منقلة - صورة خلفية ${index + 1}`}
            width={1920}
            height={1080}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </motion.div>
      ))}
      <div className="gradient-overlay absolute inset-0"></div>

      <div className="relative z-10 px-6 grid md:grid-cols-2 gap-12 justify-between items-center text-center">
        <motion.div
          className="text-white space-y-8 pe-5 ps-6 py-5 rounded-lg backdrop-blur-xs md:backdrop-blur-md  xl:me-60 sm:me-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="space-y-4">
            <motion.h1
              className="text-6xl md:text-7xl font-bold leading-tight text-shadow text-end"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              تفاصيل
              <br />
            </motion.h1>

            <div className="flex justify-end align-center me-12">
              <motion.span
                className="font-medium text-7xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                أنيقة
              </motion.span>
              <motion.span
                className="mt-5 ms-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                ________________
              </motion.span>
            </div>
          </div>

          <motion.p
            className="text-2xl text-gray-200 max-w-lg text-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            تصاميمنا تميز بين الأناقة والعملية لتحويل كل
            <br />
            مساحة إلى ملاذ شخصي يعكس ذوقك وأسلوبك.
          </motion.p>

          <motion.button
            className="luxury-button text-white px-10 py-4 rounded-full text-lg font-medium hover-scale inline-flex items-center space-x-reverse space-x-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <span>اكتشف الآن</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* ... */}
    </section>
  );
};

export default HeroSection;
