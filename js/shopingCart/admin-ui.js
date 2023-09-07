// admin-ui.js
const addItemForm = document.getElementById('addItemForm');
const itemNameInput = document.querySelector('.nameProduct input');
const itemPriceInput = document.querySelector('.costProduct input');
const itemLinkInput = document.querySelector('.linkProduct input');
const quantityProduct = document.querySelector('.quantityProduct input');
const textareaProduct = document.querySelector('.textareaProduct textarea');

let items = [];

function addItem(event) {
  event.preventDefault();

  if (!itemNameInput || !itemPriceInput || !itemLinkInput) {
    console.error('Some form fields are missing.');
    return;
  }

  const itemName = itemNameInput.value;
  const itemPrice = parseFloat(itemPriceInput.value);
  const itemLink = itemLinkInput.value;
  const itemQuantity = parseFloat(quantityProduct.value);
  const itemTextarea = textareaProduct.value;

  items.push({
    name: itemName,
    price: itemPrice,
    link: itemLink,
    quantity: itemQuantity,
    textarea: itemTextarea,
  });
  updateItemList();
  updateTotalPrice();

  itemNameInput.value = '';
  itemPriceInput.value = '';
  itemLinkInput.value = '';
  itemQuantity.value = '';
  textareaProduct.value = '';
}

if (addItemForm) {
  addItemForm.addEventListener('submit', addItem);
}
