import React from 'react';
import { Page } from '../containers';
import '../styles/pages/about.css';

const About = () => (
  <Page block="about">
    <h1 className="about__header">About Me</h1>
    <section className="about__content">
      <h2 className="about__subheader">Professional</h2>
      <ul className="about__text">
        <li className="about__line">Hello, my name is Frederic Pun, a third year co-op computer science student at the University of Toronto.</li>
        <li className="about__line">I'm currently interested in web development using React, where I'm polishing my skills from fine-tuning my applications.</li>
        <li className="about__line">In the future, I hope to expand my skills into more react related technologies such as React Native and Next.js.</li>
      </ul>
    </section>
    <section className="about__content">
      <h2 className="about__subheader">Personal</h2>
      <ul className="about__text">
        <li className="about__line">I enjoy using and sharing my skills through participating/mentoring at hackathons, and joining projects such as HTV III.</li>
        <li className="about__line">When I'm not coding, I enjoy rock climbing, spending time with friends, and enjoying a nice cup of bubbletea or coffee.</li>
        <li className="about__line">Have I mentioned I really like animals? Especially dogs. <span className="about__emoji" role="img" aria-label="dog">🐕</span></li>
      </ul>
    </section>
  </Page>
)

export default About;