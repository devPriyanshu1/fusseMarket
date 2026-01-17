import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/logos/logo.svg"
              alt="Fuse Market Logo"
              className="h-8 w-8"
            />
            <span className="font-bold text-lg text-slate-900">
              Fuse Market
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-primary"
                      : "text-slate-600 hover:text-slate-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA BUTTON (DESKTOP) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium ${
                    isActive
                      ? "text-primary"
                      : "text-slate-700 hover:text-slate-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
