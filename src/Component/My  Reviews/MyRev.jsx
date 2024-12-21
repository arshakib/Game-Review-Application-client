import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyRev = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://server-ochre-xi.vercel.app/review/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, reviews]);

  const handleUpdate = (_id) => {
    navigate(`/update/${_id}`);
    console.log(_id);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-ochre-xi.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
              const remaining = reviews.filter((review) => review._id !== id);
              setReviews(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="bg-white shadow-md rounded-lg p-5 flex flex-col"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {review.title}
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
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleUpdate(review._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(review._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRev;
