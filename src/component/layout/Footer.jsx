import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Fuse Market</h2>
          <p className="text-sm leading-relaxed">
            Fuse Market helps brands grow with performance-driven digital
            marketing, development, and branding solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>SEO Optimization</li>
            <li>Social Media Marketing</li>
            <li>Web Development</li>
            <li>Brand Strategy</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: contact@fusemarket.com</li>
            <li>Phone: +91 XXXXX XXXXX</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Fuse Market. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
