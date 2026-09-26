
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";



function CreatePost() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/create`,
        formData
      );

      alert("Form data is created...");

      
      e.target.reset();
      setImage(null);
      setCaption("");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to create post");
    }
  };


  return (
    <div>
      <a className="p-1 underline text-blue-600" href="/">Create Your Posts</a>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow"
      >
        <h1 className="text-2xl font-bold mb-5">
          Create Post
        </h1>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-4 w-full"
        />

        <textarea
          name="caption"
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
          rows="4"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Post
        </button>
      </form>
    </div>
    </div>
  );
}

export default CreatePost;

