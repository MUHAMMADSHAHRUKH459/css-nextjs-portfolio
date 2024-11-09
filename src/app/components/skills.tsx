import React from 'react';
import { FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiDialogflow, SiChatbot } from "react-icons/si";
import { TbMessageChatbotFilled } from "react-icons/tb";
import './skills.css'

const Skill = () => {
  return (
    <div id='skills'>
      <section className="skills-section">
        <div className="container">
          <div className="title-wrapper">
            <h1 className="skills-title">My Skills</h1>
          </div>
          <div className="skills-list">
            {/* HTML Skill */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container html-icon">
                  <FaHtml5 />
                </div>
                <h2 className="skill-name">HTML</h2>
              </div>
              <div className="progress-bar">
                <div className="progress html-progress"></div>
              </div>
              <p className="progress-percentage">100%</p>
            </div>
            {/* CSS Skill */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container css-icon">
                  <FaCss3Alt />
                </div>
                <h2 className="skill-name">CSS</h2>
              </div>
              <div className="progress-bar">
                <div className="progress css-progress"></div>
              </div>
              <p className="progress-percentage">95%</p>
            </div>
            {/* JavaScript Skill */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container js-icon">
                  <IoLogoJavascript />
                </div>
                <h2 className="skill-name">Javascript</h2>
              </div>
              <div className="progress-bar">
                <div className="progress js-progress"></div>
              </div>
              <p className="progress-percentage">80%</p>
            </div>
            {/* TypeScript Skill */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container ts-icon">
                  <BiLogoTypescript />
                </div>
                <h2 className="skill-name">TypeScript</h2>
              </div>
              <div className="progress-bar">
                <div className="progress ts-progress"></div>
              </div>
              <p className="progress-percentage">90%</p>
            </div>
            {/* Tailwind CSS Skill */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container tailwind-icon">
                  <SiTailwindcss />
                </div>
                <h2 className="skill-name">Tailwind CSS</h2>
              </div>
              <div className="progress-bar">
                <div className="progress tailwind-progress"></div>
              </div>
              <p className="progress-percentage">85%</p>
            </div>
            {/* Python Skill */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container python-icon">
                  <FaPython />
                </div>
                <h2 className="skill-name">Python</h2>
              </div>
              <div className="progress-bar">
                <div className="progress python-progress"></div>
              </div>
              <p className="progress-percentage">90%</p>
            </div>
            {/* Chatbots Skill */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container chatbot-icon">
                  <TbMessageChatbotFilled />
                </div>
                <h2 className="skill-name">Chatbots</h2>
              </div>
              <div className="progress-bar">
                <div className="progress chatbot-progress"></div>
              </div>
              <p className="progress-percentage">100%</p>
            </div>
            {/* Dialogflow Skill */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container dialogflow-icon">
                  <SiDialogflow />
                </div>
                <h2 className="skill-name">Dialogflow</h2>
              </div>
              <div className="progress-bar">
                <div className="progress dialogflow-progress"></div>
              </div>
              <p className="progress-percentage">80%</p>
            </div>
            {/* Kommunicate Skill */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container kommunicate-icon">
                  <SiChatbot />
                </div>
                <h2 className="skill-name">Kommunicate</h2>
              </div>
              <div className="progress-bar">
                <div className="progress kommunicate-progress"></div>
              </div>
              <p className="progress-percentage">80%</p>
            </div>

            {/* TypeScript Skill */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container ts-icon">
                  <BiLogoTypescript />
                </div>
                <h2 className="skill-name">Nextjs</h2>
              </div>
              <div className="progress-bar">
                <div className="progress ts-progress"></div>
              </div>
              <p className="progress-percentage">70%</p>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
