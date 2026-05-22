import { TfiWrite } from "react-icons/tfi";
import { SiBookstack } from "react-icons/si";
import { Link } from "react-router";
import { LuBookType, LuSquarePen } from "react-icons/lu";

const BookCard = ({ book }) => {
  const { id, title, image, author, genre, discountPrice, officialPrice } =
    book;

  return (
    <Link
      to={`/detailsBook/${id}`}
      className="w-full max-w-sm overflow-hidden bg-white rounded-xl shadow-lg dark:bg-gray-800 transition-transform duration-300 hover:scale-102"
    >
      {/* Book Image */}
      <img
        className="object-cover object-center w-full h-96"
        src={image}
        alt={title}
      />

      {/* Genre */}
      <div className="flex items-center px-6 py-3 bg-orange-600">
        <LuBookType size={18} className="mr-2 text-white" />
      <span className="text-sm text-white">{genre}</span>
      </div>
      
      {/* Book Info */}
      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>

        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
          <LuSquarePen size={20} className="" />
          <h1 className="mx-3 text-sm font-semibold ">{author}</h1>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-orange-600">
            ${discountPrice}
          </span>
          <span className="line-through text-gray-500">${officialPrice}</span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
