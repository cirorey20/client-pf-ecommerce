/* This example requires Tailwind CSS v2.0+ */
import { Popover } from '@headlessui/react'
import SearchBtn from "../SearchBar/SearchBar";


export default function LandingPage() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img
                className="h-20 w-25"
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Universal-Pictures-Logo.svg"
                alt=""
              />
            </a>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#cbd5e1] hover:bg-[#0f172a]"
            >
              Home
            </a>
          </div>
            <a href="#" className="text-5xl mr-8 my-10 font-medium text-gray-500 hover:text-gray-900">
              Universal Music
            </a>
            <SearchBtn/>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-400 hover:text-black">
              Sign in
            </a>
            <a
              href="#"
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#1f2937] hover:bg-[#cbd5e1]"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </Popover>
  )
}
