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
import SEO from './components/SEO';
import StructuredData from './components/StructuredData';
import BreadcrumbSEO from './components/BreadcrumbSEO';
import FAQSEO from './components/FAQSEO';
function App() {
  return (
    <>
      <SEO />
      <StructuredData
        type="Organization"
        data={{
          name: 'منقلة',
          url: 'https://manqla.com',
          logo: '/protractor.svg',
          description: 'شركة منقلة المتخصصة في تقديم حلول هندسية مبتكرة وتصاميم إبداعية',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+966-XXXXXXXX',
            contactType: 'customer service'
          }
        }}
      />
      <BreadcrumbSEO
        items={[
          { name: 'الرئيسية', url: 'https://manqala.com/' },
          { name: 'من نحن', url: 'https://manqala.com/#about-us' },
          { name: 'مشاريعنا', url: 'https://manqala.com/#projects' },
          { name: 'خدماتنا', url: 'https://manqala.com/#services' },
          { name: 'اتصل بنا', url: 'https://manqala.com/#contact' }
        ]}
      />
      <FAQSEO
        items={[
          {
            question: 'ما هي خدمات منقلة؟',
            answer: 'نقدم خدمات تصميم داخلي، خارجي، وتصميم مناظر طبيعية (Landscape) بلمسة فنية عصرية.'
          },
          {
            question: 'كيف يمكنني التواصل مع منقلة؟',
            answer: 'يمكنك التواصل معنا من خلال نموذج الاتصال في موقعنا أو من خلال الهاتف أو البريد الإلكتروني.'
          },
          {
            question: 'ما هي مراحل العمل في مشروع التصميم؟',
            answer: 'تشمل مراحل العمل: الاستشارة الأولية، وضع التصور والمخطط، التصميم المبدئي، التصميم النهائي، ومرحلة التنفيذ.'
          },
          {
            question: 'هل تقدمون خدمات خارج المملكة؟',
            answer: 'نعم، نقدم خدماتنا داخل وخارج المملكة العربية السعودية مع مراعاة الظروف الخاصة بكل مشروع.'
          }
        ]}
      />
      <StructuredData
        type="WebSite"
        data={{
          name: 'منقلة - حلول هندسية مبتكرة',
          url: 'https://manqla.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://manqla.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }}
      />
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
