<<<<<<< HEAD
import React from 'react'
import { motion } from 'framer-motion'
import styles from './Historias.module.css'
import Banner from 'componentes/Banner'
import CardHistoria from 'componentes/CardHistoria'

export default function Historias({lista}) {



    return (
        <motion.div
            initial={{ x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            key={'historias'}
            exit={{ x: '100vw' }}
        >
            <Banner texto='Histórias' />

            <ul className={styles.lista}>
                {lista.map((item, index) =>
                    <CardHistoria key={index} titulo={item.TituloHistoria} texto={item.Historia} />)
                }
            </ul>
        </motion.div>
    )
}
=======
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Historias.module.css'
import Banner from 'componentes/Banner'
import historias from 'json/historias'
import CardHistoria from 'componentes/CardHistoria'
import { useLocation } from 'react-router-dom'

export default function Historias({ funcao }) {

    let local = useLocation().pathname

    useEffect(() => {
        funcao(local)
    }, [])

    return (
        <motion.div
            initial={{ x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            key={'historias'}
            exit={{ x: '100vw' }}
        >
            <Banner texto='Histórias' />

            <ul className={styles.lista}>
                {historias.map((historia, index) =>
                    <CardHistoria key={index} titulo={historia.titulo} texto={historia.texto} />)
                }
            </ul>
        </motion.div>
    )
}
>>>>>>> 901432d01d637e6cb8aee07167b12a6deb96a55e
