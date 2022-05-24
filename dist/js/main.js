const carousel_img = document.querySelector('.active');
const carousel_products = document.querySelectorAll('.product');
var carousel_img_xl = document.querySelector('#current');

for (let i = 0; i < carousel_products.length; i++) {
  carousel_products[i].addEventListener('click', (e) => {
    carousel_products.forEach(prod => prod.classList.remove('active'))
    carousel_products[i].classList.add('active');
    carousel_img_xl.src = `../img/image-product-${i + 1}.jpg`
  })
}
