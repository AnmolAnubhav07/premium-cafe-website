import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const team = [
    { name: "Sarah Miller", role: "Head Barista", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
    { name: "David Chen", role: "Chef", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
    { name: "Emma Wilson", role: "Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" }
  ];

  const timeline = [
    { year: "2014", event: "Founded Brew & Bloom in downtown Kolkata" },
    { year: "2016", event: "Opened our second location in Salt Lake" },
    { year: "2019", event: "Awarded Best Coffee Shop in the city" },
    { year: "2023", event: "Celebrated 10 years of brewing joy" }
  ];

  return (
    <div className="pt-24 pb-16 bg-neutral-cream dark:bg-neutral-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-4">About Us</h1>
          <p className="text-lg text-neutral-dark/70 dark:text-neutral-cream/70">Our story, our passion</p>
        </motion.div>

        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop"
                alt="Our Cafe"
                className="rounded-3xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-6">Our Story</h2>
              <p className="text-neutral-dark/80 dark:text-neutral-cream/80 text-lg mb-6 leading-relaxed">
                Brew & Bloom was born from a simple idea: create a space where people can enjoy exceptional coffee, delicious food, and genuine connections. Founded in 2014, we've grown from a small coffee shop to a beloved community staple with three locations across Kolkata.
              </p>
              <p className="text-neutral-dark/80 dark:text-neutral-cream/80 text-lg leading-relaxed">
                We source our coffee beans from ethical, sustainable farms around the world, roast them locally, and craft each drink with care. Our menu features fresh, seasonal ingredients, many from local producers. We believe in giving back to the community that has given us so much.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-playfair font-bold text-center text-neutral-dark dark:text-neutral-cream mb-12"
          >
            Our Journey
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-8 mb-8"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-primary-green rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{item.year}</span>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-lg text-neutral-dark dark:text-neutral-cream">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-playfair font-bold text-center text-neutral-dark dark:text-neutral-cream mb-12"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="text-center bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-neutral-dark dark:text-neutral-cream mb-2">{member.name}</h3>
                  <p className="text-primary-green font-semibold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
