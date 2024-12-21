import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ item }) => {
  return (
    <div>
      <div className="w-auto card card-side shadow-xl">
        <figure>
          <img className="p-3 rounded-2xl" src={item.url} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <div className=" card-actions justify-start place-items-center">
            <h1>Genres:</h1>
            <div className="badge badge-outline">
              {item.genre} {item.rating}
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" to={`/details/${item._id}`}>
              Explore Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
