import { hello } from "../../assets/icons/icon";
import img1 from "../../assets/img/img2.webp";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { ViewCounter } from "../../components/ViewCounter";

const Home = () => {
  return (
    <>
      {/* Background Marquee */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-10">
        <Marquee direction="right" className="w-full">
          <h1 className="text-[200px] font-bold">KP RAHUL &nbsp;</h1>
          <h1 className="text-[200px] font-bold">KP RAHUL &nbsp;</h1>
          <h1 className="text-[200px] font-bold">KP RAHUL &nbsp;</h1>
        </Marquee>
      </div>

      {/* Animated Section */}
      <motion.section
        className="relative flex-col flex justify-center items-center gap-3  xl:mx-[500px] m-10 backdrop-blur-md bg-white/30 md:p-10 rounded-xl"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden + moved down)
        whileInView={{ opacity: 1, y: 0 }} // When in view, fade in + move up
        transition={{ duration: 1, ease: "easeInOut" }} // Smooth ease-in-out transition
        viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% is visible
      >
        {/* Foreground Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kprahul1143@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="rounded-full bg-yellow-300 px-2 font-mono cursor-pointer text-black">
              kprahul1143@gmail.com
            </h1>
          </a>
          <ViewCounter/>
        </motion.div>

        <motion.div
          className="flex flex-col gap-2 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="flex flex-row gap-2 justify-center items-center">
            <motion.img
              className="w-10 "
              src={hello}
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            />
            <h1 className="text-5xl font-semibold">Hi, I'm KP Rahul!</h1>
          </div>
          <p className="text-xl font-medium">Full Stack Developer</p>
        </motion.div>

        <motion.div
          className=""
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
        >
          <img src={img1} alt="" className="w-96 rounded-xl " />
        </motion.div>

        <motion.div
          className="flex md:flex-row flex-col items-center md:gap-10 gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          <a
            href="rahul.jpg"
            download="Rahul_Resume.jpg"
            className="bg-black hover:bg-white cursor-pointer hover:text-black hover:border-gray-400 hover:border text-white rounded-xl px-3 py-3"
          >
            Download CV
          </a>

          <p className="text-md font-medium">
            📍Tirunelveli, Tamil Nadu, India
          </p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Home;
