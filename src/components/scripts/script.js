var open_btn = document.getElementById("open_btn");
var search_panel = document.getElementById("search_panel");
var close_btn = document.getElementById("close_btn");
var close_cart = document.getElementById("cart-close");
var cart_block = document.getElementById("cart-block");
var open_cart = document.getElementById("cart-open");

open_btn.onclick = function () {
  this.style.display = "none";
  search_panel.style.display = "flex";
};

close_btn.onclick = function () {
  search_panel.style.display = "none";
  open_btn.style.display = "block";
};

close_cart.onclick = function () {
  cart_block.style.display = "none";
};

open_cart.onclick = function () {
  cart_block.style.display = "block";
};
