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
  // Add more reveal calls for other elements as needed
};

export const initTyped = () => {
  const typedConfig = {
    strings: ['Frontend Developer', 'MERN Developer', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  };

  const typed = new Typed('.multiple-text', typedConfig);
  // Initialize more Typed instances for other elements as needed
};
