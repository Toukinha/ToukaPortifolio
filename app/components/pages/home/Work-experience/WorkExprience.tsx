import SectionTitle from '@/app/components/section-title/SectionTitle'
import { WorkExperience as IWorkExperience } from '@/app/Types/work-experience'
import ExperienceItem from './ExperienceItem'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export default function WorkExprience({ experiences }: WorkExperienceProps) {
  return (
    <section className="container py-16 flex lg:gap-16 md:gap-4 gap-10 md:flex-row flex-col">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="experiências" title="Experiência Proficional" />
        <p className="text-gray-400 mt-6">
          Estou disposto a encarar novos desafios e projetos inspiradores. Vamos
          trabalhar em conjunto para criar soluções surpreendentes para sua
          empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  )
}
