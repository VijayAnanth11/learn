import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import Contact from "./contact";

const About = () => {

    return (
        <div>
            <h5 style={{ backgroundColor: 'green', padding: '20px' }}>This is About Page</h5>

            <Link to='/'>
                <h5>Back To Home</h5>
            </Link>

        </div>
    )
}

export default About;