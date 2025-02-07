// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	 let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    
    const display = document.getElementById('cart-list');
    display.innerHTML = "";
    cart.forEach((obj)=>{
        const li = document.createElement('li');
        li.innerHTML = `${obj.name} - $${obj.price} <button class="remove-from-cart-btn" onclick="removeFromCart(${obj.id})" data-id="${obj.id}">Remove to Cart</button>`;
        display.appendChild(li);
    }); 
}

// Add item to cart
function addToCart(productId) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const product = products.find(product => product.id===productId);
    if(product){
        cart.push(product);
        sessionStorage.setItem('cart',JSON.stringify(cart));
    }
    renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
	let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    for(let i=0;i<cart.length;i++){
        if(cart[i].id === productId){
            cart.splice(i,1);
            sessionStorage.setItem('cart',JSON.stringify(cart));
            break;
        }
    }
    renderCart();
}

// Clear cart
function clearCart() {
	sessionStorage.clear();
    renderCart();
}

// Initial render
renderProducts();
renderCart();
