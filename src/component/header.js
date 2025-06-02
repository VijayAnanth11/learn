import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";
import { RiDashboard3Line } from "react-icons/ri";


const Header = ({ title }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems:'center'}}>
            <div style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                <RiDashboard3Line size={'20px'} color="black" />
                <h4 style={{ margin: 0, marginLeft: '5px' }}>{title}</h4>
            </div>

            <div style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                <FaUser size={'20px'} color="black" />
                <RiShutDownLine size={'20px'} color="black" style={{ marginLeft: '10px' }} />
            </div>
        </div>
    )

}


export default Header;