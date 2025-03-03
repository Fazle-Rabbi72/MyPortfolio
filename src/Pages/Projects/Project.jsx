import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully functional e-commerce website with payment integration.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    id: 2,
    title: "Hotel Booking System",
    description: "A hotel booking system with user authentication and payment handling.",
    image: "https://i.postimg.cc/prpFvwVv/naturesparadaise.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
 
];
//update
const Project = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-teal-400 text-center mb-10 uppercase tracking-wider">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-[var(--bg-color-2)] backdrop-blur-xl p-6 rounded-xl shadow-lg border border-transparent hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-teal-500/50"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-teal-300">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <Link
                to={`/projects/${project.id}`}
                state={{ project }}
                className="mt-4 inline-block px-6 py-2 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-teal-500/50"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
