import React, { useState } from "react";
import { FaAws } from "react-icons/fa"; // AWS icon
import {
  SiDjango,
  SiPostgresql,
  SiNodedotjs,
  SiPython,
  SiC,
  SiCplusplus,
} from "react-icons/si"; // Backend icons
import { SiReact, SiTailwindcss } from "react-icons/si"; // Frontend icons

const About = () => {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <section className="py-16 px-6  md:px-16 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-teal-400">About Me</h2>

          {/* Tabs Buttons */}
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-md transition ${
                activeTab === "intro"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setActiveTab("intro")}
            >
              Intro
            </button>
            <button
              className={`px-4 py-2 rounded-md transition ${
                activeTab === "skills"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
            <button
              className={`px-4 py-2 rounded-md transition ${
                activeTab === "academic"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setActiveTab("academic")}
            >
              Academic
            </button>
          </div>

          {/* Content Sections */}
          {activeTab === "intro" && (
            <p className="text-lg text-[var(--text-color)]">
              I'm a passionate{" "}
              <span className="text-teal-500">Backend Developer</span>{" "}
              specializing in Python and Django. I love{" "}
              <span className="text-teal-500">problem-solving</span> and
              constantly challenge myself with complex algorithms and backend
              logic. Alongside backend development, I also work on frontend
              technologies like{" "}
              <span className="text-teal-500">React and Tailwind CSS</span>.
              Currently, I'm learning <span className="text-teal-500">AWS</span>{" "}
              to enhance my cloud computing skills. I have a strong desire to
              explore and master new technologies in the ever-evolving field of
              software development.
            </p>
          )}

          {activeTab === "skills" && (
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-teal-400">Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3 text-gray-300">
                {/* Backend Skills */}
                <div className="flex items-center bg-gray-800 p-2 rounded-lg text-center">
                  <SiDjango className="text-teal-400 text-2xl mr-2" /> Django
                </div>
                <div className="flex items-center bg-gray-800 p-2 rounded-lg text-center">
                  <SiPostgresql className="text-teal-400 text-2xl mr-2" />{" "}
                  PostgreSQL
                </div>
                <div className="flex items-center bg-gray-800 p-2 rounded-lg text-center">
                  <SiNodedotjs className="text-teal-400 text-2xl mr-2" />{" "}
                  Node.js
                </div>
                <div className="flex items-center bg-gray-800 p-2 rounded-lg text-center">
                  <FaAws className="text-teal-400 text-2xl mr-2" /> AWS
                </div>
                <div className="flex items-center bg-gray-800 p-2 rounded-lg text-center">
                  <SiPython className="text-teal-400 text-2xl mr-2" /> Python
                </div>
                <div className="flex items-center bg-gray-800 p-2 rounded-lg text-center">
                  <SiC className="text-teal-400 text-2xl mr-2" /> C
                </div>
                <div className="flex items-center bg-gray-800 p-2 rounded-lg text-center">
                  <SiCplusplus className="text-teal-400 text-2xl mr-2" /> C++
                </div>

                {/* Frontend Skills */}
                <div className="flex items-center bg-gray-800 p-2 rounded-lg text-center">
                  <SiReact className="text-teal-400 text-2xl mr-2" /> React
                </div>
                <div className="flex items-center bg-gray-800 p-2 rounded-lg text-center">
                  <SiTailwindcss className="text-teal-400 text-2xl mr-2" />{" "}
                  Tailwind CSS
                </div>
              </div>
            </div>
          )}

          {activeTab === "academic" && (
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-teal-400">Academic</h3>
              <p className="text-lg text-gray-300">
                <strong>🎓 BSc in Computer Science & Engineering</strong>
              </p>
              <p className="text-gray-400">📍 City University</p>
              <p className="text-gray-400">📅 2023 - 2027</p>
            </div>
          )}
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-400 shadow-lg shadow-teal-500/50 group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-300 opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
            <img
              src="https://avatars.githubusercontent.com/u/142036307?s=400&u=c47583584f90cf5a031a40eaecf6ef429287f7c8&v=4"
              alt="Profile"
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
            />
            <div className="absolute bottom-0 left-0 w-full text-center text-[var(--text-color)] bg-teal-400 bg-opacity-40 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-semibold">Fazle Rabbi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
