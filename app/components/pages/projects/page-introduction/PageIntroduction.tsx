'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import Link from '../../../Link/Link'
import SectionTitle from '../../../section-title/SectionTitle'

export default function PageIntroduction() {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        className="text-center items-center [&>h3]:text-4xl"
        subtitle="projetos"
        title="Meus Projetos"
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Sinta-se à vontade para explorar alguns dos trabalhos que desenvolvi.
          Navegue livremente pelos projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  )
}
