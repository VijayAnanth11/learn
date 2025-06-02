import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import Contact from "./contact";

import logo from "../images/2.jpg";
import img2 from "../images/1.jpg";

import "../styles/d1.css";

import SideBar from "../component/sidebar";
import Footer from "../component/footer";
import Header from "../component/header";

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

const Dashboard = () => {

    return (
        <div style={{ display: 'flex', height: '100vh' }}>

            <div style={{ width: '20%', backgroundColor: 'darkblue', padding: '10px' }}>
                <SideBar />
            </div>

            <div style={{ width: '80%', backgroundColor: 'gray', padding: '10px' }}>

                <div style={{ height: '10%', backgroundColor: 'white', display: 'flex', alignItems: 'center' }}>
                    <Header title="Dashboard" />
                </div>

                <div style={{ height: '80%', backgroundColor: 'yellow', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ padding: '10px', backgroundColor: 'gray', height: '80%', width: '30%', marginLeft: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', paddingLeft: '20px', borderRadius: '10px' }}>
                            <div style={{ height: '50px', width: '50px', borderRadius: '50px' }}>
                                <img src={img2} style={{ height: '100%', width: '100%', borderRadius: '50%' }} />
                            </div>
                            <div style={{ marginLeft: '5px' }}>
                                <h4>Jack Jarlie Test</h4>
                            </div>
                        </div>

                        <div style={{ height: '250px', marginTop: '10px' }}>
                            <img src={img2} style={{ height: '100%', width: '100%' }} />
                        </div>

                        <div style={{ padding: '20px', backgroundColor: 'white', marginTop: '10px' }}>
                            <h5 style={{ margin: '0' }}>This is Test Text. Demo 1</h5>
                        </div>

                        <div style={{ padding: '20px', backgroundColor: 'white', marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <SlLike size={'20px'} color="black" style={{ marginLeft: '10px' }} />
                            <FaCommentDots size={'20px'} color="black" style={{ marginLeft: '10px' }} />
                            <IoIosShareAlt size={'20px'} color="black" style={{ marginLeft: '10px' }} />
                        </div>
                    </div>

                    <div style={{ padding: '10px', backgroundColor: 'gray', height: '80%', width: '30%', marginLeft: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', paddingLeft: '20px', borderRadius: '10px' }}>
                            <div style={{ height: '50px', width: '50px', borderRadius: '50px' }}>
                                <img src={logo} style={{ height: '100%', width: '100%', borderRadius: '50%' }} />
                            </div>
                            <div style={{ marginLeft: '5px' }}>
                                <h4>Jack Jarlie</h4>
                            </div>
                        </div>

                        <div style={{ height: '250px', marginTop: '10px' }}>
                            <img src={logo} style={{ height: '100%', width: '100%' }} />
                        </div>

                        <div style={{ padding: '20px', backgroundColor: 'white', marginTop: '10px' }}>
                            <h5 style={{ margin: '0' }}>This is Test Text. Demo 1</h5>
                        </div>

                        <div style={{ padding: '20px', backgroundColor: 'white', marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <SlLike size={'20px'} color="black" style={{ marginLeft: '10px' }} />
                            <FaCommentDots size={'20px'} color="black" style={{ marginLeft: '10px' }} />
                            <IoIosShareAlt size={'20px'} color="black" style={{ marginLeft: '10px' }} />
                        </div>
                    </div>

                    <div style={{ padding: '10px', backgroundColor: 'gray', height: '80%', width: '30%', marginLeft: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', paddingLeft: '20px', borderRadius: '10px' }}>
                            <div style={{ height: '50px', width: '50px', borderRadius: '50px' }}>
                                <img src={logo} style={{ height: '100%', width: '100%', borderRadius: '50%' }} />
                            </div>
                            <div style={{ marginLeft: '5px' }}>
                                <h4>Jack Jarlie</h4>
                            </div>
                        </div>

                        <div style={{ height: '250px', marginTop: '10px' }}>
                            <img src={img2} style={{ height: '100%', width: '100%' }} />
                        </div>

                        <div style={{ padding: '20px', backgroundColor: 'white', marginTop: '10px' }}>
                            <h5 style={{ margin: '0' }}>This is Test Text. Demo 1</h5>
                        </div>

                        <div style={{ padding: '20px', backgroundColor: 'white', marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <SlLike size={'20px'} color="black" style={{ marginLeft: '10px' }} />
                            <FaCommentDots size={'20px'} color="black" style={{ marginLeft: '10px' }} />
                            <IoIosShareAlt size={'20px'} color="black" style={{ marginLeft: '10px' }} />
                        </div>
                    </div>
                </div>

                <div style={{ height: '10%', backgroundColor: 'white', display: 'flex', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px' }}>
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default Dashboard;