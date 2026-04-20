/* ============================================
   LUXURY SCENTS — Main Application JS
   ============================================ */

const WHATSAPP = "2349154428230";

// ============ PRODUCT DATA ============
const PRODUCTS = [
  {
    id: 1,
    name: "Asad Bourbon",
    brand: "Asad",
    category: "asad",
    price: 25000,
    description: "Rich, warm bourbon accord with smooth oakwood base",
    notes: ["Bourbon", "Oakwood", "Vanilla", "Musk"],
    images: [
      "Luxury-scents-thumbnails/Asad-Bourbon.jfif",
      "Luxury-scents-thumbnails/Bourbon (1).jfif",
      "Luxury-scents-thumbnails/Bourbon 3.jfif"
    ],
    badge: null
  },
  {
    id: 2,
    name: "Asad Elixir",
    brand: "Asad",
    category: "asad",
    price: 30000,
    description: "Intense oriental elixir, deeply seductive",
    notes: ["Oud", "Amber", "Sandalwood", "Spice"],
    images: [
      "Luxury-scents-thumbnails/Asad-Elixir.jfif",
      "Luxury-scents-thumbnails/Asad Elixir 2.jfif",
      "Luxury-scents-thumbnails/Asad Elixir 3.jfif"
    ],
    badge: null
  },
  {
    id: 3,
    name: "Oud Mood",
    brand: "Lattafa",
    category: "lattafa",
    price: 18500,
    description: "Classic Arabian oud with a modern signature",
    notes: ["Oud", "Rose", "Saffron", "Patchouli"],
    images: [
      "Luxury-scents-thumbnails/Oud_Mood.jfif",
      "Luxury-scents-thumbnails/Oud Mood 1.webp",
      "Luxury-scents-thumbnails/Oud Mood 2.jfif"
    ],
    badge: null
  },
  {
    id: 4,
    name: "Fahkar Gold",
    brand: "Fahkar",
    category: "fahkar",
    price: 40000,
    description: "Opulent gold edition — bold and commanding",
    notes: ["Saffron", "Oud", "Amber", "Musk"],
    images: [
      "Luxury-scents-thumbnails/Fahkar Gold.jpg",
      "Luxury-scents-thumbnails/Fahkar Gold 1.jfif",
      "Luxury-scents-thumbnails/Fahkar Gold 2.jfif"
    ],
    badge: "Best Seller"
  },
  {
    id: 5,
    name: "Fahkar Black",
    brand: "Fahkar",
    category: "fahkar",
    price: 30000,
    description: "Dark and mysterious, perfect for evening wear",
    notes: ["Black Oud", "Vetiver", "Cedar", "Leather"],
    images: [
      "Luxury-scents-thumbnails/Fahkarformen2.webp",
      "Luxury-scents-thumbnails/Fahkar Black 3.jfif",
      "Luxury-scents-thumbnails/Fahkar Black 4.jfif"
    ],
    badge: null
  },
  {
    id: 6,
    name: "Fahkar Silver",
    brand: "Fahkar",
    category: "fahkar",
    price: 30000,
    description: "Fresh and refined silver accord, timeless elegance",
    notes: ["Bergamot", "Iris", "Musk", "Cedarwood"],
    images: [
      "Luxury-scents-thumbnails/Fahkar Silver.jfif",
      "Luxury-scents-thumbnails/Fahkar Silver 2.jfif",
      "Luxury-scents-thumbnails/Fahkar Silver 3.jfif"
    ],
    badge: null
  },
  {
    id: 7,
    name: "Lattafa Khamrah",
    brand: "Lattafa",
    category: "lattafa",
    price: 45000,
    description: "An intoxicating masterpiece of the Lattafa house",
    notes: ["Cognac", "Praline", "Oud", "Vanilla"],
    images: [
      "Luxury-scents-thumbnails/Lattafa Khamrah.webp",
      "Luxury-scents-thumbnails/Lattafa Khamrah 3.jfif",
      "Luxury-scents-thumbnails/Lattafa Khamrah 4.jfif"
    ],
    badge: "New In"
  },
  {
    id: 8,
    name: "Afnan 9pm EDP",
    brand: "Afnan",
    category: "afnan",
    price: 55000,
    description: "The night owl's signature — magnetic and addictive",
    notes: ["Cinnamon", "Apple", "Jasmine", "Vetiver"],
    images: [
      "Luxury-scents-thumbnails/Afnan 9pm EDP.avif",
      "Luxury-scents-thumbnails/AFNAN9PmForMenEDP100ML.webp",
      "Luxury-scents-thumbnails/Afnan 9pm EDP 1.avif"
    ],
    badge: null
  },
  {
    id: 9,
    name: "Afnan 9pm Elixir",
    brand: "Afnan",
    category: "afnan",
    price: 60000,
    description: "An elixir of pure seduction, rich and lingering",
    notes: ["Rum", "Tobacco", "Oud", "Sandalwood"],
    images: [
      "Luxury-scents-thumbnails/Afnan 9pm Elixir.jfif",
      "Luxury-scents-thumbnails/Afnan Elixir 1.avif",
      "Luxury-scents-thumbnails/Afnan 9pm Elixir 3.jfif"
    ],
    badge: null
  },
  {
    id: 10,
    name: "Afnan 9pm Rebel",
    brand: "Afnan",
    category: "afnan",
    price: 70000,
    description: "Bold rebellion in a bottle — for those who dare",
    notes: ["Juniper", "Iris", "Ambroxan", "Musks"],
    images: [
      "Luxury-scents-thumbnails/Afnan 9pm Rebel.avif",
      "Luxury-scents-thumbnails/Afnan 9pm Rebel 1.avif",
      "Luxury-scents-thumbnails/Afnan 9pm Rebel 2.jfif"
    ],
    badge: "Premium"
  }
];

