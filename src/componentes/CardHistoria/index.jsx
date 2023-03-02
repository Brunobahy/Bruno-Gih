import React from 'react'
import styles from './CardHistoria.module.css'

export default function CardHistoria({ titulo, texto }) {
    return (
        <li className={styles.card}>
            <h3 className={styles.titulo}>{titulo}</h3>
            <p className={styles.texto}>{texto}</p>
        </li>
    )
}
