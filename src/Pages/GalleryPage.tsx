import React from "react";

const GalleryPage: React.FC = () => {
  return (
    <section className="border-b border-yellow-500/20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Gallery
        </h1>
        <p className="mt-2 max-w-xl text-sm text-slate-300">
          This page will showcase BeagleBagel&apos;s real bagel shots, trailer
          photos and event pop-ups. For now it&apos;s a clean layout placeholder.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-40 rounded-2xl bg-gradient-to-br from-yellow-500 via-yellow-300 to-white/70"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
