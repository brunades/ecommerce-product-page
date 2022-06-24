// Image scroll
var imgs_xl = document.querySelectorAll('#current');
const carousel_prods = document.querySelectorAll('.carousel .product');
const lightbox_prods = document.querySelectorAll('.lightbox .product');

carousel_prods.forEach(prod => prod.addEventListener('click', img_scroll));
lightbox_prods.forEach(prod => prod.addEventListener('click', img_scroll_lightbox));

function img_scroll(e) {
  let img_sm_class = e.target.classList;
     if (document.querySelectorAll('.product.active').length > 0){
       document.querySelectorAll('.product.active').forEach(prod => prod.classList.remove('active'))
     }
     document.querySelectorAll(`.${img_sm_class}`).forEach(prod => prod.parentElement.classList.add('active'));
     imgs_xl.forEach(img => img.src = `./img/image-${img_sm_class}.jpg`);
}

function img_scroll_lightbox(e) {
  let img_sm_class = e.target.classList;
     if (document.querySelector('.lightbox .active')){
       document.querySelector('.lightbox .active').classList.remove('active')
     }
     document.querySelector(`.lightbox .${img_sm_class}`).parentElement.classList.add('active');
     imgs_xl[0].src = `./img/image-${img_sm_class}.jpg`;
}

// Lightbox
imgs_xl[1].addEventListener('click', toggle_lightbox);

var close_icon = document.querySelector('#i-close');
close_icon.addEventListener('mouseover', close_icon_orange);
close_icon.addEventListener('mouseleave', close_icon_white);
close_icon.addEventListener('click', toggle_lightbox);

function close_icon_orange () {
  document.querySelector('.icon-close').querySelector('img').src = './img/icon-close-orange.svg';
}

function close_icon_white () {
  document.querySelector('.icon-close').querySelector('img').src = './img/icon-close.svg';
}

function toggle_lightbox () {
  document.querySelector('.lightbox').classList.toggle('disabled');
}

//Lightbox arrows scroll
var prev_icon = document.querySelector('#i-prev');
var next_icon = document.querySelector('#i-next');
const activeImgs = document.querySelectorAll('.lightbox .active');
prev_icon.parentElement.addEventListener('mouseover', prev_icon_orange);
prev_icon.parentElement.addEventListener('mouseleave', prev_icon_white);
prev_icon.parentElement.addEventListener('click', prev_image);
next_icon.parentElement.addEventListener('mouseover', next_icon_orange);
next_icon.parentElement.addEventListener('mouseleave', next_icon_white);
next_icon.parentElement.addEventListener('click', next_image);

function prev_icon_orange () {
  prev_icon.src = './img/icon-previous-orange.svg'
}

function prev_icon_white () {
  prev_icon.src = './img/icon-previous.svg'
}

function next_icon_orange () {
  next_icon.src = './img/icon-next-orange.svg'
}

function next_icon_white () {
  next_icon.src = './img/icon-next.svg'
}

function next_image () {
  let activeImgs = document.querySelectorAll('.lightbox .active');
  if (activeImgs[0].nextElementSibling){
    activeImgs[0].nextElementSibling.classList.add('active')
    activeImgs[0].classList.remove('active')
  }else{
    activeImgs[0].classList.remove('active')
    document.querySelector('.lightbox .img-sm').firstElementChild.classList.add('active')
  }
  let prod_class = document.querySelector('.lightbox .active').firstElementChild.classList
  imgs_xl[0].src = `./img/image-${prod_class}.jpg`
}

function prev_image () {
  let activeImgs = document.querySelectorAll('.lightbox .active');
  if(activeImgs[0].previousElementSibling){
    activeImgs[0].previousElementSibling.classList.add('active')
    activeImgs[0].classList.remove('active')
  }else{
    activeImgs[0].classList.remove('active')
    document.querySelector('.lightbox .img-sm').lastElementChild.classList.add('active')
  }
  let prod_class = document.querySelector('.lightbox .active').firstElementChild.classList
  imgs_xl[0].src = `./img/image-${prod_class}.jpg`
}