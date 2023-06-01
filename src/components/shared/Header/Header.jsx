import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header py-3">
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <Link
            className=" ps-2 text-uppercase fs-1  text-decoration-none text-black fst-italic"
            to="/"
          >
            tvmaze
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link   menu-item ms-2">Home</Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link  menu-item ms-2">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button type="button" className="btn header-btn">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
