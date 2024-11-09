"use client"
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import office from '../../../public/assets/picture/office.jpg'; 
import Link from 'next/link';
import './hero.css'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  'Generative AI Engineer', 
                  'Founder Of Intellibot Creation', 
                  'Creating Custom AI Chatbots'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="hero-line"></div>
          <p className="hero-description">
            An innovative Generative AI Engineer with a passion for developing tailored AI chatbots. Specializing in intelligent automation, I deliver cutting-edge solutions that elevate customer experiences.
          </p>
          <div className="hero-btn-container">
            <Link href={"#contact"}>
              <button className="hero-btn">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <Image
            className="hero-image"
            alt="hero"
            src={office}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
