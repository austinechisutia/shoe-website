let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    console.log('Clicked!');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1 ) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
// Get references to all sets
const sets = document.querySelectorAll('.row');

// Loop through each set
sets.forEach(set => {
  const images = set.querySelectorAll('.image');
  const mainImage = set.querySelector('.big-image');

  // Loop through each image in the set and add click event listener
  images.forEach(image => {
    image.addEventListener('click', () => {
      // Set the source of the clicked image as the source of the main image
      mainImage.innerHTML = '';
      const clickedImage = image.cloneNode(true);
      mainImage.appendChild(clickedImage);
    });
  });
});