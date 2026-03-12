import React, { useState } from "react";

import ndg1 from "../assets/NDG1.png";
import ndg2 from "../assets/NDG2.png";
import ndg3 from "../assets/NDG3.png";
import ndg4 from "../assets/NDG4.png";
import placeholder1 from "../assets/projectPH1.png";
import placeholder2 from "../assets/projectPH2.png";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full my-8">
      <div className="w-full h-96 overflow-hidden">
        <img
          src={images[index]}
          alt={`slide ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between mt-2">
        <button
          onClick={prev}
          className="text-sm font-medium text-[#FCFFFC] border border-[#FCFFFC] px-4 py-1 hover:bg-[#2BA84A] hover:border-[#2BA84A] transition-colors duration-200"
        >
          ← Prev
        </button>
        <span className="text-xs text-gray-400 self-center">
          {index + 1} / {images.length}
        </span>
        <button
          onClick={next}
          className="text-sm font-medium text-[#FCFFFC] border border-[#FCFFFC] px-4 py-1 hover:bg-[#2BA84A] hover:border-[#2BA84A] transition-colors duration-200"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

const ncGamesImages = [placeholder1, placeholder2];
const noDiceGamesImages = [ndg1, ndg2, ndg3, ndg4];

export const NCGamesToNDG = () => {
  return (
    <div className="w-full min-h-screen bg-[#040F0F] text-[#FCFFFC] pt-24 pb-16">
      <div className="max-w-[800px] mx-auto px-4">

        <h1 className="text-4xl font-bold border-b-4 border-[#2BA84A] pb-2 mb-2">
          From NC Games to No Dice Games
        </h1>
        <p className="text-sm text-gray-400 mb-10">March 7, 2026</p>

        <p className="mb-6 leading-relaxed">
          The first rendition of my board games review website 'NC Games' looked like a frontend built by a backend developer. After getting my backend RESTful API up and running with a list of endpoints to check through developed with thorough testing and getting my head round SQL left joins and all that jazz, the prospect of designing a polished frontend for a user did not excite me. After all the backend work i wanted to get something functional to show it off, to show how it works and i didn't want to sit for hours thinking of design choices.
        </p>

        <p className="mb-6 leading-relaxed">
          NC Games colour choices were all over the shop, Black navbar with a white page body and then the comment sections for reviews have a full black background with red comment boxes ordered horizontally across the page. The login screen was orange and greeted the user with an oversized profile picture after a successful login. Overall there was no visual continuity in the theme between pages, was there even a theme? The review page featured cards that were dense with information but visually flat. The featured reviews homepage was basically empty, the single image carousel with a link didn't really give a varied landing experience of a site filled with exciting game reviews and multiple users.
        </p>

        <p className="mb-6 leading-relaxed">
          NC Games was functional, but it had no personality or identity, i'm not sure it was even functional for mobile viewing. The logo itself wasn't too lacking, it had energy and character but none of that carried through to the rest of the UI. Coming back to the 'finished' product i knew something had to change. I wanted to take this 'functional' site and my hacked together job at understanding CSS and turn it into something calculated, considered and designed. I decided to port the whole project over to Vite and dip my toes into TailwindCSS, it was time to put some font-weight: 800 behind my fullstack developer title.
        </p>

        <Carousel images={ncGamesImages} />

        <p className="mb-6 leading-relaxed">
          First and foremost i wanted to rebrand the website. Northcoders Games still had some of that bootcamp fuzz stuck to it. I wanted something personal, something unique. I knew I wanted dice in the logo. So, envisioning the most disappointing outcome in my mind. Snake eyes! No Dice Games slithered into existence.
        </p>

        <p className="mb-6 leading-relaxed">
          I already had a primary colour of orange, but there was still scheming to be done. Around this i envisioned creams, greys, blacks and browns colours, all warm in tone to compliment the orange well. So i took my time using COOLORS and REALTIME COLORS to refine this palette two in browser tools i recommend as a starting point for any palette creation.
        </p>

        <p className="mb-6 leading-relaxed">
          With the palette locked in i went to creating the logo for the website, something simple and memorable, snake eyes dice in orange with the adjacent lettering, this move enabled me to shorten the logo to just the iconic dice which i later used for a favicon and a footer logo. When designing the logo i wanted it to be simple primarily as i wanted to dip my toe into SVGs (Scalable Vector Graphics), when using icons for websites in the past i had seen the term being tossed around. Some issues with NC Games were the logo losing quality if users were to zoom in, i figured that learning how to convert my own logos into an svg format and get it working would be a totally versatile move as it can be redrawn by the frontend wherever i want to use it with lossless quality. It also makes the logo just code under the hood, so there's no image files needed. I'd first sort out my logo as a simple png and convert it to an SVG then use{" "}
          <a
            href="https://nikitahl.github.io/svg-2-code/"
            target="_blank"
            rel="noreferrer"
            className="text-[#2BA84A] underline hover:text-[#248232] transition-colors duration-200"
          >
            this website
          </a>{" "}
          to get the code. Once i had the SVG code i was able to play around with it and split it up find out which parts were drawing what in my logo. So i could split it and use just the dice drawing part without the font for my footer. Being happy with my logo i went further to find some simple animated svg's to use rotating dice for my loading screen which i'm pretty proud of.
        </p>

        <p className="mb-6 leading-relaxed">
          With the new colour scheme being ironclad and so much more uniform than NC Games. I wanted to have a stab at adding a Darkmode/Lightmode option, something i've never added to a website before. Using tailwind's ability to reference a saved theme in all files looked fantastic. Enabled me to have my theme tucked away in a root file that can then be referenced everywhere else.
        </p>

        <p className="mb-6 leading-relaxed">
          All the theme colours are defined in an <code className="bg-[#2D3A3A] px-1 py-0.5 text-sm">@theme</code> block in <code className="bg-[#2D3A3A] px-1 py-0.5 text-sm">index.css</code>. Each component throughout the website uses CSS that has both light and dark stylings written into it, for example: <code className="bg-[#2D3A3A] px-1 py-0.5 text-sm">bg-brandLight dark:bg-brandDark</code>. When clicking the darkmode toggle button in the navbar the 'dark' class is added or removed from the top of the main <code className="bg-[#2D3A3A] px-1 py-0.5 text-sm">&lt;html&gt;</code> document the website is loaded inside, therefore the dark: variant only kicks in when the dark class is on the html tag. This enabled me to toggle this easily across both mobile and desktop versions of the site.
        </p>

        <Carousel images={noDiceGamesImages} />

        <p className="mb-6 leading-relaxed">
          All in all i'm really proud of this frontend overhaul i've learned plenty transferrable UI styling skills to take to future projects and push further. This had been the first blog post i've written ever let alone software development related. It's a start to improve from, onwards and upwards.
        </p>

      </div>
    </div>
  );
};
