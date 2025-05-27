import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const DiscoverSection = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-100px 0px"
  })

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      } 
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      } 
    }
  }

  // Different animation variants for each image
  const imageVariants = [
    // Image 1 - from top
    {
      hidden: { opacity: 0, y: -50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] } 
      }
    },
    // Image 2 - from right
    {
      hidden: { opacity: 0, x: 70 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.9, ease: [0.34, 1.56, 0.64, 1] } 
      }
    },
    // Image 3 - from left
    {
      hidden: { opacity: 0, x: -70 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.9, ease: [0.34, 1.56, 0.64, 1] } 
      }
    },
    // Image 4 - from bottom
    {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] } 
      }
    },
    // Image 5 - scale up
    {
      hidden: { opacity: 0, scale: 0.7 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.9, ease: [0.34, 1.56, 0.64, 1] } 
      }
    },
    // Image 6 - rotate and scale
    {
      hidden: { opacity: 0, scale: 0.8, rotate: -5 },
      visible: { 
        opacity: 1, 
        scale: 1,
        rotate: 0,
        transition: { duration: 0.9, ease: [0.34, 1.56, 0.64, 1] } 
      }
    },
    // Image 7 - diagonal
    {
      hidden: { opacity: 0, x: -40, y: 40 },
      visible: { 
        opacity: 1, 
        x: 0,
        y: 0,
        transition: { duration: 0.9, ease: [0.34, 1.56, 0.64, 1] } 
      }
    }
  ]

  return (
    <>
      <section className="discover-section bg-[linear-gradient(180deg,_#090909_0%,_#201F1F_100%)]">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h1 className="text-center text-4xl text-primary font-extrabold py-10 backdrop-grayscale-50">
            اكتشف عالم الفخامه
            <div className="bg-primary h-[1px] w-1/12 mt-4 mx-auto"></div>
          </h1>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1500px] mx-auto p-10 pb-20"
          ref={sectionRef}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.img 
            className="w-full h-full rounded-lg shadow-lg" 
            src="/discover-section/1.png" 
            alt="Luxury design" 
            variants={imageVariants[0]}
          />
          <motion.img 
            className="w-full h-full row-span-2 rounded-lg shadow-lg" 
            src="/discover-section/3.png" 
            alt="Luxury design" 
            variants={imageVariants[1]}
          />
          <motion.img 
            className="w-full h-full row-span-2 rounded-lg shadow-lg" 
            src="/discover-section/2.png" 
            alt="Luxury design" 
            variants={imageVariants[2]}
          />
          <motion.img 
            className="w-full h-full rounded-lg shadow-lg" 
            src="/discover-section/4.png" 
            alt="Luxury design" 
            variants={imageVariants[3]}
          />
          <motion.img 
            className="w-full h-[300px] rounded-lg shadow-lg" 
            src="/discover-section/5.png" 
            alt="Luxury design" 
            variants={imageVariants[4]}
          />
          <motion.img 
            className="w-full h-[300px] rounded-lg shadow-lg" 
            src="/discover-section/6.png" 
            alt="Luxury design" 
            variants={imageVariants[5]}
          />
          <motion.img 
            className="w-full h-[300px] rounded-lg shadow-lg" 
            src="/discover-section/7.png" 
            alt="Luxury design" 
            variants={imageVariants[6]}
          />
        </motion.div>
      </section>
    </>
  )
}

export default DiscoverSection
