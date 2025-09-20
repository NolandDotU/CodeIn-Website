import React from "react";

const Contact: React.FC = () => (
  <div className="container mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
    <form className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col gap-4">
      <input type="text" placeholder="Your Name" className="border p-3 rounded" />
      <input type="email" placeholder="Your Email" className="border p-3 rounded" />
      <textarea placeholder="Your Message" className="border p-3 rounded min-h-[120px]" />
      <button type="submit" className="bg-[#00C2CB] text-white font-bold py-3 rounded hover:bg-[#00CFC9] transition-colors">Send Message</button>
    </form>
    <div className="mt-10 text-center text-lg text-gray-600">
      Or email us at <a href="mailto:info@codein.com" className="text-[#00C2CB] underline">info@codein.com</a>
    </div>
  </div>
);

export default Contact;
