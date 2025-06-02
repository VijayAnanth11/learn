import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import logo from "../images/2.jpg";

import { MdDashboard } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { RiShutDownLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { FaCommentDots } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";


const SideBar = () => {

    return (
        <div>

            <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                <div style={{ height: '70px', width: '70px', borderRadius: '70px' }}>
                    <img src={logo} style={{ height: '100%', width: '100%', borderRadius: '50%' }} />
                </div>
                <div style={{ marginLeft: '5px' }}>
                    <h4>Jhon William</h4>
                </div>
            </div>

            <div style={{ padding: '20px', backgroundColor: 'darkblue' }}>
                <Link style={{ display: 'flex', alignItems: 'center', marginTop: '10px', padding: '5px', textDecoration: 'none' }} to='/'>
                    <MdDashboard size={'30px'} color="white" style={{ marginRight: '10px' }} />
                    <h4 style={{ margin: '0', color: 'white' }}>Dashboard</h4>
                </Link>
                <Link style={{ display: 'flex', alignItems: 'center', marginTop: '10px', padding: '5px', textDecoration: 'none' }} to='/student'>
                    <FaUsersGear size={'30px'} color="white" style={{ marginRight: '10px' }} />
                    <h4 style={{ margin: '0', color: 'white' }}>Manage Student</h4>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', padding: '5px' }}>
                    <LuMessageCircle size={'30px'} color="white" style={{ marginRight: '10px' }} />
                    <h4 style={{ marginLeft: '15px', margin: '0', color: 'white' }}>Manage Staff</h4>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', padding: '5px' }}>
                    <IoIosNotifications size={'30px'} color="white" />
                    <h4 style={{ marginLeft: '11px', margin: '0', color: 'white' }}>Content 3</h4>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', padding: '5px' }}>
                    <IoIosSettings size={'30px'} color="white" />
                    <h4 style={{ marginLeft: '11px', margin: '0', color: 'white' }}>Content 4</h4>
                </div>
            </div>

        </div>
    )
    
}


export default SideBar;