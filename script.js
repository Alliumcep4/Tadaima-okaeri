let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
      let top = sec.window.scrollY;
      let height = sec.offsetHeigth;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
      if(top => offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelectorAll('header .navbar a[href*='+id+']').classList.add('active');
        });
      };
    });
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
    });
    var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: false, // aquí lo cambiamos
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
  // También puedes ocultarlo después de la animación si quieres:
  setTimeout(() => {
    document.querySelector('.loader-container').style.display = 'none';
  }, 600); // Espera a que termine la animación de CSS
}

function fadeOut() {
  setTimeout(loader, 1000); // solo esperamos 300ms o lo que necesites
}

window.onload = fadeOut;
