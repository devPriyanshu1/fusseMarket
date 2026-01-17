const Card = ({
  children,
  className = "",
  hover = true,
  shadow = "md",
  rounded = "xl",
  padding = "6",
  variant = "light",
  ...props
}) => {
  const shadows = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const roundedClasses = {
    none: "",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  };

  const paddingClasses = {
    0: "",
    2: "p-2",
    4: "p-4",
    6: "p-6",
    8: "p-8",
  };

  const variants = {
    light: "bg-white border border-gray-200",
    primary: "bg-primary/5 border border-primary/10",
    secondary: "bg-secondary/5 border border-secondary/10",
    dark: "bg-gray-900 text-white border border-gray-800",
  };

  const hoverClass = hover ? "hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300" : "";

  return (
    <div
      className={`${variants[variant]} ${shadows[shadow]} ${roundedClasses[rounded]} ${paddingClasses[padding]} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;