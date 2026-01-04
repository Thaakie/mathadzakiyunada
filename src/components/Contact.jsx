import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-[1100px] mx-auto px-8">
        <h2 className="section-title text-3xl font-bold text-center mb-4">Contact</h2>
        <p className="text-lg text-center text-[#2b2b2b] opacity-70 mb-8">Wanna work with me? Send email or fill out the form below (Under Maintenance).</p>

        <div className="contact-social-links flex justify-center gap-6 mb-12">
          <a href="https://www.linkedin.com/in/m-atha-dzaki-yunada-35052131a/" target="_blank" rel="noopener noreferrer" className="text-[#2b2b2b] no-underline">
            LinkedIn
          </a>
          <a href="https://github.com/Thaakie" target="_blank" rel="noopener noreferrer" className="text-[#2b2b2b] no-underline">
            GitHub
          </a>
          <a href="mailto:atha468@gmail.com" className="text-[#2b2b2b] no-underline">
            Email
          </a>
        </div>

        <form
          className="contact-form max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Backend not yet created");
          }}
        >
          <div className="form-row flex gap-4 mb-4">
            <input type="text" name="name" placeholder="Name" required className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b59c]" />
            <input type="email" name="email" placeholder="Email" required className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b59c]" />
          </div>
          <textarea name="message" placeholder="Your message..." rows="5" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b59c] mb-4"></textarea>
          <button className="btn w-full bg-red-500 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#1a1a1a]" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
