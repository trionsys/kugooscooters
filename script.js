const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect: "fade",
  
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

  });

let select = document.querySelector(".select");
let options = document.querySelector(".options");
let arrow = document.querySelector(".select img");
options.style.display = "none"
select.addEventListener("click", function(){
  if(options.style.display == "none"){
    options.style.display = "block"
    arrow.classList.toggle("open")
    arrow.style.transform = "rotate(180deg)"
  } else {
    options.style.display = "none"
    arrow.style.transform = "none"
    arrow.classList.toggle("close")
  }
});
