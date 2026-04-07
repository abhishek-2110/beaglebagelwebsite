import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ===== EXTERNAL LINKS =====
const GOOGLE_BUSINESS_URL =
  "https://www.google.com/search?q=The+Beagle+Bagel+co+Point+Chevalier";
const UBEREATS_URL =
  "https://www.ubereats.com/nz/store/the-beagle-bagel-co/CQRk6LccTZeoPqVJNL6v-Q?srsltid=AfmBOorlhHkmq5xAadBjMRxQfLuyMf3Fi3WXDFXQMZmxJphmwwpiWBn_";

// ===== HERO SLIDESHOW IMAGES (MATCH YOUR /assets FOLDER) =====
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

type Slide = {
  name: string;
  img: string;
};

const HERO_SLIDES: Slide[] = [
  { name: "Butter Bagel", img: butter },
  { name: "Creamy Garlic", img: creamygarlic },
  { name: "Raspberry Bagel", img: raspberry },
  { name: "Maple Banana", img: bananamaple },
  { name: "Banana Nutella", img: bananaNutella },
  { name: "Berry Bagel", img: berrybagel },
  { name: "The Grace", img: thegrace },
  { name: "Avo Smash", img: avosmash },
  { name: "Vege D", img: vegeD },
  { name: "Tuna Melt", img: tunamelt },
  { name: "The Kiwi", img: kiwi },
  { name: "Salmon Bagel", img: salmon },
  { name: "MEAT", img: meat },
  { name: "The SFC!", img: sfc },
];

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <HighlightsRow />
      <RoadScheduleSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
};

export default HomePage;

