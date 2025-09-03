import React from 'react'
import { motion } from 'framer-motion'
import { EyeIcon } from '@heroicons/react/24/outline'

interface Project {
  id: number
  title: string
  category: string
  description: string
  beforeImage: string
  afterImage: string
  features: string[]
}

interface ProjectCardProps {
  project: Project
  onViewDetails: (project: Project) => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] rounded-3xl overflow-hidden border border-[#c9a96e]/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Images Section */}
        <div className="relative h-full">
          <div className="grid grid-cols-2 h-full gap-1">
            {/* Before Image */}
            <div className="relative group overflow-hidden">
              <img
                src={project.beforeImage}
                alt={`${project.title} - قبل`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE4NVYxMzVIMTc1VjEyNVoiIGZpbGw9IiM2QjcyODAiLz4KPHA+dGggZD0iTTE5NSAxMjVIMjI1VjEzNUgxOTVWMTI1WiIgZmlsbD0iIzZCNzI4MCIvPgo8L3N2Zz4K'
                }}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-[#c9a96e] font-bold text-lg bg-black/70 border border-[#c9a96e]/30 px-4 py-2 rounded-lg">
                  قبل
                </span>
              </div>
            </div>
            
            {/* After Image */}
            <div className="relative group overflow-hidden">
              <img
                src={project.afterImage}
                alt={`${project.title} - بعد`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE4NVYxMzVIMTc1VjEyNVoiIGZpbGw9IiM2QjcyODAiLz4KPHA+dGggZD0iTTE5NSAxMjVIMjI1VjEzNUgxOTVWMTI1WiIgZmlsbD0iIzZCNzI4MCIvPgo8L3N2Zz4K'
                }}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-[#c9a96e] font-bold text-lg bg-black/70 border border-[#c9a96e]/30 px-4 py-2 rounded-lg">
                  بعد
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-[#c9a96e] text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {project.category}
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-[#b8b8b8] text-lg leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-[#c9a96e] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#b8b8b8] leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>

            {/* View Details Button */}
            <motion.button
              onClick={() => onViewDetails(project)}
              className="mt-6 flex items-center gap-2 bg-[#c9a96e] hover:bg-[#b8956a] text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <EyeIcon className="w-5 h-5" />
              عرض التفاصيل كاملة
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
export type { Project, ProjectCardProps }
