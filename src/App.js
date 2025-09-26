import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./Components/Home";
import BookAppointment from "./Components/BookAppointment";
import ViewAppointments from "./Components/ViewAppointments";
import Patients from "./Components/Patients";
import Aboutus from "./Components/Aboutus";
import { AppointmentsProvider } from "./Components/AppointmentsProvider";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
  
<AppointmentsProvider>
    
      <Router>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/view-appointments" element={<ViewAppointments />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/about-us" element={<Aboutus />} />
        </Routes>
      </Router>
      </AppointmentsProvider>
    
    </>
  );
}

export default App;
