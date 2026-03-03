import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import PostgreSQL from "../assets/postgresql.png";
import Git from "../assets/git.png";
import Tailwind from "../assets/tailwind.png";
import ExpressJS from "../assets/express.png";
import Jest from "../assets/jest.png";
import APImg from "../assets/api.png";
import Csharp from "../assets/csharp.png";
import Cypress from "../assets/cypress.png";
import Mongodb from "../assets/mongodb.png";
import ReactTeastingLibrary from "../assets/reacttestinglib.png";
import Typescript from "../assets/typescript_original_logo_icon_146317.png";
import Ubuntu from "../assets/ubuntu.png";
import Vitest from "../assets/vitest.png";

export const Skills = () => {
  const skillCategories = [
    {
      heading: "Languages",
      color: "#2BA84A",
      skills: [
        { name: "JavaScript", icon: Javascript },
        { name: "TypeScript", icon: Typescript },
        { name: "C#", icon: Csharp },
      ],
    },
    {
      heading: "Frontend",
      color: "#C026D3",
      skills: [
        { name: "React", icon: ReactImg },
        { name: "HTML", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "Tailwind CSS", icon: Tailwind },
      ],
    },
    {
      heading: "Backend",
      color: "#F59E0B",
      skills: [
        { name: "Node.js", icon: Node },
        { name: "Express.js", icon: ExpressJS },
        { name: "PostgreSQL", icon: PostgreSQL },
        { name: "MongoDB", icon: Mongodb },
        { name: "RESTful API", icon: APImg },
      ],
    },
    {
      heading: "Testing",
      color: "#38BDF8",
      skills: [
        { name: "Jest", icon: Jest },
        { name: "Vitest", icon: Vitest },
        { name: "React Testing Library", icon: ReactTeastingLibrary },
        { name: "Cypress", icon: Cypress },
      ],
    },
    {
      heading: "Tools",
      color: "#EF4444",
      skills: [
        { name: "Git", icon: Git },
        { name: "Ubuntu (Linux)", icon: Ubuntu },
      ],
    },
  ];

  return (
    <div
      name="skills"
      className="w-full bg-[#040F0F] text-[#FCFFFC] py-20 scroll-mt-96"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#248232]">
            Technical Skills
          </p>
          <p className="py-4">
            {"// Debugging on Aldi Red Label, one cup at a time..."}
          </p>
        </div>

        {/* Legend — all sizes, centred above */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {skillCategories.map((category) => (
            <div key={category.heading} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: category.color }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: category.color }}>
                {category.heading}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile: centred pills */}
        <div className="sm:hidden flex flex-wrap justify-center gap-2">
          {skillCategories.flatMap((category) =>
            category.skills.map((skill, index) => (
              <div
                key={`${category.heading}-${index}`}
                className="flex items-center gap-2 bg-[#2D3A3A] px-3 py-2 rounded-full border-2"
                style={{ borderColor: `${category.color}60` }}
              >
                <img className="w-5 h-5" src={skill.icon} alt={`${skill.name} icon`} />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))
          )}
        </div>

        {/* Desktop: icon grid */}
        <div className="hidden sm:grid grid-cols-4 md:grid-cols-6 gap-3 text-center">
          {skillCategories.flatMap((category) =>
            category.skills.map((skill, index) => (
              <div
                key={`${category.heading}-${index}`}
                className="bg-[#2D3A3A] hover:bg-[#1E2929] duration-300 p-4 border-2"
                style={{ borderColor: `${category.color}40` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = category.color;
                  e.currentTarget.style.boxShadow = `0 0 12px ${category.color}44`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${category.color}40`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img className="w-12 h-12 mx-auto mb-2" src={skill.icon} alt={`${skill.name} icon`} />
                <p className="text-xs font-medium">{skill.name}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
