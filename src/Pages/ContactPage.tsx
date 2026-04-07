import React from "react";

const ContactPage: React.FC = () => {
  return (
    <section className="border-b border-yellow-500/20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact & bookings
        </h1>
        <p className="mt-2 max-w-xl text-sm text-slate-300">
          This is a design-only contact page. Later we can hook the form into
          email or a backend service as needed.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-[2fr,1.2fr]">
          {/* Form UI only */}
          <form className="space-y-4 rounded-3xl bg-black/60 p-6 ring-1 ring-yellow-500/30">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-300">
                  Name
                </label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-yellow-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300">
                  Email
                </label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-yellow-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-yellow-400"
                placeholder="Tell us about your event or question..."
              />
            </div>

            <button
              type="button"
              className="rounded-full bg-yellow-400 px-5 py-2 text-[11px] font-semibold uppercase tracking-wide text-black hover:bg-yellow-300"
            >
              Send (demo only)
            </button>
          </form>

          {/* Contact details */}
          <div className="space-y-4 text-sm text-slate-200">
            <div className="rounded-3xl bg-black/60 p-5 ring-1 ring-yellow-500/30">
              <h2 className="text-sm font-semibold text-yellow-200">
                Quick contact
              </h2>
              <p className="mt-2 text-xs text-slate-300">
                Once the owner confirms, we can place real phone and email
                details here.
              </p>
              <div className="mt-4 space-y-1 text-xs">
                <div>Phone: (to be confirmed)</div>
                <div>Email: (to be confirmed)</div>
              </div>
            </div>

            <div className="rounded-3xl bg-black/60 p-5 ring-1 ring-yellow-500/30">
              <h2 className="text-sm font-semibold text-yellow-200">
                Usual run
              </h2>
              <p className="mt-2 text-xs text-slate-300">
                A simple block describing the usual weekly pattern: CBD
                lunches, Ponsonby nights, weekend markets, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
