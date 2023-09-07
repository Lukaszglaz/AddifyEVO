function downloadDataAsText() {
  const itemsFromLocalStorage = localStorage.getItem('items');
  if (!itemsFromLocalStorage) {
    alert('There is no data to write.');
    return;
  }

  const itemListContent = JSON.parse(itemsFromLocalStorage);
  const totalPriceContent = totalPriceElement.textContent;

  const combinedContent = `
      Name Product:
      ${JSON.stringify(itemListContent, null, 2)} 
    
      Total Price:
      ${totalPriceContent}
      `;

  const blob = new Blob([combinedContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'product_list.txt';
  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
const downloadTextButton = document.getElementById('downloadTextButton');
downloadTextButton.addEventListener('click', downloadDataAsText);
