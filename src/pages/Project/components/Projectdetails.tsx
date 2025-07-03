import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../../data/Projectdeatils";
import Marquee from "react-fast-marquee";
import { leftarrow, projecticon } from "../../../assets/icons/icon";
import { lumia0 } from "../../../assets/projects/project";
import { useState } from "react";
import { github } from "../../../assets/techicons/techIcon";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  if (!project) return <h1 className="text-center text-2xl mt-10">Project not found</h1>;

  return (
    <>
      {/* Header Section */}
      <nav className="py-6 xl:px-36 border-b md:px-20 gap-3 px-5 border-gray-300 flex flex-col md:flex-row md:justify-between md:items-center">
        <button onClick={() => (window.location.href = "/")} className="flex flex-row gap-2 items-center cursor-pointer">
          <img src={leftarrow} alt="" className="w-4" />
          <h1 className="font-medium text-xs">Back to home</h1>
        </button>
        <div className="flex flex-row gap-2 items-center">
          <img src={projecticon} alt="" className="w-7" />
          <h1 className="font-semibold text-lg">My Projects</h1>
        </div>
      </nav>

      {/* Main Content */}
      <motion.div 
        className="p-5 md:p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {/* Project Overview */}
        <section className="xl:px-30">
          <div className="flex lg:flex-row gap-10 flex-col justify-between">
            <img src={lumia0} alt="" className="w-[700px] object-cover rounded-xl border flex-1" />
            <div className="flex-1 flex flex-col gap-5">
              <motion.h1 className="text-5xl font-bold">{project.name}</motion.h1>
              <motion.p className="mt-5 text-gray-600 leading-7">{project.description}</motion.p>

              {/* Project Details */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-5 w-full">
                {[
                  { title: "Release Date", value: "2024" },
                  { title: "Location", value: "Tamil Nadu" },
                  { title: "Client", value: "Webflow" },
                  { title: "Category", value: "Full Stack Development" },
                ].map((item, index) => (
                  <div key={index} className="border border-gray-300 px-6 py-4 rounded-xl flex flex-col justify-stretch shadow-sm transition-transform duration-300 hover:scale-105">
                    <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <motion.div 
            className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Frontend Technologies */}
            <div>
              <h1 className="font-semibold text-2xl mb-2">Frontend Technologies:</h1>
              <div className="grid grid-cols-2 gap-3">
                {project.frontendTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                    <span className="text-md font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div>
              <h1 className="font-semibold text-2xl mb-2">Backend Technologies:</h1>
              <div className="grid grid-cols-2 gap-3">
                {project.backendTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                    <span className="text-md font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* GitHub & Live Demo Links */}
          <motion.div 
            className="mt-5 flex gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border p-3 rounded-xl border-gray-400 hover:text-black transition-all">
              <img src={github} alt="" className="w-8"/>
              <span className="text-black">GitHub</span>
            </a>

            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-xl border text-black border-gray-400 transition-all">
              <FaExternalLinkAlt size={20} />
              <span className="text-black">Live Demo</span>
            </a>
          </motion.div>
        </section>

        {/* Image Marquee */}
        <motion.div 
          className="mt-5 flex gap-3 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Marquee className="overflow-hidden">
            {project.images.map((img, index) => (
              <motion.img key={index} src={img} alt={project.name} className="h-48 rounded-lg shadow-md cursor-pointer ml-5" whileHover={{ scale: 1.05 }} onClick={() => setSelectedCert(img)} />
            ))}
          </Marquee>
        </motion.div>
        {selectedCert && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-60 z-50" onClick={() => setSelectedCert(null)}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="bg-white p-5 rounded-lg shadow-lg max-w-2xl z-50" onClick={(e) => e.stopPropagation()}>
              <img src={selectedCert} alt="Certificate" className="w-full rounded-lg z-50" />
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer" onClick={() => setSelectedCert(null)}>
                Close
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default ProjectDetails;
