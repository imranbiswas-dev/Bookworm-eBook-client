import { useContext } from "react";
import { API } from "./../../config/config";
import { AuthContext } from "../../Components/Context/AuthContext.jsx/AuthContext";
import { useNavigate } from "react-router";
const AddBook = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddBook = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newBook = Object.fromEntries(formData.entries());

    const books = {
      ...newBook,
      username: user.displayName,
      userPhoto: user.photoURL,
      email: user.email,
    };


    fetch(API.books, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(books),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response:", data);

       e.target.reset();
       setTimeout(() => {
            navigate("/");
          }, 1600);
      });
  };
  return (
    <div>
      <div className="">
        <div className="w-full">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-white">
            Add Your Book
          </h2>

          <form
            onSubmit={handleAddBook}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="You Are a Badass"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="discountPrice"
                  className="block text-sm font-medium"
                >
                  Discount Price
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="discountPrice"
                  name="discountPrice"
                  placeholder="7.99"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="genre" className="block text-sm font-medium">
                  Genre
                </label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  placeholder="Self-Help & Nonfiction"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label htmlFor="author" className="block text-sm font-medium">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  placeholder="Jen Sincero"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="officialPrice"
                  className="block text-sm font-medium"
                >
                  Official Price
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="officialPrice"
                  name="officialPrice"
                  placeholder="11.99"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="rating" className="block text-sm font-medium">
                  Rating
                </label>
                <input
                  type="number"
                  step="0.1"
                  id="rating"
                  name="rating"
                  placeholder="4.6"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            {/* Full Width Row for Photo */}

            <div className="col-span-1 md:col-span-2">
              <label htmlFor="summary" className="block text-sm font-medium">
                Summary
              </label>
              <textarea
                id="summary"
                name="summary"
                rows="3"
                placeholder="Motivational guide to help you stop doubting your greatness..."
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="image" className="block text-sm font-medium">
                Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                placeholder="https://example.com/book.png"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2">
              <button
                className="mt-4 px-4 text-sm font-medium text-white 
                   capitalize bg-orange-600 rounded-lg 
                   hover:bg-orange-600/80 transition-all duration-300 
                   shadow-md hover:shadow-lg active:scale-95 w-full py-3"
              >
                Publish your E-Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
