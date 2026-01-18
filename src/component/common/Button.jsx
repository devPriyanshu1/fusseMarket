const Button = ({ children, href, variant = "primary" }) => {
  const base = "btn";
  const styles = {
    primary: "btn-primary",
    outline: "btn-outline",
  };

  return href ? (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  ) : (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
