import { useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: isScrolled
          ? "1px solid rgba(216, 77, 121, 0.2)"
          : "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Scroll progress indicator */}
      <div
        className="absolute bottom-0 left-0 h-1 transition-all duration-200"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: "var(--color-primary)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 transition-transform hover:scale-105 duration-200"
          >
            <img
              src={logo}
              alt="Fuse Market Logo"
              className="h-9 w-9 sm:h-11 sm:w-11 object-contain"
            />
            <span
              className="font-bold text-lg sm:text-xl tracking-tight"
              style={{
                color: "var(--color-primary)",
              }}
            >
              FusseMarket
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.slice(0, 3).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm lg:text-base font-semibold px-3 lg:px-4 py-2 transition-all duration-200 ${
                    isActive ? "border-b-3" : "hover:bg-opacity-10"
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--color-primary)"
                    : "var(--color-muted)",
                })}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 lg:ml-4 px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base font-bold rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
            >
              Contact Us
            </Link>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-200"
            style={{
              color: "var(--color-primary)",
              backgroundColor: isMobileMenuOpen
                ? "rgba(216, 77, 121, 0.1)"
                : "transparent",
            }}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-200 ${
                  isMobileMenuOpen
                    ? "opacity-0 scale-0"
                    : "opacity-100 scale-100"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-200 ${
                  isMobileMenuOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            style={{ top: "var(--navbar-height, 5rem)" }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile menu panel */}
          <nav
            ref={mobileMenuRef}
            className="fixed top-16 sm:top-20 left-0 right-0 z-50 md:hidden bg-black/70"
            style={{
              borderBottom: "1px solid rgba(216, 77, 121, 0.2)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      isActive ? "" : ""
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "var(--color-muted)",
                    backgroundColor: isActive
                      ? "var(--color-primary)"
                      : "transparent",
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
