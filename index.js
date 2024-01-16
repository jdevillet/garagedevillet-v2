let h = window.innerHeight;


function navShorter(){
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 40) {
      navbar.style.height = "3rem";
    }else {
      navbar.style.height = "5rem";
    }
  });
}
navShorter();

window.addEventListener("load", (e) => {
  if (h < 400) {
    navbar.style.height = "3rem";
  }
});

