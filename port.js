window.addEventListener("load", function () {
  // Set delay in milliseconds (e.g., 3000ms = 3 seconds)
  const delay = 3500;

  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
    document.body.classList.add("loaded");
  }, delay);
});
