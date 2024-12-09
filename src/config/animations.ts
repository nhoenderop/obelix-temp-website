export const catAnimationConfig = {
  // Timing configurations (in milliseconds)
  timing: {
    minDelay: 5000,    // Minimum time between cat appearances
    maxDelay: 10000,    // Maximum time between cat appearances
    showDuration: 3000, // How long the cat stays visible
    animationDuration: 300, // Duration of individual animations
  },
  
  // Animation configurations
  animations: {
    entrance: {
      scale: [0, 1],
      rotate: 15, // degrees
    },
    wiggle: {
      rotate: 10,  // degrees
      translate: 5, // pixels
    },
    exit: {
      scale: [1, 0],
      rotate: -15, // degrees
    }
  }
};