import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Context/Context";

const Add = () => {
  const { user } = useContext(AuthContext);

  // const genres = ["Action", "RPG", "Adventure", "Puzzle", "Shooter", "Sports"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const url = form.coverImage.value;
    const title = form.gameTitle.value;
    const description = form.reviewDescription.value;
    const rating = form.rating.value;
    const year = form.publishingYear.value;
    const genre = form.genre.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    fetch("https://server-ochre-xi.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        title,
        description,
        rating,
        year,
        genre,
        userEmail,
        userName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    toast.success("Review submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-5">Add New Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Game Cover Image URL
          </label>
          <input
            type="url"
            name="coverImage"
            placeholder="Enter the URL of the game cover"
            className="w-full border rounded px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Game Title
          </label>
          <input
            type="text"
            name="gameTitle"
            placeholder="Enter the game title"
            className="w-full border rounded px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Review Description
          </label>
          <textarea
            name="reviewDescription"
            placeholder="Write your review"
            className="w-full border rounded px-4 py-2"
            rows="5"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Rating (1-10)
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Enter a rating"
            min="1"
            max="10"
            className="w-full border rounded px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Publishing Year
          </label>
          <input
            type="number"
            name="publishingYear"
            placeholder="Enter the publishing year"
            min="1900"
            max={new Date().getFullYear()}
            className="w-full border rounded px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Genre</label>
          <select name="genre" className="w-full border rounded px-4 py-2">
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Shooter">Shooter</option>
            <option value="Sports">Sports</option>
            {/* {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))} */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            User Email
          </label>
          <input
            type="email"
            name="userEmail"
            value={user?.email}
            readOnly
            className="w-full border rounded px-4 py-2 bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            value={user?.displayName}
            readOnly
            className="w-full border rounded px-4 py-2 bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Add;
