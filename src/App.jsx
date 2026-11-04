
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/inicio/Inicio';
import { Catalogo } from './pages/catalogo/Catalogo';
import { ListaCat } from './pages/catalogo/listaCat/ListaCat';
import { Nosotros } from './pages/nosotros/Nosotros';
import { LayoutPublic } from './layouts/LayoutPublic';
import './App.css';

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutPublic></LayoutPublic>}>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/Catalogo' element={<Catalogo></Catalogo>}></Route>
            <Route path="/Lista" element={<ListaCat />} />
            <Route path='/Nosotros' element={<Nosotros></Nosotros>}></Route>
            <Route path='/Contacto' element={<Nosotros></Nosotros>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
