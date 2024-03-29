import React from 'react';
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../../../public/images/logo.png"
function Navbar() {
  return (
    <div className='Navbar'>
        <Link to="/">
            <img src={Logo} alt="" />
        </Link>
        <ul className="nav">
            <li>
            <Link to="/">Specialized Translation Services</Link>
            <div className='multiNav'>
                <div className="link">
                <h1>SEE HOW WE CAN TRANSFORM YOUR TRANSLATIONS</h1>
                <ul>
                <li><NavLink to="/automotive-translation-services">Automotive</NavLink></li>
                <li><NavLink to="/aviation-aerospace-translation-services">Aviation & Aerospace</NavLink></li>
                <li><NavLink to="/biotech-translation-services">Biotech</NavLink></li>
                <li><NavLink to="/business-documents-translation-services">Business Documents</NavLink></li>
                <li><NavLink to="/chemicals-translation-services">Chemicals</NavLink></li>
                <li><NavLink to="/clinical lrials-translation-services">Clinical Trials</NavLink></li>
                <li><NavLink to="/corporate-financial-translation-services">Corporate Financial</NavLink></li>
                <li><NavLink to="/corporate-legal-translation-services">Corporate Legal</NavLink></li>
                <li><NavLink to="/court-certified-translation-services">Court Certified</NavLink></li>
                <li><NavLink to="/creative-marketing-translation-services">Creative & Marketing</NavLink></li>
                <li><NavLink to="/e-learning-translation-services">E-Learning</NavLink></li>
                <li><NavLink to="/energy-and-utility-translation-services">Energy and Utility</NavLink></li>
                <li><NavLink to="/engineering-translation-services">Engineering</NavLink></li>
                <li><NavLink to="/food-beverage-industry-translation-services">Food & Beverage Industry</NavLink></li>
                </ul>

                <ul>
                    <li><NavLink to="/human-resources-translation-services">Human Resources</NavLink></li>
                    <li><NavLink to="/it-and-telecoms-translation-services">IT and Telecoms</NavLink></li>
                    <li><NavLink to="/journalism-and-editorial-translation-services">Journalism and Editorial</NavLink></li>
                    <li><NavLink to="/leisure-entertainment-translation-services">Leisure & Entertainment</NavLink></li>
                    <li><NavLink to="/manufacturing-translation-services">Manufacturing</NavLink></li>
                    <li><NavLink to="/non-profit-translation-services">Non-Profit</NavLink></li>
                    <li><NavLink to="/official-documents-translation-services">Official Documents</NavLink></li>
                    <li><NavLink to="/pharmaceutical-translation-services">Pharmaceutical</NavLink></li>
                    <li><NavLink to="/retail-translation-services">Retail</NavLink></li>
                    <li><NavLink to="/software-translation-services">Software</NavLink></li>
                    <li><NavLink to="/transport-logistics-translation-services">Transport & Logistics</NavLink></li>
                    <li><NavLink to="/uscis-certified-translation-services">USCIS Certified</NavLink></li>
                    <li><NavLink to="/all-translation-service-translation-services">All Translation Service</NavLink></li>
                </ul>
                </div>

                <ul className='lang'>
                    
                </ul>
            </div>
            </li>
        </ul>
    </div>
  )
}

export default Navbar