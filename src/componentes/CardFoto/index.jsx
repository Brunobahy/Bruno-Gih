import React from 'react'
import styles from './CardFoto.module.css'

export default function CardFoto({ Titulo_Foto, Info_foto, Foto, funcao }) {
    return (
        <li
            onClick={() => funcao({Titulo_Foto, Info_foto, Foto})}
            className={styles.item}
        >
            <div className={styles.foto}>
                <img src={Foto.replace('open', 'uc')} alt="" />
            </div>
            <div className={styles.legenda}>
                <h2 className={styles.titulo}>{Titulo_Foto}</h2>
                <p className={styles.subtitulo}>{Info_foto}</p>
            </div>

        </li>
    )
}
