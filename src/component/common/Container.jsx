const Container = ({ children, className = "", size = "lg" }) => {
  const sizeClasses = {
    sm: "max-w-4xl",
    md: "max-w-6xl",
    lg: "max-w-7xl",
    xl: "max-w-screen-xl",
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;