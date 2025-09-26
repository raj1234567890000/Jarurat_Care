import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Images/Logo.jpg";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);


  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 ">
        <motion.img
          src={logo}
          alt="Jarurat Care Logo"
          className="w-30 h-20 object-contain rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

    
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["Home", "Patients", "About Us", "ViewAppointments"].map(
            (item, i) => (
              <motion.li
                key={i}
                className="hover:text-blue-600 cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : item === "Patients"
                      ? "/Patients"
                      : item === "About Us"
                      ? "/about-us"
                      : "/view-appointments"
                  }
                >
                  {item}
                </Link>
              </motion.li>
            )
          )}
        </ul>

    
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.ul
            key="mobileMenu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden flex flex-col items-center bg-white shadow-lg py-6 space-y-6 font-medium text-gray-700"
          >
            <Link to="/" onClick={handleClose}>
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
            </Link>
            <Link to="/Patients" onClick={handleClose}>
              <li className="hover:text-blue-600 cursor-pointer">Patients</li>
            </Link>
            <Link to="/about-us" onClick={handleClose}>
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            </Link>
            <Link to="/view-appointments" onClick={handleClose}>
              <li className="hover:text-blue-600 cursor-pointer">
                ViewAppointments
              </li>
            </Link>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
