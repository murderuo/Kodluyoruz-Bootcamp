import { Link } from "react-router-dom";
import Header from "../../Header";

function Home() {
  return (
    <>
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      <h1>This is Home Page</h1>
      <Header />
    </>
  );
}

export default Home;
