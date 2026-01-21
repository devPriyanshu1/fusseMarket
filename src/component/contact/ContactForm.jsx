import { useState } from "react";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      className="p-8 md:p-10 rounded-3xl space-y-6"
      style={{
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(180, 167, 214, 0.2)",
        boxShadow:
          "0 20px 60px rgba(216, 77, 121, 0.15), 0 10px 30px rgba(180, 167, 214, 0.1)",
      }}
    >
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your full name"
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="your@email.com"
      />
      <Textarea
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell us about your project..."
        rows={5}
      />

      <Button className="w-full group" size="lg">
        <span>Send Message</span>
        <Send
          size={18}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Button>
    </form>
  );
};

export default ContactForm;
