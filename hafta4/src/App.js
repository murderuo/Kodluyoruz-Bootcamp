import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Basket from './components/Basket';
import BasketProvider from './context/BasketContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <BasketProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </BasketProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
