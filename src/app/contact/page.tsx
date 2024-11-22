"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Side */}
      <div className="w-full md:w-1/3 bg-gray-100 flex flex-col justify-center items-center p-6 md:p-8">
        <div className="w-full max-w-xs">
          <img
            src="contact.png"
            alt="Support"
            className="w-20 sm:w-28 mx-auto mb-6"
          />
          <div className="mb-4 text-center md:text-left">
            <p className="text-sm sm:text-base font-semibold text-gray-700">Address</p>
            <p className="text-gray-600 text-xs sm:text-sm">
              NY State Thruway, New York, USA
            </p>
          </div>
          <div className="mb-4 text-center md:text-left">
            <p className="text-sm sm:text-base font-semibold text-gray-700">Phone</p>
            <p className="text-gray-600 text-xs sm:text-sm">+129290122122</p>
          </div>
          <div className="mb-4 text-center md:text-left">
            <p className="text-sm sm:text-base font-semibold text-gray-700">Email</p>
            <p className="text-gray-600 text-xs sm:text-sm">demo@demo.com</p>
          </div>
          <div className="mb-4 text-center md:text-left">
            <p className="text-sm sm:text-base font-semibold text-gray-700">Website</p>
            <a
              href="https://redq.io"
              className="text-blue-500 hover:underline text-xs sm:text-sm"
            >
              Visit This Site
            </a>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition transform hover:scale-110"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition transform hover:scale-110"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/3 flex justify-center items-center p-6 sm:p-8">
        <form
          className="w-full max-w-full sm:max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">
            How can we improve your experience?
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-800 text-sm sm:text-base font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-800 text-sm sm:text-base font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-800 text-sm sm:text-base font-medium mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-800 text-sm sm:text-base font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white text-sm sm:text-base font-semibold px-4 py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 transition"
          >
            Submit
          </button>
          {/* Success Message */}
          {formSubmitted && (
            <div className="mt-4 text-green-600 text-center font-semibold">
              Your message has been submitted successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
