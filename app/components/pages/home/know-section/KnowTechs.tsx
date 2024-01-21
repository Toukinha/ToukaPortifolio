'use client'

import { KnownTech } from '@/app/Types/projects'
import { motion } from 'framer-motion'
import SectionTitle from '../../../section-title/SectionTitle'
import KnowTech from './knowTech'

type KnowTechsProps = {
  techs: KnownTech[]
}

export default function KnowTechs({ techs }: KnowTechsProps) {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech, i) => (
          <motion.div
            key={`coiso-${tech.name}`}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.2 }}
          >
            <KnowTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
