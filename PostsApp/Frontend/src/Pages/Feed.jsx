import React, { useState} from "react";
import { useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts] = useState([
    {
      _id: "1",
      image: "https://wallpapercave.com/wp/zX0nedR.jpg",
      caption: "This is a beautiful image",
    },
  ]);

  useEffect(() => {
     axios.get("http://localhost:3000/createPost")
     .then((res) =>{
      console.log(res.data);
     })
  },[]);

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Feed
        </h1>

        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-450px object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                      U
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        User Post
                      </h3>
                      <p className="text-xs text-gray-500">
                        Just now
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-500 text-lg">
              No posts available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Feed;