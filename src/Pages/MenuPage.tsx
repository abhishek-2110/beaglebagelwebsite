import React from "react";

// ===== IMPORT ALL IMAGES (EXACT FILENAMES) =====
import butter from "../assets/butter$5.jpg";
import creamygarlic from "../assets/creamygarlic$5.jpg";
import raspberry from "../assets/raspberryjam$6.jpg";
import bananamaple from "../assets/bananamaple$5.jpeg";
import bananaNutella from "../assets/banana-nutella$9.jpg";
import berrybagel from "../assets/Berrybagel$10.jpg";
import thegrace from "../assets/Thegrace$12.jpg";
import avosmash from "../assets/avosmash$12.jpg";
import vegeD from "../assets/VegeD$14.jpg";
import tunamelt from "../assets/tunamelt$14.jpg";
import kiwi from "../assets/kiwi$16.jpg";
import salmon from "../assets/salmon$16.jpg";
import meat from "../assets/Meat$16.jpg";
import sfc from "../assets/SFC!$16.jpg";

type MenuItem = {
  id: number;
  name: string;
  price: string;
  tag: string;
  image: string;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Butter Bagel",
    price: "$5",
    tag: "Simple & warm",
    image: butter,
  },
  {
    id: 2,
    name: "Creamy Garlic",
    price: "$5",
    tag: "Garlicky spread",
    image: creamygarlic,
  },
  {
    id: 3,
    name: "Raspberry Bagel",
    price: "$6",
    tag: "Sweet pick",
    image: raspberry,
  },
  {
    id: 4,
    name: "Maple Banana",
    price: "$8",
    tag: "Breakfast fave",
    image: bananamaple,
  },
  {
    id: 5,
    name: "Banana Nutella",
    price: "$9",
    tag: "Sweet favourite",
    image: bananaNutella,
  },
  {
    id: 6,
    name: "Berry Bagel",
    price: "$10",
    tag: "Fruity mix",
    image: berrybagel,
  },
  {
    id: 7,
    name: "The Graze",
    price: "$12",
    tag: "Loaded special",
    image: thegrace,
  },
  {
    id: 8,
    name: "Avo Smash",
    price: "$12",
    tag: "Avo lovers",
    image: avosmash,
  },
  {
    id: 9,
    name: "Vege D",
    price: "$14",
    tag: "Veggie packed",
    image: vegeD,
  },
  {
    id: 10,
    name: "Tuna Melt",
    price: "$14",
    tag: "Toasted melt",
    image: tunamelt,
  },
  {
    id: 11,
    name: "The Kiwi",
    price: "$15", // price from your handwritten list
    tag: "House special",
    image: kiwi,
  },
  {
    id: 12,
    name: "Salmon Bagel",
    price: "$16",
    tag: "Seafood special",
    image: salmon,
  },
  {
    id: 13,
    name: "MEAT",
    price: "$16",
    tag: "Meaty stack",
    image: meat,
  },
  {
    id: 14,
    name: "The SFC!",
    price: "$16",
    tag: "Crispy favourite",
    image: sfc,
  },
];

const MenuPage: React.FC = () => {
  return (
    <section className="border-b border-yellow-500/20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Bagel menu
          </h1>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            Real trailer prices for each of our bagels. Final descriptions and
            dietary notes can be added later once the owner confirms them.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-2xl bg-black/60 p-4 shadow-sm shadow-black/60 ring-1 ring-yellow-500/20"
            >
              {/* Image */}
              <div className="mb-4 h-32 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Tag + price */}
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="rounded-full bg-yellow-400/15 px-3 py-1 font-semibold text-yellow-200">
                  {item.tag}
                </span>
                <span className="font-semibold text-yellow-300">
                  {item.price}
                </span>
              </div>

              {/* Name + number */}
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-sm font-semibold">{item.name}</h2>
                <span className="text-[11px] text-slate-500">
                  #{item.id.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Placeholder description */}
              <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
                Description for this bagel can go here once the final wording is
                confirmed with the owner.
              </p>

              {/* Order button (UI only) */}
              <button className="mt-3 w-full rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400">
                Order now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
