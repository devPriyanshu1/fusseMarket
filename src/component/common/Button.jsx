import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl focus:ring-primary",
    secondary: "bg-secondary text-white hover:bg-secondary/90 hover:scale-105 shadow-lg hover:shadow-xl focus:ring-secondary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 focus:ring-primary",
    ghost: "text-primary hover:bg-primary/10 hover:scale-105 focus:ring-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;