//gentle drifting effect with GSAP//
document.addEventListener('DOMContentLoaded', () => {
    const countries = document.querySelectorAll('.country-image');

    countries.forEach(country => {
        // Randomize the floating direction and duration
        const randomX = Math.random() * 40 - 20; // Random X offset (-20 to 20)
        const randomY = Math.random() * 40 - 20; // Random Y offset (-20 to 20)
        const duration = Math.random() * 4 + 2; // Duration between 2s and 6s
        const randomRotation = Math.random() * 20 - 10; // Rotate between -10° and 10°
        const randomZ = Math.random() * 100 - 50; // Z-depth: -50px to 50px

        gsap.to(country, {
            x: `+=${randomX}`, // Horizontal drift
            y: `+=${randomY}`, // Vertical drift
            z: `+=${randomZ}`, // 3D Effect
            duration: duration,
            rotation: `+=${randomRotation}`,
            repeat: -1, // Infinite loop
            yoyo: true, // Reverse direction
            ease: 'power1.inOut', // Smooth easing
        });
    });
});

//Parallax Mouse Movement - Elements shift slightly based on cursor position.//

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.countries-grid');
    const countries = document.querySelectorAll('.country-image');

    grid.addEventListener('mousemove', (e) => {
        const rect = grid.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5; // Normalized: -0.5 to 0.5
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        countries.forEach((country, index) => {
            const depth = (index + 1) / countries.length; // Depth factor
            gsap.to(country, {
                x: mouseX * depth * 100, //100 fir stronger effect
                y: mouseY * depth * 100,
                duration: 0.5,
                ease: 'power3.out',
            });
        });
    });
});

// rotation - handling clicks
document.addEventListener('DOMContentLoaded', () => {
    const flip = document.querySelectorAll('.card');
  
    flip.forEach(button => {
      button.addEventListener('click', (event) => {
        event.stopPropagation(); // Stop the event from bubbling up
  
        const card = button.closest('.card');
        if (card) {
          card.classList.toggle('is-flipped');
          console.log("Card flipped!");
        } else {
          console.log("Card not found!");
        }
      });
    });
  });
