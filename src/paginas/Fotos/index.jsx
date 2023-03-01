import React, { useEffect, useState } from 'react'
import styles from "./Fotos.module.css"
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import listaFotos from 'json/fotos.json'


export default function Fotos() {

    const animacao = useAnimationControls()

    const [imagemEscolhida, setImagemEscolhida] = useState()

    return (
        <ul
            className={styles.container}
        >
            {listaFotos.length > 1
                ? listaFotos.map(foto => {
                    if (foto.id !== imagemEscolhida) {
                        return (
                            <li
                                onClick={() => setImagemEscolhida(foto.id)}
                                key={foto.id}
                                className={styles.item}
                            >
                                <div className={styles.foto}>
                                    <img src={`/assets/fotos/${foto.id}.png`} alt="" />
                                </div>
                                <div className={styles.legenda}>
                                    <h2 className={styles.titulo}>{foto.titulo}</h2>
                                    <p className={styles.subtitulo}>{foto.subtitulo}</p>
                                </div>

                            </li>
                        )
                    }
                })
                : <li className={styles.item}>
                    <img className={styles.foto} src="/assets/fotos/0.png" alt="" />
                    <div className={styles.legenda}>
                        <h2 className={styles.titulo}>Sem Imagens</h2>
                        <p className={styles.subtitulo}>Envie para o Bruno Bahy para aparecer aqui</p>
                    </div>
                </li>
            }
            <AnimatePresence>
                {imagemEscolhida
                    ? <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className={styles.escolhida}
                    >

                        <img src={`/assets/fotos/${imagemEscolhida}.png`} alt="" onClick={() => setImagemEscolhida('')} />

                    </motion.div>
                    : ''
                }
            </AnimatePresence>
        </ul>
    )
}