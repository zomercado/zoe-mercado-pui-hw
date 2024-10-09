//GOAL: update prices based on user glazing + size selection//

//Populate (separately) the options of drop-down fields with these objects//
function populateGlazingOptions() {
  const glazingSelect = document.getElementById("glazingOptions");

  //loop//
  //const glazing is created by the loop to refer to each key in the object during iteration//
  for (const glazing in glazingOptions) {
    const option = document.createElement("option"); //using JS to create options instead of hardcoding HTML//
    option.text = glazing;
    option.value = glazingOptions[glazing]; // Set the price adaptation as the option value//
    glazingSelect.appendChild(option); //adds option to dropdown//
  }
}

function populatePackSizeOptions() {
  const packSizeSelect = document.getElementById("packSizeOptions");

  //loop//
  //const sizing is created by the loop to refer to each key in the object during iteration//

  for (const sizing in packSizeOptions) {
    const option = document.createElement("option");
    option.text = sizing;
    option.value = packSizeOptions[sizing];
    packSizeSelect.appendChild(option);
  }
}

//write a function to update pricing based on selection//
//get elements by ID//
function calculatePrice() {
  const selectedGlazingPrice = parseFloat(
    document.getElementById("glazingOptions").value
  );
  const selectedPackSizePrice = parseFloat(
    document.getElementById("packSizeOptions").value
  );

  //Compute the price: (basePrice + glazingPrice) * packPrice.//
  const finalPrice =
    (rollBasePrice + selectedGlazingPrice) * selectedPackSizePrice;

  //Update price field on Detail page to show price of current user selection//
  document.getElementById(
    "price-detail-page"
  ).innerText = `$ ${finalPrice.toFixed(2)}`; //Stack Overflow - round 2 decimals and convert to string//
}

//HW 4 begins//

//Parse the URL parameter and store the current roll type as a variable//
const queryString = window.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
console.log(rollType);

//Access the roll data from the rolls object (name, price, image path)//

const selectedRoll = rolls[rollType];
const rollBasePrice = selectedRoll.basePrice;
const imageFile = selectedRoll.imageFile;

//The Heading should be <Type> Cinnamon Roll//

document.getElementById("roll-heading").innerText = `${rollType} Cinnamon Roll`;
document.getElementById("detail-roll-image").src = `${imageFile}`;

document
  .getElementById("glazingOptions")
  .addEventListener("change", calculatePrice);
document
  .getElementById("packSizeOptions")
  .addEventListener("change", calculatePrice);

//call functions!//
populateGlazingOptions();
populatePackSizeOptions();
calculatePrice();

//add to cart function//
//create an empty cart array//
let cart = [];
function addToCart() {
  const selectedGlazingValue = document.getElementById("glazingOptions").value;
  const selectedPackSizeValue =
    document.getElementById("packSizeOptions").value;

  //so that the console.log prints the key instead of the value - link from StackOverflow below//
  //https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value//
  const selectedGlazing = Object.keys(glazingOptions).find(
    (key) => glazingOptions[key] == selectedGlazingValue
  );
  const selectedPackSize = Object.keys(packSizeOptions).find(
    (key) => packSizeOptions[key] == selectedPackSizeValue
  );

  //cart class//
  class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
    }
  }
  // Add a new instance of Roll to the cart array to use//
  const roll = new Roll(
    rollType,
    selectedGlazing,
    selectedPackSize,
    rollBasePrice
  );
  cart.push(roll); //add Roll instance to the array cart//
  console.log(cart); //print cart to console//
}

//event listener//
document.getElementById("addToCartBtn").addEventListener("click", addToCart);
console.log("Roll Type: ", rollType);
console.log("Selected Roll: ", selectedRoll);
