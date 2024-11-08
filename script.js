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






const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

//toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
// toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});




//Modal pop-up
var myModal = new bootstrap.Modal(document.getElementById('myModal')); 
var myModalTrigger = document.getElementById('myModalTrigger'); 

myModalTrigger.addEventListener('click', function () { 
  myModal.show(); 
}); 