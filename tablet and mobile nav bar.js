  // Get references to the HTML elements
  const vvector = document.querySelector('.vvector');
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
  vvector.addEventListener('click', toggleTabmenu);

  // Add a click event listener to the .hamburger-menu element
  hamburgerMenu.addEventListener('click', toggleMenu);

  document.addEventListener('click', (event) => {
if (menu.classList.contains('show-menu') && !menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
menu.classList.remove('show-menu');
}
if (tabmenu.classList.contains('show-menu') && !tabmenu.contains(event.target) && !vvector.contains(event.target)) {
tabmenu.classList.remove('show-menu');
}
});

// Get references to the HTML elements
const vector = document.querySelectorAll('.vector');
const img = document.querySelectorAll('.img');
const textWrapper2 = document.querySelectorAll('.text-wrapper-2');



const shopIcon = document.querySelector('.shop-icon');
const MobshopIcon = document.querySelector('.mobile-icon');
const viewCartPopup = document.querySelector('.view-cart-pop-up');

// Function to show the pop-up
function showPopup() {
viewCartPopup.style.display = 'flex';
}

function MobshowPopup() {
  viewCartPopup.style.display = 'flex';
  }

// Function to close the pop-up
function closePopup(event) {
if (!viewCartPopup.contains(event.target) && event.target !== shopIcon) {
viewCartPopup.style.display = 'none';
}
}



// Function to handle the increment and decrement
function handleCount(index, increment) {
  let count = parseInt(textWrapper2[index].textContent, 10);
  
  if (increment) {
    count++;
  } else {
    if (count > 0) {
      count--;
    }
  }

  textWrapper2[index].textContent = count;
}


// Add a click event listener to the shop-icon
shopIcon.addEventListener('click', showPopup);
// Add a click event listener to the shop-icon
MobshopIcon.addEventListener('click', MobshowPopup);

// Add a click event listener to the document to close the pop-up when clicking outside
document.addEventListener('click', closePopup);

// Add click event listeners to the .vector elements
vector.forEach((element, index) => {
  element.addEventListener('click', () => {
    handleCount(index, true);
  });
});

// Add click event listeners to the .img elements
img.forEach((element, index) => {
  element.addEventListener('click', () => {
    handleCount(index, false);
  });
});