import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Projects = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })
  
  const [swiperRef, swiperInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  }

  const swiperVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } 
    }
  }

  const images = [
        '/newprojects1.png',
        '/newprojects2.png',
        '/newprojects3.png',
        '/newprojects1.png',
        '/newprojects2.png',
        '/newprojects3.png',
      ];
  return (
    <>
            <section className="bg-black pb-20">
        <motion.div 
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h1 className="text-center text-4xl text-primary font-extrabold py-10 backdrop-grayscale-50 ">
            احدث مشارعنا <div className="bg-primary h-[1px] w-1/12 mt-4 mx-auto"></div>
          </h1>
        </motion.div>
        <motion.div 
          className="flex justify-center"
          ref={swiperRef}
          initial="hidden"
          animate={swiperInView ? "visible" : "hidden"}
          variants={swiperVariants}
        >
          <div className="w-[100%] ">
            <Swiper
              modules={[EffectCoverflow, Autoplay]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={false}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: true,
              }}
              initialSlide={3}
              spaceBetween={20}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
            >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <img src={src} alt={`Slide ${i}`} className="rounded-xl shadow-xl w-[100%]" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Projects
