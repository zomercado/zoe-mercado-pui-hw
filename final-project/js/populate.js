// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    fetch('./js/Data.JSON')
        .then(response => response.json())
        .then(data => {
            const cardsGrid = document.querySelector('.cards-grid');
            const cardData = data["Card Content"];
            const filterButtons = document.querySelectorAll('.filter-btn');
            let activeFilters = new Set(); // Track active filters

            // Populate the cards
            cardData.forEach(card => {
                const cardHTML = `
                       <div class="card" 
                       data-tags="${card.Tags ? card.Tags.join(',') : ''}"
                       data-african-region="${card['African Region'] ? card['African Region'].join(',') : ''}">
              <div class="card-inner">
                <div class="card-front">
                  <div class="intro-vertical">
                    <div class="name">
                      <h2 class="word">${card.Phrase}</h2>
                      <button class="flip-btn"><img src="images/vector_images/Flip Icon.svg"
                                        alt="Flip Icon"></button>
                    </div>
                    <div class="intro">
                      <div class="circle-pattern"></div>
                      <div class="card-body-content">
                        <span class="label">Meaning</span>
                        <div class="dash-icon"></div>
                         <div class="definition">${Array.isArray(card.Meaning) ? card.Meaning.join(", ") : card.Meaning}</div>
                          <span class="label">Pronunciation</span>
                          <div class="dash-icon"></div>
                        <div class="phonetic-spelling">${Array.isArray(card["Phonetic Spelling"]) ? card["Phonetic Spelling"].join(", ") : card["Phonetic Spelling"]}</div>
                                    <div class="pronunciation">${Array.isArray(card["Pronunciation"]) ? card["Pronunciation"].join(", ") : card["Pronunciation"]}</div>
                        <button class="audio-btn">
                                        <img src="images/vector_images/Speaker.svg" alt="Play audio"
                                            class="speaker-icon">
                                    </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-back">
<div class="intro-vertical">
                            <div class="origin">
                                <h2 class="word">ORIGIN</h2>
                                <button class="flip-btn"><img src="images/vector_images/Takeaways/Light-Flip-Icon.svg"
                                        alt="Flip Icon"></button>
                            </div>
                            <div class="back-intro">
                                <div class="circle-pattern"></div>
                                <div class="card-body-content">
                                    <div class="location-info">
                                        <div class="icon-wrapper">
                                            <img class="location-icon" src="images/vector_images/Map Pin Icon.svg"
                                                alt="Location Icon">
                                        </div>
                                        <span class="location-text">${Array.isArray(card["African Location"]) ? card["African Location"].join(", ") : card["African Location"]}</span>
                                    </div>
                                    <div class="language-info">
                                        <div class="icon-wrapper">
                                            <img class="language-icon" src="images/vector_images/Language-Icon.svg"
                                                alt="Language Icon">
                                        </div>
                                        <div class="language-details">
                                            <span class="language-text">${Array.isArray(card["Origin Language"]) ? card["Origin Language"].join(", ") : card["Origin Language"]}</span>
                                            <i class="translation">${Array.isArray(card["Original Word"]) ? card["Original Word"].join(", ") : card["Original Word"]}"</i>
                                        </div>
                                    </div>
                                    <div class="source-section">
                                        <span class="source-label">Source</span>
                                        <a href="#" class="source-link">Facebook</a>
                                        <a href="${Array.isArray(card.Source) ? card.Source[0] : card.Source}" class="source-link" target="_blank"></a>
                                    </div>
                                </div>
                                <img class="africa-map" src="images/vector_images/Takeaways/Congo.png"
                                    alt="Map of Africa">
                            </div>
                        </div>`;
                cardsGrid.innerHTML += cardHTML;
            });

            // Add event listeners to filter buttons
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const filter = button.textContent.trim();
                    
                    // Toggle filter in Set
                    if (activeFilters.has(filter)) {
                        activeFilters.delete(filter);
                        button.classList.remove('active');
                    } else {
                        activeFilters.add(filter);
                        button.classList.add('active');
                    }
                    console.log(`Active Filters: ${Array.from(activeFilters)}`); // Debug
                    filterCards();
                });
            });

            // Function to filter cards
            function filterCards() {
                const cards = document.querySelectorAll('.card');
                const activeFiltersArray = Array.from(activeFilters).map(filter => filter.toLowerCase());
                
                cards.forEach(card => {
                    const tags = card.dataset.tags
                        ? card.dataset.tags.split(',').map(tag => tag.trim().toLowerCase())
                        : [];
                    const regions = card.dataset.africanRegion
                        ? card.dataset.africanRegion.split(',').map(region => region.trim().toLowerCase())
                        : [];

                    // Show card if it matches any active filter or if no filters are active
                    if (
                        activeFiltersArray.length === 0 || 
                        activeFiltersArray.some(filter => tags.includes(filter) || regions.includes(filter))
                    ) {
                        card.style.display = 'block'; // Show card
                    } else {
                        card.style.display = 'none'; // Hide card
                    }
                });
            }
        })
        .catch(error => console.error('Error loading card data:', error));
});
