import Banner from 'componentes/Banner'
import React from 'react'
import styles from './Eventos.module.css'
import { motion } from 'framer-motion'
export default function Eventos() {
    return (
        <motion.div className={styles.pagina}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
        >
            <Banner texto="Eventos" imagem='festa' />
            <p className={styles.info}>Esta pagina é temporária, ela vai existir só durante eventos que vamos marcar e normalmente relatados previamente no WhatsApp</p>

            <div>
                <h3 className={styles.titulo}>Dia da mulher</h3>
                <p className={styles.texto}>Você já recebeu seu convite e seu pix de R$30,00 agora você tem que seguir os seguintes itens para concluir este evento de modo correto e ganhar o vale massagem!</p>
                <ul className={styles.lista}>
                    <li className={styles.item}>Vá ao mercado</li>
                    <li className={styles.item}>Compre pipoca e coiasas que queira comer</li>
                    <li className={styles.item}>Prepare tudo para a hora de ver a série</li>
                    <li className={styles.item}>Aguarde o Link pelo WhatsApp</li>
                </ul>
            </div>

        </motion.div>
    )
}
