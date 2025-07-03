import { useParams } from "react-router-dom";
import { blogDetails } from "../../data/blogDetails";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { blog1, leftarrow } from "../../assets/icons/icon";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogDetails.find((item) => item.id === Number(id));
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  if (!blog) {
    return <h1 className="text-center text-2xl">Blog Not Found</h1>;
  }

  return (

    <>
          <nav className="py-6 xl:px-36 border-b md:px-20 gap-3 px-5 border-gray-300 flex flex-col md:flex-row md:justify-between md:items-center">
        <button
          onClick={() => (window.location.href = "/")}
          className="flex flex-row gap-2 items-center cursor-pointer"
        >
          <img src={leftarrow} alt="Back" className="w-4" />
          <h1 className="font-medium text-xs">Back to home</h1>
        </button>

        {/* Blog Title with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row gap-2 items-center"
        >
          <img src={blog1} alt="Blog Icon" className="w-7" />
          <h1 className="font-semibold text-lg">My Blog</h1>
        </motion.div>
      </nav>
     <motion.section
      className="py-10 px-5 md:px-20 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Date */}
      <motion.p
        className="text-center text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {blog.date}
      </motion.p>

      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-center my-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {blog.title}
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-center text-gray-600 leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        {blog.content}
      </motion.p>

      {/* Featured Image */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <img
          src={blog.images[0]}
          alt={blog.title}
          className="rounded-lg w-full md:w-3/4 shadow-lg"
        />
      </motion.div>

      {/* Blog Content */}
      <motion.div
        className="mt-6 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        {blog.content.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* Video Section */}
      {blog.video && (
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <video controls className="w-full md:w-3/4 rounded-lg shadow-lg">
            <source src={blog.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}

      {/* Marquee Image Section */}
      <Marquee
          pauseOnHover
          speed={50}
          
          // White fade effect
          className=" p-2  overflow-hidden mt-10"
        >
          {blog.images.map((cert, index) => (
            <motion.div
              key={index}
              className="w-48 h-32 mx-4 cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </Marquee>
        {selectedCert && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-60 z-50"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-5 rounded-lg shadow-lg max-w-2xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full rounded-lg z-50"
            />
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setSelectedCert(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </motion.section>
    </>
   
  );
};

export default BlogDetails;
