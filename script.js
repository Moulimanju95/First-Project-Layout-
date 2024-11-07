// Fetch products data from JSON file
fetch('product.json')
  .then(response => response.json())
  .then(data => {
    // Loop through products and render details
    data.forEach(product => {
      const productList = document.getElementById('products');
      const productHTML = `
        <div class="product">
          <h2>${product.name}</h2>  
          <img src="${product.image}" alt="${product.name}">
          <p>${product.description}</p>
          <p>Price: $${product.price}</p>
          <button class="add">ADD TO CART</button>
          <button class="buy">BUY NOW</button>
          </div>
      `;
      productList.innerHTML += productHTML;
    });
  })
  .catch(error => console.error('Error:', error));
  
 
//hamburger navbar 
  const menuToggle = document.getElementById('menu-toggle');
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  
  menuToggle.addEventListener('change', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
  });  

  
//Modal pop-up
var myModal = new bootstrap.Modal(document.getElementById('myModal')); 
var myModalTrigger = document.getElementById('myModalTrigger'); 

myModalTrigger.addEventListener('click', function () { 
  myModal.show(); 
}); 

