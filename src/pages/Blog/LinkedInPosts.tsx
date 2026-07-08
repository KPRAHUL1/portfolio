import { motion } from "framer-motion";
import { linkedinPosts } from "../../data/linkedinPosts";

const LinkedInPosts = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">LinkedIn Posts</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {linkedinPosts.map((post) => (
          <motion.div
            key={post.id}
            className="w-full max-w-[504px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe
              src={post.embedUrl}
              height={post.height}
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              title={`LinkedIn post ${post.id}`}
              className="rounded-lg shadow-md"
            />
            {post.tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            {post.postUrl && (
              <a
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline mt-2 inline-block"
              >
                View on LinkedIn
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LinkedInPosts;
