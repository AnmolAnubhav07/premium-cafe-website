import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-16 bg-neutral-cream dark:bg-neutral-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-4">Contact Us</h1>
          <p className="text-lg text-neutral-dark/70 dark:text-neutral-cream/70">We'd love to hear from you</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-dark dark:text-neutral-cream mb-1">Visit Us</h3>
                  <p className="text-neutral-dark/70 dark:text-neutral-cream/70">123 Coffee Street, Kolkata, India 700001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-dark dark:text-neutral-cream mb-1">Call Us</h3>
                  <p className="text-neutral-dark/70 dark:text-neutral-cream/70">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-dark dark:text-neutral-cream mb-1">Email Us</h3>
                  <p className="text-neutral-dark/70 dark:text-neutral-cream/70">hello@brewandbloom.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-3xl overflow-hidden shadow-xl h-80 bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-primary-green/20 to-primary-brown/20 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-primary-green/50" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {!formSubmitted ? (
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-neutral-dark/80 dark:text-neutral-cream/80 mb-2 font-semibold">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-neutral-cream dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-green"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-dark/80 dark:text-neutral-cream/80 mb-2 font-semibold">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-neutral-cream dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-green"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-dark/80 dark:text-neutral-cream/80 mb-2 font-semibold">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-neutral-cream dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-green"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Reservation">Reservation</option>
                      <option value="Catering">Catering</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-neutral-dark/80 dark:text-neutral-cream/80 mb-2 font-semibold">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-neutral-cream dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-green resize-none"
                      placeholder="Tell us what you think..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-green text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-green/90 transition-all hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl text-center"
              >
                <Check className="h-20 w-20 text-primary-green mx-auto mb-6" />
                <h2 className="text-3xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-4">Thank You!</h2>
                <p className="text-lg text-neutral-dark/70 dark:text-neutral-cream/70 mb-8">
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="bg-primary-green text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
