import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:h-[90vh]">
          {/* Left Side - Follow Me Section (Desktop Only) */}
          <div className="hidden lg:flex flex-col items-center space-y-4">
            <div className="flex flex-col space-y-4 items-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl hover:text-blue-600 transition" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl hover:text-blue-400 transition" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-blue-700 transition" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl hover:text-gray-900 transition" />
              </a>
            </div>
            <div className="w-[2px] h-12 bg-[var(--text-color)]"></div>
            <h3 className="text-xl font-semibold border px-4 bg-teal-500 rounded -rotate-90 whitespace-nowrap">
              Follow Me
            </h3>
          </div>

          {/* Right Side - Hero Content */}
          <div className="flex flex-col space-y-6 text-left items-start w-full">
            <h1 className="text-4xl md:text-6xl font-bold w-full bg-gradient-to-r from-red-700 via-teal-500 to-blue-500 text-transparent bg-clip-text animate-pulse">
              Hi There, <br />
              I'm <span className="text-red-500">Fazle Rabbi</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4 w-full font-bold text-gray-500">
              Backend Developer (Python)
            </p>
            <p className="mb-4 w-full text-gray-500 leading-relaxed">
              I’m a skilled and experienced backend developer passionate about
              coding,<br /> problem-solving, and creating impactful software
              solutions.
            </p>
            <button className="relative bg-teal-500 text-white px-6 py-3 rounded-md self-start shadow-lg transition-transform transform hover:scale-105 hover:shadow-teal-500/50">
              <a
                href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold tracking-wider"
              >
                RESUME
              </a>
            </button>
          </div>

          {/* Follow Me Section (Mobile Only) */}
          <div className="md:hidden">
            <div className=" flex-col items-center space-y-4 w-full flex mt-10">
              <h3 className="text-xl font-semibold border px-4 bg-teal-500 text-center">
                Follow Me
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl hover:text-blue-600 transition" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl hover:text-blue-400 transition" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl hover:text-blue-700 transition" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl hover:text-gray-900 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
