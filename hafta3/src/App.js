import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import AllPageRoutes from "./components/Routes/WebPageRoutes";

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
