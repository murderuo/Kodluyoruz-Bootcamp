import { useParams, Link } from "react-router-dom";

function Details() {
  const { contactid } = useParams();
  return (
    <>
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      <h1>
        This is Contact Detail page <br />
        Contact id: {contactid}
        <div>{console.log("idk")}</div>
      </h1>
    </>
  );
}

export default Details;
