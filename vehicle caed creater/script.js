document.getElementById('vehicle-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const model = document.getElementById('model').value;
    const address = document.getElementById('address').value;
    const km = document.getElementById('km').value;
    const image = document.getElementById('image').value;
  
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${image}" alt="${name}">
      <div class="card-body">
        <h3>${name}</h3>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Model:</strong> ${model}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>KM Driven:</strong> ${km}</p>
      </div>
      <div class="card-actions">
        <button class="buy">Buy Now</button>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;
  
    // Button functionality
    card.querySelector('.buy').addEventListener('click', () => {
      alert(`You chose to buy: ${name}`);
    });
  
    card.querySelector('.edit').addEventListener('click', () => {
      document.getElementById('name').value = name;
      document.getElementById('price').value = price;
      document.getElementById('model').value = model;
      document.getElementById('address').value = address;
      document.getElementById('km').value = km;
      document.getElementById('image').value = image;
      card.remove(); // Remove card so it can be updated on submit
    });
  
    card.querySelector('.delete').addEventListener('click', () => {
      card.remove();
    });
  
    document.getElementById('card-container').appendChild(card);
    document.getElementById('vehicle-form').reset();
  });