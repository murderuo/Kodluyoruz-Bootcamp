import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      ;<h1>This is About Page</h1>
    </>
  );
}

export default About;
