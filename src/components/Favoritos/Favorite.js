import React from "react";
import { addFavorites } from "../../redux/actions/wishlist";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BsHeartFill } from "react-icons/bs";
import "./Favorite.css";

const Favorite = ({ favorite }) => {
  const dispatch = useDispatch();
  const handlerAddToFav = (favorite) => {
    dispatch(addFavorites(favorite));
  };

  return (
    <div className="product-card">
      <div className="containerWishList">
        <Link to={`/product/${favorite.id}`}>
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img src={favorite.image} />
          </div>

          <div>
            <h2>{favorite.name}</h2>
          </div>
        </Link>
        <div>
          <p>{favorite.description}</p>
          <div className="badge2">{favorite.price} </div>

          <button onClick={() => handlerAddToFav(favorite)}>
            <BsHeartFill className="wishListTrue" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
