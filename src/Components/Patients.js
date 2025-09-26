import React, { useEffect, useState, useRef } from "react";
import Nav from "./Nav";
import axios from "axios";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

const Patients = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    contact: "",
  });
  const lastAddedRef = useRef(null);

  const getData = async () => {
    try {
      const res = await axios.get("https://care-1-1gd8.onrender.com/Patients");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddPatient = async () => {
    if (!newPatient.name || !newPatient.age || !newPatient.contact) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "https://care-1-1gd8.onrender.com/Patients",
        newPatient
      );
      setData((prev) => [...prev, res.data]);
      setNewPatient({ name: "", age: "", contact: "" });
      setShowAddModal(false);

      setTimeout(() => {
        lastAddedRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 200);
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  const filteredData = data.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Nav />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 py-12 mt-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-sm">
              🩺 Patients
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg hover:shadow-xl transition font-semibold"
            >
              + Add Patient
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <input
              type="text"
              placeholder="🔍 Search patients by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 p-3 rounded-xl border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 backdrop-blur-md"
            />
          </motion.div>

          <div className="max-h-[500px] overflow-y-auto pr-2">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredData.map((e, index) => (
                <motion.div
                  key={e.id}
                  ref={index === filteredData.length - 1 ? lastAddedRef : null}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-300"
                >
                  <h2 className="text-xl font-bold text-gray-900">{e.name}</h2>
                  <p className="text-gray-600 mt-1">👤 Age: {e.age}</p>
                  <p className="text-gray-600">📞 {e.contact}</p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPatient(e)}
                    className="mt-5 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 shadow-md hover:shadow-lg transition"
                  >
                    View Details
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPatient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                {selectedPatient.name}
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Age:</strong> {selectedPatient.age}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Contact:</strong> {selectedPatient.contact}
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedPatient(null)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full"
            >
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Add New Patient
              </h2>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={newPatient.name}
                  onChange={(e) =>
                    setNewPatient({ ...newPatient, name: e.target.value })
                  }
                  className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 bg-gray-50"
                />
                <input
                  type="number"
                  placeholder="Age"
                  value={newPatient.age}
                  onChange={(e) =>
                    setNewPatient({ ...newPatient, age: e.target.value })
                  }
                  className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 bg-gray-50"
                />
                <input
                  type="text"
                  placeholder="Contact"
                  value={newPatient.contact}
                  onChange={(e) =>
                    setNewPatient({ ...newPatient, contact: e.target.value })
                  }
                  className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 bg-gray-50"
                />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddPatient}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg transition"
                >
                  Save
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default Patients;
