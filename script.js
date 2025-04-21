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

