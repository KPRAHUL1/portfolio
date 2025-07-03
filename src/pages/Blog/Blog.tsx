import { motion } from "framer-motion";
import { blog1, leftarrow } from "../../assets/icons/icon";
import { blogPosts } from "../../data/blogData";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
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

      {/* Blog Section */}
      <section className="py-10 px-5 md:px-20 xl:px-36">
  <motion.div
    initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
    whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up
    transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth animation
    viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view, animate once
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {blogPosts.map((post) => (
      <motion.div
        key={post.id}
        className="border rounded-lg border-gray-300 shadow-md cursor-pointer hover:shadow-lg transition"
        onClick={() => navigate(`/blog/${post.id}`)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Image with Hover Zoom */}
        <motion.div
          className="overflow-hidden "
          whileHover={{  }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full object-cover rounded-t-lg h-52"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Blog Content */}
        <div className="p-3 flex flex-col">
          <p className="text-gray-500 text-sm">{post.date}</p>
          <h2 className="text-xl font-bold">{post.title}</h2>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>

    </>
  );
};

export default Blog;
