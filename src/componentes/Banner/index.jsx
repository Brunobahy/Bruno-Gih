import React from 'react'
import styles from './Banner.module.css'

export default function Banner({texto, imagem = 'img'}) {
    return (
        <div className={styles.banner}>
            <img className={styles.imagem} src={`/assets/fotos/${imagem}.png`} alt="Foto do casal mais lindo do mundo" />
            <h2 className={styles.titulo}>{texto}</h2>
        </div>
    )
}
