import { useEffect, useState, KeyboardEvent } from "react";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  increment,
} from "firebase/firestore";
import { motion } from "framer-motion";
import { contact, leftarrow } from "../../assets/icons/icon";

type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  likes: number;
  comments: string[];
};

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const data = querySnapshot.docs.map((doc) => {
      const post = doc.data();
      return {
        id: doc.id,
        title: post.title ?? "No Title",
        content: post.content ?? "",
        imageUrl: post.imageUrl ?? "",
        likes: post.likes ?? 0,
        comments: post.comments ?? [],
      };
    });
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLike = async (id: string) => {
    const ref = doc(db, "posts", id);
    await updateDoc(ref, { likes: increment(1) });
    fetchPosts();
  };

  const handleComment = async (id: string, comment: string) => {
    const ref = doc(db, "posts", id);
    await updateDoc(ref, {
      comments: arrayUnion(comment),
    });
    fetchPosts();
  };

  return (
    <>
      <nav className="py-6 xl:px-36 border-b md:px-20 gap-3 px-5 border-gray-300 flex flex-col md:flex-row md:justify-between md:items-center">
        <button
          onClick={() => (window.location.href = "/")}
          className="flex flex-row gap-2 items-center cursor-pointer"
        >
          <img src={leftarrow} alt="" className="w-4" />
          <h1 className="font-medium text-xs">Back to home</h1>
        </button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-row gap-2 items-center"
        >
          <img src={contact} alt="" className="w-7" />
          <h1 className="font-semibold text-lg">Posts</h1>
        </motion.div>
      </nav>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-60 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{post.content}</p>

              <div className="mt-3 flex items-center gap-4">
                <button
                  className="text-red-500 hover:scale-110 transition"
                  onClick={() => handleLike(post.id)}
                >
                  ❤️ {post.likes}
                </button>
              </div>

              <input
                className="mt-3 border w-full px-3 py-1 rounded-md text-sm"
                placeholder="Add a comment"
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === "Enter") {
                    const target = e.target as HTMLInputElement;
                    if (target.value.trim()) {
                      handleComment(post.id, target.value.trim());
                      target.value = "";
                    }
                  }
                }}
              />

              <ul className="mt-3 space-y-1 text-sm text-gray-700 max-h-32 overflow-y-auto">
                {post.comments.map((c, i) => (
                  <li key={i}>💬 {c}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Posts;
