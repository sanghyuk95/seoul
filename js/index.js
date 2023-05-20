
// ad컨트롤
const $ad = document.querySelector(".ad");
const $colseBtn = document.querySelector(".close-btn");
const $wrap = document.querySelector(".wrap");

$colseBtn.addEventListener("click", (e) => {
  $ad.classList.add("active");
  $wrap.classList.add("active");
  setTimeout(() => {
    $ad.style.display = "none";
    $wrap.classList.remove("active");
  }, 500);
});

// 배너스와이퍼
const swiper = new Swiper(".mySwiper", {
  direcyion: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-control-pre",
    nextEl: ".swiper-control-next",
  },
  pagination: {
    el: ".swiper-control-page",
    type: "fraction",
  },
});

// 배너스와이퍼 컨트롤
const $slidePlay = document.querySelector(".swiper-control-play");

$slidePlay.addEventListener("click", () => {
  $slidePlay.classList.toggle("active");
  if ($slidePlay.classList.contains("active")) {
    swiper.autoplay.pause();
  } else {
    swiper.autoplay.resume();
  }
});

const $bannerBtnUp = document.querySelector(".banner-left-btn-up");
const $bannerBtnDown = document.querySelector(".banner-left-btn-down");

swiper.on("slideChange", () => {
  $bannerBtnUp.classList.toggle("active", swiper.realIndex < 3);
  $bannerBtnDown.classList.toggle("active", swiper.realIndex > 2);
});

// 이밴트 스와이퍼
const eventSwiper = new Swiper(".mySwiper2", {
  loop: true,
  direcyion: "horizontal",
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".event-control-page",
    type: "fraction",
  },
  navigation: {
    prevEl: ".event-control-pre",
    nextEl: ".event-control-next",
  },
});

// 이벤트 스와이퍼 컨트롤
const $eventPlay = document.querySelector(".event-control-play");

$eventPlay.addEventListener("click", () => {
  $eventPlay.classList.toggle("active");
  if ($eventPlay.classList.contains("active")) {
    eventSwiper.autoplay.pause();
  } else {
    eventSwiper.autoplay.resume();
  }
});
