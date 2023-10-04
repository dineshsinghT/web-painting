// Initialize a cart object to store selected products
const cart = {};

// Function to add a product to the cart
function addToCart(productId) {
  if (cart[productId]) {
    cart[productId]++;
  } else {
    cart[productId] = 1;
  }
}

// Function to display the cart
function showCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  for (const productId in cart) {
    const product = document.getElementById(product-${productId});
    const productTitle = product.querySelector('.product-title').textContent;
    const productPrice = product.querySelector('.product-price').textContent;
    const cartItem = document.createElement('li');
    cartItem.innerHTML = ${productTitle} - ${productPrice} x ${cart[productId]};
    cartItems.appendChild(cartItem);
  }
  cartItems.style.display = 'block';
}

// Function to simulate the checkout process
function checkout() {
  alert('Checkout Successful!\n\nTotal Amount: $XXX'); // Replace XXX with the actual total amount
  // Reset the cart after checkout
  for (const productId in cart) {
    cart[productId] = 0;
  }
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
}
   
