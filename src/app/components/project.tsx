import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bluewaveImage from '../../../public/assets/portfolio/bluewave.png'; 
import fast from '../../../public/assets/portfolio/fast.png'; 
import Intellibot from '../../../public/assets/portfolio/Intellibot.png'; 
import './project.css'

const Project = () => {
  return (
    <div id='project'>
      <section className="project-section">
        <div className="container">
          <div className="text-center title-wrapper">
            <h1 className="project-title">My Projects</h1>
            <p className="project-description">
              Explore a range of innovative projects crafted with precision and creativity. Each project showcases unique solutions and technical expertise.
            </p>
          </div>
          <div className="project-cards-wrapper">
            {/* Project 1 */}
            <div className="project-card">
              <div className="image-wrapper">
                <Image
                  alt="gallery"
                  className="project-image"
                  src={bluewaveImage.src} 
                  width={400} 
                  height={300} 
                />
                <div className="project-info">
                  <h2 className="project-subtitle">BlueWave Aviation Project</h2>
                  <h1 className="project-name">Air Travel</h1>
                  <p className="project-summary">
                    This is BlueWave Aviation Project, a web application for booking flights.
                  </p>
                  <Link target='_blank' href="https://bluewave-aviation.vercel.app/">
                    <p className="project-link">View Project..</p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-card">
              <div className="image-wrapper">
                <Image
                  alt="gallery"
                  className="project-image"
                  src={fast.src} 
                  width={400} 
                  height={300} 
                />
                <div className="project-info">
                  <h2 className="project-subtitle">Flavor & Feast Project</h2>
                  <h1 className="project-name">Restaurants</h1>
                  <p className="project-summary">
                    A fully responsive restaurant website built using custom CSS!
                  </p>
                  <Link target='_blank' href="https://flavor-feast-website.vercel.app/?vercelToolbarCode=_Ub6wAlRhnq_taM">
                    <p className="project-link">View Project..</p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="project-card">
              <div className="image-wrapper">
                <Image
                  alt="gallery"
                  className="project-image"
                  src={Intellibot.src} 
                  width={400} 
                  height={300} 
                />
                <div className="project-info">
                  <h2 className="project-subtitle">Intellibot Creation Project</h2>
                  <h1 className="project-name">ChatBot Agency</h1>
                  <p className="project-summary">
                    Unlock the power of AI with our top-notch automation solutions. At Intellibot Creation.
                  </p>
                  <Link target='_blank' href="https://intellibot-creation.vercel.app/">
                    <p className="project-link">View Project..</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
