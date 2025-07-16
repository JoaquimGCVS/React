import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import SobreMim from './pages/SobreMim';

console.log(window.location);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/sobremim' element={<SobreMim/>}></Route>
          <Route path='*' element={<div>Pagina nao encontrada</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
