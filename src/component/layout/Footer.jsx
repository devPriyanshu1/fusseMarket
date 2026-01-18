import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            Fuse Market
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            We help brands grow with performance-driven digital solutions,
            combining strategy, design, and technology.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
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
            <li>Web Development</li>
            <li>Digital Marketing</li>
            <li>UI/UX Design</li>
            <li>Brand Strategy</li>
          </ul>
        </div>

        {/* CONTACT + FOLLOW */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-slate-400 mb-5">
            <li>Email: contact@fusemarket.com</li>
            <li>India</li>
          </ul>

          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <div className="flex items-center gap-4">

            <a
              href="https://www.facebook.com/people/The-Fusse-Market/61579758510284/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/the_fusse_market/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://in.linkedin.com/company/thefussemarket"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/SarveshCS/web-technology"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Fuse Market. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
