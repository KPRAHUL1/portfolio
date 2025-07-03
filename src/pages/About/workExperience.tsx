"use client";
import { motion } from "framer-motion";

const experience = [
  {
    year: "Feb 2024 - Dec 2024",
    title: "MERN Stack Developer",
    company: "Rexcoders - Coding Academy",
    location: "Nagercoil, Tamil Nadu, India",
    duration: "11 mos",
    skills: "React.js, CSS, and +11 skills",
  },
  {
    year: "Oct 2024 - Nov 2024",
    title: "MERN Stack Developer (Internship)",
    company: "Rexcoders - Coding Academy",
    location: "Nagarkovil",
    duration: "2 mos",
  },
  {
    year: "Sep 2023 - Oct 2023",
    title: "Web Developer (Internship)",
    company: "Jclicksolutions",
    location: "Nagercoil, Tamil Nadu, India - Hybrid",
    duration: "2 mos",
    skills: "CSS, Bootstrap (Framework) and +1 skill",
  },
];

const education = [
  {
    year: "2021 - 2025",
    degree: "Bachelor of Engineering in CSE",
    institution: "Cape Institute of Technology",
  },
];

const TimelineCard: React.FC<{
  data: { year: string; title?: string; company?: string; location?: string; duration?: string; skills?: string; degree?: string; institution?: string };
}> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-white shadow-md border-l-4 border-black p-4 rounded-lg hover:shadow-xl transition-all cursor-pointer"
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-12px] top-4 w-4 h-4 bg-black rounded-full"></div>
      <p className="text-black font-bold">{data.year}</p>
      {data.title ? (
        <>
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p className="text-gray-800 font-medium">{data.company}</p>
          <p className="text-gray-600 text-sm">{data.location}</p>
          <p className="text-gray-500 text-xs">{data.duration}</p>
          {data.skills && <p className="text-blue-500 text-sm">{data.skills}</p>}
        </>
      ) : (
        <>
          <h3 className="text-lg font-semibold">{data.degree}</h3>
          <p className="text-gray-600">{data.institution}</p>
        </>
      )}
    </motion.div>
  );
};

const WorkEducationSection: React.FC = () => {
  return (
    <div className="  px-4 py-10 flex flex-col md:flex-row gap-10">
      {/* Experience (Left) */}
      <div className="flex-1">
        <h2 className=" font-bold text-xl mb-4">EXPERIENCE:</h2>
        <div className="flex flex-col gap-5">
          {experience.map((exp, index) => (
            <TimelineCard key={index} data={exp} />
          ))}
        </div>
      </div>

      {/* Education (Right) */}
      <div className="flex-1">
        <h2 className=" font-bold text-xl mb-4">EDUCATION:</h2>
        <div className="flex flex-col gap-5">
          {education.map((edu, index) => (
            <TimelineCard key={index} data={edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkEducationSection;
