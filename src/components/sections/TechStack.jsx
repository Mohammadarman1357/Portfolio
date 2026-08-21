import React from "react";
import MarqueeModule from "react-fast-marquee";

// Robust interop for Vite 8 / CJS module wrapper
const Marquee = MarqueeModule.default || MarqueeModule;

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

function ReviewCard({ img, name, username, body }) {
  return (
    <div
      className="
        relative
        mx-2
        w-64
        shrink-0
        overflow-hidden
        rounded-xl
        border
        border-gray-950/10
        bg-gray-950/[0.02]
        p-4
        hover:bg-gray-950/[0.05]
        transition
      "
    >
      <div className="flex items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={img}
        />

        <div className="flex flex-col">
          <p className="text-sm font-medium">
            {name}
          </p>

          <p className="text-xs font-medium text-gray-500">
            {username}
          </p>
        </div>
      </div>

      <p className="mt-2 text-sm">
        {body}
      </p>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* First Row */}
      <Marquee
        speed={40}
        pauseOnHover
        gradient
        gradientWidth={100}
      >
        {firstRow.map((review) => (
          <ReviewCard
            key={review.username}
            {...review}
          />
        ))}
      </Marquee>

      {/* Second Row */}
      <Marquee
        speed={40}
        pauseOnHover
        direction="right"
        gradient
        gradientWidth={100}
      >
        {secondRow.map((review) => (
          <ReviewCard
            key={review.username}
            {...review}
          />
        ))}
      </Marquee>

    </section>
  );
}