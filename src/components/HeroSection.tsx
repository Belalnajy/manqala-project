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
  ];

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
            opacity: index === currentImageIndex ? 1 : 0,
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

      <div className="relative z-10 px-2 grid md:grid-cols-2 gap-12 justify-between items-center text-center">
        <motion.div
          className="text-white mt-30 mb-30 space-y-8 pe-5 ps-6 py-5 rounded-lg backdrop-blur-xs md:backdrop-blur-md  xl:me-60 sm:me-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="space-y-4">
            <motion.h1
              className="text-4xl md:text-4xl font-medium leading-tight text-shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              منقلة للديكور والتشطيب
              <br />
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-200 max-w-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <br />
              متخصصين في تصنيع الاثاث المنزلي واعمال الديكور وتصميم
              <br />
              <br />
              غرف نوم - السفره - المجالس - المطابخ - المكاتب
              <br />
              <br />
              تصميم وتشطيب ديكورات المحلات والكافيهات والفنادق
            </motion.p>
            <motion.h1
              className="text-4xl md:text-4xl font-medium leading-tight text-shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <br />
              نجعل من كل فراغ ذكرى
              <br />
            </motion.h1>
          </div>

          <motion.p
            className="text-2xl text-gray-200 max-w-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            فلسفتنا تعتمد على التميز والبساطة في
            <br />
            التصميم لنجعل من كل فراغ ذكرى
          </motion.p>

          <motion.button
            className="luxury-button text-white px-10 py-4 rounded-full text-lg font-medium hover-scale inline-flex items-center space-x-reverse space-x-3 text-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="me-5">اكتشف الآن</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </motion.button>
          <motion.a
            href="https://wa.me/966595910906"
            className="  border border-primary mx-5  w-56 text-primary px-10 py-4 rounded-full text-lg font-medium hover-scale inline-flex items-center space-x-reverse space-x-3 text-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="me-4">تواصل معنا</span>
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* ... */}
    </section>
  );
};

export default HeroSection;
