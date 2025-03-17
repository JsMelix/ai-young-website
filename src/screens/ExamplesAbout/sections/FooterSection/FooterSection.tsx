import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

// Define the footer link data for reusability
const footerData = [
  {
    title: "Use cases",
    links: [
      "UI design",
      "UX design",
      "Wireframing",
      "Diagramming",
      "Brainstorming",
      "Online whiteboard",
      "Team collaboration",
    ],
  },
  {
    title: "Explore",
    links: [
      "Design",
      "Prototyping",
      "Development features",
      "Design systems",
      "Collaboration features",
      "Design process",
      "FigJam",
    ],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "Best practices",
      "Colors",
      "Color wheel",
      "Support",
      "Developers",
      "Resource library",
    ],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-wrap w-full max-w-[1200px] items-start gap-4 pt-8 pb-40 px-8 bg-white border-t border-[#d9d9d9]">
      {/* Logo and social media column */}
      <div className="flex flex-col w-[262px] items-start gap-6">
        <img className="relative" alt="Figma" src="public/ai-logo.svg" />

        <div className="flex items-center gap-4">
          <TwitterIcon className="w-6 h-6 text-[#1e1e1e]" />
          <InstagramIcon className="w-6 h-6 text-[#1e1e1e]" />
          <YoutubeIcon className="w-6 h-6 text-[#1e1e1e]" />
          <LinkedinIcon className="w-6 h-6 text-[#1e1e1e]" />
        </div>
      </div>

      {/* Map through the footer columns data */}
      {footerData.map((column, index) => (
        <div key={index} className="flex flex-col w-[262px] items-start gap-3">
          <div className="flex flex-col items-start gap-2.5 pb-4 w-full">
            <div className="flex items-start w-full">
              <div className="font-body-strong font-[number:var(--body-strong-font-weight)] text-[#1e1e1e] text-[length:var(--body-strong-font-size)] tracking-[var(--body-strong-letter-spacing)] leading-[var(--body-strong-line-height)] [font-style:var(--body-strong-font-style)]">
                {column.title}
              </div>
            </div>
          </div>

          {/* Map through the links for each column */}
          {column.links.map((link, linkIndex) => (
            <div key={linkIndex} className="w-full">
              <div className="font-body-base font-[number:var(--body-base-font-weight)] text-[#1e1e1e] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                {link}
              </div>
            </div>
          ))}
        </div>
      ))}
    </footer>
  );
};
