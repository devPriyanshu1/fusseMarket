import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Stethoscope,
  CreditCard,
  Building2,
  Cloud,
} from "lucide-react";

const filters = [
  { id: "all", label: "All Industries", Icon: Globe },
  { id: "e-commerce", label: "E-Commerce", Icon: ShoppingCart },
  { id: "healthcare", label: "Healthcare", Icon: Stethoscope },
  { id: "fintech", label: "FinTech", Icon: CreditCard },
  { id: "realestate", label: "Real Estate", Icon: Building2 },
  { id: "saas", label: "SaaS", Icon: Cloud },
];

const ServiceFilter = ({ active, setActive }) => {
  return (
    <div className="mb-16">
      <div className="flex flex-wrap gap-3 justify-center">
        {filters.map((filter) => {
          const isActive = active === filter.id;

          return (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActive(filter.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 border-2 ${
                isActive
                  ? "bg-primary text-white border-primary shadow-lg"
                  : "bg-white text-slate-700 border-slate-200 hover:border-primary hover:text-primary"
              }`}
            >
              <filter.Icon className="w-4 h-4" />
              {filter.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceFilter;
