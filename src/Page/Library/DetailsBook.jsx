import { FaFacebookF, FaHeart, FaPinterest, FaTwitter } from "react-icons/fa";
import { useLoaderData } from "react-router";

const DetailsBook = () => {
  const books = useLoaderData();

  console.log(books);
  const {
    image,
    title,
    discountPrice,
    officialPrice,
    rating,
    summary,
    author,
  } = books;
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div>
        <div className="flex flex-col md:flex-row gap-8 bg-base-100 p-6 rounded-2xl shadow-md items-center">
          {/* Left: Book Image */}
          <div className="md:w-1/3 w-full flex justify-center">
            <img
              src={image}
              alt={title}
              className="rounded-xl shadow-lg w-full max-w-sm object-cover"
            />
          </div>

          {/* Right: Book Info */}
          <div className="md:w-2/3 w-full space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>

            <div className="flex items-center gap-4">
              <p className="text-2xl font-semibold text-orange-600">
                ${discountPrice}
              </p>
              <p className="line-through text-gray-400  text-lg">
                ${officialPrice}
              </p>
            </div>

            <div className="flex items-center">
              <span className="text-yellow-500 text-xl mr-2">★</span>
              <p className="font-medium">{rating} / 5</p>
            </div>

            <p className="text-gray-600 dark:text-gray-400">{summary}</p>

            <p>
              <span className="font-semibold">
                <span className="text-orange-600 font-semibold">Author:</span>
              </span>{" "}
              {author}
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="btn bg-orange-600/80 text-white btn-sm">
                Add To Cart
              </button>
              <button className="btn btn-outline btn-sm text-orange-600/80 hover:bg-orange-600/80 hover:text-white">
                Buy To Read
              </button>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <FaHeart className="text-error cursor-pointer" />
              <span className="text-sm text-gray-600">Add to Wishlist</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <span className="font-semibold">Share:</span>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-sky-500 hover:text-sky-700">
                <FaTwitter size={20} />
              </a>

              <a href="#" className="text-pink-600 hover:text-pink-800">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBook;
