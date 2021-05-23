const hamburger = document.getElementById("hamburger");
const gMenu = document.getElementById("g-menu");

const menuOn = () => {
  if (hamburger.className == 'menu-off') {
    hamburger.className = 'menu-on';
    gMenu.style.top = '0';
  } else {
    hamburger.className = 'menu-off';
    gMenu.style.top = '';
  }
  
};

hamburger.addEventListener("click", menuOn);
