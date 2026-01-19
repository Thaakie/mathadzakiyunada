import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const SERVICE_ID = "service_9tjra32";
    const TEMPLATE_ID = "template_x53m1re";
    const PUBLIC_KEY = "l3iZXEEDv1OSF5zkt";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsLoading(false);
          alert("Pesan berhasil terkirim ke emailmu!");
          e.target.reset();
        },
        (error) => {
          setIsLoading(false);
          console.error("FAILED...", error.text);
          alert("Gagal mengirim pesan, silakan coba lagi.");
        },
      );
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-[1100px] mx-auto px-8">
        <h2 className="section-title text-3xl font-bold text-center mb-4">Contact</h2>
        <p className="text-lg text-center text-[#2b2b2b] opacity-70 mb-8">Wanna work with me? Send email or fill out the form below.</p>

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

        <form ref={form} onSubmit={sendEmail} className="contact-form max-w-md mx-auto">
          <div className="form-row flex gap-4 mb-4">
            <input type="text" name="user_name" placeholder="Name" required className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b59c]" />
            <input type="email" name="user_email" placeholder="Email" required className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b59c]" />
          </div>
          <textarea name="message" placeholder="Your message..." rows="5" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b59c] mb-4"></textarea>

          <button className="btn w-full bg-red-500 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#1a1a1a] disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
