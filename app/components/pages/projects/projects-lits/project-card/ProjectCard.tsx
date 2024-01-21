import { Project } from '@/app/Types/projects'
import Image from 'next/image'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const technologies = project.technologies.map((all) => all.name).join(', ')
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-violet-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={project.thumbnail.url}
          width={380}
          height={200}
          alt={`Thumbnail do projeto ${project.title}`}
          unoptimized
          className="group-hover:scale-110 transition-all w-full h-full duration-500 object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-violet-500 transition-all">
          {project.title}
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          {project.shortDescription}
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          {technologies}
        </span>
      </div>
    </div>
  )
}
