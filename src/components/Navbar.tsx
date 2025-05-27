import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* <!-- Navigation --> */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 w-full z-50 px-6 py-6 backdrop-blur-xs"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* <!-- Logo --> */}

          {/* <!-- Navigation Menu --> */}
          <div className="hidden md:flex items-center space-x-reverse space-x-5 xl:space-x-20 text-white">
            <button
              onClick={() =>
                window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0 })
              }
              className="luxury-button text-white px-6 py-2 rounded-full font-medium hover-scale"
            >
              تواصل معنا
            </button>
            <a
              href="#about-us"
              className="nav-item hover:text-yellow-200 transition-colors duration-300"
            >
              من نحن
            </a>
            <a
              href="#patterns"
              className="nav-item hover:text-yellow-200 transition-colors duration-300"
            >
              الانماط
            </a>
            <a
              href="#our-service"
              className="nav-item hover:text-yellow-200 transition-colors duration-300"
            >
              خدماتنا
            </a>
            <a
              href="#"
              className="nav-item hover:text-yellow-200 transition-colors duration-300 md:ms-5"
            >
              الرئيسية
            </a>
          </div>
          <div className="text-white text-2xl font-bold tracking-widest">
            <img src="../public/LOGO.png" alt="Logo" />
          </div>
          {/* <!-- Mobile Menu Button --> */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="burger-button text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="flex flex-col items-center space-y-6 py-8">
            <a
              href="#"
              className="nav-item text-white text-xl hover:text-yellow-200 transition-colors duration-300"
            >
              الرئيسية
            </a>
            <a
              href="#our-service"
              className="nav-item text-white text-xl hover:text-yellow-200 transition-colors duration-300"
            >
              خدماتنا
            </a>
            <a
              href="#patterns"
              className="nav-item text-white text-xl hover:text-yellow-200 transition-colors duration-300"
            >
              الانماط
            </a>
            <a
              href="#about-us"
              className="nav-item text-white text-xl hover:text-yellow-200 transition-colors duration-300"
            >
              من نحن
            </a>
            <button
              onClick={() =>
                window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0 })
              }
              className="luxury-button text-white px-6 py-2 rounded-full font-medium hover-scale mt-4"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
