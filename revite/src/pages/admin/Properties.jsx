// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const Properties = () => {
//   const [properties, setProperties] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/properties/all');
//         setProperties(response.data);
//       } catch (error) {
//         console.error('Error fetching properties:', error.message);
//         toast.error('An error occurred while fetching properties.');
//       }
//     };

//     fetchProperties();
//   }, []);

//   const handleDelete = async (propertyId) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/properties/delete/${propertyId}`);
//       setProperties(properties.filter(property => property.id !== propertyId));
//       toast.success('Property deleted successfully.');
//     } catch (error) {
//       console.error('Error deleting property:', error.message);
//       toast.error('An error occurred while deleting the property.');
//     }
//   };

//   const handleEdit = (propertyId) => {
//     navigate(`/properties/${propertyId}`);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">All Properties</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {properties.length > 0 ? (
//           properties.map((property) => (
//             <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden border">
//               <img
//                 src={`data:image/png;base64,${property.image}`} 
//                 alt="Property"
//                 className="h-56 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold text-gray-800">{property.bhk} BHK</h2>
//                 <p className="text-gray-600">Location: {property.location}</p>
//                 <p className="text-gray-600">Price: ${property.price ? parseFloat(property.price).toFixed(2) : 'N/A'}</p>
//                 <p className="text-gray-600">Type: {property.type}</p>
//                 <p className="text-gray-600">Contact: {property.contactName}</p>
//                 <p className="text-gray-600">Agent: {property.agent.name} ({property.agent.email})</p>
//                 <p className="text-gray-600">Date Added: {new Date(property.createdAt).toLocaleString()}</p>
//                 <div className="mt-4 flex space-x-4">
//                   <button 
//                     onClick={() => handleEdit(property.id)} 
//                     className="bg-blue-500 text-white px-4 py-2 rounded"
//                   >
//                     Edit
//                   </button>
//                   <button 
//                     onClick={() => handleDelete(property.id)} 
//                     className="bg-red-500 text-white px-4 py-2 rounded"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="w-full text-center py-10 text-gray-600">No properties found.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Properties;

import React from 'react';
import { FiMapPin, FiTag, FiHome } from 'react-icons/fi';
import rosewood from '../../assets/img/rosewoodresid.webp'
import apart from "../../assets/img/vancouver.webp"

const Properties = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Properties</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <img src={rosewood} alt="Property" className="rounded-lg mb-4" />
          <h2 className="text-lg font-semibold mb-2">Luxury Villa</h2>
          <p className="text-sm text-gray-600 mb-2"><FiMapPin className="inline mr-2" />New York, NY</p>
          <p className="text-primary text-xl font-bold mb-4"><FiTag className="inline mr-2" />$2,500,000</p>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary w-full">
            View Details <FiHome className="ml-2" />
          </button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <img src={apart} alt="Property" className="rounded-lg mb-4" />
          <h2 className="text-lg font-semibold mb-2">Modern Apartment</h2>
          <p className="text-sm text-gray-600 mb-2"><FiMapPin className="inline mr-2" />Los Angeles, CA</p>
          <p className="text-primary text-xl font-bold mb-4"><FiTag className="inline mr-2" />$1,800,000</p>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary w-full">
            View Details <FiHome className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
