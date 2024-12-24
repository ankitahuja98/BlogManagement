import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeft, Trash2 } from "lucide-react";
import ResponsiveDialog from "../components/DailogBox";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Dailog, setDailog] = useState(false);
  const blog = useSelector((state) =>
    state.blogs.blogs.find((b) => b.id === id)
  );

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Blog not found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-800"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const DailogHandler = () => {
    setDailog(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>
        <button
          onClick={DailogHandler}
          className="flex items-center gap-2 text-red-600 hover:text-red-700"
        >
          <Trash2 size={20} />
          Delete Blog
        </button>
      </div>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

        <div className="flex items-center gap-4 mb-8">
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {blog.category}
          </span>
          <span className="text-gray-500">
            {blog.publishedStatus === "published"
              ? `Published on ${new Date(
                  blog.publishedDate
                ).toLocaleDateString()}`
              : "Draft"}
          </span>
        </div>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.image.name}
            className="w-full h-full object-cover rounded-lg mb-8"
          />
        )}

        {blog.tags && blog.tags.length > 0 && (
          <div className="flex gap-2 mb-6 font-semibold">
            Tags:
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose max-w-none">
          <p className="text-gray-700 whitespace-pre-wrap">
            {blog.description}
          </p>
        </div>
      </article>
      <ResponsiveDialog Dailog={Dailog} setDailog={setDailog} />
    </div>
  );
};

export default BlogDetailsPage;
