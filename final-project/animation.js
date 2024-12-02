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


  //MAP//

// Initialize Leaflet map
const map = L.map('caribbean-map').setView([13.0, -75.0], 6); // Center on the Caribbean region

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create GeoJSON data for Caribbean countries (this would ideally be fetched from a server or API)
const caribbeanCountries = [
    {
        name: 'Cuba',
        coordinates: [21.5, -80],
        flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_Cuba.svg/320px-Flag_of_Cuba.svg.png',
        learnPage: 'learn_phrases/cuba'
    },
    {
        name: 'Jamaica',
        coordinates: [18.1096, -77.2975],
        flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Jamaica.svg/320px-Flag_of_Jamaica.svg.png',
        learnPage: 'learn_phrases/jamaica'
    },
    // Add more countries here as needed
];

// Add each country as a marker to the map
caribbeanCountries.forEach(country => {
    const marker = L.marker(country.coordinates).addTo(map);
    
    // Hover effect: Show country name and flag in a tooltip
    marker.bindTooltip(`<img src="${country.flagUrl}" alt="Flag of ${country.name}" style="width: 30px; height: auto; margin-right: 5px; vertical-align: middle;">${country.name}`, {
        permanent: false,
        direction: 'top',
        opacity: 0.8
    });

    // Click effect: Navigate to the learn_phrases page for the country
    marker.on('click', () => {
        window.location.href = country.learnPage;
    });
});

// Optional: Add a message when no country is hovered over
map.on('mousemove', function(event) {
    const latlng = event.latlng;
    document.getElementById('country-details').innerHTML = `Latitude: ${latlng.lat.toFixed(2)}, Longitude: ${latlng.lng.toFixed(2)}`;
});




  