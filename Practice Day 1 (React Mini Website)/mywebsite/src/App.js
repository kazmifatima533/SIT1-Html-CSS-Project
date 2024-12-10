import React, { useState } from "react";
import Navbar from "./components/Navbar";
import homeImage from './images/lips.jpg'; // Import the local image
import aboutUsImage from './images/about.jpg'; // Import the local image for About Us

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
    // In a real-world scenario, you'd send this data to a server
  };


  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="mt-20">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-red-50 px-10 py-16"
        >
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-6xl font-extrabold text-red-700 leading-tight mb-6">
              Discover Your Perfect Shade
            </h1>
            <p className="text-lg text-red-900 leading-relaxed mb-8">
              At Lipstick Shop, we bring you a luxurious collection of high-quality lipsticks 
              designed to suit every mood and occasion. From bold statement colors to subtle, 
              everyday hues, our products are crafted to enhance your confidence and style.
            </p>
            <a
              href="#about-us"
              className="bg-red-600 text-white px-8 py-4 text-lg rounded-full shadow-md hover:bg-red-800 transition duration-300"
            >
              Explore More
            </a>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={homeImage}
              alt="Beautiful Lips with Lipstick"
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
        </section>
   

         {/* About Us Section */}
        <section
          id="about-us"
          className="min-h-screen bg-red-50 px-8 py-16"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-5xl font-extrabold text-red-700 mb-6 leading-tight">About Us</h2>
              <p className="text-lg text-red-900 mb-6">
                At Lipstick Shop, we are passionate about providing high-quality, vibrant, and long-lasting lipsticks that cater to every style. Our mission is to offer a diverse range of shades that empower individuals to express themselves confidently.
              </p>
              <p className="text-lg text-red-900 mb-6">
                We believe in cruelty-free beauty and sustainability, ensuring that all of our products are vegan and ethically produced. Whether you're seeking the perfect red, a soft nude, or something bold and exciting, we have you covered.
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={aboutUsImage}
                alt="About Us"
                className="rounded-lg shadow-xl max-w-full"
              />
            </div>
          </div>
        </section>
{/* Contact Us Section */}
        <section
          id="contact-us"
          className="min-h-screen bg-gray-100 px-8 py-16"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-extrabold text-red-700 mb-6 leading-tight">Contact Us</h2>
            
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg text-red-800 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg text-red-800 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg text-red-800 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  rows="6"
                />
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
        </main>
    </div>
  );
}


export default App;
