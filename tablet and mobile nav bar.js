  // Get references to the HTML elements
  const vector = document.querySelector('.vector');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const tabmenu = document.querySelector('#tabmenu');
  const menu = document.querySelector('.menu');

  // Function to toggle the visibility of the .tabmenu
  function toggleTabmenu() {
      tabmenu.classList.toggle('show-menu');
  }

  // Function to toggle the visibility of the .menu
  function toggleMenu() {
      menu.classList.toggle('show-menu');
  }         

  // Add a click event listener to the .vector element
  vector.addEventListener('click', toggleTabmenu);

  // Add a click event listener to the .hamburger-menu element
  hamburgerMenu.addEventListener('click', toggleMenu);

  document.addEventListener('click', (event) => {
if (menu.classList.contains('show-menu') && !menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
menu.classList.remove('show-menu');
}
if (tabmenu.classList.contains('show-menu') && !tabmenu.contains(event.target) && !vector.contains(event.target)) {
tabmenu.classList.remove('show-menu');
}
});