// ============ CART STATE ============
let cart = [];
let sliderIntervals = {};

// ============ FORMAT PRICE ============
function formatPrice(n) {
  return "₦" + Number(n).toLocaleString("en-NG");
}

// ============ NAVBAR SCROLL ============
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

// ============ MOBILE NAV ============
function toggleMobileNav() {
  document.getElementById("mobileNav").classList.toggle("open");
}

// ============ SCROLL TO PRODUCTS ============
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// ============ RENDER PRODUCTS ============
function renderProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  filtered.forEach(product => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });

  // Start sliders after render
  filtered.forEach(product => {
    if (product.images.length > 1) {
      startSlider(product.id);
    }
  });
}

function createProductCard(product) {
  const div = document.createElement("div");
  div.className = "product-card";
  div.dataset.category = product.category;
  div.dataset.id = product.id;

  const noteTagsHTML = product.notes
    .map(n => `<span class="note-tag">${n}</span>`)
    .join("");

  const badgeHTML = product.badge
    ? `<span class="product-badge">${product.badge}</span>`
    : "";

  const imgSrc = product.images[0];
  const dots = product.images.map((_, i) =>
    `<span class="dot${i === 0 ? " active" : ""}"></span>`
  ).join("");

  div.innerHTML = `
    <div class="product-img-wrap">
      <img src="${imgSrc}" alt="${product.name}" id="img-${product.id}" loading="lazy">
      ${badgeHTML}
      ${product.images.length > 1 ? `<div class="product-slider-dots" id="dots-${product.id}">${dots}</div>` : ""}
    </div>
    <div class="product-info">
      <p class="product-brand">${product.brand}</p>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-notes">${product.description}</p>
      <div class="product-note-tags">${noteTagsHTML}</div>
      <div class="product-footer">
        <div class="product-price">${formatPrice(product.price)}</div>
        <button
          class="add-to-cart-btn"
          id="btn-${product.id}"
          onclick="addToCart(${product.id})"
        >Add to Cart</button>
      </div>
    </div>
  `;

  return div;
}

