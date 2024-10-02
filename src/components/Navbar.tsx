import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SnippifyLogo from '../assets/Snippify transparent.gif';


const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
    
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSearchClick = () => {
    // Keywords for each algorithm
    const bubbleSortKeywords = ["bubble sort", "bubble"];
    
    if (bubbleSortKeywords.some(keyword => searchTerm.includes(keyword))) {
      navigate("/bubble-sort"); // Route to Bubble Sort page
    } else {
      alert("No matching snippet found.");
    }
  };

  return (
    <div className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-[rgb(66,6,99)] to-[rgb(80,31,115)] shadow-lg border-b-4 border-[rgb(80,31,115)]">
      <div className="flex items-center">
        <img
          className="h-20 w-22 border-2 border-[rgb(88,24,116)] shadow-md hover:scale-110 transition-transform duration-500 ease-in-out"
          src={SnippifyLogo}
          alt="snippify logo"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="flex-grow ml-4">
        <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
          <label htmlFor="default-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 19l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              onChange={handleSearchChange}
              className="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-[rgb(66,6,99)] rounded-lg bg-[rgb(66,6,99)] focus:ring-[rgb(80,31,115)] focus:border-[rgb(80,31,115)] dark:bg-[rgb(54,0,79)] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[rgb(80,31,115)] dark:focus:border-[rgb(80,31,115)]"
              placeholder="Search..."
              required
            />
            <button
              type="button" // Change to type="button" to prevent form submission
              onClick={handleSearchClick}
              className="absolute right-2.5 bottom-2.5 text-white bg-[rgb(100,50,150)] hover:bg-[rgb(120,80,180)] focus:ring-4 focus:outline-none focus:ring-[rgb(80,31,115)] font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300 ease-in-out"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
