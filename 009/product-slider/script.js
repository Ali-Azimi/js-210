// Elements
const nextBtn = document.querySelector(".js-next-btn");
const productCard = document.querySelector(".js-product-card");
const previousBtn = document.querySelector(".js-previous-btn");
const productCardLink = document.querySelector(".js-product-link");
const productCardImage = document.querySelector(".js-product-card-image");
const productCardTitle = document.querySelector(".js-product-card-title");
const productCardPrice = document.querySelector(".js-product-card-price");
const productCardDiscountOldPrice = document.querySelector(
  ".js-product-card-discount-old-price"
);
const productCardDiscountContainer = document.querySelector(
  ".js-product-card-discount-container"
);
const productCardDiscountPercentage = document.querySelector(
  ".js-product-card-discount-percentage"
);

const PRODUCTS = window.productsListData || [];

let current = 0;

function showProduct(product) {
  if (!product) return;
  productCardTitle.innerHTML = product.title;
  productCardLink.setAttribute("href", product.url);
  productCardImage.setAttribute("src", product.image);
  productCard.setAttribute("data-product-id", product.id);
  productCardPrice.innerHTML = window.formatPrice(product.price.selling_price);
  if (product.price.discount_percent > 0) {
    productCardDiscountContainer.classList.remove("hidden");
    productCardDiscountOldPrice.innerHTML = window.formatPrice(
      product.price.main_price
    );
    productCardDiscountPercentage.innerHTML = `${window.formatPrice(
      product.price.discount_percent
    )}٪`;
  } else {
    productCardDiscountContainer.classList.add("hidden");
  }
}

function init() {
  // TODO: Complete this function
 setInterval(() => {
  const random = Math.floor(Math.random() * PRODUCTS.length);
  current = random;
  showProduct(PRODUCTS[random])
 }, 4000)
}

function nextProduct() {
  // TODO: Complete this function
  if(PRODUCTS[current+1])
  showProduct(PRODUCTS[current+1])

}

function previousProduct() {
  // TODO: Complete this function
  showProduct(PRODUCTS[current-1])

}

// Start
showProduct(PRODUCTS[PRODUCTS.length - 1]);
init();
// Navigation
nextBtn.addEventListener("click", () => nextProduct());
previousBtn.addEventListener("click", () => previousProduct());
