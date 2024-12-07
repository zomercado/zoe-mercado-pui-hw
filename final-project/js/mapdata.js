//MAP//

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the map and center it on the Caribbean
  const map = L.map('map', {
      center: [18.2, -66.4], // Center on the Caribbean near Puerto Rico
      zoom: 5,               // Default zoom level
      maxBounds: L.latLngBounds(
          [10.0, -85.0],  // Southwest corner
          [27.0, -55.0]   // Northeast corner
      ),
      maxBoundsViscosity: 1.0 // Prevents panning beyond bounds
  });
  
  // Add a tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 10,  // Limit max zoom level
      minZoom: 4    // Limit min zoom level
  }).addTo(map);

  // Define Caribbean countries with details
  const caribbeanCountries = [
      {
          name: "Jamaica",
          coordinates: [18.1096, -77.2975],
          flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/320px-Flag_of_Jamaica.svg.png",
          learnPage: "learn_phrases/jamaica"
      },
      {
          name: "Bahamas",
          coordinates: [25.0343, -77.3963],
          flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/320px-Flag_of_the_Bahamas.svg.png",
          learnPage: "learn_phrases/bahamas"
      },
      {
          name: "Cuba",
          coordinates: [21.5218, -77.7812],
          flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/320px-Flag_of_Cuba.svg.png",
          learnPage: "learn_phrases/cuba"
      },
      {
          name: "Haiti",
          coordinates: [18.9712, -72.2852],
          flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/320px-Flag_of_Haiti.svg.png",
          learnPage: "learn_phrases/haiti"
      },
      {
          name: "Dominican Republic",
          coordinates: [18.7357, -70.1627],
          flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Dominican_Republic.svg/320px-Flag_of_the_Dominican_Republic.svg.png",
          learnPage: "learn_phrases/dominican_republic"
      },
      {
          name: "Puerto Rico",
          coordinates: [18.2208, -66.5901],
          flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/320px-Flag_of_Puerto_Rico.svg.png",
          learnPage: "learn_phrases/puerto_rico"
      }
  ];

  // Add markers with interactive popups and tooltips
  caribbeanCountries.forEach(country => {
      const marker = L.marker(country.coordinates).addTo(map);

      // Tooltip for the flag and name
      marker.bindTooltip(
          `<img src="${country.flagUrl}" alt="Flag of ${country.name}" style="width: 30px; height: auto; margin-right: 5px; vertical-align: middle;">${country.name}`,
          { direction: 'top', opacity: 0.8 }
      );

      // Popup with navigation link
      marker.bindPopup(`
          <h3>${country.name}</h3>
          <img src="${country.flagUrl}" alt="Flag of ${country.name}" style="width: 50px; height: auto;">
          <p><a href="${country.learnPage}" target="_blank">Learn more about ${country.name}</a></p>
      `);

      // Navigate to the learn page on marker click
      marker.on('click', () => {
          window.location.href = country.learnPage;
      });
  });

  // Set a bounding box for the Caribbean
  const bounds = L.latLngBounds(
      [10.0, -85.0],  // Southwest corner
      [27.0, -55.0]   // Northeast corner
  );
  map.fitBounds(bounds);

  // Optional: Add interactivity, such as a click event
  map.on('click', function(e) {
      alert(`You clicked the map at ${e.latlng}`);
  });
});