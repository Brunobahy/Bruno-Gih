import { AnimatePresence } from 'framer-motion';
import Historias from 'paginas/Historias';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Fotos from './paginas/Fotos';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaPadrao from './paginas/PaginaPadrao';

function AppRouter() {
  const location = useLocation()

  const [lista, setLista] = useState('')

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/e55ho3oquztrk",
      { method: "GET" })
      .then(resposta => resposta.json())
      .then(dados => setLista(dados))

  }, [])

  return (
    <div className="App">
      <AnimatePresence mode='wait' initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<PaginaInicial />} />
            <Route path='/fotos' element={<Fotos lista={lista} />} />
            <Route path='/historias' element={<Historias lista={lista} />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AppRouter;
