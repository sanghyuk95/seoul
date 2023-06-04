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

// 코로나 확진자수 api
const $corona = document.querySelector(".corona");
fetch(
  "https://api.corona-19.kr/korea/?serviceKey=kszC1q9X3u6exJ48ycdDPvF7LIYl2fQjE"
)
  .then((res) => res.json())
  .then((data) => {
    let count = data.seoul.incDec;
    $corona.textContent = count.toLocaleString("ko-KR");
  });

// 롤링배너
if (window.innerWidth < 1024) {
  function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    console.log(firstElement);
    parentSelector.insertAdjacentHTML("beforeend", clone);
    parentSelector.insertAdjacentHTML("beforeend", clone);
    parentSelector.insertAdjacentHTML("beforeend", clone);

    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }
}

//after window is completed load
//1 class selector for marquee
//2 marquee speed 0.2
window.addEventListener("load", Marquee(".part-list", 0.2));

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
