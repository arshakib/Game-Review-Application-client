import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const data = useLoaderData();

  console.log(data);
  console.log(id);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setReviewData((prevData) => ({ ...prevData, [name]: value }));
  // };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const url = form.url.value;
    const title = form.title.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genre = form.genre.value;

    fetch(`https://server-ochre-xi.vercel.app/reviews/${id}`, {
      method: "PATCH",
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
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    toast.success(" Review updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Update Review</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Game Cover Image (URL)
          </label>
          <input
            type="url"
            name="url"
            defaultValue={data.url}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Game Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={data.title}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Review Description
          </label>
          <textarea
            name="description"
            defaultValue={data.description}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Rating</label>
          <input
            type="number"
            name="rating"
            defaultValue={data.rating}
            min={1}
            max={10}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Publishing Year
          </label>
          <input
            type="number"
            name="year"
            defaultValue={data.year}
            min={1900}
            max={new Date().getFullYear()}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Genre</label>
          <select
            name="genre"
            defaultValue={data.genre}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Shooter">Shooter</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            User Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 rounded-md focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            User Name
          </label>
          <input
            type="text"
            name="name"
            value={user.displayName}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 rounded-md focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Review
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Update;
