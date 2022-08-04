import React from "react";

export default function Paginado() {
  return (
    <div class="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul class="flex list-style-none">
          <li class="page-item disabled">
            <a
              class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              1
            </a>
          </li>
          <li class="page-item active">
            <a
              class="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
              href="#"
            >
              2 <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              3
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
