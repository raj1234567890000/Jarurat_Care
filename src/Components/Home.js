import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Home = () => {
  return (
    <>
      <Nav />

      <motion.div
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-20 flex items-center"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center md:justify-between gap-8">
          {/* Left */}
          <motion.div className="md:w-1/2" variants={staggerContainer}>
            <motion.h1
              className="text-5xl font-extrabold text-blue-700 mb-6 drop-shadow-sm"
              variants={fadeInUp}
            >
              Welcome to <span className="text-green-600">Jarurat Care</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 mb-6"
              variants={fadeInUp}
            >
              Your trusted healthcare partner, committed to delivering
              compassionate and high-quality medical care to every patient.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/book-appointment"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition font-semibold"
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=800&auto=format&fit=crop&q=80"
              alt="Healthcare"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-4xl font-extrabold text-blue-700 text-center mb-12"
          variants={fadeInUp}
        >
          Our Services
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "General Checkup",
              desc: "Comprehensive health checkups to monitor your overall well-being.",
              color: "text-green-600",
            },
            {
              title: "Specialist Consultation",
              desc: "Connect with top specialists in various medical fields for expert care.",
              color: "text-blue-600",
            },
            {
              title: "Emergency Services",
              desc: "24/7 emergency support with highly trained medical staff.",
              color: "text-purple-600",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition transform"
            >
              <h3 className={`text-2xl font-bold ${service.color} mb-4`}>
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-extrabold text-blue-700 mb-8"
            variants={fadeInUp}
          >
            Why Choose Jarurat Care?
          </motion.h2>
          <motion.p
            className="text-gray-700 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            At Jarurat Care, we combine compassion, expertise, and innovation to
            deliver healthcare solutions that improve lives. Our patients' trust
            is our biggest achievement.
          </motion.p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Certified Doctors",
                desc: "Experienced and licensed medical professionals.",
                color: "text-green-600",
              },
              {
                title: "Modern Equipment",
                desc: "State-of-the-art facilities for accurate diagnosis.",
                color: "text-blue-600",
              },
              {
                title: "Patient Care",
                desc: "Compassionate care focused on your comfort and health.",
                color: "text-purple-600",
              },
            ].map((point, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition"
              >
                <h3 className={`text-xl font-bold ${point.color} mb-2`}>
                  {point.title}
                </h3>
                <p className="text-gray-700">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-extrabold mb-4">Ready to get started?</h2>
        <p className="mb-6">
          Book your appointment today and experience quality healthcare.
        </p>
        <Link
          to="/book-appointment"
          className="px-6 py-3 bg-white text-green-600 rounded-xl font-semibold hover:scale-105 transition"
        >
          Book Appointment
        </Link>
      </motion.div>

      <Footer />
    </>
  );
};

export default Home;
