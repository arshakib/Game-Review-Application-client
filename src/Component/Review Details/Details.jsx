import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Context/Context";

const Details = () => {
  const { user } = useContext(AuthContext);
  const detailsData = useLoaderData();
  console.log(detailsData);
  const handleAddToWatchlist = () => {
    fetch("https://server-ochre-xi.vercel.app/watchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: detailsData.title,

        rating: detailsData.rating,

        genre: detailsData.genre,

        addedDate: new Date().toISOString().split("T")[0],

        userEmail: user?.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    toast.success("Added to WatchList!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">
        {detailsData.title}
      </h1>
      <div className="mb-5">
        <img
          src={detailsData.url}
          alt={detailsData.title}
          className="w-full h-64 object-cover rounded-md"
        />
      </div>
      <p className="text-gray-600 mb-4">
        <strong>Description:</strong> {detailsData.description}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Rating:</strong> {detailsData.rating} / 10
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Genre:</strong> {detailsData.genre}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Publishing Year:</strong> {detailsData.year}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Reviewer:</strong> {user?.displayName}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Email:</strong> {user?.email}
      </p>
      <button
        onClick={handleAddToWatchlist}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add to WatchList
      </button>
      <ToastContainer />
    </div>
  );
};

export default Details;
