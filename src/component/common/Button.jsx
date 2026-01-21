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
    "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 active:scale-95 hover:scale-105";

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-4 text-base",
  };

  const getVariantStyles = () => {
    if (variant === "primary") {
      return {
        background: "var(--color-primary)",
        color: "white",
        boxShadow: "0 12px 40px rgba(216, 77, 121, 0.4)",
      };
    } else if (variant === "outline") {
      return {
        background: "white",
        color: "var(--color-dark)",
        border: "2px solid rgba(180, 167, 214, 0.4)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
      };
    }
    return {};
  };

  const classes = `${base} ${sizes[size]} ${className}`;
  const styles = getVariantStyles();

  if (to) {
    return (
      <Link to={to} className={classes} style={styles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} style={styles}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} style={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
