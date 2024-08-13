// import React, { useState, useEffect } from 'react';
// import { FaHome } from 'react-icons/fa';

// const MyProperties = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     // Fetch the properties from the backend
//     const fetchProperties = async () => {
//       const response = await fetch('/api/user/my-properties');
//       const data = await response.json();
//       setProperties(data);
//     };

//     fetchProperties();
//   }, []);

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-bold">My Properties</h2>
//       <div className="grid grid-cols-3 gap-4 mt-4">
//         {properties.map((property) => (
//           <div key={property.id} className="p-4 bg-primary-lightBg dark:bg-primary-darkBg rounded-md shadow-md">
//             <FaHome className="text-2xl mb-2" />
//             <p><strong>Name:</strong> {property.name}</p>
//             <p><strong>Location:</strong> {property.location}</p>
//             <p><strong>Price:</strong> ${property.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyProperties;


import React from 'react';
import { FiMapPin, FiTag, FiHome } from 'react-icons/fi';
import koolina from '../../assets/img/koolina.jpg'
import westin from "../../assets/img/westin.webp"

const MyProperties = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Properties</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <img src={westin} alt="Property" className="rounded-lg mb-4" />
          <h2 className="text-lg font-semibold mb-2">Westin Whistler</h2>
          <p className="text-sm text-gray-600 mb-2"><FiMapPin className="inline mr-2" />SanFransisco, USA</p>
          <p className="text-primary text-xl font-bold mb-4"><FiTag className="inline mr-2" />$3,500,000</p>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary w-full">
            View Details <FiHome className="ml-2" />
          </button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <img src={koolina} alt="Property" className="rounded-lg mb-4" />
          <h2 className="text-lg font-semibold mb-2">Ko Olina</h2>
          <p className="text-sm text-gray-600 mb-2"><FiMapPin className="inline mr-2" />Texas, UAE</p>
          <p className="text-primary text-xl font-bold mb-4"><FiTag className="inline mr-2" />$2,000,000</p>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary w-full">
            View Details <FiHome className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProperties;
