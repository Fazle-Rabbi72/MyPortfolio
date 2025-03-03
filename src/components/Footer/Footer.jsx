import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-color)] text-[var(--text-color)] py-10 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400">My Portfolio</h2>
          <p className="text-var(--text-color) font-semibold mt-2">Building creative and scalable solutions.</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-teal-300">Quick Links</h3>
          <ul className="mt-3 text-[var(--text-color)] font-semibold space-y-2">
            <li><a href="/about" className=" hover:text-teal-300">About</a></li>
            <li><a href="/projects" className=" hover:text-teal-300">Projects</a></li>
            <li><a href="/contact" className=" hover:text-teal-300">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-teal-300">Contact</h3>
          <p className="font-semibold text-[var(--text-color)] mt-3">Email: fazlerabbi0172291@gmail.com</p>
          <p className="font-semibold text-[var(--text-color)]">Phone: +88 01722913206</p>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
