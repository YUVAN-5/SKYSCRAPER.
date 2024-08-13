import React from 'react';
import { Link } from 'react-router-dom';
import {  FiList, FiUsers, FiUser, FiLogOut } from 'react-icons/fi';

const UserSidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-darkBg text-darkText flex flex-col">
      <div className="flex items-center justify-center h-20 bg-secondary">
        <span className="text-2xl font-bold">SKYSCRAPER</span>
      </div>
      <div className="flex-grow">
        <nav className="mt-10">
          <Link to="/dashboard" className="flex items-center py-3 px-6 hover:bg-primary hover:text-white">
            <FiUser className="mr-3" />
            Profile
          </Link>
         
          <Link to="/myproperties" className="flex items-center py-3 px-6 hover:bg-primary hover:text-white">
            <FiList className="mr-3" />
            FavProperties
          </Link>
          
          <Link to="/agents" className="flex items-center py-3 px-6 hover:bg-primary hover:text-white">
            <FiUser className="mr-3" />
            Agents
          </Link>
         
          
        </nav>
      </div>
      <div className="mb-4">
        <Link to="/logout" className="flex items-center py-3 px-6 hover:bg-secondary hover:text-white">
          <FiLogOut className="mr-3" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default UserSidebar;
