import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import { AppointmentsContext } from "./AppointmentsProvider";


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const BookAppointment = () => {
  const { addAppointment } = useContext(AppointmentsContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = addAppointment(formData);
    setFormData({ name: "", age: "", contact: "", date: "", time: "", reason: "" });
    navigate("/view-appointments", { state: { lastId: newAppointment.id } });
  };

  return (
    <>
      <Nav />
      <motion.div
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-20 flex justify-center items-start py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl p-10 border border-gray-100"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl font-extrabold text-blue-700 mb-8 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Book Appointment
          </motion.h1>

         
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.input
              variants={fieldVariants}
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md transition"
            />

            <motion.input
              variants={fieldVariants}
              placeholder="Age"
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md transition"
            />

            <motion.input
              variants={fieldVariants}
              placeholder="Contact"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md transition"
            />

            <div className="flex gap-4">
              <motion.input
                variants={fieldVariants}
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 w-1/2 shadow-sm hover:shadow-md transition"
              />
              <motion.input
                variants={fieldVariants}
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 w-1/2 shadow-sm hover:shadow-md transition"
              />
            </div>

            <motion.textarea
              variants={fieldVariants}
              placeholder="Reason (optional)"
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              rows={4}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md transition"
            />

            <motion.button
              type="submit"
              variants={fieldVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#059669" }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-6 bg-green-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition font-semibold"
            >
              Book Appointment
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default BookAppointment;
