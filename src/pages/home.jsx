import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import About from "./about";
import Contact from "./contact";

const Home = () => {

    return (
        <div>
            <h5 style={{ backgroundColor: 'red', padding: '20px' }}>This is Home Page</h5>

            <Contact />

            <Link  to='/About'>
                <h5>Click To Go About Page Directely</h5>
            </Link>

        </div>
    )
}

export default Home;