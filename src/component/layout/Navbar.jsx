import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
      setIsScrolled(scrollTop > 20);
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
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled ? "shadow-2xl" : "shadow-sm"
      }`}
      style={{
        backgroundColor: isScrolled
          ? `rgba(255, 255, 255, 0.9)`
          : `rgba(255, 255, 255, 0.98)`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: isScrolled
          ? `1px solid rgba(139, 92, 246, 0.15)`
          : `1px solid transparent`,
      }}
    >
      {/* Scroll progress indicator with glow */}
      <div
        className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: `linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)`,
          boxShadow: `0 0 12px var(--color-primary), 0 0 20px rgba(139, 92, 246, 0.3)`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* LOGO with enhanced hover */}
          <Link
            to="/"
            className="flex items-center gap-3 transition-all hover:scale-105 duration-300 group"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                style={{
                  background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                }}
              ></div>
              <img
                src={logo}
                alt="Fuse Market Logo"
                className="h-11 w-11 object-contain relative z-10"
              />
            </div>
            <span
              className="font-bold text-xl tracking-tight"
              style={{
                background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              FusseMarket
            </span>
          </Link>

          {/* DESKTOP NAV with enhanced styling */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-semibold tracking-tight relative transition-all duration-300 px-4 py-2 group ${
                    isActive ? "" : ""
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive
                    ? `var(--color-primary)`
                    : `var(--color-muted)`,
                })}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      style={{
                        background: `linear-gradient(90deg, var(--color-primary), var(--color-accent))`,
                        boxShadow: isActive
                          ? `0 0 8px var(--color-primary)`
                          : "none",
                      }}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center justify-center px-6 py-2.5 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              style={{
                background: isContactHovered
                  ? `white`
                  : `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                color: isContactHovered ? `var(--color-primary)` : `white`,
                border: isContactHovered
                  ? `2px solid var(--color-primary)`
                  : `2px solid transparent`,
              }}
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
            >
              <span className="relative z-10">Contact Us</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, var(--color-accent), transparent)`,
                }}
              ></div>
            </Link>
          </nav>

          {/* MOBILE HAMBURGER with smooth animation */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2.5 transition-all duration-300 rounded-xl hover:bg-opacity-10 hover:scale-110"
            style={{
              color: `var(--color-primary)`,
              backgroundColor: isMobileMenuOpen
                ? `rgba(139, 92, 246, 0.1)`
                : `transparent`,
            }}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0 rotate-90 scale-50"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-50"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU with enhanced animations */}
      {isMobileMenuOpen && (
        <>
          {/* Enhanced backdrop with blur */}
          <div
            className="fixed inset-0 z-40 md:hidden transition-all duration-300"
            style={{
              backgroundColor: `rgba(0, 0, 0, 0.5)`,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sleek mobile sidebar */}
          <nav
            className="fixed top-20 left-0 right-0 z-50 md:hidden animate-in slide-in-from-top-4 duration-300"
            style={{
              backgroundColor: `rgba(255, 255, 255, 0.98)`,
              borderBottom: `1px solid rgba(139, 92, 246, 0.15)`,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: `0 10px 40px rgba(0, 0, 0, 0.1)`,
            }}
          >
            <div className="px-6 py-8 space-y-2">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-5 py-4 rounded-2xl font-semibold tracking-tight transition-all duration-300 ${
                      isActive
                        ? "shadow-lg scale-[1.02]"
                        : "hover:shadow-md hover:scale-[1.01]"
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? "white" : `var(--color-deep-purple)`,
                    background: isActive
                      ? `linear-gradient(135deg, var(--color-primary), var(--color-accent))`
                      : `rgba(139, 92, 246, 0.05)`,
                    animationDelay: `${index * 50}ms`,
                  })}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Navbar;