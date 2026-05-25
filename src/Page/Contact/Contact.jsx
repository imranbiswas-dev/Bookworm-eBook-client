import Swal from "sweetalert2";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const messageData = Object.fromEntries(formData.entries());

    console.log("Contact Message:", messageData);

    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thank You, Sir!",
      text: "Your message has been successfully transmitted. I will get back to you as soon as possible.",
      showConfirmButton: true,
      confirmButtonColor: "#ea580c", 
      background: document.documentElement.classList.contains("dark") ? "#1f2937" : "#fff",
      color: document.documentElement.classList.contains("dark") ? "#fff" : "#000",
    });

    e.target.reset(); 
  };

  return (
    <div className=" dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
            Get In <span className="text-orange-600">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Please fill out the form below to drop a message for any questions, feedback, or business collaborations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
          
          {/* Left Column: Contact Information (5 Columns) */}
          <div className="lg:col-span-5 bg-orange-600 p-8 sm:p-12 flex flex-col justify-between text-white relative">
            {/* Decorative Background Circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full transform translate-x-10 -translate-y-10 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-700 rounded-full transform -translate-x-10 translate-y-20 opacity-30"></div>

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <p className="text-orange-100 text-sm sm:text-base">
                Feel free to reach out directly via email or phone channels at your convenience.
              </p>
            </div>

            {/* Info Items */}
            <div className="relative z-10 my-10 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-700/50 p-3 rounded-xl">
                  <FiPhone size={24} />
                </div>
                <div>
                  <p className="text-xs text-orange-200 uppercase tracking-wider">Call Me</p>
                  <p className="text-base sm:text-lg font-medium">+880 17XX-XXXXXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-700/50 p-3 rounded-xl">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-xs text-orange-200 uppercase tracking-wider">Email Us</p>
                  <p className="text-base sm:text-lg font-medium">developer.imran@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-700/50 p-3 rounded-xl">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-orange-200 uppercase tracking-wider">Location</p>
                  <p className="text-base sm:text-lg font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Platform Branding Footer */}
            <div className="relative z-10 pt-6 border-t border-orange-500 flex items-center space-x-4">
              <span className="text-sm text-orange-100 font-medium">Frontend Developer HQ</span>
            </div>
          </div>

          {/* Right Column: Contact Form (7 Columns) */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Send Me A Message
            </h3>

            <form onSubmit={handleSendMessage} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Imran Hossan"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="imran@example.com"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project, Sir..."
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-orange-600 hover:bg-orange-700 active:scale-[0.98] text-white font-semibold rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>Send Message</span>
                  <FiSend size={16} />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;