// utils/animations.js

import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

export const initScrollReveal = () => {
  const scrollRevealConfig = {
    reset: true,
    distance: '800px',
    duration: 2000,
    delay: 200,
  };

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top', ...scrollRevealConfig });
  ScrollReveal().reveal('.home-img, .skill-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
  // Add more reveal calls for other elements as needed
};

export const initTyped = () => {
  const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'MERN Developer', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  // Initialize more Typed instances for other elements as needed
};

export const initTyped1 = () => {
  
    const typed1 = new Typed('.multiple-text2', {
      strings: ['Frontend Developer', 'MERN Developer', 'Software Engineer'],
      typeSpeed: 1000,
      backDelay: 1000,
      loop: true
    });
    // Initialize more Typed instances for other elements as needed
  };