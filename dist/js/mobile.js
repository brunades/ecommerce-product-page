//Mobile Menu Ex
document.querySelector('#hamburger').addEventListener('click', toggle_menu);
  
document.querySelector('#i-close-menu').addEventListener('click', toggle_menu);

function toggle_menu () {
  document.querySelector('#mob-menu').classList.toggle('disabled');
}