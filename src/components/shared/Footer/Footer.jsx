import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg-black min-height">
      <div className="container footer ">
        <div className="text-center pt-5">
          <h2>
            <Link
              className="text-decoration-none text-uppercase text-white fst-italic "
              to="/"
            >
              tvmaze
            </Link>
          </h2>
          <h5>
            <span>copyright by 2023 @anishur rahman</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
