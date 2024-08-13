import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
    const [formData, setFormData] = useState({
        bhk: '',
        contactName: '',
        location: '',
        price: '',
        type: '',
        image: '' // Base64 string for the image
    });

    const navigate = useNavigate(); // Hook for navigation

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    image: reader.result.split(',')[1] // Only keep the Base64 string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Get agent ID and token from local storage
            const agentId = localStorage.getItem('userId');
            const token = localStorage.getItem('token');
            if (!agentId || !token) {
                toast.error('Agent ID or token is missing from local storage');
                return;
            }

            // Add agent ID to form data
            const updatedFormData = { ...formData, agentId: parseInt(agentId) };

            // Set up config with Authorization header
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            // Send POST request to add property
            const response = await axios.post('http://localhost:8080/api/properties', updatedFormData, config);
            
            // Show success message
            toast.success('Property added successfully!');

            // Redirect to agent dashboard page
            navigate('/agentdashboard');
        } catch (error) {
            // Handle error and show error message
            const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
            toast.error(`Error adding property: ${errorMessage}`);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg space-y-4 border">
                <input
                    type="text"
                    name="bhk"
                    value={formData.bhk}
                    onChange={handleChange}
                    placeholder="BHK"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Contact Name"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="Type (e.g., Home, Apartment, Villa)"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                    Add Property
                </button>
            </form>
        </div>
    );
};

export default AddProperty;
