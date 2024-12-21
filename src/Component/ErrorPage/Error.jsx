import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
