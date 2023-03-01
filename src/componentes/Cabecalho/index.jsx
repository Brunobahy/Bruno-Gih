import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import { AnimatePresence, motion, spring, useAnimationControls, useWillChange } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Cabecalho() {

    const [ativo, setAtivo] = useState(false)
    
    function abrir() {
        setAtivo(!ativo)
    }


    const variacao = {
        esconde: {
            opacity: 0,
            scale: 0,
        },
        aparece: {
            opacity: 1,
            scale: 1,
            transition:{ type: "spring", bounce: 0.5 }

        }
    }




    return (
        <>
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
                                <NavLink to='/' className={styles.item} >Calendário</NavLink>
                            </li>
                            <li>
                                <NavLink className={styles.item} to={'/fotos'}>Fotos</NavLink>
                            </li>
                            <li>
                                <NavLink className={styles.item} to={'/atividades'}>Atividades</NavLink>
                            </li>
                        </motion.nav>
                        : ''
                }

            </AnimatePresence>
        </>
    )
}