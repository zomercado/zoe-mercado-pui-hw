// GOAL: update the cinnamon roll prices based on user selection of glazing and pack sizes//

//create a dictionary (object) for the glazing and pack sizing //
const glazingOptions = {
  //each key is the name of a glazing option, and the value is the price adaptation//
  "Keep original": 0.0,
  "Sugar milk": 0.0,
  "Vanilla milk": 0.5,
  "Double chocolate": 1.5,
};

const packSizeOptions = {
  1: 1,
  3: 3,
  6: 5,
  12: 10,
};

//Use a base price for a cinnamon roll of $ 2.49.//
const basePrice = 2.49;

//Populate the options of drop-down fields with these objects (separate functions for glaze and sizing)//
function populateGlazingOptions() {
  const glazingSelect = document.getElementById("glazingOptions");

  //loop//
  // const glazing is created by the loop to refer to each key in the object during iteration.//
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

  // Compute the price in the following manner: (basePrice + glazingPrice) * packPrice. //
  const finalPrice = (basePrice + selectedGlazingPrice) * selectedPackSizePrice;

  //Update the price field on the Detail page to show the price of the current user selection.//
  document.getElementById(
    "price-detail-page"
  ).innerText = `$ ${finalPrice.toFixed(2)}`; //from Stack Overflow - convert to string and round to 2 decimals//
}

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