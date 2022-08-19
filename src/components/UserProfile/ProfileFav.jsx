import React from "react";
import Favorite from "../Favoritos/Favorite";
import { useSelector } from "react-redux";

const ProfileFav = ({ toggleFav }) => {
  const favorites = useSelector((state) => state.wishlistReducer);

  return (
    <div>
      <button
        className="flex justify-center py-2 px-4 ml-5 mt-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={toggleFav}
      >
        Back
      </button>
      <h1>Wish List</h1>
      <div className="flex gap-5 flex-wrap justify-center">
        {favorites.map((fav) => {
          return <Favorite key={fav.id} favorite={fav} />;
        })}
      </div>
    </div>
  );
};

export default ProfileFav;
