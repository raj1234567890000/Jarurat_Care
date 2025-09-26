import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Aboutus = () => {
  return (
    <>
      <Nav />

      <motion.div
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-20"
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Title */}
          <motion.h1
            className="text-4xl font-extrabold text-blue-700 text-center mb-8 drop-shadow-sm"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>

          <motion.div
            className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 mb-12 text-center hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to{" "}
              <span className="font-bold text-blue-600">Jarurat Care</span>,
              your trusted healthcare partner. Our mission is to make quality
              healthcare accessible and affordable to everyone, with a focus on
              compassion, innovation, and care.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                title: "🌟 Our Mission",
                color: "text-green-600",
                desc: "To provide world-class healthcare services with compassion and excellence, improving the well-being of every patient we serve.",
              },
              {
                title: "👁️ Our Vision",
                color: "text-blue-600",
                desc: "To be a leading healthcare provider known for innovation, trust, and patient-centered care.",
              },
              {
                title: "🤝 Our Values",
                color: "text-purple-600",
                desc: "Compassion, integrity, innovation, and excellence are at the heart of everything we do.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h2 className={`text-2xl font-bold mb-4 ${item.color}`}>
                  {item.title}
                </h2>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16">
            <motion.h2
              className="text-3xl font-extrabold text-blue-700 text-center mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              Meet Our Team
            </motion.h2>

            <motion.div
              className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {[
                {
                  name: "Dr. Priya Sharma",
                  role: "Chief Medical Officer",
                  img: "https://plus.unsplash.com/premium_photo-1666299679745-2190f8f94352?w=600",
                  border: "border-blue-200",
                },
                {
                  name: "Dr. Arjun Mehta",
                  role: "Head of Surgery",
                  img: "https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?w=400",
                  border: "border-green-200",
                },
                {
                  name: "Dr. Neha Verma",
                  role: "Pediatric Specialist",
                  img: "https://plus.unsplash.com/premium_photo-1661373181525-bfa8d0acaf39?w=400",
                  border: "border-purple-200",
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  className="bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-6 text-center hover:shadow-2xl transition"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className={`w-24 h-24 rounded-full mx-auto mb-4 border-4 ${member.border}`}
                  />
                  <h3 className="text-lg font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-500">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="mt-20 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              📞 Get in Touch
            </h2>
            <p className="text-gray-700 mb-2">Email: support@jaruratcare.com</p>
            <p className="text-gray-700 mb-2">Phone: +91 98765 43210</p>
            <p className="text-gray-700">
              Address: 123 Health Street, New Delhi, India
            </p>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Aboutus;
