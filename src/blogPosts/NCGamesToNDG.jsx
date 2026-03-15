import React, { useState } from "react";

import ndgLogo from "../assets/nodicegameslogo.png";
import ndg1 from "../assets/NDG1.png";
import ndg2 from "../assets/NDG2.png";
import ndg3 from "../assets/NDG3.png";
import ndg4 from "../assets/NDG4.png";
import ndg5 from "../assets/NDG5.png";
import ndg6 from "../assets/NDG6.png";
import ncGames2 from "../assets/NCGames2.png";
import ncGames3 from "../assets/NCGames3.png";
import ncGames4 from "../assets/NCGames4.png";
import ncGames5 from "../assets/NCGames5.png";
import ncGames6 from "../assets/NCGames6.png";
import ncGames7 from "../assets/NCGames7.png";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full my-8">
      <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
        <img
          src={images[index]}
          alt={`slide ${index + 1}`}
          className="max-w-full max-h-full object-contain"
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

const ncGamesImages = [ncGames2, ncGames3, ncGames4, ncGames5, ncGames6, ncGames7];
const noDiceGamesImages = [ndgLogo, ndg1, ndg2, ndg3, ndg4, ndg5, ndg6];

export const NCGamesToNDG = () => {
  return (
    <div className="w-full min-h-screen bg-[#040F0F] text-[#FCFFFC] pt-24 pb-16">
      <div className="max-w-[800px] mx-auto px-4">

        <h1 className="text-4xl font-bold border-b-4 border-[#2BA84A] pb-2 mb-2">
          From NC Games to No Dice Games
        </h1>
        <p className="text-sm text-gray-400 mb-10">March 16, 2026</p>

        <p className="mb-6 leading-relaxed">
        The first rendition of my board games review website 'NC Games' looked like a frontend built by a backend developer. After getting my backend RESTful API showing a list of endpoints and getting my head around SQL left joins and all that jazz, the prospect of designing a polished, responsive frontend for a user did not excite me. After all the backend work I wanted to get something functional to show the API off and how it works, I didn't want to sit for hours thinking up design choices.
        </p>

        <p className="mb-6 leading-relaxed">
        NC Games' colour scheme was all over the shop. Black navbar with a disconnected white page body to start and then the comment sections for reviews had a full black background with red comment boxes, ordered horizontally across the page. The login screen was orange and greeted the user with an oversized profile picture after a successful login. It was totally jarring to look at and nothing flowed together. Was there even a coherent theme? The review page featured cards that were dense with information but visually flat. The featured reviews section of the homepage was basically empty, the single image carousel with a link didn't really give a welcoming landing experience.
        </p>

        <p className="mb-6 leading-relaxed">
        NC Games was functional, but it had no personality or identity. I'm not sure it was even functional for mobile viewing. The logo itself wasn't too shabby, it had energy and character, but none of that carried through to the rest of the UI. Coming back to the 'finished' product I knew something had to change. I wanted to take this functional site and my hacked together job at understanding basic CSS and turn it into something considered, designed and polished. I decided to port the whole project over to Vite and dip my toes into Tailwind CSS, it was time to put some <span className="font-extrabold">-weight: 800</span> behind my fullstack developer title.
        </p>

        <Carousel images={ncGamesImages} />

        <p className="mb-6 leading-relaxed">
        First and foremost I wanted to rebrand the website. Northcoders Games still had some of that bootcamp fuzz stuck to it. I wanted something personal, something unique. I also knew I wanted dice in the logo. So, envisioning the most disappointing outcome in my mind - snake eyes - No Dice Games slithered into existence.
        </p>

        <p className="mb-6 leading-relaxed">
        I had my sights set on orange being the primary palette colour, but there was still scheming to be done. Complementing this, I envisioned warm creams, greys, blacks and browns. I took my time using <a href="https://coolors.co/" target="_blank" rel="noreferrer" className="text-[#2BA84A] hover:text-[#248232] transition-colors duration-200">Coolors</a> and <a href="https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff&fonts=Inter-Inter" target="_blank" rel="noreferrer" className="text-[#2BA84A] hover:text-[#248232] transition-colors duration-200">Realtime Colors</a> to refine this palette.
        </p>

        <p className="mb-6 leading-relaxed">
        I wanted the new logo to be simple, memorable and work as a standalone icon as well as with accompanying text. The snake eyes dice reflected the name in motion, clean and minimal. Although the previous NC Games logo had its own charm, it bothered me that as a static image it would render blurry when zooming in. I'd seen the term SVG (Scalable Vector Graphics) knocking about online and I wanted to see what all the fuss was about. After converting the new logo using{" "}
          <a
            href="https://nikitahl.github.io/svg-2-code/"
            target="_blank"
            rel="noreferrer"
            className="text-[#2BA84A] hover:text-[#248232] transition-colors duration-200"
          >
            this tool
          </a>, I could see that the image was now just code - drawing instructions rendered losslessly and redrawn on the page at any size. This piqued my interest, so I started splitting the instructions apart until I could separate the dice icon from the text, giving me a shortened version to use in the footer and as a favicon. I took the logo further, finding some animated SVGs for a rotating dice loading screen which I'm pretty chuffed with.
        </p>

        <p className="mb-6 leading-relaxed">
          Up until this rebrand I'd never added dark mode to a frontend before. However, the colour palette I had created made dark mode functionality feel like a natural next step. I expected such a feature to involve a convoluted passing of styling state down through every affected component. The reality of using Tailwind was far more elegant. The dark mode toggling all hinges on one class changing inside the <code className="bg-[#1a3a2a] px-1 py-0.5 text-sm">&lt;html&gt;</code> tag in the <code className="bg-[#1a3a2a] px-1 py-0.5 text-sm">index.html</code> file. All the theme colours are defined in an <code className="bg-[#1a3a2a] px-1 py-0.5 text-sm">@theme</code> block in <code className="bg-[#1a3a2a] px-1 py-0.5 text-sm">index.css</code>. Each component throughout the website uses CSS that has both light and dark stylings written into it, for example: <code className="bg-[#1a3a2a] px-1 py-0.5 text-sm">bg-brandLight dark:bg-brandDark</code>. When clicking the dark mode button in the navbar the <code className="bg-[#1a3a2a] px-1 py-0.5 text-sm">dark</code> class is added or removed. What I expected to be the most complex part of the overhaul ended up being one of the most satisfying to implement.
        </p>

        <Carousel images={noDiceGamesImages} />

        <p className="mb-6 leading-relaxed">
        All in all, this overhaul has taught me a lot more than I expected. SVG manipulation, Tailwind dark mode and thinking about colour as a whole palette rather than choices in isolation now sit snug in my frontend bag of tricks. My dev blog has now been christened with my first blog post ever written, technical or otherwise. Coming up I'll be going into detail about my war on Blazor WebAssembly and finding out if we can really get my C# text-based RPG running in browser. Could you get the chance to be a potential crypt-stalking adventurer? We shall see...
        </p>

      </div>
    </div>
  );
};
