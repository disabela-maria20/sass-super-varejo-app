$(document).ready(function () {
  $(".slide").owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });
});
$(document).ready(function () {
  $(".slide_news_lacquers").owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".slide_most_read").owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      720: {
        items: 2,
        nav: true,
      },
    },
  });
});
