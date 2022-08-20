import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import BasketContext from "./context/BasketContext.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basketcontext" element={<BasketContext />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
