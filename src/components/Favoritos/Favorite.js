import React from "react";
import { addFavorites } from "../../redux/actions/wishlist";
import { useDispatch } from "react-redux";

const Favorite = ({ favorite }) => {
  const dispatch = useDispatch();
  const handlerAddToFav = (favorite) => {
    dispatch(addFavorites(favorite));
  };
  return (
    <div>
      <div>
        <img src={favorite.image} />
      </div>
      <div>
        <h2>{favorite.name}</h2>
      </div>
      <div>
        <p>{favorite.description}</p>
        <p>{favorite.price}</p>
        <button onClick={() => handlerAddToFav(favorite)}>Fav</button>
      </div>
    </div>
  );
};

export default Favorite;
