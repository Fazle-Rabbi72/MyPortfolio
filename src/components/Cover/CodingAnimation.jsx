import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "Python", image: "/images/python.png" },
  { name: "C", image: "/images/c.png" },
  { name: "C++", image: "/images/cpp.png" },
  { name: "CSS", image: "/images/css.png" },
  { name: "React.js", image: "/images/react.png" },
  { name: "HTML", image: "/images/html.png" },
  { name: "Django REST Framework", image: "/images/drf.png" },
];

const CodingAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.img
        key={techStack[index].image}
        src={techStack[index].image}
        alt={techStack[index].name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 object-contain"
      />
      <motion.div
        key={techStack[index].name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-blue-400 mt-4"
      >
        {techStack[index].name}
      </motion.div>
    </div>
  );
};

export default CodingAnimation;