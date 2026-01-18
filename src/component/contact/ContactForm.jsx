import { useState } from "react";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Button from "../common/Button";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
      <Input label="Name" name="name" value={form.name} onChange={handleChange} />
      <Input label="Email" name="email" value={form.email} onChange={handleChange} />
      <Textarea label="Message" name="message" value={form.message} onChange={handleChange} />

      <Button className="w-full" size="lg">
        Send Message →
      </Button>
    </form>
  );
};

export default ContactForm;
