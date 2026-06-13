import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const Locations: React.FC = () => {
  const locations = [
    { 
      name: "Downtown Branch", 
      address: "123 Park Street, Kolkata, India 700001", 
      phone: "+1 (555) 123-4567", 
      hours: "Monday - Sunday: 7AM - 9PM",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=400&fit=crop"
    },
    { 
      name: "Salt Lake Branch", 
      address: "456 Sector V, Salt Lake, Kolkata, India 700091", 
      phone: "+1 (555) 234-5678", 
      hours: "Monday - Sunday: 8AM - 10PM",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=400&fit=crop"
    },
    { 
      name: "New Town Branch", 
      address: "789 Action Area 1, New Town, Kolkata, India 700156", 
      phone: "+1 (555) 345-6789", 
      hours: "Monday - Sunday: 7AM - 8PM",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-neutral-cream dark:bg-neutral-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-4">Our Locations</h1>
          <p className="text-lg text-neutral-dark/70 dark:text-neutral-cream/70">Find a Brew & Bloom near you</p>
        </motion.div>

        <div className="space-y-12">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-72 lg:h-full object-cover"
                />
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-6">{loc.name}</h2>
                  <div className="space-y-4 mb-8">
                    <p className="flex items-start gap-3 text-neutral-dark/80 dark:text-neutral-cream/80">
                      <MapPin className="h-6 w-6 flex-shrink-0 mt-0.5 text-primary-green" />
                      {loc.address}
                    </p>
                    <p className="flex items-center gap-3 text-neutral-dark/80 dark:text-neutral-cream/80">
                      <Phone className="h-6 w-6 flex-shrink-0 text-primary-green" />
                      {loc.phone}
                    </p>
                    <p className="flex items-start gap-3 text-neutral-dark/80 dark:text-neutral-cream/80">
                      <Clock className="h-6 w-6 flex-shrink-0 mt-0.5 text-primary-green" />
                      {loc.hours}
                    </p>
                  </div>
                  <button className="bg-primary-green text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-green/90 transition-colors w-full lg:w-auto">
                    Get Directions
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
