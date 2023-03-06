import React from 'react'
import { motion } from 'framer-motion'
import styles from './Historias.module.css'
import Banner from 'componentes/Banner'
import CardHistoria from 'componentes/CardHistoria'

export default function Historias({lista}) {



    return (
        <motion.div
            initial={{ x: '100vw' }}
            animate={{ opacity: 1, x: 0, width: '100%' }}
            key={'historias'}
            exit={{ x: '100vw' }}
        >
            <Banner texto='Histórias' />

            <ul className={styles.lista}>
                {lista.map((item, index) =>
                    <CardHistoria key={index} titulo={item.Titulo_Historia} texto={item.Historia} />)
                }
            </ul>
        </motion.div>
    )
}
