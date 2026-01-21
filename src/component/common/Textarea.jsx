const Textarea = ({ label, error, className = "", rows = 4, ...props }) => {
  return (
    <div>
      {label && (
        <label
          className="block text-sm font-semibold mb-2.5"
          style={{ color: "var(--color-dark)" }}
        >
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`w-full px-5 py-3.5 rounded-xl transition-all duration-300 focus:outline-none resize-vertical ${className}`}
        style={{
          background: "white",
          border: error
            ? "2px solid #ef4444"
            : "2px solid rgba(180, 167, 214, 0.2)",
          color: "var(--color-dark)",
          fontSize: "15px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
          minHeight: "120px",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "var(--color-primary)";
          e.target.style.boxShadow =
            "0 0 0 4px rgba(216, 77, 121, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08)";
        }}
        onBlur={(e) => {
          if (!error) {
            e.target.style.borderColor = "rgba(180, 167, 214, 0.2)";
            e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
          }
        }}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm font-medium" style={{ color: "#ef4444" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;
