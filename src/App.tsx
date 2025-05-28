import './App.css';
import './styles/fonts.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SliderSection from './components/SliderSection';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import PatternSection from './components/PatternSection';
import Projects from './components/Projects';
import OurService from './components/OurService';
import DiscoverSection from './components/DiscoverSection';
import TestimonialSection from './components/TestimonialSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SliderSection />
      <About />
      <PatternSection />

      <Projects />
      <OurService />

      <section className="manqla-section hidden sm:hidden md:hidden lg:hidden xl:block bg-black relative h-[100vh]">
        <img src="/manqla-section/Group-1.png" alt="" />
        <img className="w-full" src="/manqla-section/Group.png" alt="" />
        <img className="absolute bottom-0 right-0" src="/manqla-section/Group-2.png" alt="" />
        <div className="absolute inset-x-[35%] top-72 md:inset-x-[45%] md:top-72 w-32 h-32 border border-yellow-300  floating-animation">
          <img src="/manqla-section/floating.png" alt="" />
        </div>
        <div className="absolute left-[35%] bottom-74 md:bottom-1/4 md:left-1/8 w-32 h-32 border border-yellow-300  floating-animation">
          <img src="/manqla-section/floating2.png" alt="" />
        </div>
        <div className="absolute right-[35%] bottom-22 md:bottom-1/4 md:right-1/4 w-32 h-32 border border-yellow-300  floating-animation">
          <img src="/manqla-section/floating3.png" alt="" />
        </div>
      </section>
      <DiscoverSection />
      <TestimonialSection />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
