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
import AddStudentModal from "../modal/addStudentModal";

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

const Student = () => {

    //
    const tableArray = [
        { id: '01', name: 'Test 1', email: 'Email 1', contact: '011', district: 'D1', date: '2025-05-10' },
        { id: '02', name: 'Test 2', email: 'Email 2', contact: '022', district: 'D2', date: '2025-05-10' },
        { id: '03', name: 'Test 3', email: 'Email 3', contact: '033', district: 'D3', date: '2025-05-10' }
    ];

    //
    const [showData, setShowData] = useState(false);


    const addBtnClick = (e) => {
        e.preventDefault();

        setShowData(true);
    };

    const editBtnClick = (e) => {
        e.preventDefault();

        alert('Edit Btn Clicked Success!');
    };



    return (
        <div style={{ display: 'flex', height: '100vh' }}>

            <div style={{ width: '20%', backgroundColor: 'darkblue', padding: '10px' }}>
                <SideBar />
            </div>

            <div style={{ width: '80%', backgroundColor: 'white', padding: '10px' }}>

                <div style={{ height: '10%', backgroundColor: 'rgba(0, 0, 0, 0.159)', display: 'flex', alignItems: 'center' }}>
                    <Header title="Manage Student" />
                </div>

                <div style={{ height: '80%', backgroundColor: 'white' }}>

                    <div style={{ padding: '10px', display: 'flex', justifyContent: 'end' }}>
                        <button className="add-btn" onClick={addBtnClick}>ADD STUDENT</button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '10px' }}>
                        <table style={{ border: '1px green solid', width: '95%' }}>
                            <thead>
                                <tr>
                                    <th style={{ border: '1px solid red', padding: '5px', width: '5%', color: 'red' }}>ID</th>
                                    <th style={{ border: '1px solid red', padding: '5px', color: 'red' }}>NAME</th>
                                    <th style={{ border: '1px solid red', padding: '5px', color: 'red' }}>EMAIL</th>
                                    <th style={{ border: '1px solid red', padding: '5px', color: 'red' }}>CONTACT</th>
                                    <th style={{ border: '1px solid red', padding: '5px', color: 'red' }}>DISTRICT</th>
                                    <th style={{ border: '1px solid red', padding: '5px', color: 'red' }}>DATE</th>
                                    <th style={{ border: '1px solid red', padding: '5px', color: 'red' }}>ACTION</th>
                                </tr>
                            </thead>

                            <tbody>
                                {tableArray.map(item => (
                                    <tr>
                                        <td style={{ border: '1px solid red', padding: '5px', textAlign: 'center', width: '5%', color: 'green' }}>{item.id}</td>
                                        <td style={{ border: '1px solid red', padding: '5px', textAlign: 'center', color: 'green' }}>{item.name}</td>
                                        <td style={{ border: '1px solid red', padding: '5px', textAlign: 'center', color: 'green' }}>{item.email}</td>
                                        <td style={{ border: '1px solid red', padding: '5px', textAlign: 'center', color: 'green' }}>{item.contact}</td>
                                        <td style={{ border: '1px solid red', padding: '5px', textAlign: 'center', color: 'green' }}>{item.district}</td>
                                        <td style={{ border: '1px solid red', padding: '5px', textAlign: 'center', color: 'green' }}>{item.date}</td>
                                        <td style={{ border: '1px solid red', padding: '5px', textAlign: 'center', color: 'green' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <button className="btn-edit" onClick={editBtnClick}>Edit</button>
                                                <button className="btn-delete" onClick={addBtnClick}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

                <div style={{ height: '10%', backgroundColor: 'rgba(0, 0, 0, 0.159)', display: 'flex', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px' }}>
                    <Footer />
                </div>
            </div>

            <AddStudentModal show={showData} />

        </div>
    )

}

export default Student;