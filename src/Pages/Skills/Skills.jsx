import React from "react";
import { FaAws, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiPostgresql, SiC, SiCplusplus, SiApache } from "react-icons/si";

const skills = [
  // Backend Skills
  { id: 1, name: "Django", icon: <SiDjango className="text-green-600 text-5xl" /> },
  { id: 2, name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-5xl" /> },
  { id: 3, name: "Node.js", icon: <FaNodeJs className="text-green-400 text-5xl" /> },
  { id: 4, name: "AWS", icon: <FaAws className="text-teal-400 text-5xl" /> },
  { id: 5, name: "Python", icon: <FaPython className="text-blue-400 text-5xl" /> },
  { id: 6, name: "C", icon: <SiC className="text-teal-400 text-5xl" /> },
  { id: 7, name: "C++", icon: <SiCplusplus className="text-teal-400 text-5xl" /> },
  { id: 8, name: "Apache", icon: <SiApache className="text-gray-600 text-5xl" /> },

  // Frontend Skills
  { id: 9, name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { id: 10, name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { id: 11, name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { id: 12, name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
  { id: 13, name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
];

const Skills = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-teal-400 text-center mb-10">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[var(--bg-color-2)] p-6 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
