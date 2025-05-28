import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  // WhatsApp phone number - replace with your actual number
  const whatsappNumber = '966500000000'; // Example Saudi number format
  const whatsappMessage = 'مرحبا! أود الاستفسار عن خدماتكم'; // Pre-filled message

  // Generate WhatsApp URL with number and message
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Scroll animation hooks for each section
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [hoursRef, hoursInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [logoRef, logoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#201F1F] text-white py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            {/* Column 1: Contact Information */}
            <div 
              ref={contactRef}
              className={`text-right transform transition-all duration-700 ${contactInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-xl font-bold text-primary mb-4 font-['Tajawal'] tracking-wide">تواصل معنا</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-end gap-2">
                  <p className="group-hover:text-primary transition-colors duration-300">الرياض، الملقا، برنسيس تاور</p>
                  <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/40 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2">
                  <p dir="ltr">+966 59 294 0715</p>
                  <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/40 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2">
                  <p dir="ltr">0112113300</p>
                  <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/40 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2">
                  <p className="group-hover:text-primary transition-colors duration-300">info@manqla.com</p>
                  <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/40 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Services */}
            <div 
              ref={servicesRef}
              className={`text-right transform transition-all duration-700 delay-200 ${servicesInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-2xl font-bold text-primary mb-4 font-['Tajawal'] tracking-wide">اعمال التصميم</h3>
              <div className="space-y-3 text-lg flex flex-col">
                <a href="#our-service" className="hover:text-primary hover:translate-x-[-5px] transition-all duration-300 cursor-pointer">خدماتنا</a>
                <a href="#about-us" className="hover:text-primary hover:translate-x-[-5px] transition-all duration-300 cursor-pointer">نبذة عنا</a>
                <a href="#contact" className="hover:text-primary hover:translate-x-[-5px] transition-all duration-300 cursor-pointer">تواصل معنا</a>
              </div>
            </div>

            {/* Column 3: Working Hours and Logo */}
            <div 
              ref={hoursRef}
              className={`text-right transform transition-all duration-700 delay-300 ${hoursInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-2xl font-bold text-primary mb-4 font-['Tajawal'] tracking-wide">:ساعات العمل</h3>
              <p className="mb-2 text-lg hover:text-primary transition-colors duration-300">من الاحد الى الخميس</p>
              <p className="mb-4 text-lg hover:text-primary transition-colors duration-300">9 صباحا - 4 مساءً</p>
            </div>

            <div 
              ref={logoRef}
              className={`flex flex-col justify-center items-end md:items-center ms-20 transform transition-all duration-700 delay-400 ${logoInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex justify-end items-center">
                <div className="text-center flex flex-col justify-center items-end md:justify-end md:items-center">
                  <img className="w-[200px] mb-6 hover:scale-105 transition-transform duration-300" src="..//footer/LOGO.png" alt="Manqala Logo" />
                  <p className="text-sm text font-['Tajawal']">منقلة - علامة تجارية . إحدى مؤسسات زاكر</p>
                  <p className="text-sm font-['Tajawal']">بلدي التجارية</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-4">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} size="2x" className="text-primary hover:text-primary/80 transition-all duration-300 hover:bg-primary/20 p-2 rounded-full" />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-primary hover:text-primary/80 transition-all duration-300 hover:bg-primary/20 p-2 rounded-full" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-[1px] border-primary my-8"></div>
          
          {/* Copyright Section */}
          <div className="text-center text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
            <p>© {new Date().getFullYear()} منقلة. جميع الحقوق محفوظة</p>
          </div>
          
          {/* Scroll to top button */}
          <button 
            onClick={scrollToTop}
            className="absolute bottom-10 right-10 bg-primary/20 hover:bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-primary text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 z-50 flex items-center justify-center animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </>
  );
};

export default Footer;
