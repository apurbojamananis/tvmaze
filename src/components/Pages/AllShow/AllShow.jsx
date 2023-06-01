import { useLoaderData } from "react-router-dom";
import SingleShow from "./SingleShow";

const AllShow = () => {
  const shows = useLoaderData();
  console.log(shows);
  return (
    <div className="container min-vh-100">
      <div className="row gap-md-3">
        {shows.map((show) => (
          <SingleShow key={show.show.id}></SingleShow>
        ))}
      </div>
    </div>
  );
};

export default AllShow;
