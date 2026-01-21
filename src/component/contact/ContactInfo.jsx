import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "fusemarket.fm@gmail.com",
      href: "mailto:fusemarket.fm@gmail.com",
      color: "var(--color-primary)",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8418818469",
      href: "tel:+918418818469",
      color: "var(--color-accent)",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
      color: "var(--color-deep-purple)",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
          style={{
            background: "rgba(216, 77, 121, 0.1)",
            border: "1px solid rgba(216, 77, 121, 0.2)",
          }}
        >
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            Contact Information
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "var(--color-dark)" }}
        >
          Get in Touch
        </h2>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
          We'd love to hear about your project. Fill out the form or contact us
          directly through any of the channels below.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((item, index) => {
          const IconComponent = item.icon;
          const content = (
            <div
              className="group flex items-start gap-4 p-5 rounded-xl"
              
            >
              <div
                className="flex-shrink-0 p-3 rounded-lg"
                style={{
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                }}
              >
                <IconComponent size={24} style={{ color: item.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: "var(--color-muted)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-base font-semibold break-words"
                  style={{ color: "var(--color-dark)" }}
                >
                  {item.value}
                </p>
              </div>
              {item.href && (
                <ArrowRight
                  size={18}
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: item.color }}
                />
              )}
            </div>
          );

          return item.href ? (
            <a key={index} href={item.href}>
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div
        className="p-6 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(216, 77, 121, 0.05), rgba(180, 167, 214, 0.05))",
          border: "1px solid rgba(180, 167, 214, 0.2)",
        }}
      >
        <p className="text-sm text-slate-600 leading-relaxed">
          💡{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--color-dark)" }}
          >
            Quick Response:
          </span>{" "}
          We typically respond within 24 hours during business days.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
