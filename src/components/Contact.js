import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Your message has been sent successfully! ✅");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message. Please try again later. ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error connecting to the server. Try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Animated Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fadeIn text-center">
          Get in Touch
        </h2>
        <p className="text-base md:text-lg text-white mb-8 animate-fadeIn delay-100 text-center">
          I'd love to hear from you! Please fill out the form below to get in touch.
        </p>

        {/* Contact Form Card */}
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 md:p-8 animate-slideUp">
          {status && <p className="text-center mb-4 text-green-500 font-medium">{status}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg h-28 md:h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-semibold py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
