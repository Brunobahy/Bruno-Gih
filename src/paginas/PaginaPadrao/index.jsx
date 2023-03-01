import React from 'react'
import { Outlet } from 'react-router-dom'
import Cabecalho from '../../componentes/Cabecalho'

export default function PaginaPadrao() {
    return (
        <div>
            <Cabecalho />
            <Outlet />

        </div>
    )
}
