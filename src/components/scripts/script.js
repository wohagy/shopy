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

$(".brand-slider").slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

$(".news-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  responsive: [
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});

jQuery(document).ready(function () {
  var btn = $("#btn_home_id");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});

jQuery(document).ready(function () {
  var small_menu_close = $("#small_menu_close");
  var big_menu_btn = $("#big_menu_btn");
  small_menu_close.on("click", function (e) {
    e.preventDefault();
    big_menu_btn.removeClass("show");
  });
});
