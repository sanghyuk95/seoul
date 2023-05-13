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
