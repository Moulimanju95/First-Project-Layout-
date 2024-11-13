// Fetch products data from JSON file
/*  fetch('product.json')
  .then(response => response.json())
  .then(data => {
  
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
 */


// Sample product data
const products =
  [
    {
      "id": 1,
      "name": "pTron",
      "category": "Bluetooth",
      "price": 449.00,
      "image": "../website/shopping1.webp"
    },
    {
      "id": 2,
      "name": "BoAt",
      "category": "Smartwatch",
      "price": 1399.00,
      "image": "../website/shopping2.webp"
    },
    {
      "id": 3,
      "name": "Acer",
      "category": "Smartphones",
      "price": 19500.00,
      "image": "../website/shopping3.webp"
    },
    {
      "id": 4,
      "name": "Apple",
      "category": "AirPods",
      "price": 12500.00,
      "image": "../website/shopping4.webp"
    }
  ]


// Function to search products
function searchProducts(query) {
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(query.toLowerCase())
  });

  return filteredProducts;
}

// Function to display product list
function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productHTML = `
 <div class="product">
   <h2>${product.name}</h2>
   <img src="${product.image}" alt="${product.name}">
   <p>Price: $${product.price}</p>
   <button class="add">ADD TO CART</button>
   <button class="buy">BUY NOW</button>
 </div>
`;

    productList.insertAdjacentHTML("beforeend", productHTML);
  });
}

// Event listener for search button click
document.getElementById("search-btn").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.trim();

  if (query) {
    const searchResults = searchProducts(query);
    displayProducts(searchResults);
  } else {
    displayProducts(products);
  }
});

// Initialize product list
displayProducts(products);

//Modal pop-up
var myModal = new bootstrap.Modal(document.getElementById('myModal'));
var myModalTrigger = document.getElementById('myModalTrigger');

myModalTrigger.addEventListener('click', function () {
  myModal.show();
});


const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");
//toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});
// toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", e => {
  let clickedElm = e.target;

  if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
    nav.classList.remove("active");
  }
});

// Access the testimonials
let testSlide = document.querySelectorAll('.testimonial');
var counter = 0;
function switchTest(currentTest) {
  currentTest.classList.add('active');
  var testId = currentTest.getAttribute('attr');
  if (testId > counter) {
    testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = testId;
    testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
  }
  else if (testId == counter) { return; }
  else {
    testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = testId;
    testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
  }
}
// Code for auto sliding
function slideNext() {
  testSlide[counter].style.animation = 'next1 0.8s ease-in forwards';
  if (counter >= testSlide.length - 1) {
    counter = 0;
  }
  else {
    counter++;
  }
  testSlide[counter].style.animation = 'next2 0.8s ease-in forwards';
}
function autoSliding() {
  deleteInterval = setInterval(timer, 3000);
  function timer() {
    slideNext();
  }
}
autoSliding();

container.addEventListener('mouseover', pause);
function pause() {
  clearInterval(deleteInterval);
}

container.addEventListener('mouseout', autoSliding);