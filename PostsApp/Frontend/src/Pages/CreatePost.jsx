import React from "react";

const CreatePost = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Create Post
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              className="block w-full text-sm text-gray-600
                file:mr-4 file:py-2.5 file:px-4
                file:rounded-lg file:border-0
                file:bg-indigo-600 file:text-white
                file:font-medium
                hover:file:bg-indigo-700
                cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Caption
            </label>

            <input
              type="text"
              name="caption"
              placeholder="Write a caption..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                focus:border-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl
              font-semibold hover:bg-indigo-700
              transition duration-200 shadow-md hover:shadow-lg"
          >
            Create Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;