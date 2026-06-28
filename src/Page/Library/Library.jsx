import BookCard from "./BookCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Library = () => {
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);
  const [itemPerPage] = useState(8);

  const [currentPage, setCurrentPage] = useState(1);

  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  // === for Query ===
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/books/all-books?page=${currentPage}&size=${itemPerPage}&sort=${sort}&filter=${filter}&search=${search}`,
        );
        setBooks(data);
      } catch (error) {
        console.log("Error fetching books", error);
      }
    };
    getData();
  }, [currentPage, itemPerPage, sort, filter, search]);
  console.log("Books data:", books);

  // === for Count ===
  useEffect(() => {
    const getCount = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/books/books-count?filter=${filter}&search=${search}`,
        );
        setCount(data);
      } catch (error) {
        console.log("Error counting books", error);
      }
    };
    getCount();
  }, [filter, search]);
  console.log("Books count:", count);

  // === No data available ===
  if (!books || !Array.isArray(books)) {
    return (
      <p className="text-center mt-10 text-gray-500">No books available</p>
    );
  }

  // === Pagination ===
  const numberOfPages = Math.ceil(count / itemPerPage);
  const page = [
    ...Array(numberOfPages)
      .keys()
      .map((el) => el + 1),
  ];

  // === Pagination Button ===
  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

  // === Search Input ===
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
    setSearchText("");
  };

  // === Reset Button ===
  const handleReset = () => {
    setFilter("");
    setSort("");
    setSearch("");
    setSearchText("");
  };
  return (
    <div className="mx-auto max-w-11/12 px-4 sm:px-6 lg:px-8 ">
      {/* Header Section */}
      <div className="mt-12 mb-10 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl">
          Our Latest E-Books
        </h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Discover curated knowledge written by industry experts
        </p>
      </div>

      <div className="container mx-auto flex min-h-[calc(100vh-306px)] flex-col justify-between py-6">
        <div>
          {/* === Filter Bar Section === */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-neutral-100 bg-white/50 p-4 shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/50 md:flex-row">
            {/* === genre Filter === */}
            <div className="w-full md:w-auto min-w-50">
              <div className="relative">
                <select
                  onChange={(e) => {
                    setFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  value={filter}
                  name="genre"
                  id="genre"
                  className="w-full appearance-none rounded-xl border border-neutral-200 bg-white pl-4 pr-10 h-12 text-sm font-medium text-neutral-700 outline-none transition-all duration-200 cursor-pointer hover:border-orange-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:focus:border-orange-500"
                >
                  <option
                    value=""
                    className="bg-white dark:bg-neutral-950 text-neutral-400"
                  >
                    Filter By Genre
                  </option>
                  <option
                    value="Mystery & Thriller"
                    className="bg-white dark:bg-neutral-950"
                  >
                    Mystery & Thriller
                  </option>
                  <option
                    value="Romance"
                    className="bg-white dark:bg-neutral-950"
                  >
                    Romance
                  </option>
                  <option
                    value="Science Fiction"
                    className="bg-white dark:bg-neutral-950"
                  >
                    Science Fiction
                  </option>
                  <option
                    value="Self-Help & Nonfiction"
                    className="bg-white dark:bg-neutral-950"
                  >
                    Self-Help & Nonfiction
                  </option>
                </select>

                {/* icon*/}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 dark:text-neutral-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-200 group-focus-within:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* === Search Bar Form === */}
            <form
              onSubmit={handleSearch}
              className="w-full md:w-auto flex-1 max-w-md"
            >
              <div className="flex h-12 overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-200 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-amber-500/20 dark:border-neutral-700 dark:bg-neutral-950">
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  className="w-full px-4 text-sm text-neutral-800 placeholder-neutral-400 bg-transparent outline-none dark:text-neutral-200"
                  type="text"
                  name="search"
                  placeholder="Enter Book Title..."
                  aria-label="Enter Book Title"
                />
                <button className="mx-1 my-1 px-5 text-xs font-semibold tracking-wide text-white uppercase transition-all duration-200 bg-orange-500 rounded-lg hover:bg-orange-600 active:scale-95 focus:outline-none">
                  Search
                </button>
              </div>
            </form>

            {/* === Sort Filter === */}
            <div className="w-full md:w-auto min-w-50">
              <div className="relative">
                <select
                  onChange={(e) => {
                    setSort(e.target.value);
                    setCurrentPage(1);
                  }}
                  value={sort}
                  name="sortPrice"
                  id="sortPrice"
                  className="w-full appearance-none rounded-xl border border-neutral-200 bg-white pl-4 pr-10 h-12 text-sm font-medium text-neutral-700 outline-none transition-all duration-200 cursor-pointer hover:border-orange-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:focus:border-orange-500"
                >
                  <option
                    value=""
                    className="bg-white dark:bg-neutral-950 text-neutral-400"
                  >
                    Sort By Price
                  </option>
                  <option
                    value="lowToHigh"
                    className="bg-white dark:bg-neutral-950"
                  >
                    Low to High
                  </option>
                  <option
                    value="highToLow"
                    className="bg-white dark:bg-neutral-950"
                  >
                    High to Low
                  </option>
                </select>

                {/* icon*/}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 dark:text-neutral-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* === Reset Button === */}
            <button
              onClick={handleReset}
              className="w-full md:w-auto h-12 px-6 text-sm font-medium text-red-600 rounded-xl bg-red-50 hover:bg-red-100 transition-colors duration-200 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/50"
            >
              Reset
            </button>
          </div>

          {/* === Grid Layout === */}
          <div className="grid grid-cols-2 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </div>

        {/* === Premium Pagination Section === */}
        <div className="flex items-center justify-center mt-12 gap-2">
          {/* === Previous Button === */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 rounded-xl transition-all duration-200 hover:bg-neutral-50 hover:text-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-neutral-700 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Previous
          </button>

          {/* === Page Numbers === */}
          {page.map((btnNum) => {
            const isActive = currentPage === btnNum;
            return (
              <button
                onClick={() => handlePaginationButton(btnNum)}
                key={btnNum}
                className={`hidden sm:inline-flex items-center justify-center w-10 h-10 text-sm font-semibold rounded-xl transition-all duration-200 
                  ${
                    isActive
                      ? "bg-orange-500 text-white border border-orange-500 shadow-sm shadow-orange-500/20 dark:bg-orange-600 dark:border-orange-600"
                      : "bg-white text-neutral-700 border border-neutral-200 hover:border-orange-500 hover:text-orange-600 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-orange-500 dark:hover:text-orange-50"
                  }`}
              >
                {btnNum}
              </button>
            );
          })}

          {/* === Next Button === */}
          <button
            onClick={() => handlePaginationButton(currentPage + 1)}
            disabled={currentPage === numberOfPages}
            className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 rounded-xl transition-all duration-200 hover:bg-neutral-50 hover:text-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-neutral-700 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Library;
