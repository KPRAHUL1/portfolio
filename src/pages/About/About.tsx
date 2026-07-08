"use client";
import { motion } from "framer-motion";
import { calender, mail, person, map, phone, brain, leftarrow, user2 } from "../../assets/icons/icon";
import image from "../../assets/img/rahulkp.jpeg";
import Certificates from "./Certificate";
import WorkExperience from "./workExperience";

const About = () => {
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
        <img src={user2} alt="" className="w-7"  />
        <h1 className="font-semibold text-lg">About me</h1>
      </div>
    </nav>
  <section className="xl:px-30 md:px-10 mx-4 flex flex-col gap-20 mt-20">
      {/* Biography Section */}
      <motion.div
        className="flex flex-col gap-8 items-start"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold">Biography</h1>
        <p className="text-xl bg-yellow-300 font-[600] rounded-xl px-3 py-1 -rotate-10">
          Hello there!!
        </p>
        <p className="text-lg font-medium">
          I didn't get into software just to write code — I was fascinated by the idea that technology could turn ideas into products that people use every day. What started as curiosity quickly became a passion for building applications, solving complex problems, and continuously learning how great software is designed. <br/>
           <br/>
         Over time, I've grown into a Full Stack Developer who enjoys working across the entire development lifecycle—from designing intuitive user interfaces to building scalable backend systems, APIs, and databases. I enjoy creating products that are not only functional but also performant, secure, and easy to use. For me, software engineering is about understanding the problem first and then building the simplest, most reliable solution.  <br/>
           <br/>
         As technology continues to evolve, I'm increasingly drawn to Artificial Intelligence and the next generation of intelligent software. I'm actively exploring Large Language Models (LLMs), AI agents, Retrieval-Augmented Generation (RAG), workflow automation, and modern cloud-native architectures. I'm excited by the opportunity to build applications where AI becomes a meaningful part of the user experience rather than just another feature.
         I believe the best engineers never stop learning.<br/>
          <br/>
         Whether it's experimenting with new technologies, improving system design, contributing to innovative products, or understanding how users interact with software, I'm always looking for ways to grow both technically and professionally.<br/>
          <br/>
         My long-term vision is to build products that solve real-world problems at scale by combining strong engineering principles with the power of AI. I want to contribute to technologies that create lasting value, improve everyday experiences, and shape the future of software. 🚀
        </p>
        <div className="flex md:flex-row flex-col gap-10 lg:gap-52 w-full ">
          {[
            { title: "1.5+", subtitle: "Years of experience" },
            { title: "39+", subtitle: "DSA problems" },
            { title: "10+", subtitle: "Total projects" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl font-semibold">{item.title}</h1>
              <p className="font-medium">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Personal Info Section */}
      <motion.div
        className="flex lg:flex-row flex-col gap-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left Side */}
        <div className="flex-col flex gap-10 ">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-2xl font-bold">Personal Info</h1>
            <div className="md:grid grid-cols-2 gap-3 flex flex-col space-x-10 ">  {[
              { icon: person, text: "KP Rahul" },
              { icon: calender, text: "13 Feb 2004" },
              { icon: map, text: "Tirunelveli, Tamil Nadu, India" },
              { icon: mail, text: "kprahul1143@gmail.com" },
              { icon: phone, text: "+91 7708468392" }
            ].map((info, index) => (
              <motion.div
                key={index}
                className="flex flex-row gap-3  "
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={info.icon} className="w-5 " alt="" />
                <h1>{info.text}</h1>
              </motion.div>
            ))}</div>
          
          </div>

          {/* Interests Section */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">I'm Currently Interested in</h1>
            <motion.div
              className="flex flex-row gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src={brain} className="w-5" alt="" />
              <h1>AI & Machine Learning</h1>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={image} className="w-96 md:w-full xl:w-xl rounded-xl shadow-lg" alt="Profile" />
        </motion.div>
      </motion.div>
     
      <WorkExperience/>
      {/* Certificates */}
      <Certificates/>
    </section></>
    
  );
};

export default About;
