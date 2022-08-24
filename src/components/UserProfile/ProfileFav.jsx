import React from "react";
import Favorite from "../Favorite/Favorite";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";

const ProfileFav = ({ toggleFav }) => {
  const favorites = useSelector((state) => state.wishlistReducer);


  return (
    <div>
      <NavBar />
      <div className="mb-28 mt-14">
    { toggleFav && 
      <button
        className="flex justify-center py-2 px-4 ml-5 mt-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => toggleFav()}
      >
        
        Back
      </button> 
      }
      <h1 className="wish">Wish List</h1>
      {favorites?.length > 0 ? (
        <div>
          <div className="flex gap-5 flex-wrap justify-center">
            {favorites.map((fav) => {
              return <Favorite key={fav.id} favorite={fav} />;
            })}
          </div>
        </div>
      ) : (
        <h2 className="ordersEmpty">You don't have a favorite!</h2>
      )}
      </div>
      <Footer />
    </div>
  );
};

export default ProfileFav;
