import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentGridSection = (): JSX.Element => {
  // Data for content cards to enable mapping
  const contentCards = [
    {
      id: 1,
      title: "Title",
      bodyText:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      buttonText: "Button",
    },
    {
      id: 2,
      title: "Title",
      bodyText:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      buttonText: "Button",
    },
    {
      id: 3,
      title: "Title",
      bodyText:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      buttonText: "Button",
    },
  ];

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

      <div className="flex flex-col items-start gap-6 w-full">
        {contentCards.map((card) => (
          <Card
            key={card.id}
            className="flex flex-wrap min-w-60 gap-6 p-6 w-full rounded-lg border border-solid border-[#d9d9d9] bg-white"
          >
            <CardContent className="p-0 flex flex-wrap gap-6 w-full">
              <div className="w-40 h-40 bg-[url(public/image.svg)] bg-cover bg-[50%_50%] bg-image-placeholder" />

              <div className="flex flex-col min-w-40 items-start gap-4 flex-1 grow">
                <div className="flex flex-col gap-2 w-full">
                  <h3 className="font-heading font-[number:var(--heading-font-weight)] text-[#1e1e1e] text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
                    {card.title}
                  </h3>
                  <p className="font-body-base font-[number:var(--body-base-font-weight)] text-[#757575] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                    {card.bodyText}
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full">
                  <Button
                    variant="outline"
                    className="bg-[#e3e3e3] border-[#767676] rounded-lg p-3 h-auto"
                  >
                    <span className="font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[#1e1e1e] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
                      {card.buttonText}
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
