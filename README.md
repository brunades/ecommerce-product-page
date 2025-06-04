# Frontend Mentor - E-commerce product page solution

This is my solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). The challenge focuses on building a responsive, interactive product page with features like a lightbox gallery and cart functionality.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github repo](https://github.com/brunades/ecommerce-product-page)
- Live Site URL: [Netlify](https://ecommerce-product-page-brunades.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Sass (CSS Pre-processor)
- Flexbox
- CSS Grid
- Vanilla JavaScript
  
### What I learned

This project helped reinforce a number of important frontend skills:

```scss
// Media Query Mixins
@mixin mediaSm {
  @media screen and (max-width: 375px){
    @content;
  }
}
```
```js
function img_scroll_lightbox(e) {
  let img_sm_class = e.target.classList;
     if (document.querySelector('.lightbox .active')){
       document.querySelector('.lightbox .active').classList.remove('active')
     }
     document.querySelector(`.lightbox .${img_sm_class}`).parentElement.classList.add('active');
     imgs_xl[0].src = `./img/image-${img_sm_class}.jpg`;
}
```

### Continued development

In future projects, I want to:

- Refactor JavaScript logic using a component-based approach
- Add local storage support for cart persistence
- Improve accessibility
- Make it responsive

### Useful resources

- [Sass Basics - sass-lang.com](https://sass-lang.com/guide/) - Helped structure my SCSS files effectively
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Great reference for layout issues

## Author

- Github - [brunades](https://github.com/brunades)
- Frontend Mentor - [@brunades](https://www.frontendmentor.io/profile/brunades)

## Acknowledgments

Thanks to the Frontend Mentor community for feedback and helpful insights during this challenge.
