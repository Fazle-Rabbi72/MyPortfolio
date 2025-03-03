import React from "react";

const Contact = () => {
  return (
    <section className="py-10 mb-10 px-10  md:px-16 bg-[var(--bg-color)] text-[var(--text-color)]">
      <h2 className="text-4xl font-bold text-teal-400 text-center mb-10 uppercase tracking-wider">
        Contact Us
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Contact Info */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-teal-400 animate-pulse">
            Empower Your Vision
          </h2>
          <p className="text-[var(--text-color)] text-lg leading-relaxed">
            Ready to turn dreams into digital reality? Don't wait—reach out
            today and let's craft extraordinary experiences that leave a lasting
            impact.
          </p>
          <a
            href="mailto:fazlerabbi0172291@gmail.com"
            className="inline-block bg-gradient-to-r from-green-400 to-teal-500 text-[var(--text-color)] py-4 px-8 rounded-full font-semibold shadow-lg transform hover:scale-105 transition duration-300"
          >
            CONTACT ME
          </a>
        </div>

        {/* Right Side - Contact Details */}
        <div className="bg-[var(--bg-color)] p-8 rounded-xl shadow-2xl space-y-6 text-center md:text-left border border-teal-500">
          <p className="text-lg flex items-center gap-2">
            <span className="font-semibold text-teal-400">📧 Email:</span>{" "}
            <a
              href="mailto:fazlerabbi0172291@gmail.com"
              className="hover:text-teal-300"
            >
              fazlerabbi0172291@gmail.com
            </a>
          </p>
          <p className="text-lg flex items-center gap-2">
            <span className="font-semibold text-teal-400">📞 Phone:</span>{" "}
            <a href="tel:+8801722913206" className="hover:text-teal-300">
              +8801643797859
            </a>{" "}
            (Whatsapp)
          </p>
          <p className="text-lg flex items-center gap-2">
            <span className="font-semibold text-teal-400">🔗 LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/fazle-rabbi-852616252/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300"
            >
              www.linkedin.com/fazle-rabbi
            </a>
          </p>
          <p className="text-lg flex items-center gap-2">
            <span className="font-semibold text-teal-400">📍 Address:</span>{" "}
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
