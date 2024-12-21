/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Card from "./Card";

const Cards = ({ reviewData }) => {
  return (
    <div>
      <div className="text-center my-12">
        <h1 className="lg:text-4xl text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
          Highest Review Games
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md gap-4">
        {reviewData
          .sort((a, b) => b.rating - a.rating)
          .map((item, index) => (
            <Card key={index} item={item}></Card>
          ))}
      </div>
      <div className="text-center my-12">
        <Link to="/reviews" className="btn btn-info">
          See All Reviews
        </Link>
      </div>
    </div>
  );
};

export default Cards;
