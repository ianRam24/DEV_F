import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container py-4 text-white">
      <nav className="d-flex gap-4 text-white mb-3">
        <Link to="/portfolio" className="nav-link">
          Portfolio
        </Link>
        <Link to="/user" className="nav-link">
          Users
        </Link>
        <Link to="/info" className="nav-link">
          Info
        </Link>
        <Link to="/faq" className="nav-link">
          FAQ
        </Link>
      </nav>
    </div>
  );
};
