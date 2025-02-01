function toggleMenu() {
  var menu = document.getElementById('navbarMenu');
  var menuIcon = document.querySelector('.menu-icon');
  var closeIcon = document.querySelector('.close-icon');

  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
}

const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx) => {
  item.addEventListener('click', function () {
    let click = 0
    ratingValue.value = idx + 1

    allStar.forEach(i => {
      i.classList.replace('bxs-star', 'bx-star')
      i.classList.remove('active')
    })
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace('bx-star', 'bxs-star')
        allStar[i].classList.add('active')
      } else {
        allStar[i].style.setProperty('--i', click)
        click++
      }
    }
  })
})



let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');

// Function to show the slide at index
function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Initialize dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Auto-slide every 1 second
setInterval(nextSlide, 1500);

// Initial slide
showSlide(currentIndex);

// Event listeners for buttons
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
