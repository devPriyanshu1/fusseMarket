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

const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon];

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
        {/* Icon with background */}
        <div className="mb-6 inline-flex">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-3 rounded-xl transition-all duration-300"
            style={{
              backgroundColor: service.color,
            }}
          >
            {IconComponent && (
              <IconComponent
                className="w-7 h-7 transition-all"
                color="white"
                strokeWidth={2}
              />
            )}
          </motion.div>
        </div>

        {/* Industry badge */}
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 uppercase tracking-wider"
          style={{ 
            backgroundColor: service.color, 
            color: "white",
            opacity: 0.9
          }}
        >
          {service.industry.toUpperCase()}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-slate-900">
          {service.title}
        </h3>

        {/* Premium badge */}
        {service.premium && (
          <div className="inline-block mb-3">
            <span className="text-xs font-semibold text-primary">
              ⭐ PREMIUM
            </span>
          </div>
        )}

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
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: service.color }}
              >
                ✓
              </span>
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>

        {/* Call to action */}
        <motion.button
          whileHover={{ x: 5 }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all"
          style={{ color: service.color }}
        >
          Learn More <span>→</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
