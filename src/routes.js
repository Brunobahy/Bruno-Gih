import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Fotos from './paginas/Fotos';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaPadrao from './paginas/PaginaPadrao';

function AppRouter() {
  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<PaginaInicial />} />
            <Route path='/fotos' element={<Fotos />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AppRouter;
