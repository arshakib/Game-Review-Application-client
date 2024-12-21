import { useContext, useState } from "react";

import { AuthContext } from "../../Context/Context";

const Watchlist = () => {
  const { user } = useContext(AuthContext);
  const [watchlist, setWatchlist] = useState([]);

  fetch(`https://server-ochre-xi.vercel.app/watchlist/${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      setWatchlist(data);
    });

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">
        Your Game Watchlist
      </h1>
      {watchlist.length === 0 ? (
        <p className="text-gray-700">
          You have not added any games to your watchlist yet.
        </p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Game Title</th>
              <th className="border border-gray-300 px-4 py-2">Rating</th>
              <th className="border border-gray-300 px-4 py-2">Genre</th>
              <th className="border border-gray-300 px-4 py-2">Added Date</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((game) => (
              <tr key={game.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {game.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {game.rating}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {game.genre}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {game.addedDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Watchlist;
