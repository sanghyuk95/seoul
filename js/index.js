const $ad = document.querySelector(".ad");
const $colseBtn = document.querySelector(".close-btn");

$colseBtn.addEventListener("click", (e) => {
  $ad.classList.add("active");
  setTimeout(() => {
    $ad.style.display = "none";
  }, 500);
});
