import { Link } from "react-router-dom";

const Button = ({
  children,
  size = "md",
  variant = "primary",
  className = "",
  to,
  href,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 active:scale-95";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90 shadow-[0_10px_40px_rgba(255,44,85,0.35)]",
    outline:
      "border border-white/30 text-white hover:bg-white hover:text-slate-900",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
