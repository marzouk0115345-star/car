


// Scroll to Top
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

  // Footer animation
  let footer = document.querySelector(".footer");
  if (footer.getBoundingClientRect().top < window.innerHeight) {
    footer.classList.add("show");
  }
};

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};