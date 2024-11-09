import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; 
import { MdDownload } from "react-icons/md";
import './navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar-container">
      <header className="header-container">
        <a className="logo-container">
          <Image 
            src="/assets/picture/shahrukhlogo.jpg" 
            alt="shahrukh-javed" 
            width={100} 
            height={100} 
            className="logo-img"
          />
          <span className="logo-text" id='shahrukh'>Shahrukh Javed</span>
        </a>

        <nav className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#skills" className="nav-link">Skills</Link>
          <Link href="#project" className="nav-link">Projects</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </nav>

        <a href="/assets/CV/Profile.pdf">
          <button className="cv-button">
            Download CV
            <MdDownload className="download-icon" />
          </button>
        </a>
      </header>
    </div>
  );
};

export default Navbar;