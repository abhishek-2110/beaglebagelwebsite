import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section className="border-b border-yellow-500/20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About BeagleBagel
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          This is a layout placeholder for the real story. Here we&apos;ll talk
          about how BeagleBagel started, why the trailer exists, and the focus
          on hand-rolled bagels and late-night street-food energy.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-sm text-slate-200">
            <p>
              Replace this text later with the owner&apos;s story, how the
              recipes were developed, and why the brand leans into black &amp;
              yellow street-food vibes.
            </p>
            <p>
              We can also mention sourcing: local ingredients, NZ roasted
              coffee, and how the trailer moves around Auckland during the week.
            </p>
          </div>
          <div className="h-56 rounded-3xl bg-gradient-to-br from-yellow-500 via-yellow-300 to-white/70" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
