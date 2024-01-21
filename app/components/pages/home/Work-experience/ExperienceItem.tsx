'use client'

import { motion } from 'framer-motion'
import RichText from '@/app/components/rich-text'
import TechBadge from '@/app/components/TechBadge/TechBadge'
import { WorkExperience } from '@/app/Types/work-experience'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Image from 'next/image'

type ExperienceItemProps = {
  experience: WorkExperience
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const {
    companyLogo,
    companyName,
    companyUrl,
    description,
    endDate,
    role,
    technologies,
  } = experience
  const startDate = new Date(experience.startDate)

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: ptBR })
    : 'O momento'

  const end = endDate ? new Date(endDate) : new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            width={40}
            height={40}
            alt={`${companyName}-logo`}
            src={companyLogo.url}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-violet-500 transition-colors"
          >
            @{companyName}
          </a>
          <h4 className="text-gray-300">{role}</h4>
          <span className="text-gray-500">
            {formattedStartDate} | {formattedEndDate} | {formattedDuration}
          </span>
          <div className="text-gray-400">
            <RichText content={description.raw} />
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {technologies.map((tech, i) => (
            <TechBadge
              name={tech.name}
              key={`experience-${tech.name}-${companyName}`}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
