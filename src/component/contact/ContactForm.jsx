import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // later connect API / EmailJS
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-8 space-y-6"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          name="message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
