"use client";
import { motion } from "framer-motion";

const experience = [
  {
    company: "FLUXOR",
    companyLink: "https://www.fluxor.io/en",
    totalDuration: "10 mos",
    roles: [
      {
        year: "Dec 2025 - Present",
        title: "Software Developer",
        location: "Full-time · On-site",
        duration: "8 mos",
      },
      {
        year: "Oct 2025 - Nov 2025",
        title: "Software Engineer Intern",
        location: "Internship · Remote",
        duration: "2 mos",
      },
    ],
  },
  {
    company: "RexKnar Creative Solutions",
    companyLink: "https://rexknar.com/",
    roles: [
      {
        year: "Feb 2025 - Nov 2025",
        title: "Web Developer Intern",
        location: "Internship · Nagarcoil, On-site",
        duration: "10 mos",
      },
    ],
  },
  {
    company: "TamilLoft",
    companyLink: "https://tamilloft.in/",
    roles: [
      {
        year: "Jun 2024 - Feb 2025",
        title: "Software Developer",
        location: "Full-time · Kanyakumari district, India, On-site",
        duration: "9 mos",
      },
    ],
  },
];

const education = [
  {
    year: "2021 - 2025",
    degree: "Bachelor of Engineering in CSE",
    institution: "Cape Institute of Technology",
  },
];

type Role = { year: string; title: string; location?: string; duration?: string; skills?: string };

const ExperienceCard: React.FC<{
  data: { company: string; companyLink?: string; totalDuration?: string; roles: Role[] };
}> = ({ data }) => {
  const isGrouped = data.roles.length > 1;

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

      <div className="flex items-baseline justify-between">
        {data.companyLink ? (
          <a
            href={data.companyLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-black font-bold hover:text-blue-600 hover:underline w-fit"
          >
            {data.company}
          </a>
        ) : (
          <p className="text-black font-bold">{data.company}</p>
        )}
        {data.totalDuration && <span className="text-gray-500 text-xs">{data.totalDuration}</span>}
      </div>

      <div className={isGrouped ? "mt-3 flex flex-col gap-4" : "mt-1"}>
        {data.roles.map((role, index) => (
          <div key={index} className={isGrouped ? "relative pl-5" : ""}>
            {isGrouped && (
              <>
                <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                {index < data.roles.length - 1 && (
                  <div className="absolute left-[4px] top-4 bottom-[-16px] w-px bg-gray-300"></div>
                )}
              </>
            )}
            <h3 className="text-lg font-semibold">{role.title}</h3>
            <p className="text-gray-600 text-sm">{role.location}</p>
            <p className="text-gray-500 text-xs">
              {role.year}
              {role.duration ? ` · ${role.duration}` : ""}
            </p>
            {role.skills && <p className="text-blue-500 text-sm">{role.skills}</p>}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const EducationCard: React.FC<{
  data: { year: string; degree: string; institution: string };
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
      <h3 className="text-lg font-semibold">{data.degree}</h3>
      <p className="text-gray-600">{data.institution}</p>
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
            <ExperienceCard key={index} data={exp} />
          ))}
        </div>
      </div>

      {/* Education (Right) */}
      <div className="flex-1">
        <h2 className=" font-bold text-xl mb-4">EDUCATION:</h2>
        <div className="flex flex-col gap-5">
          {education.map((edu, index) => (
            <EducationCard key={index} data={edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkEducationSection;
