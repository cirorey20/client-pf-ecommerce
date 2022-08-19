import React from "react";
import Favorite from "../Favoritos/Favorite";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const favorites = useSelector((state) => state.wishlistReducer);

  console.log(favorites);
  return (
    <div>
      <h2>Favoritos</h2>
      <div>
        {favorites.map((fav) => {
          return <Favorite key={fav.id} favorite={fav} />;
        })}
      </div>
    </div>
  );
};

export default UserProfile;
