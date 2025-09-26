import React, { createContext, useState, useEffect } from "react";

export const AppointmentsContext = createContext();

export const AppointmentsProvider = ({ children }) => {

  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("appointments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (appointment) => {
    const newAppointment = { id: Date.now(), ...appointment };
    setAppointments((prev) => [...prev, newAppointment]);
    return newAppointment;
  };

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentsContext.Provider>
  );
};
