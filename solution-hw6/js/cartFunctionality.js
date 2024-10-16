// Roll class with final price calculation
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
    this.element = null;
  }

  calculateFinalPrice() {
    const glazingPrice = glazingOptions[this.glazing];
    const packSizePrice = packSizeOptions[this.size];
    return (this.basePrice + glazingPrice) * packSizePrice;
  }
}

// Retrieve and parse shopping cart from localStorage
let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
let sum = 0;

for (const roll of shoppingCart) {
  // Recreate Roll instances
  const newRoll = new Roll(roll.type, roll.glazing, roll.size, roll.basePrice);
  createElement(newRoll);
  sum += newRoll.calculateFinalPrice();
}

// Function to update the cart display
function createElement(roll) {
  const template = document.querySelector("#cart-item-template");
  const clone = template.content.cloneNode(true);
  roll.element = clone.querySelector(".item-card");

  updateElement(roll);

  const rollListElement = document.querySelector(".cart-items");
  rollListElement.prepend(roll.element);

  const btnRemove = roll.element.querySelector(".remove-btn");
  btnRemove.addEventListener("click", () => deleteCartItem(roll));
}

// Function to update HTML with roll info
function updateElement(roll) {
  const rollImageElement = roll.element.querySelector(".small-img");
  const rollNameElement = roll.element.querySelector(".product-name");
  const rollGlazingElement = roll.element.querySelector(".glazing-type");
  const rollPackSizeElement = roll.element.querySelector(".pack-size");
  const rollItemPriceElement = roll.element.querySelector(".cart-price");

  rollImageElement.src = rolls[roll.type].imageFile;
  rollNameElement.innerText = `${roll.type} Cinnamon Roll`;
  rollGlazingElement.innerText = `Glazing: ${roll.glazing}`;
  rollPackSizeElement.innerText = `Pack Size: ${roll.size}`;
  rollItemPriceElement.innerText = `$ ${roll.calculateFinalPrice().toFixed(2)}`;
}

// Function to delete roll from cart
function deleteCartItem(roll) {
  roll.element.remove();

    // Find the exact matching roll to remove
    const index = shoppingCart.findIndex(item => 
      item.type === roll.type && 
      item.glazing === roll.glazing && 
      item.size === roll.size && 
      item.basePrice === roll.basePrice
    );

  if (index > -1) {
    shoppingCart.splice(index, 1);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart)); // Save the updated cart to localStorage
    console.log("Current cart contents after saving:", shoppingCart); // Print the updated cart after saving
  }
  sum -= roll.calculateFinalPrice();
  updateTotalSum();
}

function updateTotalSum() {
  const totalPriceElement = document.querySelector(".checkout-cost");
  totalPriceElement.innerText = `$ ${sum.toFixed(2)}`;
}

updateTotalSum();
