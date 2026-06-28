import { Link } from "react-router";
import { LuBookType, LuSquarePen } from "react-icons/lu";

const BookCard = ({ book }) => {
  const { _id, title, image, author, genre, discountPrice, officialPrice } =
    book;

  return (
    <Link
      to={`/detailsBook/${_id}`}
      className="group relative flex w-full max-w-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
    >
      {/* Book Image Container */}
      <div className="relative aspect-3/4 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950 h-40 sm:h-60 md:h-90">
        <img
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={title}
        />
        {/* Absolute Genre Badge - Premium look */}
        <div className="absolute top-2 left-2 flex items-center gap-1 rounded-lg bg-neutral-900/80 px-2 py-1 backdrop-blur-md dark:bg-neutral-800/90">
          <LuBookType size={12} className="text-amber-500" />
          <span className="text-[10px] md:font-bold uppercase tracking-wider text-white sm:text-xs">
            {genre}
          </span>
        </div>
      </div>

      {/* Book Info */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        {/* Title */}
        <h1 className="line-clamp-1 text-sm font-bold text-neutral-800 transition-colors duration-200 group-hover:text-amber-600 dark:text-neutral-100 sm:text-base md:text-lg">
          {title}
        </h1>

        {/* Author */}
        <div className="mt-1 flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400">
          <LuSquarePen size={14} className="shrink-0 text-neutral-400" />
          <p className="truncate text-xs font-medium">{author}</p>
        </div>

        {/* Price Section */}
        <div className="mt-auto pt-3 flex items-baseline justify-between gap-2 border-t border-neutral-50 dark:border-neutral-800">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-black text-amber-600 sm:text-base md:text-lg">
              ${discountPrice}
            </span>
            <span className="text-[10px] text-neutral-400 line-through sm:text-xs">
              ${officialPrice}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;