/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

const sections = document.getElementsByTagName('section');
const menu = document.getElementById('navbar__list');
const menuItems = menu.getElementsByTagName('li');
const menuHeight = menu.offsetHeight;

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

/**
 * @desc building the navigation menu by taking the names from the data-nav classes
*/

for (const section of sections) {
  const curSection = section;
  const curSectionId = curSection.id;
  const newMenuItem = document.createElement('li');
  newMenuItem.setAttribute('class', 'menu__link');
  newMenuItem.classList.add(curSectionId);
  newMenuItem.textContent = curSection.dataset.nav;
  // Scroll to section on link click
  newMenuItem.addEventListener('click', function() {
    window.scrollBy(
        {
          top: section.getBoundingClientRect().top - menuHeight,
          left: 0,
          behavior: 'smooth',
        },
    );
  });
  menu.appendChild(newMenuItem);
}

/**
 * End Main Functions
 * Begin Events
 *
*/


/**
 * @desc adding a scroll EventListener to check the position and marking the correct section and nav item as active and remove the active status from the others.
 */

document.addEventListener('scroll', function() {

  for (const section of sections) {
    // Add class 'active' to section when near top of viewport
    if (section.getBoundingClientRect().top <= menuHeight && section.getBoundingClientRect().bottom > menuHeight) {
      section.classList.add('your-active-class');
      document.querySelector("."+section.id).classList.add("menu__link__active");
    } else {
      section.classList.remove('your-active-class');
      document.querySelector("."+section.id).classList.remove("menu__link__active");
    }
  }

},
);
