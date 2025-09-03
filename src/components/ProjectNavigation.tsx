import React from 'react'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ProjectNavigationProps {
  currentProject: number
  totalProjects: number
  onNext: () => void
  onPrevious: () => void
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  currentProject,
  totalProjects,
  onNext,
  onPrevious
}) => {
  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      {/* Progress Bar */}
      <div className="relative w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#c9a96e] to-[#d4af7a] rounded-full"
          initial={{ width: 0 }}
          animate={{ 
            width: `${((currentProject + 1) / totalProjects) * 100}%` 
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      {/* Project Info */}
      <div className="hidden md:flex items-center justify-center space-x-8 space-x-reverse text-2xl">
        {/* Previous Button */}
        <button
          onClick={onNext}
          disabled={currentProject === totalProjects - 1}
          className="group flex items-center space-x-2 space-x-reverse text-[#c9a96e] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          
        >
          <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium">التالي</span>
        </button>
        
        {/* Next Button */}
        <button
          onClick={onPrevious}
          className="group flex items-center space-x-2 space-x-reverse text-[#c9a96e] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentProject === 0}
        >
          <span className="text-sm font-medium">السابق</span>
          <ChevronLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  )
}

export default ProjectNavigation
