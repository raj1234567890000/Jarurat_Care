import { useState, } from "react";
import { Menu, X, } from "lucide-react";
import { Link, } from "react-router-dom";
import logo from "../Images/Logo.jpg";

export default function Nav() {
  const [open, setOpen] = useState(false);
  

 
  const handleClose = () => setOpen(false);




  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 ">
           <img
        src={logo}
        alt="Jarurat Care Logo"
        className="w-30 h-20 object-contain rounded-full"
      />
      

  
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
       
            <>
              <Link to="/">
                <li className="hover:text-blue-600 cursor-pointer">Home</li>
              </Link>
              <Link to="/Patients">
                <li className="hover:text-blue-600 cursor-pointer">Patients</li>
              </Link>
              <Link to="/about-us">
                <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              </Link>
                   <Link to="/view-appointments">
                <li className="hover:text-blue-600 cursor-pointer">ViewAppointments</li>
              </Link>
           
            
            </>
         
           
        
        </ul>

    
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-lg py-6 space-y-6 font-medium text-gray-700">
      
            <>
              <Link to="/" onClick={handleClose}>
                <li className="hover:text-blue-600 cursor-pointer">Home</li>
              </Link>
              <Link to="/Patients" onClick={handleClose}>
                <li className="hover:text-blue-600 cursor-pointer">Patients</li>
              </Link>
              <Link to="/about-us" onClick={handleClose}>
                <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              </Link>
                  
                   <Link to="/view-appointments">
                <li className="hover:text-blue-600 cursor-pointer">ViewAppointments</li>
              </Link>
           
            
            </>
         
        </ul>
      )}
    </nav>
  );
}
