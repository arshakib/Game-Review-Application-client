import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Reviews = () => {
  const reviewData = useLoaderData();

  const [data, setData] = useState(reviewData);

  const sortReviews = (e) => {
    e.preventDefault();
    const form = e.target;
    const sort = form.value;

    if (sort === "Rating") {
      fetch("https://server-ochre-xi.vercel.app/sortrating")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } else if (sort === "year") {
      fetch("https://server-ochre-xi.vercel.app/sortyear")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  };

  const filterReviews = (e) => {
    e.preventDefault();
    const form = e.target;
    const filter = form.value;

    fetch(`https://server-ochre-xi.vercel.app/filter/${filter}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">All Reviews</h1>
      <div className="grid grid-cols-2 gap-4 my-7">
        <div>
          <form>
            <label className="block text-gray-700 font-medium mb-1">
              Sort Reviews
            </label>
            <select
              onChange={sortReviews}
              name="sort"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value=""></option>
              <option value="Rating">Rating</option>
              <option value="year">year</option>
            </select>
          </form>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Filter by Genre
          </label>
          <select
            name="filter"
            onChange={filterReviews}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value=""></option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Shooter">Shooter</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <img
              src={review.url}
              alt={review.gameTitle}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">
              {review.gameTitle}
            </h2>
            <p className="text-gray-600">
              <strong>Genre:</strong> {review.genre}
            </p>
            <p className="text-gray-600">
              <strong>Rating:</strong> {review.rating} / 10
            </p>
            <p className="text-gray-600">
              <strong>Reviewer:</strong> {review.userName}
            </p>
            <Link
              to={`/details/${review._id}`}
              className="mt-4 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
            >
              Explore Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
