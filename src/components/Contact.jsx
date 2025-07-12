import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://getform.io/f/ayvvjkyb", {
      method: "POST",
      body: new FormData(e.target)
    });

    if (response.ok) {
      setFormData({ name: "", email: "", message: "" });
      setShowPopup(true);

      // Auto-close popup after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-gray-800 to-black p-4 text-white py-28 relative"
    >
      {showPopup && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg z-50">
          Thank you! Message submitted successfully 🎉
        </div>
      )}

      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-[rgb(255,1,79)] opacity-100">
            CONTACT
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your Message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />

            <button
              type="submit"
              className="text-white font-bold bg-[rgb(255,1,79)] opacity-100 px-6 py-3 my-8 mx-auto 
              flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
