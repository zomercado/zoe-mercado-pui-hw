//MAP//
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map and center it on the Caribbean
    const map = L.map('map', {
      center: [17.0, -66.5], // Center on the Caribbean
      zoom: 5,               // Default zoom level
      maxBounds: L.latLngBounds(
          [0.0, -100.0],  // Southwest corner
          [30.0, -45.0]   // Northeast corner
      ),
      maxBoundsViscosity: 1.0, // Prevents panning beyond bounds
  });
  
  // Add a tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 10,  // Limit max zoom level
      minZoom: 5,    // Limit min zoom level
  }).addTo(map);
  
  
  
    // Define Caribbean countries with details
    const caribbeanCountries = [
      {
        name: "Jamaica",
        coordinates: [18.1096, -77.2975],
        language: "English",
        flagUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/320px-Flag_of_Jamaica.svg.png",
        learnPage: "learn_phrases.html?country=jamaica",
      },
  
      {
        name: "Barbados",
        coordinates: [13.17609, -59.570292],
          language: "English",
        flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/320px-Flag_of_Barbados.svg.png",
        learnPage: "learn_phrases.html?country=barbados",
      },
      {
        name: "Haiti",
        coordinates: [18.9712, -72.2852],
          language: "Haitian Creole",
        flagUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/320px-Flag_of_Haiti.svg.png",
        learnPage: "learn_phrases.html?country=haiti",
      },
  
      {
        name: "Trinidad & Tobago",
      language: "English",
        coordinates: [10.7636, -61.3200781],
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/1600px-Flag_of_Trinidad_and_Tobago.svg.png",  
        learnPage: "learn_phrases.html?country=trinidadtobago",
      },
    ];
  
    caribbeanCountries.forEach(country => {
      const marker = L.marker(country.coordinates).addTo(map);
  
      // Tooltip for the flag, country name, and language
      marker.bindTooltip(`
          <div style="text-align: center;">
              <div style="display: flex; align-items: center;">
                  <img src="${country.flagUrl}" alt="Flag of ${country.name}" style="width: 30px; height: auto; margin-right: 10px;">
                  <strong>${country.name}</strong>
              </div>
              <div>Language: ${country.language}</div>
          </div>
      `, { 
          direction: 'top', 
          opacity: 0.9, 
          offset: [0, -10] 
      });
  
      // Popup with navigation link
      marker.bindPopup(`
          <h3>${country.name}</h3>
          <img src="${country.flagUrl}" alt="Flag of ${country.name}" style="width: 50px; height: auto;">
          <h2>${country.language}</h2>
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
      [25.0, -55.0]   // Northeast corner
  );
  map.fitBounds(map.getBounds());
  
  
    // Optional: Add interactivity, such as a click event
    map.on('click', function(e) {
      
        alert(`You clicked the map at ${e.latlng}`);
    });
  });


  // Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const selectedCountry = urlParams.get('country');

// Use the selected country to filter the content
if (selectedCountry) {
  // Call your existing filterContentByCountry function
  filterContentByCountry(selectedCountry);
}

