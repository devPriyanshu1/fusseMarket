import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 shadow-md border-b border-slate-100 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      {/* Scroll progress indicator */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-blue-600 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-transform hover:scale-105 duration-300"
          >
            <img
              src={logo}
              alt="Fuse Market Logo"
              className="h-9 w-9 object-contain"
            />
            <span className="font-bold text-lg text-slate-900 bg-gradient-to-r from-slate-900 to-primary bg-clip-text text-transparent">
              Fuse Market
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-semibold tracking-tight relative transition-all duration-300 px-3 py-1.5 ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-slate-600 hover:text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100"
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
              className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-950 via-indigo-900 to-purple-950 px-6 py-2.5 text-sm font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-semibold tracking-tight transition duration-300 px-3 py-2 rounded-lg ${
                    isActive
                      ? "text-primary bg-primary bg-opacity-10"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center rounded-full bg-gradient-to-r from-primary to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg active:scale-95 mt-2"
            >
              Schedule Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
