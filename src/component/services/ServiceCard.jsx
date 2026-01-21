import { motion } from "framer-motion";
import {
  ShoppingCart,
  BarChart3,
  Stethoscope,
  Heart,
  CreditCard,
  TrendingUp,
  Building2,
  Home,
  Rocket,
  Cloud,
} from "lucide-react";

// Map icon names to components
const iconMap = {
  ShoppingCart,
  BarChart3,
  Stethoscope,
  Heart,
  CreditCard,
  TrendingUp,
  Building2,
  Home,
  Rocket,
  Cloud,
};

// Helper function to darken color for better visibility
const darkenColor = (hexColor, amount = 30) => {
  const num = parseInt(hexColor.replace("#", ""), 16);
  const r = Math.max(0, (num >> 16) - amount);
  const g = Math.max(0, ((num >> 8) & 0x00FF) - amount);
  const b = Math.max(0, (num & 0x0000FF) - amount);
  return "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
};

const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon];
  const darkerColor = darkenColor(service.color, 30);

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative"
    >
      {/* Gradient background on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
        style={{ backgroundColor: service.color }}
      />

      {/* Content container */}
      <div className="relative z-10">
        {/* Top row: Icon (left) and Industry badge (right) */}
        <div className="flex items-start justify-between mb-6">
          {/* Icon with border - using darker color for better visibility */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-3 rounded-xl transition-all duration-300 border-[3px] shadow-md"
            style={{
              borderColor: darkerColor,
              backgroundColor: service.color + '20',
              boxShadow: `0 2px 8px ${service.color}30`,
            }}
          >
            {IconComponent && (
              <IconComponent
                className="w-7 h-7 transition-all drop-shadow-sm"
                style={{ color: darkerColor }}
                strokeWidth={2.5}
              />
            )}
          </motion.div>

          {/* Industry badge with WHITE text always */}
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm text-white"
            style={{ 
              backgroundColor: darkerColor,
            }}
          >
            {service.industry.toUpperCase()}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-slate-900">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Points list */}
        <ul className="space-y-3">
          {service.points.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 text-sm text-slate-700"
            >
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm"
                style={{ backgroundColor: darkerColor }}
              >
                ✓
              </span>
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>

        {/* Call to action with better visibility */}
        <motion.button
          whileHover={{ x: 5 }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3"
          style={{ color: darkerColor }}
        >
          Learn More <span>→</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
