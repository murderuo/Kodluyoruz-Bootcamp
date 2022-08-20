import { Link, Outlet } from "react-router-dom";
function Contact() {
  return (
    <>
      {/* webpageroutes komponentinde contact içinde nested olarak 
      <Route to='/contact/>' // parent element oluyor
         >>>nested   <Route to=':contactid' ...
      </Route/>' 
      olarak path uygulandığında <Outlet/>'i mutlaka parent elementine yani contact
      komponentine import etmeliyiz */}
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      <h1>This is Contact page</h1>
      {/* >>>>>> */}
      {/* <Outlet />{" "} */}
      {/* >>>> ahanda bunu import etmeliyiz, yoksa sadece üst komponent geliyor */}
    </>
  );
}

export default Contact;
