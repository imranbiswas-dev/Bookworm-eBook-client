import { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Components/Context/AuthContext.jsx/AuthContext";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Password check
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          console.log("Profile updated:", user);
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // === form reset ===
    form.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800">
        {/* Title */}
        <h2 className="mb-3 text-3xl font-bold text-center text-gray-800 dark:text-white">
          Create your account
        </h2>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?
          <Link
            to="/login"
            className="ml-1 text-blue-600 hover:underline focus:underline"
          >
            Login
          </Link>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Photo URL
            </label>
            <input
              type="url"
              id="photo"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••"
              className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••"
              name="confirmPassword"
              className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-blue-600 rounded-lg 
                       hover:bg-blue-700 transition shadow-md active:scale-95"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
