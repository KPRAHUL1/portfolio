import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../../data/projectData";
import { leftarrow } from "../../assets/icons/icon";
import { projecticon } from "../../assets/icons/icon";
const Project = () => {
  const navigate = useNavigate();

  return (
    <>
    <nav className="py-6 xl:px-36 border-b md:px-20 gap-3 px-5 border-gray-300 flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Back to Home */}
        <button
          onClick={() => (window.location.href = "/")}
          className="flex flex-row gap-2 items-center cursor-pointer"
        >
          <img src={leftarrow} alt="" className="w-4" />
          <h1 className="font-medium text-xs">Back to home</h1>
        </button>

        {/* About Me Section */}
        <div className="flex flex-row gap-2 items-center">
          <img src={projecticon} alt="" className="w-7" />
          <h1 className="font-semibold text-lg">My Projects</h1>
        </div>
      </nav>
    <section className="xl:px-30 py-10 px-5">
      <motion.div
        className="grid md:grid-cols-2 grid-cols-1  gap-10 justify-evenly overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {projects.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-items-start items-start gap-6 cursor-pointer"
            whileHover={{  }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/projects/${item.id}`)} // Navigate to details page
          >
            {/* Project Image */}
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={item.image}
                alt=""
                className="object-cover w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="rounded-full bg-yellow-300 px-2 font-mono cursor-pointer text-black">
                {item.technologies}
              </p>
              <h1 className="text-xl font-bold">{item.name}</h1>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
    </>
    
  );
};

export default Project;
