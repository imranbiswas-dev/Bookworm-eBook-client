import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    } else {
      setQuery("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <label className="input w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
           
            <input
              type="search"
              className="grow"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
