/** @jsxImportSource react */
"use client";

import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="py-12 px-4 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-[#FFEEF1] shadow-lg rounded-lg overflow-hidden">
        {/* Left: Form Section */}
        <div className="flex-1 p-6 md:p-10">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#004AAB] mb-4">
            Contact Us
          </h2>

          {/* Needle Effect */}
          <div className="relative mt-2 mb-4">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#DC143B]"></div>
            <div className="w-[150px] h-1 bg-[#DC143B] ml-4"></div>
          </div>

          {/* Form */}
          <form>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-800 text-white py-3 rounded-md font-semibold hover:bg-blue-900 transition"
            >
              Submit Now
            </button>
          </form>
        </div>

        {/* Right: Image Section */}
        <div className="hidden md:flex md:w-1/2 items-end p-0">
          <Image
            src="/images/contact-us.png" // Replace with your image path
            alt="Doctor Illustration"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
