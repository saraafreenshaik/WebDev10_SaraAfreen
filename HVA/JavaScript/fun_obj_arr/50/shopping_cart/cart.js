// Product Class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // CartItem Class
  class CartItem {
    constructor(product, quantity = 1) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // ShoppingCart Class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push(new CartItem(product));
      }
      this.updateCart();
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
      this.updateCart();
    }
  
    clearCart() {
      this.items = [];
      this.updateCart();
    }
  
    getTotalAmount() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    updateCart() {
      const cartItems = document.getElementById("cartItems");
      const totalAmount = document.getElementById("totalAmount");
  
      cartItems.innerHTML = '';
      this.items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${item.product.name} (x${item.quantity}) - $${item.getTotalPrice().toFixed(2)}
          <button onclick="removeFromCart(${item.product.id})">Remove</button>
        `;
        cartItems.appendChild(li);
      });
  
      totalAmount.textContent = this.getTotalAmount().toFixed(2);
    }
  }
  
  // Initialize Products
  let products = [
    new Product(1, "Apple", 1.5),
    new Product(2, "Banana", 0.8),
    new Product(3, "Orange", 1.2),
    new Product(4, "Mango", 2.0)
  ];
  
  // Initialize Shopping Cart
  const cart = new ShoppingCart();
  
  // Display Products
  function displayProducts() {
    const productsDiv = document.getElementById("products");
    productsDiv.innerHTML = ''; // Clear previous content
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsDiv.appendChild(productDiv);
    });
  }
  
  // Add to Cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.addItem(product);
  }
  
  // Remove from Cart
  function removeFromCart(productId) {
    cart.removeItem(productId);
  }
  
  // Clear Cart
  function clearCart() {
    cart.clearCart();
  }
  
  // Add New Product
  function addNewProduct() {
    const productName = document.getElementById("newProductName").value.trim();
    const productPrice = parseFloat(document.getElementById("newProductPrice").value.trim());
  
    if (productName === '' || isNaN(productPrice) || productPrice <= 0) {
      alert("Please enter a valid product name and price.");
      return;
    }
  
    // Generate a new unique ID for the product
    const newProductId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const newProduct = new Product(newProductId, productName, productPrice);
    
    // Add the new product to the products array
    products.push(newProduct);
    
    // Clear the input fields
    document.getElementById("newProductName").value = '';
    document.getElementById("newProductPrice").value = '';
  
    // Update the product display
    displayProducts();
  }
  
  // Initialize the display of products
  displayProducts();
  