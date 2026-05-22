
import {  useLocation } from "react-router";
import { API } from "../../config/config";
import BookCard from "../../Page/Library/BookCard";
import { useEffect, useState } from "react";

const SearchResult = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    fetch(API.books)
      .then((res) => res.json())
      .then((data) => {
        if (query) {
          const filtered = data.filter((item) => {
            const nameMatch =
              item.title &&
              item.title.toLowerCase().includes(query.toLowerCase());
            const genreMatch =
              item.genre &&
              item.genre.toLowerCase().includes(query.toLowerCase());
            return nameMatch || genreMatch;
          });

          setBooks(filtered);
        } else {
          setBooks([]);
        }
      });
  }, [query]);

  return (
    <div className="max-w-7xl  lg:mx-auto mx-5 min-h-screen">
      <h2 className="text-lx">Search Result for "{query}"</h2>
      {books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-self-center md:gap-5 gap-3 mt-2">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        "No Result Found"
      )}
    </div>
  );
};

export default SearchResult;
