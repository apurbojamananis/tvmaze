import { useLoaderData } from "react-router-dom";
import SingleShow from "./SingleShow";
import "./AllShow.css";
const AllShow = () => {
  const shows = useLoaderData();
  console.log(shows);

  return (
    <div className="container min-vh-100">
      <div className="card-container">
        {shows.map((show) => (
          <div key={show.show.id}>
            <SingleShow show={show} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShow;
