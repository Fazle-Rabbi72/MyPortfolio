import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams(); // This will fetch the ID from the URL
  const location = useLocation();
  const project = location.state?.project; // Access project object from state

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="container mx-auto p-6 py-16">
      <h2 className="text-4xl font-bold text-teal-400 text-center mb-8">
        {project.title}
      </h2>
      <div className="flex flex-col md:flex-row">
        <img
          src={project.image}
          alt={project.title}
          className="w-full md:w-1/2 object-cover rounded-md mb-4 md:mr-8"
        />
        <div className="text-gray-500">
          <h3 className="text-2xl font-semibold mb-4">Project Details</h3>
          <div className="mb-4 ">
          <p className="mb-4 text-[var(--text-color)]">{project.details}</p>
          </div>
          <div className="flex space-x-4">
            <Link to={project.link_frontend}  className="mt-4 inline-block px-6 py-2 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-teal-500/50"
              >Live Preview</Link>
            <Link to={project.link_backend}  className="mt-4 inline-block px-6 py-2 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-teal-500/50"
              >Live API</Link>
            <Link to={project.link_backend_code}  className="mt-4 inline-block px-6 py-2 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-teal-500/50"
              >CLIENT CODE</Link>
          </div>
        </div>
      </div>
      {/* Technology */}
      <div className="mt-2">
        <h4 className="text-teal-400 font-semibold">Technology Used:</h4>
        <ul className="flex flex-wrap gap-2 mt-1">
          {project.technology.map((tech, index) => (
            <li
              key={index}
              className="px-2 py-1 bg-blue-600 text-white text-sm rounded"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div className="mt-2">
        <h4 className="text-teal-400 font-semibold">Tools:</h4>
        <ul className="flex flex-wrap gap-2 mt-1">
          {project.tools.map((tool, index) => (
            <li
              key={index}
              className="px-2 py-1 bg-green-600 text-white text-sm rounded"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
