import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Details from "../pages/Contact/Details";
import Home from "../pages/Home/";

function AllPageRoutes() {
  return (
    <>
      This is Routes Component
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}></Route>
          {/* >>>>>>>>>>>>< */}
          <Route path="/contact/:contactid" element={<Details />} />{" "}
          {/* Burda nested route yapmadık ayrıca route ekledik */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default AllPageRoutes;
