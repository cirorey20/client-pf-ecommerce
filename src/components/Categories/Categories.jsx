import React from "react";

export default function Categories() {
  return (
    <div className="md:container md:mx-auto">
      <div class=" w-full h-48 bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div class="h-48 sm:flex sm:items-center px-6 py-4">
          <img
            class="block h-16 sm:h-50 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
            src="https://cdn.shopify.com/s/files/1/0253/8618/8834/products/fee42e7ae64f_1280x.jpg?v=1653757251"
            alt=""
          />
          <div class="text-center sm:text-left sm:flex-grow">
            <div class="mb-4 ">
              <p class="text-xl leading-tight">Guitarras</p>
            </div>
            <div>
              <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
