import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center text-center px-8 min-h-[70vh] gap-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-7xl md:text-9xl font-bold text-gray-900"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg md:text-xl text-gray-600"
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        onClick={() => navigate("/")}
        className="mt-4 px-6 py-3 bg-black text-white rounded-xl cursor-pointer hover:bg-white hover:text-black hover:border-gray-300 border transition"
      >
        Back to Home
      </motion.button>
    </section>
  );
};

export default NotFound;
