import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../blogPosts/posts";

export const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-[#040F0F] text-[#FCFFFC] pt-24 pb-16">
      <div className="max-w-[1000px] mx-auto p-4">
        <p className="text-4xl font-bold border-b-4 border-[#248232] pb-2">
          Dev Blog
        </p>
        <p className="py-4">
          {"// Thoughts, write-ups and dev journal entries"}
        </p>

        <div className="mt-8 flex flex-col">
          {[...blogPosts].reverse().map((post) => (
            <div key={post.slug}>
              <hr className="border-t-2 border-dotted border-[#FCFFFC] opacity-20" />
              <div className="py-6">
                <h3 className="text-2xl font-bold text-[#FCFFFC] mb-1">{post.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{post.date}</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
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
