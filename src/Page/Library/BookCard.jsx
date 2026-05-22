import { TfiWrite } from "react-icons/tfi";
import { SiBookstack } from "react-icons/si";

const BookCard = ({ book }) => {
  const { title, image, author, genre, discountPrice, officialPrice } = book;

  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-xl shadow-lg dark:bg-gray-800 transition-transform duration-300 hover:scale-102">
      {/* Book Image */}
      <img
        className="object-cover object-center w-full h-96"
        src={image}
        alt={title}
      />

      {/* Author Bar */}
      <div className="flex items-center px-6 py-3 bg-orange-600">
        <TfiWrite size={22} className="text-white" />
        <h1 className="mx-3 text-lg font-semibold text-white">{author}</h1>
      </div>

      {/* Book Info */}
      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>

        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
          <SiBookstack size={18} className="mr-2 text-orange-600" />
          <span className="text-sm">{genre}</span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-orange-600">
            ${discountPrice}
          </span>
          <span className="line-through text-gray-500">${officialPrice}</span>
        </div>

       
      </div>
    </div>
  );
};

export default BookCard;
