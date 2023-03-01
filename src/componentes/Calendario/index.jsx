import React from 'react'
import styles from './Calendario.module.css'

export default function Calendario() {
    return (
        <div>
            <h2 className={styles.titulo}>Calendario de atividade</h2>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=0&showNav=0&showTitle=0&src=NGJkMjc0ODkzZDYwZmMxZTI2ODlhMDZiOTk5MDRiOGE0YjUwNzVkMjlhNjQ2ZTZiMWQwOTA3MzFlOWY1NGNjZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D81B60"
                className={styles.calendario}
            >
            </iframe>
        </div>
    )
}