/* ========== HERO ========== */

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState<number>(0);

  // auto-rotate hero images
  useEffect(() => {
    const timer = setInterval(
      () => setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[slideIndex];

  return (
    <section className="border-b border-yellow-500/20 bg-gradient-to-b from-black via-slate-950 to-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-center md:py-16">
        {/* LEFT */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-black/60 px-3 py-1 text-[11px] font-medium text-yellow-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Roaming bagel truck · Auckland
          </div>

          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Bagels with{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              street-food attitude.
            </span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            BeagleBagel serves hand-rolled, freshly toasted bagels, strong
            coffee, and late-night street-food combos from our black-&amp;yellow
            truck across Tāmaki Makaurau.
          </p>

          {/* address + hours from Google */}
          <p className="text-xs text-slate-400">
            16 Huia Road, Point Chevalier, Auckland 1022 · Open, closes
            2:00&nbsp;pm ·{" "}
            <a
              href="tel:093942218"
              className="font-semibold text-yellow-300 underline decoration-yellow-400/70 underline-offset-2"
            >
              09&nbsp;394&nbsp;2218
            </a>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/menu")}
              className="rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-yellow-500/30 hover:bg-yellow-300"
            >
              View menu
            </button>

            <button
              onClick={() => navigate("/gallery")}
              className="rounded-full border border-slate-600 bg-black/40 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:bg-black/60"
            >
              This week&apos;s locations
            </button>
          </div>

          {/* Stats / reviews (BLUE AREA) */}
          <div className="flex flex-wrap gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <span className="text-yellow-400">★★★★☆</span>
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-yellow-400/70 underline-offset-2"
              >
                3.7 · 3 Google reviews
              </a>
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <a
                href={UBEREATS_URL}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-yellow-400/70 underline-offset-2"
              >
                3.7/5 on Uber Eats · 42+ ratings
              </a>
            </span>

            <span className="flex items-center gap-2">
              <span className="rounded-full bg-yellow-400 px-2 py-1 text-xs font-semibold text-black">
                NZ
              </span>
              Locally owned
            </span>
          </div>
        </div>

        {/* RIGHT (route card with slideshow + location) */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl bg-black/70 p-4 shadow-2xl shadow-yellow-500/20 ring-1 ring-yellow-500/40">
            <div className="mb-3 flex items-center justify-between text-[11px] text-slate-300">
              <span className="font-semibold uppercase tracking-wide">
                This week&apos;s route
              </span>
              <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-yellow-300">
                Demo UI
              </span>
            </div>

            {/* GREEN AREA – slideshow instead of flat gradient */}
            <div className="mb-2 overflow-hidden rounded-2xl bg-black/60">
              <img
                src={currentSlide.img}
                alt={currentSlide.name}
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="mb-3 text-[11px] text-slate-300">
              Today&apos;s craving:{" "}
              <span className="font-semibold text-yellow-300">
                {currentSlide.name}
              </span>
            </div>

            {/* ORANGE AREA – updated location info */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2 text-slate-50">
                <div>
                  <div className="text-[10px] uppercase tracking-wide text-slate-400">
                    Today
                  </div>
                  <div className="text-sm font-semibold">
                    Point Chevalier · Huia Road
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Woolworths car park · 8:00 am – 2:00 pm
                  </div>
                </div>
                <div className="text-right text-[11px]">
                  <div className="font-semibold text-yellow-300">
                    Lunch &amp; brunch run
                  </div>
                  <div className="text-slate-400">Bagels &amp; coffee</div>
                </div>
              </div>

              <div className="flex flex-col gap-1 text-[11px] text-slate-300">
                <ScheduleChip day="Thu" place="Ponsonby Road" time="5 – 9 pm" />
                <ScheduleChip
                  day="Fri"
                  place="Wynyard Quarter"
                  time="6 – 10:30 pm"
                />
                <ScheduleChip
                  day="Sat"
                  place="Auckland CBD Night Market"
                  time="4 – 11 pm"
                />
              </div>
            </div>

            <div className="absolute -right-3 -bottom-4 rounded-2xl bg-yellow-400 px-4 py-3 text-xs text-black shadow-xl shadow-yellow-500/40">
              <div className="text-[10px] uppercase tracking-wide text-slate-800/80">
                Crowd favourite
              </div>
              <div className="font-semibold">Smoked salmon &amp; dill</div>
              <div className="text-[11px] text-slate-800/80">
                Sold out 3 nights in a row
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type ChipProps = { day: string; place: string; time: string };

const ScheduleChip: React.FC<ChipProps> = ({ day, place, time }) => (
  <div className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-1.5">
    <span>
      {day} · {place}
    </span>
    <span className="text-slate-400">{time}</span>
  </div>
);

/* ========== HIGHLIGHTS ========== */

const HighlightsRow: React.FC = () => {
  const highlights = [
    { label: "Vegan options", emoji: "🥬" },
    { label: "Locally roasted coffee", emoji: "☕" },
    { label: "Gluten-friendly picks", emoji: "🌾" },
    { label: "Late-night pop-ups", emoji: "🌙" },
    { label: "Event catering", emoji: "🎉" },
  ];

  return (
    <section className="border-b border-yellow-500/20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-400/10 px-4 py-2 text-[11px] font-semibold text-yellow-200"
            >
              <span>{item.emoji}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ========== ROAD SCHEDULE ========== */

const RoadScheduleSection: React.FC = () => {
  const days = [
    "Wed · Britomart – 11:30–3:00",
    "Thu · Ponsonby – 5:00–9:00",
    "Fri · Wynyard – 6:00–10:30",
    "Sat · Night Market – 4:00–11:00",
  ];

  return (
    <section className="border-b border-yellow-500/20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
          This week on the road
        </h2>
        <p className="mb-6 text-sm text-slate-300">
          Static schedule layout. Later we can hook this into real data or a
          CMS.
        </p>

        <div className="rounded-3xl bg-black/70 p-5 ring-1 ring-yellow-500/25">
          <div className="space-y-3 text-xs">
            {days.map((d) => (
              <div
                key={d}
                className="rounded-xl bg-slate-900 px-4 py-3 text-slate-100"
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ========== TESTIMONIALS ========== */

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    "The only reason our team stays late on Fridays. The BBQ Night Rider is ridiculous.",
    "Best bagels I’ve had outside New York. Coffee is strong, staff are lovely.",
    "They catered our office lunch and everyone asked for seconds. Super easy to work with.",
  ];

  return (
    <section className="border-b border-yellow-500/20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
          People follow us for a reason
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((q, i) => (
            <figure
              key={i}
              className="flex flex-col justify-between rounded-2xl bg-black/70 p-4 text-xs text-slate-200 ring-1 ring-yellow-500/25"
            >
              <div className="mb-3 text-yellow-400">★★★★★</div>
              <blockquote>“{q}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ========== CTA BANNER ========== */

const CtaBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="border-b border-yellow-500/20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-black via-slate-900 to-black p-6 ring-1 ring-yellow-500/25">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold sm:text-xl">
                Want BeagleBagel at your event?
              </h2>
              <p className="mt-1 max-w-xl text-xs text-slate-300 sm:text-sm">
                This is a visual placeholder. The real enquiry form will live on
                the Contact page once we build that UI.
              </p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="rounded-full bg-yellow-400 px-5 py-2 text-[11px] font-semibold uppercase tracking-wide text-black hover:bg-yellow-300"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
