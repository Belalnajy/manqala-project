import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { type Project } from './ProjectCard'

interface ProjectModalProps {
  isOpen: boolean
  project: Project | null
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-7xl max-h-[90vh] w-full mx-4 bg-[#1a1a1a] rounded-3xl overflow-hidden border border-[#c9a96e]/20 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 pt-16">
              {/* Project Info */}
              <div className="text-center mb-6">
                <span className="inline-block bg-[#c9a96e] text-black px-4 py-2 rounded-full text-sm font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[#b8b8b8] text-base md:text-lg">
                  {project.description}
                </p>
              </div>

              {/* Before/After Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                {/* Before Image */}
                <div className="relative group">
                  <div className="absolute top-4 right-4 z-10 bg-black/70 text-[#c9a96e] px-3 py-1 rounded-lg text-sm font-bold">
                    قبل
                  </div>
                  <img
                    src={project.beforeImage}
                    alt={`${project.title} - قبل`}
                    className="w-full h-auto max-h-[40vh] md:max-h-[50vh] object-cover rounded-2xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE4NVYxMzVIMTc1VjEyNVoiIGZpbGw9IiM2QjcyODAiLz4KPHA+dGggZD0iTTE5NSAxMjVIMjI1VjEzNUgxOTVWMTI1WiIgZmlsbD0iIzZCNzI4MCIvPgo8L3N2Zz4K'
                    }}
                  />
                </div>

                {/* After Image */}
                <div className="relative group">
                  <div className="absolute top-4 right-4 z-10 bg-black/70 text-[#c9a96e] px-3 py-1 rounded-lg text-sm font-bold">
                    بعد
                  </div>
                  <img
                    src={project.afterImage}
                    alt={`${project.title} - بعد`}
                    className="w-full h-auto max-h-[40vh] md:max-h-[50vh] object-cover rounded-2xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE4NVYxMzVIMTc1VjEyNVoiIGZpbGw9IiM2QjcyODAiLz4KPHA+dGggZD0iTTE5NSAxMjVIMjI1VjEzNUgxOTVWMTI1WiIgZmlsbD0iIzZCNzI4MCIvPgo8L3N2Zz4K'
                    }}
                  />
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-lg md:text-xl font-bold text-[#c9a96e] mb-4">مميزات المشروع:</h4>
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-[#c9a96e] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-[#b8b8b8] leading-relaxed text-sm md:text-base">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
