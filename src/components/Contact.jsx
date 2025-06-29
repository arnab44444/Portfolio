import React, { useRef } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
// import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!", {
      position: "top-right",

      autoClose: 3000,
    });
    // emailjs
    //   .sendForm(
    //     "service_vn7inq5",
    //     "template_49dllwg",
    //     formRef.current,
    //     "of4q0FlOsO8veKLp0"
    //   )
    //   .then(() => {
    //     toast.success("✅ Message sent successfully!", {
    //       position: "top-right",
    //       autoClose: 3000,
    //     });
    //     formRef.current.reset();
    //   })
    //   .catch(() => {
    //     toast.error("❌ Failed to send message. Try again.", {
    //       position: "top-right",
    //       autoClose: 3000,
    //     });
    //   });
  };

  return (
    <section className="relative w-full px-6 py-16 bg-gradient-to-br from-cyan-100 via-white to-blue-100 overflow-hidden">
      
            <h2 className="text-4xl font-bold text-center text-cyan-500 mb-10">Contact Me</h2>

      {/* Glowing Background Accent */}
      <div className="absolute top-16 left-10 w-48 h-48 bg-cyan-300 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-12 w-60 h-60 bg-blue-300 opacity-20 rounded-full blur-3xl z-0"></div>

      <ToastContainer />

      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Left Side - Contact Info */}
        <div className="bg-white/50 backdrop-blur-md border border-gray-300 shadow-xl rounded-3xl p-10 space-y-6 text-gray-800">
          <h2 className="text-4xl font-bold text-cyan-600 mb-6 text-center lg:text-left">
            Let's Connect
          </h2>
          <p className="text-lg font-medium leading-relaxed">
            Whether you have questions or just want to say hi, feel free to contact me.
          </p>

          <div className="space-y-5 text-gray-700 font-semibold text-lg">
            <p className="flex items-center gap-4">
              <MdEmail className="text-cyan-500 text-3xl" />
              <a
                href="mailto:arnabbiswas661@gmail.com"
                className="hover:underline"
              >
                arnabbiswas661@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-4">
              <MdPhone className="text-cyan-500 text-3xl" />
              <a href="tel:+8801731531449" className="hover:underline">
                +880 1731531449
              </a>
            </p>
            <p className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-3xl" />
              <a
                href="https://wa.me/8801731531449"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +880 1731531449
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white/50 backdrop-blur-md border border-gray-300 shadow-xl rounded-3xl p-10 space-y-8"
        >
          <h2 className="text-4xl font-bold text-cyan-600 mb-6 text-center lg:text-left">
            Send Me a Message
          </h2>

          <div>
            <label
              htmlFor="user_email"
              className="block mb-2 font-semibold text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              placeholder="you@example.com"
              className="input input-bordered w-full rounded-xl border-cyan-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-600 transition"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 font-semibold text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Subject"
              className="input input-bordered w-full rounded-xl border-cyan-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-600 transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full rounded-xl border-cyan-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-600 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn bg-cyan-600 hover:bg-cyan-700 text-white font-semibold w-full rounded-xl shadow-lg transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
