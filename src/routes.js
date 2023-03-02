import { AnimatePresence } from 'framer-motion';
import Historias from 'paginas/Historias';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Fotos from './paginas/Fotos';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaPadrao from './paginas/PaginaPadrao';

function AppRouter() {
  const location = useLocation()

  const [local, setLocal]= useState(location.pathname)

  console.log(location)

  return (
    <div className="App">
      <AnimatePresence mode='wait' initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<PaginaPadrao  />}>
            <Route index element={<PaginaInicial funcao={setLocal}/>} />
            <Route path='/fotos' element={<Fotos local={local} />} />
            <Route path='/historias' element={<Historias funcao={setLocal} />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AppRouter;
