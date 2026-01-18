import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Compass, Bookmark, User } from "lucide-react";

const MobileNav = () => {
  const navItems = [
    { id: "home", icon: Home, path: "/" },
    { id: "explore", icon: Compass, path: "/services" },
    { id: "saved", icon: Bookmark, path: "/about" },
    { id: "profile", icon: User, path: "/contact" },
  ];

  return (
    <>
      {/* Mobile Navigation Dock - Only visible on mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex justify-center pb-8">
        <div className="w-max px-6 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-1">
            {navItems.map(({ id, icon: Icon, path }) => (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  `relative p-3 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isActive ? "bg-white/20 shadow-lg" : "hover:bg-white/10"
                  }`
                }
              >
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-white/80 group-hover:text-white transition-colors"
                />
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Padding for Mobile to prevent content overlap */}
      <div className="h-20 md:hidden" />
    </>
  );
};

export default MobileNav;
