import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

export const BlogCard = ({ blog, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {blog.coverImage && (
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h2>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
              {blog.category}
            </span>
          </div>
          <button
            onClick={() => onDelete(blog.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
        <div className="flex justify-between items-center">
          <Link
            to={`/blog/${blog.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read More
          </Link>
          <span className="text-sm text-gray-500">
            {blog.publishedStatus === 'published' ? 'Published' : 'Draft'}
          </span>
        </div>
      </div>
    </div>
  );
};