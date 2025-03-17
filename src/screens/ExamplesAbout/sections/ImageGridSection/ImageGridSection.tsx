import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ImageGridSection = (): JSX.Element => {
  // Data for the cards to enable mapping
  const cardItems = [
    {
      id: 1,
      title: "Title",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      imageUrl: "public/image.svg",
    },
    {
      id: 2,
      title: "Title",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      imageUrl: "public/image.svg",
    },
    {
      id: 3,
      title: "Title",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      imageUrl: "public/image.svg",
    },
    {
      id: 4,
      title: "Title",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      imageUrl: "public/image.svg",
    },
    {
      id: 5,
      title: "Title",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      imageUrl: "public/image.svg",
    },
    {
      id: 6,
      title: "Title",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      imageUrl: "public/image.svg",
    },
  ];

  // Create rows of 3 cards each
  const rows = [];
  for (let i = 0; i < cardItems.length; i += 3) {
    rows.push(cardItems.slice(i, i + 3));
  }

  return (
    <section className="flex flex-col gap-12 p-16 w-full bg-white">
      <header className="flex flex-col gap-2">
        <h2 className="font-heading font-[number:var(--heading-font-weight)] text-[#1e1e1e] text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
          Heading
        </h2>
        <p className="font-subheading font-[number:var(--subheading-font-weight)] text-[#757575] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
          Subheading
        </p>
      </header>

      {rows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex flex-wrap gap-12 w-full">
          {row.map((item) => (
            <Card
              key={item.id}
              className="flex flex-wrap min-w-60 flex-1 p-6 rounded-lg border border-solid border-[#d9d9d9] bg-white"
            >
              <CardContent className="flex flex-wrap gap-6 p-0 w-full">
                <div
                  className="w-40 h-40 bg-cover bg-center bg-image-placeholder"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
                <div className="flex flex-col min-w-40 gap-4 flex-1">
                  <div className="flex flex-col gap-2 w-full">
                    <h3 className="font-heading font-[number:var(--heading-font-weight)] text-[#1e1e1e] text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
                      {item.title}
                    </h3>
                    <p className="font-body-base font-[number:var(--body-base-font-weight)] text-[#757575] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </section>
  );
};
