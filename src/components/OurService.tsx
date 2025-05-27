import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { motion } from "framer-motion"

import { useInView } from "react-intersection-observer"

const OurService = () => {
  // Animation refs and states
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px 0px"
  })
  
  const [firstSectionRef, firstSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: "-100px 0px"
  })
  
  const [secondSectionRef, secondSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: "-100px 0px"
  })

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.9, 
        ease: [0.25, 0.1, 0.25, 1.0],  // Cubic bezier curve for smooth easing
        when: "beforeChildren"
      } 
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1.2,
        staggerChildren: 0.4,
        delayChildren: 0.1,
        ease: [0.25, 0.1, 0.25, 1.0]  // Cubic bezier curve for smooth easing
      } 
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: -40, scale: 0.98 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.34, 1.56, 0.64, 1],  // Custom spring-like easing
        opacity: { duration: 1.0 }
      } 
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.34, 1.56, 0.64, 1],  // Custom spring-like easing
        opacity: { duration: 1.0 }
      } 
    }
  }

  const gardens = [
        '../public/gardens1.png',
        '../public/gardens2.png',
        '../public/gardens1.png',
        '../public/gardens2.png',
      ];
      const outsideimages = [
        '../public/outside1.png',
        '../public/outside2.png',
        '../public/outside1.png',
        '../public/outside2.png',
      ];
  return (
    <>
            <section id="our-service" className="our-services">
        <div className="bg-gradient-to-l from-black/80 to-black/60">
          {/* العنوان */}
          <motion.div
            ref={titleRef}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            <h1 className="text-center text-3xl md:text-4xl text-primary font-extrabold py-10">
              خدماتنا
              <div className="bg-primary h-[2px] w-24 mt-4 mx-auto"></div>
            </h1>
          </motion.div>

          {/* القسم الرئيسي */}
          <motion.section 
            className="relative text-white py-12 px-4 md:px-16"
            ref={firstSectionRef}
            initial="hidden"
            animate={firstSectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              {/* النص */}
              <motion.div 
                className="text-center order-1 md:order-2"
                variants={textVariants}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary">تنسيق حدائق</h2>
                <br />
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  نخلق مساحات خارجية تنبض بالهدوء والجمال، <br /> توتنسجم مع محيطها.
                </p>
              </motion.div>

              {/* السلايدر */}
              <motion.div 
                className="order-2 md:order-1 w-full"
                variants={imageVariants}
              >
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  spaceBetween={35}
                  centeredSlides={true}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: true,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 1.5 },
                    1280: { slidesPerView: 2 },
                  }}
                  className="rounded-xl "
                >
                  {gardens.map((src, index) => (
                    <SwiperSlide key={index} className="mb-20">
                      <div className="border border-primary p-2 rounded-2xl h-[600px] md:h-[600px] lg:h-[600px] xl:[630px] relative "></div>
                      <img
                        src={src}
                        alt={`Garden ${index + 1}`}
                        className="shadow-lg object-cover h-[600px] md:h-[600px] w-full rounded-2xl  absolute top-0 right-0 xl:top-4 xl:right-2 "
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </div>
          </motion.section>
          {/* القسم الرئيسي */}
          <motion.section 
            className="relative text-white py-12 px-4 md:px-16"
            ref={secondSectionRef}
            initial="hidden"
            animate={secondSectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              {/* النص */}
              <motion.div 
                className="text-center order-1 md:order-1"
                variants={textVariants}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary"> تصميم خارجي</h2>
                <br />
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  نصمّم الواجهة الخارجية لتعكس فخامة المكان <br /> وتترك انطباعاً لا يُنسى{' '}
                </p>
              </motion.div>

              {/* السلايدر */}
              <motion.div 
                className="order-1 md:order-2 w-full"
                variants={imageVariants}
              >
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  spaceBetween={35}
                  centeredSlides={true}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: true,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 1.5 },
                    1280: { slidesPerView: 2 },
                  }}
                  className="rounded-xl "
                >
                  {outsideimages.map((src, index) => (
                    <SwiperSlide key={index} className="mb-20">
                      <div className="border border-primary p-2 rounded-2xl h-[600px] md:h-[600px] lg:h-[600px] xl:[630px] relative "></div>
                      <img
                        src={src}
                        alt={`Garden ${index + 1}`}
                        className="shadow-lg object-cover h-[600px] md:h-[600px] w-full rounded-2xl  absolute top-0 right-0 xl:top-4 xl:right-2 "
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>
    </>
  )
}

export default OurService
