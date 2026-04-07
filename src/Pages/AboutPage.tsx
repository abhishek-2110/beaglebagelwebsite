import React from "react";

const highlights = [
  {
    title: "Fresh batches",
    text: "Our bagels are toasted to order with fillings prepared for fast service and consistent quality.",
  },
  {
    title: "Roaming locations",
    text: "BeagleBagel runs as a mobile food truck, moving around Auckland for lunch runs, evening stops, and local events.",
  },
  {
    title: "Local service",
    text: "NZ-owned and community-focused, serving regulars, workers, students, and families across the city.",
  },
  {
    title: "Catering & events",
    text: "From private functions to market days, we can bring street-food bagels and coffee service to your event.",
  },
];

const AboutPage: React.FC = () => {
  return (
    <section className="border-b border-yellow-500/20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About BeagleBagel
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          BeagleBagel is an Auckland-based roaming bagel truck built around
          quick, high-quality street-food service, fresh toasted bagels, and a
          straightforward local food experience.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-sm leading-relaxed text-slate-300">
            <p>
              We focus on bold bagel combinations, fresh ingredients, and a fast
              trailer workflow that keeps food hot, consistent, and ready for
              customers on the move.
            </p>
            <p>
              Our menu is centered on toasted bagels made to order, from simple
              classics through to loaded savory options. Alongside bagels, we
              keep coffee service ready for breakfast runs, lunch stops, and
              late-day cravings.
            </p>
            <p>
              As a mobile concept, we meet customers where they are — local
              runs, planned spots, and community events across Auckland. The
              goal is simple: reliable food, fair pricing, and friendly service.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-yellow-500 via-yellow-300 to-white/70 p-[1px]">
            <div className="h-full min-h-56 rounded-[calc(1.5rem-1px)] bg-black/70 p-6">
              <h2 className="text-lg font-semibold text-yellow-200">
                What we stand for
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Fresh toasted bagels, quick service, and a roaming food-truck
                setup that keeps BeagleBagel flexible, local, and easy to find
                across Auckland.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                We’re built for regular lunch customers, event visitors, and
                anyone after a solid bagel and coffee without the fuss.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-black/60 p-5 ring-1 ring-yellow-500/20"
            >
              <h2 className="text-sm font-semibold text-yellow-200">
                {item.title}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;