import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import AllPageRoutes from "./components/Routes/WebPageRoutes";
// import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <AllPageRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
