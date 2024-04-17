import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import {  useNavigate } from 'react-router-dom';

export default function Blogs({ setBookMarked, bookmarked }) {
  const [blogs, setBlogs] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  console.log({ blogs });

  function handleClick(id) {
    navigate('/blog/' + id); // Replace '/path' with your desired route
  }

  return (
    <div className="md:w-2/3 mx-auto">
      {blogs.map((blog) => (
        <div className="p-5 mb-8 bg-white divide-y divide-slate-200">
          <div>
            <div className="overflow-hidden rounded-md">
              <img
                src={blog.cover}
                alt={blog.title}
                className="w-full h-auto object-cover object-center rounded-md"
              />
            </div>
            <div className="flex justify-between pt-5 items-center">
              <div className="flex gap-4 items-center">
                <img
                  src={blog.author_img}
                  alt={blog.author}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                />
                <div>
                  <p className="font-semibold">{blog.author}</p>
                  <p className="text-sm text-gray-500">{blog.posted_date}</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <p className="text-sm font-medium">{blog.read_time}</p>
                <FaBookmark
                  className={`cursor-pointer transition-colors duration-200 ${
                    bookmarked.some((item) => item.id === blog.id)
                      ? "text-purple-500"
                      : "text-gray-400 hover:text-blue-500"
                  }`}
                  onClick={() => {
                    const foundBlog = bookmarked.find(
                      (item) => item.id === blog.id
                    );
                    console.log({ foundBlog });
                    if (foundBlog === undefined) {
                      setBookMarked([...bookmarked, blog]);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="pt-5">
            <p className="text-3xl font-bold cursor-pointer hover:text-purple-00" onClick={() => handleClick(blog.id)}>{blog.title}</p>
            <p>{blog.hashtags}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
