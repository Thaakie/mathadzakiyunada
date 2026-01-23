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
          alert("Pesan berhasil terkirim!");
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
          <a href="https://www.linkedin.com/in/m-atha-dzaki-yunada-35052131a/" id="btn-linkedin" data-name="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-[#2b2b2b] no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
            </svg>
          </a>
          <a href="https://github.com/Thaakie" data-name="GitHub" id="btn-github" target="_blank" rel="noopener noreferrer" className="text-[#2b2b2b] no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
            </svg>
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
