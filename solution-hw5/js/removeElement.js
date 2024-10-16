class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
    this.element = null;
  }
  calculateFinalPrice() {
    // Grab the selected glazing and pack size price adaptation
    const glazingPrice = glazingOptions[this.glazing];
    const packSizePrice = packSizeOptions[this.size];

    // Calculate final price using the formula: (basePrice + glazingPrice) * packSizePrice
    return (Math.round(
      (this.basePrice + glazingPrice) * packSizePrice * 100
    ) / 100);
  }

}
let sum = 0;
let shoppingCart = [];

function addNewRoll(rollType, rollGlazing, packSize,basePrice) {

  const roll = new Roll(rollType, rollGlazing, packSize,basePrice);
  // new roll object
  
  sum += roll.calculateFinalPrice();
  // Add the roll object to our roll Set, which keeps track of all
  // the rolls in our application.
  shoppingCart.push(roll);
  updateTotalSum();
  return roll;
}

function updateTotalSum() {
  const totalPriceElement = document.querySelector(".checkout-cost");
  totalPriceElement.innerText = `$ ${sum.toFixed(2)}`;
}

function createElement(roll) {
  // make a clone of the shopping cart item template
  const template = document.querySelector("#cart-item-template");
  const clone = template.content.cloneNode(true);

  // connect this clone to our roll.element
  // from this point we only need to refer to roll.element
  roll.element = clone.querySelector(".item-card");

  // populate the roll clone with the actual roll content
  updateElement(roll);

  // add the roll clone to the DOM
  // find the roll parent and add our roll as its child
  const rollListElement = document.querySelector(".cart-items");
  rollListElement.prepend(roll.element);

  const btnRemove = roll.element.querySelector(".remove-btn");
  console.log(btnRemove);
  btnRemove.addEventListener("click", () => {
    deleteCartItem(roll);
  });
}

function updateElement(roll) {
  // get the HTML elements that need updating
  const rollImageElement = roll.element.querySelector(".small-img");
  const rollNameElement = roll.element.querySelector(".product-name");
  const rollGlazingElement = roll.element.querySelector(".glazing-type");
  const rollPackSizeElement = roll.element.querySelector(".pack-size");
  const rollItemPriceElement = roll.element.querySelector(".cart-price");
  
  // copy our roll content over to the corresponding HTML elements

  rollImageElement.src = rolls[roll.type].imageFile;
  rollNameElement.innerText = `${roll.type} Cinnamon Roll`;
  rollGlazingElement.innerText = `Glazing: ${roll.glazing}`;
  rollPackSizeElement.innerText = `Pack Size: ${roll.size}`;
  console.log(roll.calculateFinalPrice())
  rollItemPriceElement.innerText = `$ ${roll.calculateFinalPrice().toFixed(2)}`;
}

function deleteCartItem(roll) {
  // remove the roll DOM object from the UI
  roll.element.remove();

  // Find the index of the roll to be removed
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

  shoppingCart.pop(roll);
  sum -= roll.calculateFinalPrice();
  updateElement(roll);
  updateTotalSum();
}

const appleRoll = addNewRoll("Apple", "Keep original", 3, 3.49);
const raisinRoll = addNewRoll("Raisin", "Sugar milk", 3, 2.99);
const walnutRoll = addNewRoll("Walnut", "Vanilla milk", 12, 3.49);
const originalRoll = addNewRoll("Original", "Sugar milk", 1, 2.49);

for (const roll of shoppingCart) {
  console.log("Processing roll:", roll);
  createElement(roll);

  updateTotalSum();
}