// // components/Appointments.js
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const Appointments = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await axios.get('/api/appointments');
//         setAppointments(response.data);
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Appointments</h1>
//       <div className="bg-white shadow-md rounded-lg p-4">
//         {appointments.length === 0 ? (
//           <p>No appointments found.</p>
//         ) : (
//           <ul>
//             {appointments.map((appointment) => (
//               <li key={appointment.id} className="border-b py-2">
//                 <p className="font-semibold">{appointment.subject}</p>
//                 <p>{appointment.date}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Appointments;

import React from 'react';
import { FiCalendar, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Appointments = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Appointments</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Jane Smith</h2>
              <p className="text-sm text-gray-600">09/10/2024 - 10:00 AM</p>
            </div>
            <div className="flex items-center space-x-2">
              <FiCheckCircle className="text-green-500 cursor-pointer" />
              <FiXCircle className="text-red-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
