import { Link } from "react-router";
import { FiBookOpen, FiDownload, FiCloudLightning, FiShield } from "react-icons/fi";

const About = () => {
  // === Platform Value Pillars ===
  const coreFeatures = [
    {
      icon: <FiBookOpen className="text-orange-600 dark:text-orange-500" size={24} />,
      title: "Extensive Digital Library",
      description: "Gain instantaneous access to thousands of curated e-books across diverse genres, including fiction, academics, and technical engineering."
    },
    {
      icon: <FiDownload className="text-orange-600 dark:text-orange-500" size={24} />,
      title: "Offline Reading Mode",
      description: "Download your preferred books seamlessly onto your local dashboard storage and continue reading without needing an active internet connection."
    },
    {
      icon: <FiCloudLightning className="text-orange-600 dark:text-orange-500" size={24} />,
      title: "Lightning-Fast Syncing",
      description: "Your reading progress, personal bookmarks, and highlighted passages sync instantly across your profile context, ensuring zero data loss."
    }
  ];

  // === Performance Statistics ===
  const platformStats = [
    { value: "10K+", label: "Active Readers" },
    { value: "5,000+", label: "Digital E-Books" },
    { value: "500+", label: "Verified Authors" },
    { value: "4.9/5", label: "User Rating" }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section 1: Hero Concept Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Asset with Modern Gradient Glow */}
          <div className="lg:col-span-5 relative group justify-self-center">
            <div className="absolute -inset-2 bg-linear-to-r from-orange-600 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80" 
                alt="Digital E-Book Library Application" 
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column: Platform Description */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Revolutionizing the Way You <span className="text-orange-600">Read & Learn</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Sir, our premier e-book platform is designed to break down the physical boundaries of learning. We offer a modern space where book enthusiasts can comfortably access, organize, and manage their favorite literature directly inside an integrated, zero-latency dashboard.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400">
              By combining an elegant user interface with efficient client-side rendering architecture, we provide a smooth, distraction-free reading atmosphere tailored specifically for modern literary demands.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link 
                to="/library" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-orange-600 hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
              >
                Explore Books
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-xl text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2: Real-time Metric Aggregation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 text-center ">
          {platformStats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-4xl font-extrabold text-orange-600">{stat.value}</p>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Section 3: Value System & Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Side: Core Pillars */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Why Read On Our Platform ?</h2>
            <div className="space-y-4">
              {coreFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/40 rounded-xl shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Quality Assurance / Legal Trust Box */}
          <div className="md:col-span-5 bg-linear-to-br from-orange-600 to-amber-600 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between min-h-87.5 md:mt-15
          ">
            {/* Vector Background Graphic */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="bg-white/20 p-3 rounded-2xl w-fit">
                <FiShield size={32} />
              </div>
              <h3 className="text-2xl font-bold">100% Genuine & Verified Publishing</h3>
              <p className="text-orange-50 text-sm leading-relaxed">
                Every digital file uploaded to our database goes through automated script checking to ensure high text rendering quality, validated internal metadata, and complete security against external vulnerabilities.
              </p>
            </div>

            <div className="pt-6 border-t border-white/20 relative z-10">
              <p className="text-xs text-orange-100 font-semibold tracking-wider uppercase">
                Premium E-Book Ecosystem
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;