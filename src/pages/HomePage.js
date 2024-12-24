import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PlusCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { deleteBlog } from '../store/blogSlice';
import { BlogCard } from '../components/BlogCard';

const HomePage = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
    toast.success('Blog deleted successfully');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
        <Link
          to="/create"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <PlusCircle size={20} />
          Create New Post
        </Link>
      </div>
      
      {blogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No blog posts yet. Create your first post!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;