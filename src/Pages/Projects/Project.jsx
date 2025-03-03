import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "HR Management System",
    description: "A full-stack web application for managing employees.",
    image: "https://i.postimg.cc/prcGVJPL/HRM.jpg",
    details:
      "The HR Management System is a comprehensive solution designed to automate and streamline various employee management processes, ensuring efficiency, accuracy, and enhanced decision-making. By implementing role-based access control (RBAC) and providing user-specific functionalities, this system facilitates smooth workflows within the organization. With features such as employee records management, attendance tracking, leave management, payroll systems, and performance evaluations, the system allows Human Resources (HR) departments to focus on strategic tasks rather than administrative work.The system is built using Django REST Framework (DRF), enabling the development of secure APIs for accessing employee data, and is complemented by an intuitive frontend built with React.js, Tailwind CSS, and JavaScript. The project is designed to handle all aspects of employee management, ensuring data integrity, security, and ease of use.For api documentation I have used Swagger",

    technology: [
      "Django REST Framework",
      "Python",
      "React js",
      "Tailwind CSS",
      "JavaScript",
      "PostgreSQL",
    ],
    tools: ["VS Code", "GitHub", "Vercel", "Postman", "Swagger"],
    link_frontend: "https://hr-management-system-frontend-seven.vercel.app/",
    link_backend:
      "https://vercel.com/fazle-rabbis-projects-77d91d11/hr-management-system",
    link_backend_code: "https://github.com/Fazle-Rabbi72/HR-Management-System",
  },
  {
    id: 2,
    title: "Hotel Booking System",
    description:
      "A hotel booking system with user authentication and payment handling.",
    image: "https://i.postimg.cc/prpFvwVv/naturesparadaise.jpg",
    details:
      "This hotel booking system is a full-stack web application that provides a seamless experience for users to search, book, and manage hotel reservations. The platform integrates secure authentication, real-time balance adjustments, automated email notifications, and review management. Built using Django REST Framework for the backend and HTML, CSS, and JavaScript for the frontend, the system ensures data integrity, security, and efficiency while providing a smooth user experience.",
    technology: [
      "Django REST Framework",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Sqlite",
      "Bootstrap",
    ],
    tools: ["VS Code", "GitHub", "Render", "Postman", "Netlify"],
    link_frontend: "https://natures-paradise.netlify.app/",
    link_backend: "https://natures-paradise-stlb.onrender.com/",
    link_backend_code: "https://github.com/Fazle-Rabbi72/hotel_booking_backend",
    link_frontend_code:
      "https://github.com/Fazle-Rabbi72/hotel_booking_frontend",
  },
  {
    id: 3,
    title: "Computer Club Management System (Team Lead - Backend)",
    description: "A full-stack web application for managing computer clubs.",
    image: "https://i.postimg.cc/15LsRpCt/cse-club.jpg",
    details:
      "Designed and developed a comprehensive club management platform that streamlines membership handling, executive body management, voting, messaging, blog posts, event management, and activity tracking. The system ensures secure role-based access, automated email notifications, and real-time collaboration for club members. Built using Django REST Framework and SQLite, this project emphasizes security, data integrity, and efficient API design to manage club operations effectively.",
    technology: [
      "Django REST Framework",
      "Python",
      "React js",
      "JavaScript",
      "Sqlite",
      "Tailwind CSS",
    ],
    tools: ["VS Code", "GitHub", "Render", "Postman"],
    link_frontend: "https://computerclub-cityuniversity.netlify.app/",
    link_backend: "https://computer-club.onrender.com",
    link_backend_code: "https://github.com/Fazle-Rabbi72/computer_club",
  },
];

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
              {/* Project Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Project Title */}
              <h3 className="mt-4 text-2xl font-semibold text-teal-300 text-center md:text-left">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="mt-2 text-gray-400 text-center md:text-left">
                {project.description}
              </p>

              {/* View Project Button */}
              <div className="mt-4 flex justify-center md:justify-start">
                <Link
                  to={`/projects/${project.id}`}
                  state={{ project }}
                  className="px-6 py-2 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-teal-500/50"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
