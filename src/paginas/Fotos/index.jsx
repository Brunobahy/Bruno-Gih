import React, { useState } from 'react'
import styles from "./Fotos.module.css"
import { AnimatePresence, motion } from 'framer-motion'
import PaginaInicial from 'paginas/PaginaInicial'
import CardFoto from 'componentes/CardFoto'


export default function Fotos({ lista }) {

    const [imagemEscolhida, setImagemEscolhida] = useState()

    if (!lista) {
        return (<PaginaInicial />)
    }

    return (
        <motion.ul
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            key={'historias'}
            className={styles.container}
        >
            {lista.map((item, index) => {
                if (item.Titulo_Foto !== imagemEscolhida) {
                    return (
                        <CardFoto
                            funcao={setImagemEscolhida}
                            key={index}
                            {...item}
                        />
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
                        <h2>{imagemEscolhida.Titulo_Foto}</h2>
                        <p>{imagemEscolhida.Info_Foto}</p>
                    </motion.div>
                    : ''
                }
            </AnimatePresence>
        </motion.ul>
    )
}
