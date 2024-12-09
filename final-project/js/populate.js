document.addEventListener("DOMContentLoaded", () => {
  fetch("./js/Data.JSON")
    .then((response) => response.json())
    .then((data) => {
      const cardsGrid = document.querySelector(".cards-grid");
      const cardData = data["Card Content"];
      const filterButtons = document.querySelectorAll(".filter-btn");
      let activeFilters = new Set(); // Track active filters

      // Populate the cards
      cardData.forEach((card) => {
        const cardHTML = `
                     <div class="card" 
     data-tags="${card.Tags ? card.Tags.join(",") : ""}"
     data-african-region="${
       card["African Region"] ? card["African Region"].join(",") : ""
     }">
  <div class="card-inner">
    <div class="card-front">
      <div class="intro-vertical">
        <div class="name">
          <h2 class="word">${card.Phrase}</h2>
          <button class="flip-btn"><img src="images/vector_images/Flip Icon.svg" alt="Flip Icon"></button>
        </div>
        <div class="intro">
          <div class="circle-pattern"></div>
          <div class="card-body-content">
            <span class="label">Meaning</span>
            <div class="dash-icon"></div>
            <div class="definition">${
              Array.isArray(card.Meaning)
                ? card.Meaning.join(", ")
                : card.Meaning
            }</div>
            <span class="label">Pronunciation</span>
            <div class="dash-icon"></div>
            <div class="phonetic-spelling">${
              Array.isArray(card["Phonetic Spelling"])
                ? card["Phonetic Spelling"].join(", ")
                : card["Phonetic Spelling"]
            }</div>
            <div class="pronunciation">${
              Array.isArray(card["Pronunciation"])
                ? card["Pronunciation"].join(", ")
                : card["Pronunciation"]
            }</div>
            <button class="audio-btn" data-phrase="${card.Phrase}">
              <img src="images/vector_images/Speaker.svg" alt="Play audio" class="speaker-icon">
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card-back">
      <div class="intro-vertical">
        <div class="origin">
          <h2 class="word">ORIGIN</h2>
          <button class="flip-btn"><img src="images/vector_images/Takeaways/Light-Flip-Icon.svg" alt="Flip Icon"></button>
        </div>
        <div class="back-intro">
          <div class="circle-pattern"></div>
          <div class="card-body-content">
            <div class="location-info">
              <div class="icon-wrapper">
                <img class="location-icon" src="images/vector_images/Map Pin Icon.svg" alt="Location Icon">
              </div>
              <span class="location-text">${
                Array.isArray(card["African Location"])
                  ? card["African Location"].join(", ")
                  : card["African Location"]
              }</span>
            </div>
            <div class="language-info">
              <div class="icon-wrapper">
                <img class="language-icon" src="images/vector_images/Language-Icon.svg" alt="Language Icon">
              </div>
              <div class="language-details">
                <span class="language-text">${
                  Array.isArray(card["Origin Language"])
                    ? card["Origin Language"].join(", ")
                    : card["Origin Language"]
                }</span>
                <i class="translation">${
                  Array.isArray(card["Original Word"])
                    ? card["Original Word"].join(", ")
                    : card["Original Word"]
                }"</i>
              </div>
            </div>
            <div class="source-section">
              <span class="source-label">Source</span>
              <a href="#" class="source-link">Facebook</a>
              <a href="${
                Array.isArray(card.Source) ? card.Source[0] : card.Source
              }" class="source-link" target="_blank"></a>
            </div>
          </div>
          <img class="africa-map" src="images/vector_images/Takeaways/Congo.png" alt="Map of Africa">
        </div>
      </div>
    </div>
  </div>
</div>
`;
        cardsGrid.innerHTML += cardHTML;
      });

      // Add event listener to audio buttons
      document.querySelectorAll(".audio-btn").forEach((button) => {
        button.addEventListener("click", () => {
          const phrase = button.getAttribute("data-phrase");
          speak(phrase);
        });
      });

      // Add event listeners to flip buttons
      const flipBtns = document.querySelectorAll('.card');
      flipBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          btn.closest('.card').classList.toggle('is-flipped');
        });
      });

      // Add event listeners to filter buttons
      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const filter = button.textContent.trim();

          // Toggle filter in Set
          if (activeFilters.has(filter)) {
            activeFilters.delete(filter);
            button.classList.remove("active");
          } else {
            activeFilters.add(filter);
            button.classList.add("active");
          }
          console.log(`Active Filters: ${Array.from(activeFilters)}`); // Debug
          filterCards();
        });
      });

      // Function to filter cards
      function filterCards() {
        const cards = document.querySelectorAll('.card');
        const activeFiltersArray = Array.from(activeFilters).map(filter => filter.toLowerCase());
      
        //include only the items that match the predefined regions 
        const activeRegions = activeFiltersArray.filter(filter => ['west', 'east', 'central', 'south'].includes(filter));
        //exclude the region filters
        const activeTags = activeFiltersArray.filter(filter => !['west', 'east', 'central', 'south'].includes(filter));
    
        cards.forEach(card => {
            const tags = card.dataset.tags
                ? card.dataset.tags.split(',').map(tag => tag.trim().toLowerCase())
                : [];
            const regions = card.dataset.africanRegion
                ? card.dataset.africanRegion.split(',').map(region => region.trim().toLowerCase())
                : [];
    
            const matchesTags = activeTags.length === 0 || activeTags.some(tag => tags.includes(tag));
            const matchesRegions = activeRegions.length === 0 || activeRegions.some(region => regions.includes(region));
    
           // Display the card if it matches both tags and regions
            if (matchesTags && matchesRegions) {
                card.style.display = 'block'; //show
            } else {
                card.style.display = 'none'; // Hide
            }
        });
    }
    })
    

    .catch((error) => console.error("Error loading card data:", error));
});

// TEXT-TO-SPEECH FUNCTION - https://dev.to/devsmitra/convert-text-to-speech-in-javascript-using-speech-synthesis-api-223g
function speak(text) {
  if (!text) return;

  const utterance = new SpeechSynthesisUtterance(text);

  // Ensure voices are loaded
  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.addEventListener("voiceschanged", () => {
      const voices = speechSynthesis.getVoices();
      const englishUSVoice = voices.find((voice) => voice.lang === "en-US");
      if (englishUSVoice) {
        utterance.voice = englishUSVoice;
      }
      speechSynthesis.speak(utterance);
    });
  } else {
    const voices = speechSynthesis.getVoices();
    const englishUSVoice = voices.find((voice) => voice.lang === "en-US");
    if (englishUSVoice) {
      utterance.voice = englishUSVoice;
    }
    speechSynthesis.speak(utterance);
  }
}

// Call the function after populating the cards
implementSearch();
 

function adjustCardHeights() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      const frontContent = card.querySelector('.card-front .intro');
      const backContent = card.querySelector('.card-back .back-intro');
      const minHeight = 425; // Minimum height in pixels
      const maxHeight = Math.max(frontContent.scrollHeight, backContent.scrollHeight, minHeight);
      
      if (maxHeight > minHeight) {
          frontContent.style.height = `${maxHeight}px`;
          backContent.style.height = `${maxHeight}px`;
      } else {
          frontContent.style.height = '';
          backContent.style.height = '';
      }
  });
}