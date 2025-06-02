import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center',height: '100%'}}>
            <h5 className="footer-txt">Demo Application</h5>
            <h5 className="footer-txt">Powered by ARK</h5>
        </div>
    )

}


export default Footer;