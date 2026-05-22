const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto">
        {/* Large and medium view */}
      <header className="bg-white dark:bg-gray-900 hidden md:block">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
              <button className="w-3 h-3 mx-2 bg-orange-500 rounded-full lg:mx-0 focus:outline-none"></button>
              <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-orange-500"></button>
              <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-orange-500"></button>
              <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-orange-500"></button>
            </div>

            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                Read & Publish E-Books
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Discover a modern platform where readers can enjoy unlimited
                e-books and writers can easily publish their own. Share your
                creativity, build your audience, and explore thousands of
                digital books anytime, anywhere.
              </p>
              <div className="">
                <button
                  className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center 
             text-white capitalize bg-orange-600/80 rounded-lg 
             hover:bg-orange-600 transition-all duration-300 
             shadow-md hover:shadow-lg active:scale-95"
                >
                  Discover New E-Books
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full max-w-2xl rounded-lg shadow-md"
              src="https://static.vecteezy.com/system/resources/thumbnails/056/111/199/small/digital-technology-book-photo.jpg"
              alt="apple watch photo"
            />
          </div>
        </div>
      </header>

      {/* Small view */}
      <header className="block md:hidden px-4 py-6">
        <div
          className="relative bg-white dark:bg-neutral-800 
                  border border-gray-200 dark:border-neutral-700 
                  shadow-md rounded-xl overflow-hidden"
        >
          <img
            className="w-full h-48 object-cover rounded-t-xl"
            src="https://static.vecteezy.com/system/resources/thumbnails/056/111/199/small/digital-technology-book-photo.jpg"
            alt="Card Image"
          />

          <div className="absolute inset-0 bg-black/40 rounded-t-xl"></div>

          <div className="absolute bottom-0 inset-x-0 p-4">
            <h3 className="font-semibold text-white text-lg">
              Read & Publish E-Books
            </h3>
            <p className="mt-1 text-sm text-gray-200">
              Discover a modern platform where readers can enjoy unlimited
              e-books and writers can easily publish their own.
            </p>
            <button
              className="mt-4 px-4 py-2 text-sm font-medium text-white 
                   capitalize bg-orange-600/80 rounded-lg 
                   hover:bg-orange-600 transition-all duration-300 
                   shadow-md hover:shadow-lg active:scale-95"
            >
              Discover New E-Books
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
