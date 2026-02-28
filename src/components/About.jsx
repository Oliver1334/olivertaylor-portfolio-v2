import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#040F0F] text-[#FCFFFC]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4">
          <div className="pb-3">
            <p className="text-4xl font-bold inline border-b-4 border-[#040F0F] text-[#040F0F]">
              About
            </p>
            <p className="py-4 text-[#040F0F]">
              {"// Debugging on Aldi Red Label, one cup at a time..."}
            </p>
          </div>

          <div className="bg-[#040F0F] p-8 hover:scale-105 transition-transform duration-300">
            <p className="text-4xl font-bold pb-6">Hello, I'm Oliver.</p>
            <p className="text-lg pb-4">
              I'm a Full Stack Developer based in Greater Manchester, specialising in building React frontends and Node.js/Express RESTful APIs with PostgreSQL databases. I also have experience in mobile development using React Native and full testing coverage across the stack using Jest, Supertest, Vitest, React Testing Library and Cypress.
            </p>
            <p className="text-lg">
              What draws me to development is the ability to break down any challenge into smaller tasks and chip away at it. Bugs and errors are just the next thing to learn!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
