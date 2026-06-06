import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { fadeUp, staggerParent, viewport } from "../utils/motion";

const fieldClassName =
  "w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#2b2b2b] placeholder:text-[#2b2b2b]/35 focus:border-[#2b2b2b] focus:outline-none focus:ring-0";

const Contact = () => {
  const form = useRef();
  const lastSentRef = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const COOLDOWN = 30_000;

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    if (Date.now() - lastSentRef.current < COOLDOWN) {
      alert("Tunggu beberapa detik sebelum mengirim lagi.");
      return;
    }

    if (form.current.website?.value) {
      return;
    }

    try {
      setIsLoading(true);

      await emailjs.sendForm("service_9tjra32", "template_x53m1re", form.current, {
        publicKey: "l3iZXEEDv1OSF5zkt",
      });

      lastSentRef.current = Date.now();

      Swal.fire({
        title: "Success sended the email!",
        icon: "success",
        draggable: true,
      });

      e.target.reset();
    } catch (error) {
      console.error("FAILED...", error);

      if (error.status === 429) {
        alert("Terlalu banyak permintaan. Tunggu beberapa saat lalu coba lagi.");
      } else {
        alert("Gagal mengirim pesan, silakan coba lagi.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        <motion.div
          className="rounded-[32px] border-[3px] border-[#2b2b2b] bg-[#fbfaf7] px-6 py-8 md:px-10 md:py-12 lg:px-14"
          variants={staggerParent(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="mb-12 flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2b2b2b]/60">
            <motion.span variants={fadeUp}>Contact</motion.span>
            <motion.span variants={fadeUp}>Available for collaboration</motion.span>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <motion.div
              variants={staggerParent(0.1, 0.04)}
              className="flex min-h-full flex-col justify-start"
            >
              <div>
                <motion.h2
                  variants={fadeUp}
                  className="max-w-md text-4xl font-medium leading-[1.05] text-[#2b2b2b] md:text-5xl"
                >
                  Let&apos;s collaborate
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-sm text-sm leading-relaxed text-[#2b2b2b]/52"
                >
                  If you have a web idea, internship opportunity, or a creative
                  project in mind, I&apos;d be happy to hear from you.
                </motion.p>
              </div>
            </motion.div>

            <motion.form
              ref={form}
              onSubmit={sendEmail}
              variants={staggerParent(0.08, 0.06)}
              className="flex flex-col justify-center"
            >
              <motion.p
                variants={fadeUp}
                className="mb-8 text-lg font-medium text-[#2b2b2b]"
              >
                Say hello
              </motion.p>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                <motion.label variants={fadeUp} className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2b2b2b]/42">
                    Name
                  </span>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    required
                    className={fieldClassName}
                  />
                </motion.label>

                <motion.label variants={fadeUp} className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2b2b2b]/42">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Choose subject"
                    className={fieldClassName}
                  />
                </motion.label>

                <motion.label variants={fadeUp} className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2b2b2b]/42">
                    Company
                  </span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company"
                    className={fieldClassName}
                  />
                </motion.label>

                <motion.label variants={fadeUp} className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2b2b2b]/42">
                    Email
                  </span>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email address"
                    required
                    className={fieldClassName}
                  />
                </motion.label>
              </div>

              <motion.label variants={fadeUp} className="mt-6 block">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2b2b2b]/42">
                  Message
                </span>
                <textarea
                  name="message"
                  placeholder="Start typing here"
                  rows="4"
                  required
                  className={`${fieldClassName} resize-none`}
                />
              </motion.label>

              <input type="text" name="website" className="hidden" />

              <motion.button
                variants={fadeUp}
                type="submit"
                disabled={isLoading}
                className="mt-10 inline-flex w-fit items-center gap-3 border-0 bg-transparent px-0 text-sm font-medium text-[#2b2b2b] transition-opacity duration-300 hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-40"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isLoading ? "Sending..." : "Submit"}</span>
                <span aria-hidden="true">-&gt;</span>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
