//Cart
const cart = document.querySelector('#i-cart');
cart.addEventListener('click', toggle_card);

function toggle_card () {
  document.querySelector('.cart-card').classList.toggle('disabled')
}

/* document.querySelector('#i-cart').addEventListener('click', function (){document.querySelector('.cart-card').classList.toggle('disabled')}) */

document.querySelector('#i-add').addEventListener('click', add_prod);
document.querySelector('#i-remove').addEventListener('click', remove_prod);
document.querySelector('.btn-cart').addEventListener('click', add_to_cart);
document.querySelector('#i-delete').addEventListener('click', remove_all);

var counter = 0;

function add_prod () {
  if (counter <= 20){
      counter++
  document.querySelector('#counter').innerHTML = counter
  } 
}

function remove_prod () {
  if (counter > 0 ) {
    counter--
    document.querySelector('#counter').innerHTML = counter
  }
}

var cart_badge_counter = 0;
const empty_cart = document.querySelector('.card-desc .empty');
const cart_prod = document.querySelector('.card-desc .total-products');
const cart_badge = document.querySelector('.nav-right .badge');

function add_to_cart () {
  let prod_num = document.querySelector('.prod-desc .prod-num');
  let total_price = document.querySelector('.desc .total-price');

  if (counter > 0) {
    //Badge counter
    cart_badge.classList.remove('disabled');
    cart_badge_counter += counter;
    cart_badge.innerHTML = cart_badge_counter;
    document.querySelector('#counter').innerHTML = 0;
    counter = 0;

    //Cart product card
    empty_cart.classList.add('disabled');
    cart_prod.classList.remove('disabled');
    prod_num.innerHTML = cart_badge_counter;
    total_price.innerHTML = `$${125 * cart_badge_counter}.00`;
  }
}

function remove_all () {
  empty_cart.classList.remove('disabled');
  cart_prod.classList.add('disabled');
  cart_badge_counter = 0;
  cart_badge.classList.add('disabled');
}