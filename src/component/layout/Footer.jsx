import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-300 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* BRAND */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Fuse Market
            </h2>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Fuse Market helps brands grow with performance-driven digital
              marketing, development, and branding solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/people/The-Fusse-Market/61579758510284/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://github.com/SarveshCS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://in.linkedin.com/company/thefussemarket"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/the_fusse_market/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium h-6 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="space-y-3">
              {[
                "SEO Optimization",
                "Social Media Marketing",
                "Web Development",
                "Brand Strategy",
              ].map((service, i) => (
                <li
                  key={i}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer text-sm font-medium h-6 flex items-center"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group cursor-pointer">
                <Mail
                  size={18}
                  className="text-blue-400 mt-0.5 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-sm text-slate-300 hover:text-blue-400 transition-colors font-medium break-words">
                    contact@fusemarket.in
                  </p>
                  <p className="text-sm text-slate-300 hover:text-blue-400 transition-colors font-medium break-words">
                    fusemarket.fm@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <Phone
                  size={18}
                  className="text-blue-400 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Phone
                  </p>
                  <p className="text-sm text-slate-300 hover:text-blue-400 transition-colors font-medium">
                    +91 8418818469
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <MapPin
                  size={18}
                  className="text-blue-400 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-sm text-slate-300 hover:text-blue-400 transition-colors font-medium">
                    India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-700/50 my-8"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Fuse Market. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;