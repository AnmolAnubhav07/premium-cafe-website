import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const images = [
    { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop", category: "Coffee" },
    { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop", category: "Food" },
    { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=800&fit=crop", category: "Interior" },
    { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop", category: "Desserts" },
    { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop", category: "Coffee" },
    { src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=800&fit=crop", category: "Interior" },
    { src: "https://images.unsplash.com/photo-1572442388796-11668e64e61c?w=600&h=600&fit=crop", category: "Coffee" },
    { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop", category: "Food" },
    { src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=800&fit=crop", category: "Desserts" }
  ];

  const categories = ["All", "Coffee", "Food", "Interior", "Desserts"];
  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-24 pb-16 bg-neutral-cream dark:bg-neutral-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-4">Our Gallery</h1>
          <p className="text-lg text-neutral-dark/70 dark:text-neutral-cream/70">Take a look around</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-3 rounded-full font-inter transition-all ${
                selectedCategory === cat 
                  ? 'bg-primary-green text-white' 
                  : 'bg-white dark:bg-gray-800 text-neutral-dark dark:text-neutral-cream hover:bg-primary-green/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.category}
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
