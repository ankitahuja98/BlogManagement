import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { addBlog } from "../store/blogSlice";
import { FormInput } from "../components/ui/FormInput";
import { FormSelect } from "../components/ui/FormSelect";
import { FormRadio } from "../components/ui/FormRadio";
import { CATEGORIES } from "../utils/constant";

const CreateBlogPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: [],
    image: null,
    publishedStatus: "draft",
    publishedDate: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (formData.title.length < 5) {
      newErrors.title = "Title must be at least 5 characters long";
    }

    if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters long";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (formData.publishedStatus === "published" && !formData.publishedDate) {
      newErrors.publishedDate =
        "Published date is required for published posts";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the form errors");
      return;
    }

    const newBlog = {
      ...formData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    dispatch(addBlog(newBlog));
    toast.success("Blog created successfully");
    navigate("/");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && ["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setFormData({ ...formData, image: imageUrl });
      };
      reader.readAsDataURL(file); // Convert image to base64
    } else {
      toast.error("Please upload a valid image file (jpeg, jpg, or png)");
    }
  };

  const handleTagsChange = (e) => {
    const selectedTags = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, tags: selectedTags });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} />
        Back to Home
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Create New Blog Post
      </h1>

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <FormInput
          label="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          error={errors.title}
          required
        />

        <FormInput
          label="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          error={errors.description}
          multiline
          required
        />

        <FormSelect
          label="Category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          options={CATEGORIES}
          error={errors.category}
          required
        />

        {/* Image Upload Input */}
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mt-5 mb-2"
          >
            Image Upload (jpeg, jpg, png)
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept=".jpg,.jpeg,.png"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {formData.image && (
            <p className="mt-2 text-xs text-gray-500">{formData.image.name}</p>
          )}
        </div>

        {/* Multi-Select Tags */}
        <div className="mb-6">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700"
          >
            Tags
          </label>
          <select
            id="tags"
            name="tags"
            multiple
            value={formData.tags}
            onChange={handleTagsChange}
            className="mt-1 p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option className="pb-1" value="Tech">
              Tech
            </option>
            <option className="pb-1" value="Lifestyle">
              Lifestyle
            </option>
            <option className="pb-1" value="Business">
              Business
            </option>
            <option value="Health">Health</option>
          </select>
          {formData.tags.length > 0 && (
            <div className="mt-2">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 mr-2 text-sm font-medium text-white bg-blue-500 rounded-full"
                  style={{ margin: "5px 5px 5px 0px" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <FormRadio
          label="Published Status"
          name="publishedStatus"
          value={formData.publishedStatus}
          onChange={(e) =>
            setFormData({ ...formData, publishedStatus: e.target.value })
          }
          options={[
            { value: "draft", label: "Draft" },
            { value: "published", label: "Published" },
          ]}
          required
        />

        {formData.publishedStatus === "published" && (
          <FormInput
            label="Published Date"
            type="date"
            value={formData.publishedDate || ""}
            onChange={(e) =>
              setFormData({ ...formData, publishedDate: e.target.value })
            }
            error={errors.publishedDate}
            required
          />
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-6"
        >
          Create Blog Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
