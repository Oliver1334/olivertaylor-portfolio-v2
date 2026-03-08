import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../blogPosts/posts";
import noDiceGamesLogo from "../assets/nodicegameslogo.png";

export const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-[#040F0F] text-[#FCFFFC] pt-24 pb-16">
      <div className="max-w-[1000px] mx-auto p-4">
        <p className="text-4xl font-bold inline border-b-4 border-[#248232]">
          Dev Blog
        </p>
        <p className="py-4">
          {"// Thoughts, write-ups and dev journal entries"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-[#2D3A3A] shadow-lg flex flex-col hover:scale-105 transition-transform duration-300 rounded-none"
            >
              {/* Image */}
              <div className="p-2">
                <img
                  src={noDiceGamesLogo}
                  alt="No Dice Games"
                  className="w-full h-48 object-cover border border-[#1E2929]"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col flex-grow p-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-[#FCFFFC] tracking-wide mb-1">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400 mb-3">{post.date}</p>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-3">{post.excerpt}</p>

                {/* Button */}
                <div className="mt-auto flex flex-row justify-center space-x-4">
                  <Link to={`/blog/${post.slug}`}>
                    <button className="text-sm font-medium text-[#FCFFFC] border-2 border-[#FCFFFC] px-4 py-2 rounded-none hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/*Card component goes here - title, date, excerpt, button*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
