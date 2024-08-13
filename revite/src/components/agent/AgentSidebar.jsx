import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaBuilding, FaCalendarCheck } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const AgentSidebar = () => {
    return (
        <div className="fixed inset-y-0 left-0 w-64 bg-darkBg text-darkText flex flex-col justify-between">
            <div className="p-8">
                <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold">SKYSCRAPER</div>
                </div>
                <nav className="mt-8 ">
                    <NavLink to="/agent/dashboard" className="flex items-center p-3 hover:bg-primary rounded-lg">
                        <AiOutlineHome className="mr-3" />
                        Dashboard
                    </NavLink>
                    <NavLink to="/agent/profile" className="flex items-center p-3 hover:bg-primary rounded-lg">
                        <BsFillPersonFill className="mr-3" />
                        Profile
                    </NavLink>
                    <NavLink to="/agent/mails" className="flex items-center p-3 hover:bg-primary rounded-lg">
                        <AiOutlineMail className="mr-3" />
                        Mails
                    </NavLink>
                    <NavLink to="/agent/properties" className="flex items-center p-3 hover:bg-primary rounded-lg">
                        <FaBuilding className="mr-3" />
                        My Properties
                    </NavLink>
                    <NavLink to="/addproperty" className="flex items-center p-3 hover:bg-primary rounded-lg">
                        <FaCalendarCheck className="mr-3" />
                        AddProperty
                    </NavLink>
                </nav>
            </div>
            <div className="p-4">
                <Link to="/logout" className="flex items-center p-4 hover:bg-primary rounded-lg">
                   <FiLogOut className='mr-3 '/>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default AgentSidebar;
