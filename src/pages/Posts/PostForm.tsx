import { useState } from "react";
import { db, storage } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!image) return alert("Select an image");

    // Upload image to Firebase Storage
    const storageRef = ref(storage, `posts/${image.name}-${Date.now()}`);
    const snapshot = await uploadBytes(storageRef, image);
    const downloadURL = await getDownloadURL(snapshot.ref);

    // Add post to Firestore
    await addDoc(collection(db, "posts"), {
      title,
      content,
      imageUrl: downloadURL,
      likes: 0,
      comments: [],
    });

    setTitle("");
    setContent("");
    setImage(null);
    alert("Post created!");
  };

  return (
    <div className="p-4 border shadow rounded">
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="mb-2"
      />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload Post
      </button>
    </div>
  );
}

export default PostForm;
