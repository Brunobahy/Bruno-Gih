import React, { useState } from 'react'
import styles from "./Fotos.module.css"
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import PaginaInicial from 'paginas/PaginaInicial'


export default function Fotos({lista}) {

    const [imagemEscolhida, setImagemEscolhida] = useState()

    if (!lista) {
        return (<PaginaInicial />)
    }

    return (
        <motion.ul
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1}}
            exit={{ scale: 0, opacity: 0 }}
            key={'historias'}
            className={styles.container}
        >
            {lista.map((item, index) => {
                if (item.TituloFoto !== imagemEscolhida) {
                    return (
                        <li
                            onClick={() => setImagemEscolhida(item)}
                            key={index}
                            className={styles.item}
                        >
                            <div className={styles.foto}>
                                <img src={item.Foto.replace('open', 'uc')} alt="" />
                            </div>
                            <div className={styles.legenda}>
                                <h2 className={styles.titulo}>{item.TituloFoto}</h2>
                                <p className={styles.subtitulo}>{item.InfoFoto}</p>
                            </div>

                        </li>
                    )
                }
            })}
            <AnimatePresence>
                {imagemEscolhida
                    ? <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className={styles.escolhida}
                    >

                        <img src={imagemEscolhida.Foto.replace('open', 'uc')} alt="" onClick={() => setImagemEscolhida('')} />
                        <h2>{imagemEscolhida.TituloFoto}</h2>
                        <p>{imagemEscolhida.InfoFoto}</p>
                    </motion.div>
                    : ''
                }
            </AnimatePresence>
        </motion.ul>
    )
}
