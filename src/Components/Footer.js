import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gradient-to-r from-blue-700 to-purple-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Jarurat Care</h2>
          <p className="text-gray-200 leading-relaxed">
            Providing compassionate and quality healthcare services to improve
            lives.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", link: "/" },
              { name: "Patients", link: "/patients" },
              { name: "About Us", link: "/about-us" },
             
            ].map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5, color: "#34d399" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link to={item.link} className="transition">
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="flex items-center gap-2 text-gray-200 mb-2">
            <Mail size={16} /> support@jaruratcare.com
          </p>
          <p className="flex items-center gap-2 text-gray-200 mb-2">
            <Phone size={16} /> +91 98765 43210
          </p>
          <p className="text-gray-200">123 Health Street, New Delhi, India</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <motion.div
            className="flex gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              { icon: <Facebook size={24} />, link: "https://facebook.com" },
              { icon: <Twitter size={24} />, link: "https://twitter.com" },
              { icon: <Instagram size={24} />, link: "https://instagram.com" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
                variants={fadeUp}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-blue-900 text-gray-300 text-center py-4 mt-8"
      >
        &copy; {new Date().getFullYear()} Jarurat Care. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
