import React from 'react'
import styles from './Calendario.module.css'
import { motion } from 'framer-motion'

export default function Calendario() {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
        >
            <h2 className={styles.titulo}>Calendario de atividade</h2>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&title=Bruno%20%26%20Gih&src=YnJ1bmJhaHlAZ21haWwuY29t&src=NGJkMjc0ODkzZDYwZmMxZTI2ODlhMDZiOTk5MDRiOGE0YjUwNzVkMjlhNjQ2ZTZiMWQwOTA3MzFlOWY1NGNjZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23D81B60&color=%23AD1457"
                className={styles.calendario}
                frameBorder="0"
            >
                
            </iframe>
        </motion.div>
    )
}
