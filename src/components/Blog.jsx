import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../blogPosts/posts";
import devBlogGreen from "../assets/devBlogGreen.jpg";


export const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-[#040F0F] text-[#FCFFFC] pt-24 pb-16">
      <div className="max-w-[1000px] mx-auto p-4">
        <img src={devBlogGreen} alt="Dev blog" className="w-full mb-4" />
        <p className="text-4xl font-bold border-b-4 border-[#248232] pb-2 pt-2">
          Dev Blog
        </p>
        <p className="py-4">
          {"// Deep in the woods..."}
        </p>

        <div className="mt-3 flex flex-col">
          {[...blogPosts].reverse().map((post) => (
            <div key={post.slug}>
              <hr className="border-t-2 border-dotted border-[#FCFFFC] opacity-20" />
              <div className="py-5">
                <h3 className="text-2xl font-bold text-[#FCFFFC] ">{post.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{post.date}</p>
                <p className="text-gray-300 text-sm  leading-relaxed">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-sm text-[#2BA84A] hover:text-[#248232] transition-colors duration-200"
                >
                  Read More →
                </Link>
              </div>
              <hr className="border-t-2 border-dotted border-[#FCFFFC] opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
