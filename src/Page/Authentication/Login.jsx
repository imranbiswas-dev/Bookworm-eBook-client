import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Components/Context/AuthContext.jsx/AuthContext";

const Login = () => {
  const { signIn , googleLogin} = useContext(AuthContext);
  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });

    // === form reset ===
    form.reset();
  };

  // sign in with google 
const handleGoogleLogin = ()=>{
  googleLogin()
}
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg ">
        {/* Title */}
        <h2 className="mb-3 text-3xl font-bold text-center text-gray-800 dark:text-white">
          Login to your account
        </h2>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Don't have an account?
          <Link
            to="/signUp"
            className="ml-1 text-blue-600 hover:underline focus:underline"
          >
            Sign up
          </Link>
        </p>

        {/* Social Login */}
        <div className="my-6">
          <button onClick={()=>handleGoogleLogin()} className="btn bg-white text-black border-[#e5e5e5] w-full">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="grow border-gray-300 dark:border-gray-600" />
          <span className="px-3 text-sm text-gray-500 dark:text-gray-400">
            OR
          </span>
          <hr className="grow border-gray-300 dark:border-gray-600" />
        </div>

        {/* Form */}
        <form onSubmit={handleEmailLogin} className="space-y-6">
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

          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <a href="#" className="text-xs text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
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

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-blue-600 rounded-lg 
                       hover:bg-blue-700 transition shadow-md active:scale-95"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
