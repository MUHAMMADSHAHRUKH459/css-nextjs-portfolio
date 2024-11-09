// footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import './footer.css'; // Import custom CSS

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <a className="footer-logo">
            <Image 
              src="/assets/picture/shahrukhlogo.jpg" 
              alt="shahrukh-javed" 
              width={100} 
              height={100} 
              className="logo-img" />
            <span className="footer-title">Shahrukh Javed</span>
          </a>
          <p className="footer-text">
            <a href="https://www.linkedin.com/in/shahrukh-javed459/">© 2024 ShahrukhJaved</a>
          </p>
          <span className="footer-social-links">
            <Link target='_blank' href={"https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=shahrukhjaved459@gmail.com"} className="social-icon">
              <SiGmail className='text-2xl hover:text-[#BB001B]' />
            </Link>
            <Link target='_blank' href={"https://github.com/MUHAMMADSHAHRUKH459"} className="social-icon">
              <FaGithub className='text-2xl hover:text-[#211F1F]' />
            </Link>
            <Link target='_blank' href={"https://www.instagram.com/shahruk_javed_/"} className="social-icon">
              <AiOutlineInstagram className='text-2xl hover:text-[#C13584]' />
            </Link>
            <Link target='_blank' href={"https://www.linkedin.com/in/shahrukh-javed459/"} className="social-icon">
              <BiLogoLinkedinSquare className='text-2xl hover:text-[#0a66c2]' />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;