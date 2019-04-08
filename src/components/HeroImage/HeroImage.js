import React from 'react';
import './HeroImage.css'
import Nishant from '../../Images/Nishant3.jpg'

const heroimage = () => {
  return (
    <div className="img-fluid">
      <div  className="pt-3">
        <h1 className="animated fadeInUp delay-1s"><strong>Hi There </strong></h1>
        <h3 className="animated fadeInUp delay-2s"><strong>I am Nishant Rao.</strong></h3>
        <img className="pic-container img-thumbnail animated jackInTheBox delay-3s" src={Nishant} alt="profile pic"/>
        <h3 className="animated fadeInUp delay-4s mt-2"><strong> A Self-Motivated Front-End Developer <br/> and I present here my skills and projects accomplished.</strong></h3>
      </div>
    </div>
  );
}

export default heroimage;
