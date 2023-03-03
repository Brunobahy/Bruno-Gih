import { AnimatePresence } from 'framer-motion';
import Historias from 'paginas/Historias';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> 901432d01d637e6cb8aee07167b12a6deb96a55e
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Fotos from './paginas/Fotos';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaPadrao from './paginas/PaginaPadrao';

function AppRouter() {
  const location = useLocation()

<<<<<<< HEAD
  const [lista, setLista] = useState('')

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/e55ho3oquztrk",
      { method: "GET" })
      .then(resposta => resposta.json())
      .then(dados => setLista(dados))

  }, [])
=======
  const [local, setLocal]= useState(location.pathname)

  console.log(location)
>>>>>>> 901432d01d637e6cb8aee07167b12a6deb96a55e

  return (
    <div className="App">
      <AnimatePresence mode='wait' initial={false}>
        <Routes location={location} key={location.pathname}>
<<<<<<< HEAD
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<PaginaInicial />} />
            <Route path='/fotos' element={<Fotos lista={lista} />} />
            <Route path='/historias' element={<Historias lista={lista}/>} />
=======
          <Route path='/' element={<PaginaPadrao  />}>
            <Route index element={<PaginaInicial funcao={setLocal}/>} />
            <Route path='/fotos' element={<Fotos local={local} />} />
            <Route path='/historias' element={<Historias funcao={setLocal} />} />
>>>>>>> 901432d01d637e6cb8aee07167b12a6deb96a55e
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AppRouter;
