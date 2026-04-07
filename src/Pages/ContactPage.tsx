import React from "react";

const ContactPage: React.FC = () => {
  return (
    <section className="border-b border-yellow-500/20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact & bookings
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Reach BeagleBagel for trailer location updates, catering requests, and
          event enquiries around Auckland.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr,1fr]">
          <div className="rounded-3xl bg-black/60 p-6 ring-1 ring-yellow-500/30">
            <h2 className="text-sm font-semibold text-yellow-200">
              BeagleBagel
            </h2>

            <dl className="mt-4 space-y-4 text-sm text-slate-200">
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:+6493942218"
                    className="text-yellow-300 hover:text-yellow-200"
                  >
                    09 394 2218
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Address
                </dt>
                <dd className="mt-1 text-slate-200">
                  16 Huia Road, Point Chevalier, Auckland 1022
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Business style
                </dt>
                <dd className="mt-1 text-slate-200">
                  NZ-owned roaming bagel truck serving fresh toasted bagels and
                  coffee.
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/search?q=The+Beagle+Bagel+co+Point+Chevalier"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-400 px-5 py-2 text-[11px] font-semibold uppercase tracking-wide text-black hover:bg-yellow-300"
              >
                Google business
              </a>

              <a
                href="https://www.ubereats.com/nz/store/the-beagle-bagel-co/CQRk6LccTZeoPqVJNL6v-Q?srsltid=AfmBOorlhHkmq5xAadBjMRxQfLuyMf3Fi3WXDFXQMZmxJphmwwpiWBn_"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-yellow-400/60 px-5 py-2 text-[11px] font-semibold uppercase tracking-wide text-yellow-200 hover:bg-yellow-400/10"
              >
                Order on Uber Eats
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl bg-black/60 p-5 ring-1 ring-yellow-500/30">
              <h2 className="text-sm font-semibold text-yellow-200">
                Booking notes
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                For catering or private events, include your preferred date,
                location, expected guest count, and service window when calling.
              </p>
            </div>

            <div className="rounded-3xl bg-black/60 p-5 ring-1 ring-yellow-500/30">
              <h2 className="text-sm font-semibold text-yellow-200">
                Where to find us
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                BeagleBagel operates as a mobile trailer and appears at selected
                Auckland stops and events. Check Google and Uber Eats links for
                current availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;