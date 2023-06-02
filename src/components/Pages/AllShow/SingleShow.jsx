import moment from "moment";
import "./SingleShow.css";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleShow = ({ show }) => {
  // console.log(show.show.network);
  const { id, image, name, premiered, genres } = show.show;
  const formattedPremiered = moment(premiered).format("dddd, Do MMMM YYYY");

  console.log(id);

  // const renderSummary = () => {
  //   return { __html: summary };
  // };

  return (
    <>
      <div className="card h-100">
        <img src={image.original} className="card-img-top image" alt="..." />
        <div className="card-body">
          <div>
            <div>
              <p className="card-title">
                <b>Show name: </b>
                {name}
              </p>
            </div>
            <div className=""></div>
          </div>
          <p className="card-title">
            <b>Premiered:</b> {formattedPremiered}
          </p>
          <p className="card-title">
            <b>Genres:</b> {genres[0]}
          </p>
          
        </div>
        <div className="card-footer">
          <Link to={`/showDetails/${id}`}>
            <button className="btn btn-success">View Details</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleShow;
