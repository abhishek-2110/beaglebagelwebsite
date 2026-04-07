import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import GalleryPage from "./Pages/GalleryPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

/* ============== NAVBAR (same visual style) ============== */

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const linkBase = "hover:text-white transition-colors";

  return (
    <header className="sticky top-0 z-30 border-b border-yellow-500/20 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-md">
            <span className="text-xl font-bold text-black">B</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">
              BeagleBagel
            </div>
            <div className="text-[11px] text-slate-400">
              Street-food bagels · NZ
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-xs font-medium text-slate-200 md:flex">
          <Link to="/" className={linkBase}>
            Home
          </Link>
          <Link to="/menu" className={linkBase}>
            Menu
          </Link>
          <Link to="/gallery" className={linkBase}>
            Gallery
          </Link>
          <Link to="/about" className={linkBase}>
            About
          </Link>
          <Link to="/contact" className={linkBase}>
            Contact
          </Link>

          <Link
            to="/gallery"
            className="rounded-full bg-yellow-400 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-black shadow-sm hover:bg-yellow-300"
          >
            FIND THE TRUCK
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-yellow-500/40 p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-4 bg-slate-100" />
            <span className="h-0.5 w-4 bg-slate-100" />
            <span className="h-0.5 w-4 bg-slate-100" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-yellow-500/20 bg-slate-950/95 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-100">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="w-full rounded-lg px-2 py-2 text-left hover:bg-slate-900"
            >
              Home
            </Link>
            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="w-full rounded-lg px-2 py-2 text-left hover:bg-slate-900"
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              onClick={() => setOpen(false)}
              className="w-full rounded-lg px-2 py-2 text-left hover:bg-slate-900"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="w-full rounded-lg px-2 py-2 text-left hover:bg-slate-900"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="w-full rounded-lg px-2 py-2 text-left hover:bg-slate-900"
            >
              Contact
            </Link>
            <Link
              to="/gallery"
              onClick={() => setOpen(false)}
              className="mt-2 w-full rounded-full bg-yellow-400 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-black shadow-sm hover:bg-yellow-300"
            >
              Find the truck
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

/* ============== FOOTER ============== */

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-yellow-500/20 bg-slate-950 pt-8 pb-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} BeagleBagel. Made in Aotearoa. Design-only
          demo.
        </p>
      </div>
    </footer>
  );
};
