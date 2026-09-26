
import { useEffect, useState } from "react";
import axios from "axios";

function Feedinsta() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/feed`);
      setPosts(response.data.obj);
      
      
    };

    getPosts();
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 py-6">
      <div className="w-full max-w-md mx-auto px-4">

        
          <a className="underline text-blue-600" href="/create">Create Your Posts</a>
        

        <h1 className="text-2xl font-bold mb-6">
          Feed
        </h1>

        <div className="space-y-6">
          {posts?.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={post.image}
                alt="Post"
                className="w-full aspect-square object-cover"
              />

              <div className="p-4">
                <p className="text-gray-800">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Feedinsta;

