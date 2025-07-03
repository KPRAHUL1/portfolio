import { motion } from "framer-motion";
import { facebook, linkedin, twitter, instagram } from "../../assets/icons/icon";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="border-t p-8 border-gray-300 flex flex-col justify-center items-center gap-6 w-full  pb-30"
    >
      {/* Social Media Links */}
      <div className="flex flex-row gap-4">
  <h1 className="text-md">Get in touch:</h1>
  {[
    { src: facebook, link: "https://www.facebook.com/your-profile" },
    { src: instagram, link: "https://www.instagram.com/kp___rahul/" },
    { src: linkedin, link: "https://www.linkedin.com/in/rahulk07/" },
    { src: twitter, link: "https://twitter.com/your-profile" },
  ].map((item, index) => (
    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
      <img src={item.src} alt="Social Icon" className="cursor-pointer w-6" />
    </a>
  ))}
</div>


      {/* Quick Links & Contact */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
      <div>
        <h1 className="text-md font-semibold">Quick Links</h1>
        <ul className="text-gray-600 text-sm mt-2 space-y-2 md:flex md:flex-row md:gap-5">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-gray-900"
              onClick={() => navigate(`/${item.toLowerCase()}`)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

        <div className="fle flex-col gap-5">
          <h1 className="text-md font-semibold">Contact</h1>
          <p className="text-gray-600 text-sm mt-2">📧 kprahul1143@example.com</p>
          <p className="text-gray-600 text-sm">📍 Tamil Nadu, India</p>
        </div>
      </div>

      {/* Copyright & Policies */}
      <div className="text-center text-gray-500 text-xs">
        <p>Terms & Conditions | Privacy Policy</p>
        <p>© 2024 Rahul | All rights reserved.</p>
      </div>
    </motion.footer>
  );
};
