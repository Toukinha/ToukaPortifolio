'use client'

import { motion } from 'framer-motion'
import { Project } from '@/app/Types/projects'
import Link from 'next/link'
import ProjectCard from './project-card/ProjectCard'

type ProjectsListProps = {
  projects: Project[]
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project, i) => (
        <motion.div
          key={`project.title ${project.title}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  )
}
