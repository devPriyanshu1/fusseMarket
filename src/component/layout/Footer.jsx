import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    "SEO Optimization",
    "Social Media Marketing",
    "Web Development",
    "Brand Strategy",
  ];

  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@fusemarket.com",
      href: "mailto:contact@fusemarket.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXX",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-300 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8 md:gap-12 md:grid-cols-4 mb-12">
          {/* BRAND - First row, full width on mobile */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Fuse Market
            </h2>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Fuse Market helps brands grow with performance-driven digital
              marketing, development, and branding solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS - Second row, left column on mobile */}
          <div className="space-y-4 col-span-1">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium h-6 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES - Second row, right column on mobile */}
          <div className="space-y-4 col-span-1">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer text-sm font-medium h-6 flex items-center group"
                >
                  <Link
                    to="/services"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="group-hover:translate-x-1 transition-transform inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT - Third row, full width on mobile */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3 group">
                  <Icon
                    size={18}
                    className="text-blue-400 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-slate-300 hover:text-blue-400 transition-colors font-medium"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-300 font-medium">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-700/50 my-8"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
          <p className="text-sm text-slate-500">
            © {currentYear} Fuse Market. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
