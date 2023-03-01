import React from 'react'
import { motion } from 'framer-motion'
import Calendario from 'componentes/Calendario'
import Banner from 'componentes/Banner'


export default function PaginaInicial() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Banner  />
      <Calendario />
    </motion.div>
  )
}
