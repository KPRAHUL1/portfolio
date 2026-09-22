import { motion } from "framer-motion";
import { useMediumPosts } from "../../utils/mediumFeed";

const MediumPosts = () => {
  const { posts, loading, error } = useMediumPosts();

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Medium Blogs</h2>

      {/* Loading state */}
      {loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="border rounded-lg border-gray-300 shadow-md animate-pulse"
            >
              <div className="w-full h-52 bg-gray-200 rounded-t-lg" />
              <div className="p-3 space-y-2">
                <div className="h-3 w-20 bg-gray-200 rounded" />
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {error && (
        <p className="text-red-500 text-sm">
          Couldn't load Medium posts: {error}
        </p>
      )}

      {/* Posts */}
      {!loading && !error && posts.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg border-gray-300 shadow-md cursor-pointer hover:shadow-lg transition overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              {post.thumbnail ? (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full object-cover rounded-t-lg h-52"
                />
              ) : (
                <div className="w-full h-52 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 font-bold text-lg">M</span>
                </div>
              )}
              <div className="p-3 flex flex-col gap-1">
                <p className="text-gray-500 text-sm">
                  {formatDate(post.pubDate)}
                </p>
                <h3 className="text-xl font-bold">{post.title}</h3>
                {post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.categories.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                <span className="text-sm text-blue-600 hover:underline mt-1">
                  Read on Medium →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && posts.length === 0 && (
        <p className="text-gray-500 text-sm">No Medium posts found.</p>
      )}
    </section>
  );
};

export default MediumPosts;
