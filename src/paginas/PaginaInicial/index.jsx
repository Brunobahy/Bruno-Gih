import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Calendario from 'componentes/Calendario'
import Banner from 'componentes/Banner'
import { useLocation } from 'react-router-dom'


export default function PaginaInicial({ funcao }) {
  let local = useLocation().pathname

  useEffect(() => {
    funcao(local)
  }, [])

  return (
    <motion.div
      key={'calendario'}
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100vw' }}
    >
      <Banner texto='Bruno e Gih' />

      <Calendario />
    </motion.div>
  )
}
