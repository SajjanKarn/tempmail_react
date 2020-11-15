import { Link } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        TempMail
      </Link>
    </nav>
  );
};

export default Navbar;
