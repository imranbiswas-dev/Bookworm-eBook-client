import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../Components/Context/AuthContext.jsx/AuthContext";
import { API } from "./../../config/config";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router";


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`${API.books}/email/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user]);

  if (loading) {
    return <p className="text-center mt-10">Loading your books...</p>;
  }

  if (!books || books.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold text-gray-600">
          No books found for {user?.email}
        </h2>
      </div>
    );
  }

  // === Delete Card ===
  const handleDelete = (_id) => {
    fetch(`${API.books}/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  console.log(books);
  return (
    <div className="max-w-7xl mx-auto mt-10 min-h-screen grid grid-cols-12 justify-self-center gap-5">
      {/* Profile */}
      <section className="col-span-4  ">
        <div className="flex flex-col justify-center max-w-xs  p-6 shadow-md rounded-xl sm:px-12 bg-white dark:bg-gray-800 dark:text-gray-100 sticky top-25">
          {/* Profile Image */}
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-orange-500"
          />

          {/* Name */}
          <div className="space-y-4 text-center divide-y divide-gray-200 dark:divide-gray-700 mt-4">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {user?.displayName || "Anonymous User"}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user?.email}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center pt-4 space-x-4">
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md hover:text-orange-600 transition-colors"
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="p-2 rounded-md hover:text-pink-500 transition-colors"
              >
                <i className="fa-brands fa-dribbble text-xl"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md hover:text-blue-500 transition-colors"
              >
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
              <a
                href={`mailto:${user?.email}`}
                aria-label="Email"
                className="p-2 rounded-md hover:text-red-500 transition-colors"
              >
                <i className="fa-solid fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="col-span-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-self-center gap-10 ">
          {books.map((book) => (
            <div className="card w-96 bg-base-100 card-xs shadow-sm  ">
              <div className="card-body">
                <span className="grid grid-cols-12 gap-2   justify-self-center items-center-safe ">
                  <div className="col-span-3 ">
                    <img className="w-25 h-30" src={book.image} alt="" />
                  </div>
                  <div className="col-span-7 space-y-1 ">
                    <h2 className="text-lg font-semibold">{book.title}</h2>
                    <p className="text-gray-600">{book.author}</p>
                    <p>{book.rating}</p>
                    <p className="text-lg">${book.discountPrice}</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 col-span-2">
                    <Link
                      to={`/detailsBook/${book._id}`}
                      className="btn btn-sm join-item flex items-center gap-1 "
                    >
                      <FiEye size={14} />
                    </Link>

                    <Link
                      to={`/update/${book._id}`}
                      className="btn btn-sm join-item flex items-center gap-1"
                    >
                      <FiEdit size={14} />
                    </Link>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="btn btn-sm join-item flex items-center gap-1 text-red-500"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
