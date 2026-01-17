const Card = ({
  children,
  className = "",
  hover = true,
  shadow = "md",
  rounded = "xl",
  padding = "6",
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

  const hoverClass = hover ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300" : "";

  return (
    <div
      className={`bg-white ${shadows[shadow]} ${roundedClasses[rounded]} ${paddingClasses[padding]} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;