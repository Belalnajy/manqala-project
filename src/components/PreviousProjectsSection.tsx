import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ProjectCard, { type Project } from './ProjectCard'
import ProjectModal from './ProjectModal'
import ProjectNavigation from './ProjectNavigation'
import { projects } from '../data/projectsData'

const PreviousProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalProject, setModalProject] = useState<Project | null>(null)
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentProject((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      }
    })
  }

  const openModal = (project: Project) => {
    setModalProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalProject(null)
  }

  return (
    <section id="previous-projects" className="py-20 bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-black" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#c9a96e] mb-4">
            مشاريع سابقة
          </h2>
          <div className="w-32 h-1 bg-[#c9a96e] mx-auto mb-6"></div>
          <p className="text-[#b8b8b8] text-lg max-w-3xl mx-auto leading-relaxed">
            نفخر في الرياض بتنفيذ مشاريع متكاملة تبدأ من التصور والتصميم لكافة الأعمال، ووصولاً إلى
            التسليم النهائي بجودة عالية، يفضل فريق يجمع بين الإبداع والخبرة والدقة
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative min-h-[800px] sm:min-h-[900px] md:h-[700px] overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentProject}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <ProjectCard project={projects[currentProject]} onViewDetails={openModal} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            className="md:block hidden absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#c9a96e]/20 hover:bg-[#c9a96e]/40 text-[#c9a96e] border border-[#c9a96e]/30 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            onClick={() => paginate(-1)}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          <button
            className="md:block hidden absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#c9a96e]/20 hover:bg-[#c9a96e]/40 text-[#c9a96e] border border-[#c9a96e]/30 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            onClick={() => paginate(1)}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <ProjectNavigation
            currentProject={currentProject}
            totalProjects={projects.length}
            onNext={() => paginate(1)}
            onPrevious={() => paginate(-1)}
          />
        </div>

        {/* Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          project={modalProject}
          onClose={closeModal}
        />
      </div>
    </section>
  )
}

export default PreviousProjectsSection
