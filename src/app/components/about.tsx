import React from 'react';
import Image from 'next/image';
import srk2 from '../../../public/assets/picture/srk2.jpg';
import './about.css'; // Import the custom CSS file

const About = () => {
  return (
    <div id="about" className="about-container">
      <section>
        <div className="about-content">
          <div className="about-image">
            <Image
              className="object-cover object-center rounded h-[300px]" id='imagea'
              alt="hero"
              src={srk2}
              width={500}
              height={500}
            />
          </div>
          <div className="about-text">
            <h1 className="about-title">About Me</h1>
            <p className="about-paragraph">
              Hello! I am Muhammad Shahrukh, a passionate software engineer and founder of Intellibot Creation. My journey in tech began with Python and has grown to encompass artificial intelligence, chatbot development, and innovative automation solutions. Currently, I am focused on creating interactive chatbot experiences using Dialogflow and Kommunicate, enabling businesses to connect with their audiences through AI-driven conversations.
            </p>
            <p className="about-paragraph">
              I am also skilled in Next.js and TypeScript, which I use to build fast, scalable web applications with a focus on user experience and responsive design. My projects merge functionality with user-centered design, and I take pride in delivering solutions that make an impact.
              When I am not coding, you can find me exploring the latest in AI or refining my web development skills. I believe in learning through hands-on projects and love building meaningful solutions from scratch.
            </p>
            <div className="flex justify-center">
              <a target="_blank" href="/assets/CV/Profile.pdf">
                <button className="about-button">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
