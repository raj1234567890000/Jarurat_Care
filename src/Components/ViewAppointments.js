import React, { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import { AppointmentsContext } from "./AppointmentsProvider";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ViewAppointments = () => {
  const { appointments } = useContext(AppointmentsContext);
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (location.state?.lastId) {
      const element = document.getElementById(`appointment-${location.state.lastId}`);
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (appointments.length > 0) {
      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [appointments, location.state]);

  return (
    <>
      <Nav />

      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 mt-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl font-extrabold text-blue-600 mb-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Booked Appointments
        </motion.h1>

      
        <motion.div
          ref={containerRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-h-[600px] overflow-y-auto pr-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {appointments.map((p) => (
            <motion.div
              key={p.id}
              id={`appointment-${p.id}`}
              className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <h2 className="text-xl font-bold text-gray-800">{p.name}</h2>
              <p className="text-gray-600 mt-1">Age: {p.age}</p>
              <p className="text-gray-600">Contact: {p.contact}</p>
              {p.date && p.time && (
                <p className="text-gray-600">
                  Date: <span className="font-semibold">{p.date}</span> | Time:{" "}
                  <span className="font-semibold">{p.time}</span>
                </p>
              )}
              {p.reason && (
                <p className="text-gray-600 italic mt-2">Reason: {p.reason}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default ViewAppointments;
