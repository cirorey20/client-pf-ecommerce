import React from "react";

const AddressEditForm = ({
  onSubmitAddress,
  editProfileAddress,
  toggleEditAddress,
  newProfileAddress,
}) => {
  return (
    <div className="absolute px-24 py-4 border shadow-lg rounded-lg ring-offset-2 ring-2 left-2/4 top-3/4 -translate-x-2/4 -translate-y-2/4  bg-white">
      <form
        action=""
        onSubmit={onSubmitAddress}
        className="w-full max-w-sm my-5 "
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              City
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              name="city"
              value={newProfileAddress?.city}
              onChange={editProfileAddress}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Province
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="province"
              value={newProfileAddress?.province}
              onChange={editProfileAddress}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Street number
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="street_number"
              value={newProfileAddress?.street_number}
              onChange={editProfileAddress}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Locality
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="locality"
              value={newProfileAddress?.locality}
              onChange={editProfileAddress}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Apartment floor
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="apartment_floor"
              value={newProfileAddress?.apartment_floor}
              onChange={editProfileAddress}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3 flex gap-5">
            <button
              className="shadow bg-red-300 hover:bg-slate-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              onClick={(e) => toggleEditAddress(e)}
            >
              Cancel
            </button>
            <button
              className="shadow bg-slate-700 hover:bg-slate-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressEditForm;
