import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Coffee, Utensils, MapPin, Star, Mail, Instagram, 
  Facebook, Twitter, ChevronDown, Check, ArrowRight,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const testimonials = [
    { name: "Sarah Johnson", review: "Best coffee in town! The atmosphere is so cozy and the staff are incredibly friendly.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", rating: 5 },
    { name: "Michael Chen", review: "Their avocado toast is amazing! I come here every weekend for breakfast.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", rating: 5 },
    { name: "Emily Davis", review: "Perfect place to work or relax. Great WiFi and even better coffee.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", rating: 4 }
  ];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop", category: "Coffee" },
    { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop", category: "Food" },
    { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=800&fit=crop", category: "Interior" },
    { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop", category: "Desserts" },
    { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop", category: "Coffee" },
    { src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=800&fit=crop", category: "Interior" }
  ];

  const locations = [
    { name: "Downtown Branch", address: "123 Park Street, Kolkata", phone: "+1 (555) 123-4567", hours: "Mon-Sun: 7AM - 9PM", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop" },
    { name: "Salt Lake Branch", address: "456 Sector V, Kolkata", phone: "+1 (555) 234-5678", hours: "Mon-Sun: 8AM - 10PM", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop" },
    { name: "New Town Branch", address: "789 Action Area 1, Kolkata", phone: "+1 (555) 345-6789", hours: "Mon-Sun: 7AM - 8PM", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop" }
  ];

  const stats = [
    { number: "25,000+", label: "Happy Customers" },
    { number: "50+", label: "Menu Items" },
    { number: "10+", label: "Years Experience" },
    { number: "3", label: "Locations" }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop" 
            alt="Cafe" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-neutral-cream mb-6"
          >
            Fresh Coffee. <br />
            Delicious Food. <br />
            Made With Love.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-cream/90 mb-10 max-w-2xl mx-auto"
          >
            Experience handcrafted coffee, fresh ingredients, and a warm atmosphere every day.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/menu" className="bg-primary-green text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-primary-green/90 transition-all hover:scale-105">
              View Menu
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-white hover:text-neutral-dark transition-all">
              Reserve Table
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-neutral-cream dark:bg-neutral-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-playfair italic text-primary-green/30 mb-8"
          >
            Welcome
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-dark/80 dark:text-neutral-cream/80 mb-8 leading-relaxed"
          >
            At Brew & Bloom, we believe that a great cup of coffee is more than just a drink—it's a moment of joy, a pause in the day, a chance to connect. Since 2014, we've been serving our community with handcrafted beverages, fresh baked goods, and meals made with love.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a href="#" className="p-3 bg-primary-green/10 rounded-full hover:bg-primary-green hover:text-white transition-all text-primary-green">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 bg-primary-green/10 rounded-full hover:bg-primary-green hover:text-white transition-all text-primary-green">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 bg-primary-green/10 rounded-full hover:bg-primary-green hover:text-white transition-all text-primary-green">
              <Twitter className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center text-neutral-dark dark:text-neutral-cream mb-16"
          >
            Featured Menu
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Breakfast", description: "Start your day with our fresh breakfast options made with locally sourced ingredients.", icon: <Coffee className="h-12 w-12" />, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop" },
              { title: "Lunch Specials", description: "Delicious and healthy lunch options perfect for your midday break.", icon: <Utensils className="h-12 w-12" />, image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=400&fit=crop" },
              { title: "Healthy Options", description: "Nutritious meals that don't compromise on taste.", icon: <Check className="h-12 w-12" />, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-neutral-cream dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <motion.img 
                    src={item.image} 
                    alt={item.title}
                    whileHover={{ scale: 1.1 }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <div className="text-primary-green mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-2xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-4">{item.title}</h3>
                  <p className="text-neutral-dark/70 dark:text-neutral-cream/70 mb-6">{item.description}</p>
                  <Link to="/menu" className="inline-flex items-center text-primary-green font-semibold hover:text-primary-brown transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-96 lg:h-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=800&fit=crop" 
                alt="Coffee" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-brown p-12 lg:p-20 flex items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-cream mb-6">
                  The Best Coffee & Catering Experience
                </h2>
                <p className="text-neutral-beige/90 mb-8 text-lg leading-relaxed">
                  Make your next event unforgettable with our premium catering services. From corporate meetings to weddings, we bring the Brew & Bloom experience to you.
                </p>
                <Link to="/contact" className="inline-block bg-accent-gold text-neutral-dark px-8 py-4 rounded-full font-inter font-semibold hover:bg-accent-gold/90 transition-all hover:scale-105">
                  Book Catering
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-neutral-cream dark:bg-neutral-dark">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center text-neutral-dark dark:text-neutral-cream mb-8"
          >
            Our Gallery
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Coffee", "Food", "Interior", "Desserts"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-inter transition-all ${
                  selectedCategory === cat 
                    ? 'bg-primary-green text-white' 
                    : 'bg-white dark:bg-gray-800 text-neutral-dark dark:text-neutral-cream hover:bg-primary-green/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages
              .filter(img => selectedCategory === "All" || img.category === selectedCategory)
              .map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                >
                  <img src={img.src} alt={img.category} className="w-full h-64 object-cover" />
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center text-neutral-dark dark:text-neutral-cream mb-16"
          >
            Visit Us
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-neutral-cream dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg"
              >
                <img src={loc.image} alt={loc.name} className="w-full h-56 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-4">{loc.name}</h3>
                  <div className="space-y-3 text-neutral-dark/70 dark:text-neutral-cream/70">
                    <p className="flex items-start gap-2"><MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary-green" /> {loc.address}</p>
                    <p className="flex items-center gap-2"><Mail className="h-5 w-5 flex-shrink-0 text-primary-green" /> {loc.phone}</p>
                    <p className="flex items-start gap-2"><Utensils className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary-green" /> {loc.hours}</p>
                  </div>
                  <button className="mt-6 w-full bg-primary-green text-white py-3 rounded-full font-semibold hover:bg-primary-green/90 transition-colors">
                    View Map
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary-green/10 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-16"
          >
            What Our Customers Say
          </motion.h2>

          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 p-12 rounded-3xl shadow-xl"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-6 w-6 ${i < testimonials[currentTestimonial].rating ? 'text-accent-gold fill-accent-gold' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <p className="text-xl text-neutral-dark/80 dark:text-neutral-cream/80 mb-8 italic">
              "{testimonials[currentTestimonial].review}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name} 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-neutral-dark/60 dark:text-neutral-cream/60">Happy Customer</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-primary-green w-8' : 'bg-primary-green/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary-brown">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-playfair font-bold text-accent-gold mb-2">{stat.number}</h3>
                <p className="text-neutral-beige/90 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-neutral-cream dark:bg-neutral-dark">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center text-neutral-dark dark:text-neutral-cream mb-4"
          >
            Follow Us on Instagram
          </motion.h2>
          <p className="text-center text-neutral-dark/70 dark:text-neutral-cream/70 mb-12">@brewandbloom</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop"
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <img src={src} alt="Instagram" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Heart className="h-10 w-10 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-6"
          >
            Stay Connected
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-dark/70 dark:text-neutral-cream/70 mb-10"
          >
            Subscribe to our newsletter for exclusive offers and updates!
          </motion.p>

          {!newsletterSubmitted ? (
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onSubmit={(e) => { e.preventDefault(); setNewsletterSubmitted(true); }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input 
                type="text" 
                placeholder="Your Name" 
                required
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-green"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                required
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-green"
              />
              <button 
                type="submit"
                className="bg-primary-green text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-green/90 transition-all"
              >
                Subscribe
              </button>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary-green/10 text-primary-green p-8 rounded-3xl"
            >
              <Check className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Thank you for subscribing!</h3>
              <p>We'll be in touch soon with our latest updates.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
