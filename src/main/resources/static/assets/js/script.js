'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);
/*
* Products filter
* */
const radioButtons = document.querySelectorAll('input[name="animal"]');
radioButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (this.value === "") {
      radioButtons.forEach(btn => btn.checked = btn === this);
    }
  });
});

document.getElementById('filter-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const category = document.getElementById('category').value;
  const products = document.querySelectorAll('.grid-list li');
  const animal = document.querySelector('input[name="animal"]:checked')?.value;

  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');
    const productAnimal = product.getAttribute('data-animal');

    if (
        (category === '' || productCategory === category) &&
        (!animal || productAnimal === animal)
    ) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
