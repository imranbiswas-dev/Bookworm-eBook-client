import { useLoaderData } from "react-router";
import BookCard from "./BookCard";

const Library = () => {
  const books = useLoaderData();
  console.log("Books:", books);

  // যদি books undefined বা array না হয়, fallback দাও
  if (!books || !Array.isArray(books)) {
    return (
      <p className="text-center mt-10 text-gray-500">No books available</p>
    );
  }

  return (
    <div>
      <h2 className="mt-5 text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        📚 Our Latest E-Books
      </h2>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-10">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Library;
