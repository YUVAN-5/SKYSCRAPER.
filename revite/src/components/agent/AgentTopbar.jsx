import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

const AgentTopbar = ({ avatarUrl, agentName, onToggleTheme }) => {
    return (
        <div className="fixed top-0 left-64 right-0 h-16 bg-darkBg text-darkText flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
                <FaSearch />
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="bg-lightBg text-darkText p-2 rounded-lg" 
                />
            </div>
            <div className="flex items-center space-x-4">
                {/* <img 
                    src={avatarUrl} 
                    alt="Agent Avatar" 
                    className="w-8 h-8 rounded-full"
                /> */}
                 <button className="ml-4 p-2 rounded-full bg-primary text-white">
            <FiUser />
          </button>
                <span>{agentName}</span>
                <button onClick={onToggleTheme} className="focus:outline-none">
                    Agent
                </button>
            </div>
        </div>
    );
};

export default AgentTopbar;
