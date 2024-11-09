import React from 'react';
import Hero from './components/hero';
import About from './components/about';
import Skill from './components/skills';
import Project from './components/project';
import Contact from './components/contact';


const page = () => {
  return (
    <div>
      < Hero />
      < About />
      < Skill />
      < Project />
      < Contact />
    </div>
  );
};

export default page;