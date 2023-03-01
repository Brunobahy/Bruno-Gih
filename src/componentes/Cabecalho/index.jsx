import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import { AnimatePresence, delay, motion, spring, useAnimationControls, useWillChange } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Cabecalho() {

    const [ativo, setAtivo] = useState(false)

    function abrir() {
        setAtivo(!ativo)
    }


    const variacao = {
        esconde: {
            y: '-200px',
            transition: { type: "spring", bounce: 0 },
        },
        aparece: {
            y: 0,
            transition: { type: "spring", bounce: 0 },


        }
    }




    return (
        <div className={styles.teste}>
            <motion.header
                className={styles.cabecalho}
            >

                <GiHamburgerMenu size={40} color={"#023440"} style={{ transition: 'all 0.5' }} onClick={abrir} />
            </motion.header >


            <AnimatePresence>
                {
                    ativo
                        ? <motion.nav
                            initial={'esconde'}
                            animate={'aparece'}
                            exit={'esconde'}
                            variants={variacao}
                            className={styles.lista}
                        >
                            <li>
                                <NavLink onClick={abrir} to='/' className={styles.item} >Calendário</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={abrir} className={styles.item} to={'/fotos'}>Fotos</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={abrir} className={styles.item} to={'/atividades'}>Atividades</NavLink>
                            </li>
                        </motion.nav>
                        : ''
                }

            </AnimatePresence>
        </div >
    )
}