import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your interest, ${formData.name}!\n\nOur team will contact you shortly at ${formData.email}`);
    setFormData({ name: "", email: "", phone: "", model: "", message: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl bg-gray-900 border border-white/10 z-50 overflow-auto max-h-[90vh]"
          >
            <div className="sticky top-0 bg-gray-900 border-b border-white/10 p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="text-gray-400">We're here to help</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                  <p className="text-gray-400 mb-8">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10">
                    <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Phone</p>
                      <p className="text-gray-400">+1 (800) MCLAREN</p>
                      <p className="text-gray-400">Mon-Fri: 9AM - 6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10">
                    <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Email</p>
                      <p className="text-gray-400">contact@mclaren.com</p>
                      <p className="text-gray-400">sales@mclaren.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10">
                    <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Headquarters</p>
                      <p className="text-gray-400">McLaren Technology Centre</p>
                      <p className="text-gray-400">Woking, Surrey, UK</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-orange-500 focus:outline-none transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-orange-500 focus:outline-none transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-orange-500 focus:outline-none transition-colors text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="model" className="block text-sm mb-2">
                    Interested Model
                  </label>
                  <select
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-orange-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select a model</option>
                    <option value="720s">720S</option>
                    <option value="p1">P1</option>
                    <option value="765lt">765LT</option>
                    <option value="artura">Artura</option>
                    <option value="gt">GT</option>
                    <option value="senna">Senna</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-orange-500 focus:outline-none transition-colors text-white resize-none"
                    placeholder="Tell us about your interest..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-orange-500 text-black hover:bg-orange-400 transition-all"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
