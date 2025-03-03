import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams(); // This will fetch the ID from the URL
  const location = useLocation();
  const project = location.state?.project; // Access project object from state

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-teal-400 text-center mb-8">
        {project.title}
      </h2>
      <div className="flex flex-col md:flex-row">
        <img
          src={project.image}
          alt={project.title}
          className="w-full md:w-1/2 object-cover rounded-md mb-4 md:mr-8"
        />
        <div className="text-gray-300">
          <p className="mb-4">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
