import React from 'react'
import styles from './Banner.module.css'
import imagem from './img.png'


export default function Banner() {
    return (
        <div className={styles.banner}>
            <img className={styles.imagem} src={imagem} alt="Foto do casal mais lindo do mundo" />
            <h2 className={styles.titulo}>Bruno e Gih</h2>
        </div>
    )
}
