window.addEventListener("scroll", (e) => {
  if (window.scrollY > 50) {
    navbar.style.height = "3rem";
    // logonav.style.height = "100%";
  } else {
    navbar.style.height = "5rem";
  }
});
