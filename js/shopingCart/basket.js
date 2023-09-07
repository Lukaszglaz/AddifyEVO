const itemList = document.getElementById('itemList');
const totalPriceElement = document.getElementById('totalPrice');

function removeItem(index) {
  items.splice(index, 1);
  updateItemList();
  updateTotalPrice();
  saveStateToLocalStorage(); // Dodaj to wywołanie, aby zaktualizować LocalStorage
}

function updateItemList() {
  itemList.innerHTML = '';
  items.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.className = 'item';

    const linkHTML = item.link
      ? `<a href="${item.link}" >
      Click to go to the Product</a>`
      : '<p>No data.</p>';
    const quantityHTML = !isNaN(item.quantity)
      ? `<p class="product-quantity">${item.quantity}</p>`
      : '<p>No data.</p>';
    const textareaHTML = item.textarea
      ? `<p class="product-textarea">${item.textarea}</p>`
      : '<p>No data.</p>';

    itemElement.innerHTML = `
        <h3>Name Product:</h3>
        <p class="product-name">${item.name}</p>
        <h3>Price:</h3>
        <p class="product-price">${item.price} zł</p>
        <h3>Link Product:</h3>
        ${linkHTML}
        <h3>Quantity:</h3>
        ${quantityHTML}
        <h3>Additional information:</h3>
        ${textareaHTML}
        <button onclick="removeItem(${index})" class="info-btn selected">Delete Product</button>
      `;
    itemList.appendChild(itemElement);
  });
  saveStateToLocalStorage(); // Dodaj to wywołanie, aby zaktualizować LocalStorage po aktualizacji listy
}

function updateTotalPrice() {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  totalPriceElement.textContent = `Sum: ${total.toFixed(2)} zł`;
}

function saveStateToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function loadStateFromLocalStorage() {
  const savedItems = localStorage.getItem('items');
  if (savedItems) {
    items = JSON.parse(savedItems);
    updateItemList();
    updateTotalPrice();
  }
}

loadStateFromLocalStorage(); // Wywołaj tę funkcję, aby załadować dane z LocalStorage na starcie
