import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-axpand-lg navbar-dark text-light bg-dark py-2 d-flex justify-content-center ">
      <Link className="navbar-brand ml-5 text-warning" to="/">
        React Redux Contact App
      </Link>
    </nav>
  );
};

export default Navbar;
