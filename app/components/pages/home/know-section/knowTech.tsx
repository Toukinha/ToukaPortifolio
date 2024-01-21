import CMSIcon from '@/app/components/cms-icon'
import { KnownTech } from '@/app/Types/projects'
import { getRelativeTimeString } from '@/app/ultils/ultils'

type KnowTechProps = {
  tech: KnownTech
}

export default function knowTech({ tech }: KnowTechProps) {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  ).replace('há', '')
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-violet-500 hover:bg-gray-600/30 transition-all">
      <div className=" flex items-center justify-between">
        <p className=" font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>
      <p>{relativeTime} de experiência</p>
    </div>
  )
}