// ============ IMAGE SLIDER ============
function startSlider(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || product.images.length < 2) return;

  let current = 0;

  if (sliderIntervals[productId]) {
    clearInterval(sliderIntervals[productId]);
  }

  sliderIntervals[productId] = setInterval(() => {
    const img = document.getElementById(`img-${productId}`);
    const dotsContainer = document.getElementById(`dots-${productId}`);
    if (!img) { clearInterval(sliderIntervals[productId]); return; }

    current = (current + 1) % product.images.length;
    img.style.opacity = "0";
    img.style.transition = "opacity 0.4s ease";

    setTimeout(() => {
      img.src = product.images[current];
      img.style.opacity = "1";
    }, 400);

    if (dotsContainer) {
      dotsContainer.querySelectorAll(".dot").forEach((d, i) => {
        d.classList.toggle("active", i === current);
      });
    }
  }, 3500);
}

// ============ FILTER ============
function filterProducts(category, btn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  // Clear old sliders
  Object.values(sliderIntervals).forEach(clearInterval);
  sliderIntervals = {};

  renderProducts(category);
}

// ============ CART TOGGLE ============
function toggleCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  drawer.classList.toggle("open");
  overlay.classList.toggle("open");
  document.body.style.overflow = drawer.classList.contains("open") ? "hidden" : "";
}

// ============ ADD TO CART ============
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  cart.push({ ...product, cartId: Date.now() + Math.random() });
  updateCartUI();

  // Button feedback
  const btn = document.getElementById(`btn-${productId}`);
  if (btn) {
    btn.textContent = "Added ✓";
    btn.classList.add("added");
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.classList.remove("added");
      btn.disabled = false;
    }, 1800);
  }

  // Open cart drawer
  setTimeout(() => {
    const drawer = document.getElementById("cartDrawer");
    if (!drawer.classList.contains("open")) toggleCart();
  }, 300);
}

// ============ REMOVE FROM CART ============
function removeFromCart(cartId) {
  cart = cart.filter(item => item.cartId !== cartId);
  updateCartUI();
}

// ============ UPDATE CART UI ============
function updateCartUI() {
  const count = cart.length;
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const cartEmpty = document.getElementById("cartEmpty");
  const cartFooter = document.getElementById("cartFooter");
  const cartTotal = document.getElementById("cartTotal");

  // Badge
  cartCount.textContent = count;
  cartCount.classList.toggle("visible", count > 0);

  // Items
  if (count === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty" id="cartEmpty">
        <p>Your cart is empty.</p>
        <p class="cart-empty-sub">Add a fragrance to begin.</p>
      </div>`;
    cartFooter.style.display = "none";
    return;
  }

  cartFooter.style.display = "block";

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img-placeholder">🧴</div>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${item.cartId})">✕</button>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
  cartTotal.textContent = formatPrice(total);
}

// ============ CHECKOUT ============
function checkout() {
  if (cart.length === 0) return;

  let message = "Hello! I'd like to order:\n\n";
  cart.forEach(item => {
    message += `• ${item.name} — ${formatPrice(item.price)}\n`;
  });
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
  message += `\nTotal: ${formatPrice(total)}\n\nPlease confirm availability and delivery details. Thank you!`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
}

// ============ CONTACT FORM ============
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById("cName").value.trim();
  const phone = document.getElementById("cPhone").value.trim();
  const msg = document.getElementById("cMessage").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!name || !phone) {
    feedback.textContent = "Please fill in your name and phone number.";
    feedback.className = "form-feedback error";
    return;
  }
  if (phone.replace(/\D/g, "").length < 10) {
    feedback.textContent = "Please enter a valid phone number.";
    feedback.className = "form-feedback error";
    return;
  }

  // Send via WhatsApp
  let waMsg = `Hello, my name is ${name} (${phone}).`;
  if (msg) waMsg += `\n\n${msg}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}`, "_blank");

  feedback.textContent = "Message sent! We'll reply within 24 hours.";
  feedback.className = "form-feedback success";
  document.getElementById("contactForm").reset();
}

// ============ INIT ============
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
