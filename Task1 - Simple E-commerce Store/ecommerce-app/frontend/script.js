const productContainer = document.getElementById("products");

// Initial fetch and render
fetch("/api/products")
  .then(res => res.json())
  .then(products => {
    products.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${p.image || '#'}" alt="${p.name}" width="100%" height="150px" />
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <button onclick="addToCart('${p._id}', '${p.name}', ${p.price}, '${p.image}')">Add to Cart</button>
      `;
      productContainer.appendChild(div);
    });
  });

// Add to Cart (with image included)
function addToCart(id, name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ id, name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

// Clear localStorage
function clearStorage() {
  localStorage.clear();
  alert("Local storage cleared!");
}

// Show/hide login/logout buttons on load
window.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  const loginBtn = document.querySelector(".login-btn");
  const logoutBtn = document.querySelector(".logout-btn");

  if (loginBtn && logoutBtn) {
    if (token) {
      loginBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";
    } else {
      loginBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";
    }
  }
});

// Logout function
function logout() {
  localStorage.clear();
  alert("Logged out successfully!");
  location.reload();
}

// Search + Category filter
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
let allProducts = [];

async function fetchProducts() {
  const res = await fetch("/api/products");
  allProducts = await res.json();
  populateCategoryDropdown();
  loadProducts();
}

// Load filtered products
function loadProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(searchTerm) &&
    (selectedCategory === "All" || p.category === selectedCategory)
  );

  productContainer.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <div onclick="goToDetails('${p._id}')" style="cursor:pointer">
        <img src="${p.image}" alt="${p.name}" width="100%" height="150px" />
        <h4>${p.name}</h4>
      </div>
      <p><strong>₹${p.price}</strong></p>
      <button onclick="addToCart('${p._id}', '${p.name}', ${p.price}, '${p.image}')">Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}

// Redirect to product details
function goToDetails(id) {
  window.location.href = `product.html?id=${id}`;
}

// Populate category filter
function populateCategoryDropdown() {
  const categories = [...new Set(allProducts.map(p => p.category))];
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// Initial fetch
fetchProducts();
