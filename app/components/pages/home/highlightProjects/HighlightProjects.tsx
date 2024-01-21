import HorizontalDivider from '@/app/components/divider/HorizontalDivider'
import Link from '@/app/components/Link/Link'
import SectionTitle from '@/app/components/section-title/SectionTitle'
import { Project } from '@/app/Types/projects'
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import ProjectCard from './projectCard/ProjectCard'

type HighlightProjectsProps = {
  projects: Project[]
}

export default function HighlightProjects({
  projects,
}: HighlightProjectsProps) {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaques" />
      <HorizontalDivider className="mb-16" />
      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider />
          </div>
        ))}

        <p className=" flex items-center gap-1.5 ">
          <span className="text-gray-400"> Se interessou ?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
