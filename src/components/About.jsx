import React from "react";

const About = ({ label, description }) => {
  <section className="profile section" id="profile">
    <h2 className="section-title">{label}</h2>
    <p className="profile__description">{description}</p>
  </section>;
  return <div>About</div>;
};

export default About;
