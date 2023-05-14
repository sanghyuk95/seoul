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

const swiper = new Swiper(".swiper", {
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
