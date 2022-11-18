document.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    document.querySelector(".navbar").classList.add("active");
  } else {
    document.querySelector(".navbar").classList.remove("active");
  }
});
