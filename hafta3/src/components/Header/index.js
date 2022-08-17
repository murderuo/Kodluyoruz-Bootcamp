import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [id, setId] = useState(0);

  return (
    <div className="nav-menu">
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      <div className="link">
        <Link to="/about">About</Link>
      </div>
      <div className="link">
        <Link to="/contact">Contact</Link>
      </div>
      <hr />
      <div>
        <Link to={`/contact/${id}`}>Contact {id}</Link>
      </div>
      <br />
      <div>
        <button onClick={() => setId(id + 1)}>increase contact id</button>
      </div>
    </div>
  );
}

export default Header;
