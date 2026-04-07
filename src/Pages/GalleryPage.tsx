import React from "react";

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

type GalleryItem = {
  name: string;
  caption: string;
  image: string;
};

const galleryItems: GalleryItem[] = [
  { name: "Butter Bagel", caption: "Simple, toasted, and warm.", image: butter },
  {
    name: "Creamy Garlic",
    caption: "Creamy spread with bold garlic flavor.",
    image: creamygarlic,
  },
  {
    name: "Raspberry Bagel",
    caption: "Sweet berry hit for quick cravings.",
    image: raspberry,
  },
  {
    name: "Maple Banana",
    caption: "Caramelized notes with smooth banana.",
    image: bananamaple,
  },
  {
    name: "Banana Nutella",
    caption: "Classic sweet crowd favourite.",
    image: bananaNutella,
  },
  {
    name: "Berry Bagel",
    caption: "Fresh berry profile and rich finish.",
    image: berrybagel,
  },
  {
    name: "The Graze",
    caption: "Loaded style for hearty appetites.",
    image: thegrace,
  },
  {
    name: "Avo Smash",
    caption: "Creamy avo on a toasted bagel base.",
    image: avosmash,
  },
  {
    name: "Vege D",
    caption: "Packed with fresh veggie layers.",
    image: vegeD,
  },
  {
    name: "Tuna Melt",
    caption: "Toasted and melty savory bite.",
    image: tunamelt,
  },
  {
    name: "The Kiwi",
    caption: "House-style New Zealand favourite.",
    image: kiwi,
  },
  {
    name: "Salmon Bagel",
    caption: "Premium salmon with balanced texture.",
    image: salmon,
  },
  {
    name: "MEAT",
    caption: "Big meaty stack for serious hunger.",
    image: meat,
  },
  {
    name: "The SFC!",
    caption: "Crispy finish with bold flavor.",
    image: sfc,
  },
];

const GalleryPage: React.FC = () => {
  return (
    <section className="border-b border-yellow-500/20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Gallery
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          A quick look at BeagleBagel favourites from the trailer menu. Real
          food, toasted fresh, built for Auckland street-food runs.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-2xl bg-black/60 ring-1 ring-yellow-500/20"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <div className="space-y-1 p-4">
                <h2 className="text-sm font-semibold text-yellow-100">
                  {item.name}
                </h2>
                <p className="text-xs text-slate-300">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;