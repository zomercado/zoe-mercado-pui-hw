<mark>**Note that this document order from FP4 -> FP1**</mark>

# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 

Please sign up for the study at [https://tinyurl.com/pui-study](https://tinyurl.com/pui-study) to allow us to use your submission to create a better GenAI assistant for designers!

## Part 1: Website Description

Describe your website (300 words).

* What is the purpose of your website?  
Creole Connections is an innovative digital platform that explores the rich linguistic tapestry connecting Caribbean Creole dialects to their African linguistic roots. Through an interactive, geographically-driven map, the website invites users to journey through the intricate language connections between Caribbean nations and African regions.
The platform serves a dual purpose: educational exploration and cultural preservation. By visualizing language origins through dynamic, colorful interfaces, Creole Connections transforms linguistic research into an engaging, accessible experience. Users can navigate through an immersive map interface, discovering how languages like Haitian Creole and Jamaican Patois evolved from African languages such as Yoruba and Twi.

* Who is the target audience?  
This resource is designed for language enthusiasts, cultural researchers, curious learners, and diaspora communities with ties to the region who want to deepen their understanding of the linguistic connections to Africa.

* What information do you convey with your website?  
Words used in different caribbean countries and the language and regions that they derive from in Africa. The profound influence of African languages on the linguistic heritage of the Caribbean.

* How is it interesting and engaging? 
The website offers multiple interactive experiences:

Geographic Exploration: An interactive map revealing linguistic migrations and connections
Phrase Learning: Flip-card functionality and audio buttons allowing deep dives into specific linguistic nuances
Filtering Capabilities: Multi-select filters enabling precise language and regional investigations

The website's design prioritizes user engagement through:

Animated country grids with floating icons
Hover-responsive visualizations - as you hover the grid shifts in the direction of your mouse
Intuitive navigation
Rich, contextual information about language evolution

## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

1. Interaction type: Click on toggle icons on index.html to select a country to learn about / hover over toggle icons on index.html to reveal country name, flag, and language / scroll on index.html to explore the map, etc.  
2. Interaction type: Search via the search bar on learn_phrases.html / click on filter buttons on index.html to filter language cards by tag or region / click on cards on learn_phrases.html to flip between front/back revealing more context about the origins / click on audio button icon on learn_phrases.html to play English pronunciation.  
3. Interaction type: Hover over country icons on about.html to move cards grid in the direction of mouse. 
4. Interaction type: Hover over navigation links in the header and footer (ex: Github, Email, LinkedIn, and links between the 3 html pages). 

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. Speech Synthesis
   * Why did you choose to use it over other alternatives? (2 sentences max)
   I chose it because it was accessible and required minimal set up. It was also free!

   * How you used it? (2 sentences max) 
   I used it in the learn_phrases,html page to create audio pronunciation of each word. 

   * What does it add to your website? (2 sentences max)  It adds another level of engagement and interactivity and brings the words to life. It also improves accessibility for those with limited sight. 

2. Leaflet
   * Why did you choose to use it over other alternatives? (2 sentences max)
   It's the most widely used map interface with lots of customization features, and it's free!
   
   * How you used it? (2 sentences max)
   I used it to create the map expo of the Caribbean, with country-specific click functionality. 

   * What does it add to your website? (2 sentences max)
    This visual tool adds crucial geographic context, helping users understand the origin of each Creole dialect.

3. GSAP
  * Why did you choose to use it over other alternatives? (2 sentences max)  
  After looking up Javscript libraries for interactivity and animation GSAP was consistently one of the top results. It's free and very easy to implement because I wasn't looking for extremely complicated animations.

   * How you used it? (2 sentences max)
   I used to create the floating animations for countries in the about page. 

   * What does it add to your website? (2 sentences max)
   It adds extra interactivity for the about page, and it transforms the page from a static display to a dynamic, engaging experience.

## Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

The original green background was replaced with a beige backdrop to improve accessibility and readability; green became a primary color instead. Color schemes were refined, inverting filter colors to black with beige text to enhance visual contrast. On the learn_phrases page, I eliminated the "flip to reveal" text, relying instead on intuitive interaction signifiers (the flip icon on each card) for minimalist design and to maximize screen space. A consistent navigation structure was added across all pages, providing clear pathways between the map expo, learn phrases, and about pages to improve overall user experience and site usability. On the map expo page I added a hover tooltip that displays the country name, flag, and official language to provide more context on each country before they learn about their phrases.

## Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)

My primary technical hurdles included geographically constraining the interactive map to focus specifically on the Caribbean region, rather than displaying the entire world. I also faced significant content challenges: sourcing varied linguistic data across different countries and developing an intuitive information architecture that would make sense for users. Additionally, I encountered technical complexities in populating JSON data for cards and automating responsive card spacing, especially when aligning the African map with cards of varying content dimensions.

## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (a page max, \~500 words).

### ChatGPT Usage
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that …  
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that …  
* I critiqued/evaluated the generated suggestions before incorporation by … For example, this tool once suggested … but I modified/rejected the suggestion because …  
* I accepted the generations when … This tool did/did not influence my final design and implementation plan because … For example, this tool once suggested … and I adjusted my design according to the suggestion because … 
* The pros and cons of using this Generative AI tool: …

***Usage Experiences by Project Aspects***

| Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Usage<sup>1</sup> | \[yes/no\] because … | \[yes/no\] because … | \[yes/no\] because … | \[yes/no\] because … | \[yes/no\] because … |
| Reduce/Improve Productivity<sup>2</sup> | \[rating\] because … | \[rating\] because … | \[rating\] because … | \[rating\] because … | \[rating\] because … |

[1] I used / did not use this tool for X aspect of the project because …  
[2] This tool makes my productivity for X aspect (1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved)

***Prompts and Chat History Links***

Attach all the prompts you’ve used (e.g., for ChatGPT you can anonymously [share](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq) your chat history).


### Add more subsections for the GenAI tools you've used, e.g., Copilot, etc.

Copy all the content under the [ChatGPT Usage](#chatgpt-usage) section to answer the same questions for this tool.


---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- [ ] ...

## Generative AI Use Plan Updates

- [ ] ...

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

Briefly restate your motivation and a short description of your project:

My motivation is to create an educational platform for people to view the Caribbean as a culturally rich and diverse region, either for people who simply want to learn more, or for people with ties to the region and want to deepen their understanding of the linguistic connections to Africa.

For this project, I will create a visually engaging map that allows users to explore the Caribbean Creole dialects (e.g., Haitian Creole, Jamaican Patois) and their connection to African languages (e.g., Yoruba, Twi). Users click on different regions to learn phrases, learn where they come from in Africa, and understand their cultural significance. 

## High-Fi Prototypes

### *Prototype 1*

![Map Interface](images/Prototype%201.png)

A brief description and summary of the user feedback:

Users generally liked the explorational structure with the map page, enjoying the freedom to hover over each country to learn more. They suggested adding a quick tooltip at the page load to guide users on how to explore, which could also support those using assistive technologies, such as users with low vision or screen readers.

### *Prototype 2*
![Phrases Interface](images/Prototype%202.png)

A brief description and summary of the user feedback:

Users enjoyed the playful card flip functionality but overlooked the search feature initially. They found the phonetic pronunciation challenging due to its highly technical and specialized forma. They instead suggested instead a simpler pronunciation guide and an audio button to hear the phrases aloud to reduce the cognitive load.
…

## Usability Test

Discuss the user feedback you got during the evaluation / usability test (\~300 words). Indicate which feedback you implemented, inspired new directions, or otherwise influenced your final design. 

### Task 1: Find what "Djab" means under Haiti
**Objective:** Assess users' ability to navigate and interpret phrase cards.

**Feedback and Observations:** Most users successfully located Haiti on the map and identified “Djab” under the phrase cards, but some hesitated with the phonetic layout, struggling to interpret symbols like "/dʒab/". Although the map interaction felt intuitive, several users expressed uncertainty about whether to click on the map or use the search bar.

**Design Impact:** I added a brief explanation of phonetic symbols on the card to make pronunciation easier. Additionally, I introduced an audio icon on each card, allowing users to hear the correct pronunciation with one click.

### Task 2: Return results for Curacao
**Objective:** Evaluate ease of locating the country search feature.

**Feedback and Observations:** Some users expected a more prominent search function or clearer guidance to return specific results for Curacao. This lack of immediacy led to delays in task completion.

**Design Impact:** To address this, I increased the visibility of the search bar and placed instructional text near it to help users quickly locate specific countries.

### Task 3: View the Phrases Page
**Objective:** Test user ability to find the "Learn Phrases" page from the navigation bar without a pre-set filter.

**Feedback and Observations:** Many users tried various sections of the interface before locating the phrases page, indicating that the navigation bar labels were not clear enough.

**Design Impact:** I revised the navigation bar by adding a distinct “Learn Phrases” button, making it more accessible. I also added an initial microinteraction that briefly dims the map and displays guidance text: "Click on countries to explore." This short animation aids first-time users in understanding the interface paths.


## Updated Designs

Show screenshots of your updated design based on the user feedback (\<100 words, \~2 images):

![Map Loading](images/Map%20Loading.png)
![Map Interface](images/Updated%20Map.png)

* **Navigation Bar:**
Added a more salient "Learn Phrases" button to make it easier to locate this feature.
* **Map Interface:**
While users found the interface visually appealing, one noted a lack of clarity in interaction paths within the map. I added a microinteraction upon initial page load for to guide first-time users - the map colors become opaque and text appears briefly saying "Click on countries to explore".

![Phrases Interface](images/Updated%20Phrases.png)

* **Phonetic Symbols:**
Added a brief explanation for phonetic symbols to help users understand how to pronounce words.
* **Audio Pronunciation:**
Included an audio button on the front of each card to hear the correct pronunciation.



## Feedback Summary

Summarize the feedback you received in the lab session and discuss how it influenced your design (\~300 words): 

* **Country Names on Map:** Display country names only on hover - provides context for each country for users not familiar with caribbean geography.
* **Page Differentiation:** Consider visual cues to distinguish the “everything” page from individual country pages - clarifying the functionality of each page
* **Filter by Country:** Replace the search bar with a type-ahead filter using checkboxes for country selection - allows users to select multiple countries rather than limit to one.
* **Flags or Indicators:** Consider using flags or another marker on the phrases page to show which countries use each word, but ensure it doesn’t become overwhelming - makes it easier to cross reference phrases across countries and make connections.
* **Card Colors:** Clarify if colors have meaning. Use color consistency across cards to convey word meanings and add green for cohesion with the map page. Run colors through a color-blind test to ensure consistent design systems and accessibility.
* **Map Navigation:** Make the map button more noticeable as a "back" button.
* **UI Adjustments:** Move the search bar on the phrases page away from the header to make the header consistent across pages
* **Navigation Bar:** Add a navigation bar for easy switching between pages and an indicator for the current page.
* **Phrases Display:** Consider displaying phrases as pop-ups instead of on a separate page - allows users to view more details without losing context, which keeps the exploration experience engaging and continuous.

## Milestones

Outline weekly milestones to plan your expected implementation progress until the end of the semester (\~300 words). 

### *Implementation Plan*

- [ ] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  - [X] Choose the final direction of the project based on feedback and feasibility.
  - [X] Develop lo-fi prototypes to explore different design layouts and features.
  - [X] Create two hi-fi prototypes, incorporating essential UI elements.
  - [X] Conduct the first round of usability testing to gather early insights.
  
- [ ] Week 10 Nov 4 \- Nov 8:   
  - [X] FP2 due
  - [ ] Generate a document with all website content, including at least 10 phrases from each country with their respective tags.
  - [ ] Refine the Figma prototype, incorporating interactive elements and making adjustments based on lab feedback from 11/3. This will serve as the visual and functional blueprint for the development phase.

- [ ] Week 11 Nov 11 \- Nov 15:  
  - [ ] Complete HTML template for the map and phrases pages before JS implementation.
  - [ ] Apply CSS to replicate the styling in the Figma prototype.
    - [ ] Outline components and define reusable styles

- [ ] Week 12 Nov 18 \- Nov 22:   
  - [ ] Set up API interfaces and JavaScript libraries necessary for interactive features, such as map and phrase functionalities.
  - [ ] Implement the functionality for selecting countries on the map.
  - [ ] Develop the search functionality on the Phrases page,

- [ ] Week 13 Nov 25 \- Nov 29:  
  - [ ] Finalize the filter functionality on the Phrases page, enabling users to refine their searches by country, theme, or tags.
  - [ ] C Integrate audio functionality with Text-to-Speech API for phrase pronunciation
  - [ ] Thanksgiving
    - [ ] buffer for catching up or refining previously completed tasks.

- [ ] Week 14 Dec 2 \- Dec 6:  
  - [ ] Complete styling for tablet breakpoints.
  - [ ] Perform comprehensive testing for responsiveness and semantic structure, addressing any accessibility issues.
  - [ ] FP4 due 

### *Libraries and Other Components*

List the JS libraries and other components (if applicable) that you plan to use: 
* Leaflet.js ([https://leafletjs.com/]) or ([https://developers.arcgis.com/rest/]) for map interaction.
* Text-to-Speech API ([https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API]) for pronouncing words and phrases.
* Lunr.js ([https://lunrjs.com/]) for search functionality across regions and languages.
* Anime.js ([https://animejs.com/]) or GSAP ([https://greensock.com/gsap/]) for smooth animations whenusers interact with elements, like hovering over countries on the map, displaying card flip animations.

## Generative AI Use Plan

Outline how you plan to use Generative AI tools to aid in the implementation (\~300 words).

### *Tool Use*

 What would you use? Edit the list given your plan. For each tool, explain briefly on what do you expect Generative AI to help you with and what might it not be able to help you with.

* ChatGPT  
  * I will use it for debugging and troubleshooting because it can help me quickly identify errors in my code, suggest potential fixes, and offer clarifications on syntax issues. This will save time that would otherwise be spent sifting through code or error messages, allowing me to focus on higher-level functionality and design improvements. I may use ChatGPT for guidance on general coding best practices, refining user interface interactions, or structuring complex algorithms more efficiently. 
  * I will not use it for the beginning stages of writing the code because it might not grasp the specific requirements of the project. I also want to ensure I understand the code’s logic and how each function affects website behavior on a deeper level.

* Perplexity 
  * I will use Perplexity as a supplementary resource for debugging and technical queries, because it can pull information from various sources to provide broader explanations.
  * I will not use it for the beginning stages of writing the code because I want to ensure I understand the code’s logic. 

### *Responsible Use*

How would you use Generative AI responsibly? 

I will be proactive in following my set milestones and making use of available office hours. If there are times when Generative AI assists with a specific piece of functionality or code structure, I will be transparent about it. For example, I will leave a comment in my code noting where I used ChatGPT to implement a function (e.g., "used ChatGPT to xxxx for this function"). 

---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1: Creole Language Map*

![Creole Language Map](images/Interactive%20Map%20Lo-Fi%20Prototype.png)

Add a few sentences about your design. Briefly state the motivation of each project idea:

* **What is the basic idea of your final project?**  
The project uses an engaging, interactive map to highlight the spread of Caribbean Creole dialects (e.g., Haitian Creole, Papiamento, Jamaican Patois) and trace their roots back to African languages like Yoruba and Twi, illustrating the linguistic connections across the Afro-Caribbean diaspora.

* **How do you plan to make your design interactive and engaging?**  
Users can hover over the map and on a specific country to learn about it. They can also interact with clickable language cards on the map, flipping each to reveal the English translation of Caribbean phrases derived from African languages. This flip interaction adds a sense of exploration, making the experience more immersive.

* **How do you plan to make your design accessible?**  
The design will feature both text and audio representations of each phrase, allowing users to see and hear the language. I’ll also incorporate semantic HTML for better screen reader support, ensuring the content is accessible to users who rely on keyboard navigation.

* **What information do you specifically want to convey and include on your website?**
The site will highlight the names of Creole languages in each Caribbean country and include example phrases rooted in African languages. Additionally, it will convey the African influence in Caribbean culture by describing the regions in Africa from which each Caribbean country's linguistic and cultural roots largely originate.

### *Idea 2: Evolution of Soca*
![Evolution of Soca](images/Soca%20website%20lo-fi.png) 

![Evolution of Soca](images/Soca%20website%20lo-fi%202.png)

Add a few sentences about your design. Briefly state the motivation of each project idea:

* What is the basic idea of your final project? (1-2 sentences)  
An immersive experience to explore soca music and its evolution since its inception. Users can play selected tracks and watch as the visualizer responds dynamically to the beat, rhythm, and mood of the music.

* How do you plan to make your design interactive and engaging?  
The website will use a horizontal scroll navigation for users to explore the timeline of the genre. when the user clicks on the song timeline they can scroll along the musical staff to learn more about example songs that represent each era/sound.

* How do you plan to make your design accessible?  
I would ensure all interactive elements—like the timeline, play buttons, and scroll navigation—are accessible via keyboard. Visible focus indicators should highlight each element as users navigate. 

* What information do you specifically want to convey and include on your website?
The information on the site will include history of the genre, genre mechanics, and a gallery of what soca music looks like in context. The gallery specifically would have a list of songs from each year between 2000 and 2024, their album cover, and links to play the song on Youtube or Spotify. The visualizer would also display information about a soca song's level of bass, treble, vocals, and BPM.
…

### *Idea 3: Thrift Style Discovery*
![Thrift Style Discovery](images/Thrift%20Lo-Fi.png)

Add a few sentences about your design. Briefly state the motivation of each project idea:

* What is the basic idea of your final project?
Users can upload images of themselves trying on thrifted clothing and add notes about each piece. They can reflect on what they like or dislike, helping them track patterns in their style preferences over time and encouraging mindful fashion choices.

* How do you plan to make your design interactive and engaging? 
Users can upload images of themselves and assign pros and cons to each. Once they create an outfit card, they can edit them later on.

* How do you plan to make your design accessible?  
I will use high-contrast color combinations between text, background, and buttons to ensure readability for users with low vision or color blindness. I will also use  preset tags (such as “vintage,” “Y2K,” “neutral tones”) as well as a text entry option to lower cognitive load.  Using consistent tag language also supports better screen reader interpretation.

* What information do you specifically want to convey and include on your website?
The site will encourage users to explore their style evolution through tagging and categorizing entries (e.g., "Y2K," "vintage," "colorful") to quickly identify trends across outfits, colors, and styles. This categorization helps users develop a more personal and consistent style narrative.
…

## Feedback Summary

Summarize all the critiques you received during the lab session (\~300 words): 

Creole Language Map
* The layout of the phrases/map page was likened to a Venn diagram, which was not intended
* The card-flipping feature was praised as an excellent way to encourage user interactio as opposed to the speech bubble layout which wasn't as well received.
* Suggestions for visual adjustments included making the Caribbean map the main figure on the page and reducing the size of Africa as a thumbnail in the corner, as it's not the primary focus of exploration.
* A recommendation was made to implement hover functionality over countries, causing phrases/map buttons to appear instead of using a separate page.
* Another idea proposed highlighting related countries of origin in Africa when hovering over a Caribbean country.

An Evolution of Soca Music
* The addition of a play button was recommended to allow users to listen to music samples as they engage with the site.
* The immersive storytelling element was commended.
* A concern was raised about user guidance, specifically how to inform users that they should interact with the content horizontally.

Thrift Style Discovery Tool
* Drew comparisons to Pinterest 
* A feature allowing users to arrange clothing based on time was proposed, along with the addition of a filter function.
* An observation was made about the difficulty of describing why someone doesn't like a particular item.
* To address this, it was suggested that the app could allow users to write comments instead of trying to articulate specific dislikes.

## Feedback Digestion

Digest the feedback you got in the lab (\~300 words). Indicate which critique you will act on in your next design and why you chose to incorporate/dismiss pieces of critique.

**Creole Language Map:**

I have decided to proceed with this concept, as it generated the most enthusiasm. The suggestion for hover functionality over countries is promising. But, I will opt to display phrases/map buttons only upon clicking a country to avoid cluttering the interface with pop-ups. If time permits, I might implement a feature where related African countries are highlighted when hovering over Caribbean nations, enhancing the exploration experience.

In my next design, I will act on the map size critique - the large, detailed map of the Caribbean will occupy the majority of the screen real estate, allowing users to clearly see individual countries and territories. In one corner of the screen, likely the bottom right, there would be a smaller thumbnail map of Africa. This would serve as a reference point for the origins of various Creole languages without distracting from the main Caribbean focus. This adjustment aligns with the core idea of exploring Caribbean islands in connection to Africa without overshadowing them.

**An Evolution of Soca Music:**

I will act on the critique regarding user guidance for the horizontal scroll. Participants noted that clearer instructions are needed to encourage horizontal interaction with the content. To address this, I plan to add visual indicators, such as arrows or prompts, that explicitly instruct users to scroll sideways. By adding user guidance for the horizontal scroll, I aim to create a more intuitive experience that invites deeper exploration of the site without users feeling lost or frustrated.

**Thrift Style Discovery Tool:**

In response to the critique about articulating dislikes, I will incorporate a comment feature. This allows users to express their thoughts more freely, addressing the difficulty of explaining why certain items don’t appeal to them. By allowing for personalized feedback, the app will better cater to individual preferences and aversive responses to describing pros and cons.